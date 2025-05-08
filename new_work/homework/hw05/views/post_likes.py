import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.like_post import LikePost
from models.post import Post
from views import can_view_post


class PostLikesListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def post(self):
        # TODO: Add POST logic...
        data = request.get_json() or {}
        post_id = data.get("post_id")
        if post_id is None:
            return Response(
                json.dumps({"error":"post_id is required"}),
                status=400,
                mimetype="application/json"
            )
        
        try: 
            count = int(post_id)
        except:
            return Response(
                    json.dumps({"message":"Limit must be a valid integer"}),
                    mimetype="application/json",
                    status=400,
            )
        
        post = Post.query.get(post_id)

        if not post or not can_view_post(post_id, self.current_user):
            return Response(
                json.dumps({"error":"Post not found or not accessible"}),
                status=404, 
                mimetype="application/json"
            )
        
        exists = LikePost.query.filter_by(user_id=self.current_user.id, post_id=post_id).first()

        if exists:
            return Response(
                json.dumps({"error":"Already liked"}),
                status=400, 
                mimetype="application/json"
            )

        lp = LikePost(user_id=self.current_user.id, post_id=post_id)
        db.session.add(lp)
        db.session.commit()

        return Response(
            json.dumps(lp.to_dict()),
            status=201,
           mimetype="application/json"
       )


class PostLikesDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def delete(self, id):
        # TODO: Add DELETE logic...

        lp = LikePost.query.filter_by(id=id, user_id=self.current_user.id).first()
        if not lp:
            return Response(
                json.dumps({"error":"Like not found or not yours"}),
                status=404,
                mimetype="application/json"
            )

        db.session.delete(lp)
        db.session.commit()
        return Response(
            json.dumps({"message": f"Like {id} deleted!"}),
            status=200,
            mimetype="application/json"
        )


def initialize_routes(api, current_user):
    api.add_resource(
        PostLikesListEndpoint,
        "/api/likes",
        "/api/likes/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        PostLikesDetailEndpoint,
        "/api/likes/<int:id>",
        "/api/likes/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )

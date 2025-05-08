import json
from flask import Response, request
from flask_restful import Resource

from models import db
from models.comment import Comment
from models.post import Post
from views import can_view_post

class CommentListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def post(self):
        data = request.get_json() or {}

        # 1) require post_id and text
        post_id = data.get("post_id")
        text    = data.get("text")
        if post_id is None:
            return Response(
                json.dumps({"error":"post_id is required"}),
                status=400, mimetype="application/json"
            )
        if not text:
            return Response(
                json.dumps({"error":"text is required"}),
                status=400, mimetype="application/json"
            )

        # 2) validate integer
        try:
            post_id = int(post_id)
        except ValueError:
            return Response(
                json.dumps({"error":"post_id must be an integer"}),
                status=400, mimetype="application/json"
            )

        # 3) check that post exists and is viewable
        post = Post.query.get(post_id)
        if not post or not can_view_post(post_id, self.current_user):
            return Response(
                json.dumps({"error":"Post not found or not accessible"}),
                status=404, mimetype="application/json"
            )

        # 4) create, persist, return
        c = Comment(text=text, post_id=post_id, user_id=self.current_user.id)
        db.session.add(c)
        db.session.commit()

        return Response(
            json.dumps(c.to_dict()),
            status=201, mimetype="application/json"
        )


class CommentDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def delete(self, id):
        # look up the comment, ensure it belongs to current_user
        c = Comment.query.get(id)
        if not c or c.user_id != self.current_user.id:
            return Response(
                json.dumps({"error":"Comment not found or not yours"}),
                status=404, mimetype="application/json"
            )

        db.session.delete(c)
        db.session.commit()
        return Response(
            json.dumps({}), status=200, mimetype="application/json"
        )


def initialize_routes(api, current_user):
    api.add_resource(
        CommentListEndpoint,
        "/api/comments", "/api/comments/",
        resource_class_kwargs={"current_user": current_user}
    )
    api.add_resource(
        CommentDetailEndpoint,
        "/api/comments/<int:id>", "/api/comments/<int:id>/",
        resource_class_kwargs={"current_user": current_user}
    )

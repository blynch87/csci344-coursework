import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.bookmark import Bookmark
from models.post import Post
from views import can_view_post


class BookmarksListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def get(self):

        markys = (Bookmark.query.filter_by(user_id=self.current_user.id).all())

        dumper = [m.to_dict() for m in markys]

        return Response(
            json.dumps(dumper),
            mimetype="application/json",
            status=200,
        )

    def post(self):
        # TODO: Add POST Logic...

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
        
        exists = Bookmark.query.filter_by(user_id=self.current_user.id, post_id=post_id).first()

        if exists:
            return Response(
                json.dumps({"error":"Already bookmarked"}),
                status=400, 
                mimetype="application/json"
            )

        bm = Bookmark(user_id=self.current_user.id, post_id=post_id)
        db.session.add(bm)
        db.session.commit()

        return Response(
            json.dumps(bm.to_dict()),
            status=201,
           mimetype="application/json"
       )

        


class BookmarkDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def delete(self, id):
        # TODO: Add Delete Logic...

        bm = Bookmark.query.filter_by(id=id, user_id=self.current_user.id).first()
        if not bm:
            return Response(
                json.dumps({"error":"Not found"}),
                status=404,
                mimetype="application/json"
            )

        db.session.delete(bm)
        db.session.commit()
        return Response(
            json.dumps({}),
            status=200,
            mimetype="application/json"
        )



def initialize_routes(api, current_user):
    api.add_resource(
        BookmarksListEndpoint,
        "/api/bookmarks",
        "/api/bookmarks/",
        resource_class_kwargs={"current_user": current_user},
    )

    api.add_resource(
        BookmarkDetailEndpoint,
        "/api/bookmarks/<int:id>",
        "/api/bookmarks/<int:id>",
        resource_class_kwargs={"current_user": current_user},
    )

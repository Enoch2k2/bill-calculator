from flask import jsonify
from flask_restful import Resource

from config import api


class Home(Resource):
    def get(self):
        return {'message': 'this works'}, 200


api.add_resource(Home, "/", endpoint='home')

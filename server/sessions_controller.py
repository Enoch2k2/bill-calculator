from flask import request, session, jsonify
from flask_restful import Resource
from config import api, db

from models import User

import ipdb


class Signup(Resource):
    def post(self):
        json = request.get_json()

        user = User(username=json['username'])
        user.password_hash = json['password']
        if not user.errors:
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            return user.to_dict(), 201
        else:
            return {'errors': user.errors}, 422


class Login(Resource):
    def post(self):
        json = request.get_json()

        user = User.query.filter_by(username=json['username']).first()

        if user and user.authenticate(json['password']):
            session['user_id'] = user.id
            return user.to_dict(), 200
        else:
            return {"errors": ["Username or Password didn't match"]}, 422


class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return {}, 204


class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter_by(id=session.get('user_id')).first()
            return user.to_dict(), 200
        else:
            return {}, 204


api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint="login")
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')

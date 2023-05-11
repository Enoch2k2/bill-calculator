from flask import request, session
from config import app
# import ipdb


@app.before_request
def authorize():

    # ipdb.set_trace()
    if session.get('user_id') == None \
        and not (
        request.endpoint == 'signup'
        or request.endpoint == 'login'
        or request.endpoint == 'home'
    ):
        return {'errors': ["You are unauthorized"]}, 401

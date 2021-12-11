import datetime
import jwt
from config import conf


def create_token(type, user_info = None):
    config = conf()
    key = config['TOKEN_KEY']
    alg = 'HS256'
    if type == "access_token":
        # days->날짜 hours->시간, minutes->분, seconds->초
        payload = {"email":user_info['email'], 'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1)}
    else:
        payload = {'exp': datetime.datetime.utcnow() + datetime.timedelta(days=14)}
    return jwt.encode(payload=payload, key=key, algorithm=alg)
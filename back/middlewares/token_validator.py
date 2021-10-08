from starlette.requests import Request
from fastapi.responses import JSONResponse
import pymysql
import jwt
import datetime
from config import conf

async def access_control(request: Request, call_next):
    # 미들웨어 시작 header 에서 쿠기를 가져온다
    # print('미들웨어 시작')
    url = request.url.path
    cookies = request.cookies
    check_list = ['/api/user/check', '/api/user/check2']
    try:
        # if url.startswith('/api/user/check'):
        if url in check_list:

            access_token = cookies.get("access_token")
            refresh_token = cookies.get("refresh_token")
            # access_token, refresh_token 으로 토큰 검증을 한다.
            token = await token_check(access_token, refresh_token)
            if not token:
                return JSONResponse(status_code=401, content={"result": "fail", "message": "인증실패"})
            else:
                # return JSONResponse(status_code=401, content={"result": "fail", "message": "1111"})
                response = await call_next(request)
                response.set_cookie(key="access_token", value=token)
                return response
        else:
            response = await call_next(request)
            return response

    except:
        return False


async def token_check(access_token, refresh_token):
    try:
        # access_token 으로 검사를 하고 맞으면 통과 기간이 지났으면 refresh_token 으로 검사를 해준다.
        jwt.decode(access_token, 'secret', algorithms=['HS256'])
        return access_token
    except:
        # refresh_token 으로 실제 디비에 refresh_token의 유저를 가져온다
        db_token = await get_refresh_token(refresh_token)
        if not db_token:
            return False
        else:
            try:
                # db 에 있는 토큰을 가져올 경우 refresh_token의 검사를 하고 기간이 지나면 실패한다
                # 성공일 경우 새로운 access_token 을 발급해 준다.
                jwt.decode(refresh_token, 'secret', algorithms=['HS256'])
                access_payload = {"email":db_token["email"], 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}
                key = "secret"
                alg = 'HS256'
                return jwt.encode(payload=access_payload, key=key, algorithm=alg)
            except:
                return False





async def get_refresh_token(refresh_token):
    conn = pymysql.connect(
        host=conf().DB_HOST,
        user=conf().DB_USER,
        password=conf().DB_PASSWORD,
        db=conf().DB_NAME,
        charset='utf8'
    )
    try:
        curs = conn.cursor(pymysql.cursors.DictCursor)
        sql = '''SELECT email, refresh_token FROM users WHERE refresh_token = %s;'''
        curs.execute(sql,refresh_token)
        return curs.fetchone()
    except:
        return False
    finally:
        conn.close()



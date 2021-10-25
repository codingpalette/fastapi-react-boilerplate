from fastapi.responses import JSONResponse
import pymysql
import bcrypt
import jwt
import datetime
import time
from config import conf

class User():
    async def get_email_user(email):
        conn = pymysql.connect(
            host=conf().DB_HOST,
            user=conf().DB_USER,
            password=conf().DB_PASSWORD,
            db=conf().DB_NAME,
            charset='utf8'
        )
        try:
            curs = conn.cursor(pymysql.cursors.DictCursor)
            email_sql = '''SELECT email, nickname, password FROM users WHERE email = %s;'''
            curs.execute(email_sql,email)
            # print('10초 시작')
            # time.sleep(10)
            # print('10초 끝')
            return curs.fetchone()
        except:
            return False
        finally:
            conn.close()



    def create(email, nickname, password):
        print('create_user model')
        conn = pymysql.connect(
            host=conf().DB_HOST,
            user=conf().DB_USER,
            password=conf().DB_PASSWORD,
            db=conf().DB_NAME,
            charset='utf8'
        )
        try:
            curs = conn.cursor(pymysql.cursors.DictCursor)
            join_sql = '''INSERT INTO `users` (email, nickname, password, level) VALUES (%s, %s, %s, %s);'''
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            save_password = hashed_password.decode('utf-8')
            curs.execute(join_sql, (email, nickname, save_password, 1))
            conn.commit()
            return {"result": "success", "message": "회원가입에 성공했습니다"}
        except:
            return False
        finally:
            conn.close()

    def login(email, password, user_password):
        print('login start')

        conn = pymysql.connect(
            host=conf().DB_HOST,
            user=conf().DB_USER,
            password=conf().DB_PASSWORD,
            db=conf().DB_NAME,
            charset='utf8'
        )
        try:
            curs = conn.cursor(pymysql.cursors.DictCursor)
            password_check = bcrypt.checkpw(password.encode('utf-8'), user_password.encode('utf-8'))
            print('password_check =>', password_check)
            if not password_check:
                return JSONResponse(status_code=401, content={"result": "fail", "message": "비밀번호가 틀립니다"})
            else:
                # days->날짜 hours->시간, minutes->분, seconds->초
                access_payload = {"email":email, 'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=10)}
                refresh_payload = {'exp': datetime.datetime.utcnow() + datetime.timedelta(days=14)}
                key = "secret"
                alg = 'HS256'
                access_token = jwt.encode(payload=access_payload, key=key, algorithm=alg)
                refresh_token = jwt.encode(payload=refresh_payload, key=key, algorithm=alg)
                content = {"result": "success", "message": "로그인 성공"}
                response = JSONResponse(content=content)
                response.set_cookie(key="access_token", value=access_token)
                response.set_cookie(key="refresh_token", value=refresh_token)

                sql = '''UPDATE `users` SET refresh_token=%s WHERE email=%s '''
                curs.execute(sql, (refresh_token, email))
                conn.commit()
                print(sql)

                return response
        except:
            return False
        finally:
            conn.close()


    async def logout(token):
        print('1232')
        print(token)
        conn = pymysql.connect(
            host=conf().DB_HOST,
            user=conf().DB_USER,
            password=conf().DB_PASSWORD,
            db=conf().DB_NAME,
            charset='utf8'
        )
        try:
            curs = conn.cursor(pymysql.cursors.DictCursor)
            sql = '''UPDATE `users` SET refresh_token=null WHERE refresh_token=%s '''
            curs.execute(sql,token)
            conn.commit()
            return JSONResponse(status_code=200, content={"result": "success", "message": "로그아웃 성공"})
        except:
            return False
        finally:
            conn.close()


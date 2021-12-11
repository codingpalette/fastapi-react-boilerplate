from typing import Optional

from starlette.requests import Request
from fastapi import APIRouter
from fastapi.responses import JSONResponse
from models.user import User
from functions import token
from pydantic import BaseModel
import bcrypt

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

class CreateType(BaseModel):
    email: str
    nickname: str
    password: str

class LoginType(BaseModel):
    email: str
    password: str

router = APIRouter(
    prefix="/user",
)

@router.get('/')
def user_get():
    print('user_get start')
    return {"user": "aaaaa"}

@router.get('/check')
def user_check():
    return {"result": "success", "message": "유저인증에 성공했습니다."}

@router.post('/')
async def create(item: CreateType):
    user_info = await User.get_email_user(item.email)
    if user_info:
        return JSONResponse(status_code=401, content={"result": "fail", "message": "이미 존재하는 아이디 입니다"})
    else:
        hashed_password = bcrypt.hashpw(item.password.encode('utf-8'), bcrypt.gensalt())
        save_password = hashed_password.decode('utf-8')
        return User.create(item.email, item.nickname, save_password)

@router.post('/login')
async def login(item: LoginType):
    user_info = await User.get_email_user(item.email)

    if not user_info:
        return JSONResponse(status_code=401, content={"result": "fail", "message": "존재하지 않는 아이디 입니다"})
    else:
        password_check = bcrypt.checkpw(item.password.encode('utf-8'), user_info['password'].encode('utf-8'))
        if not password_check:
            return JSONResponse(status_code=401, content={"result": "fail", "message": "비밀번호가 틀립니다"})
        else:
            access_token = token.create_token('access_token', user_info)
            refresh_token = token.create_token('refresh_token')
            token_update = await User.token_update(refresh_token, user_info['email'])
            if token_update:
                content = {"result": "success", "message": "로그인 성공"}
                response = JSONResponse(content=content)
                response.set_cookie(key="access_token", value=access_token)
                response.set_cookie(key="refresh_token", value=refresh_token)
                return response
            else:
                return JSONResponse(status_code=401, content={"result": "fail", "message": "로그인에 실패했습니다"})
            # return True
            # return User.login(item.email, item.password, user_info['password'])

@router.post('/logout')
async def logout(request: Request):
    print('로그아웃 시작')
    print(request.cookies)
    cookies = request.cookies
    return await User.logout(cookies.get("refresh_token"))


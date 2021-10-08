from typing import Optional

from starlette.requests import Request
from fastapi import APIRouter
from fastapi.responses import JSONResponse
from models.user import User
from pydantic import BaseModel

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
    userInfo = await User.get_email_user(item.email)
    if userInfo:
        return JSONResponse(status_code=401, content={"result": "fail", "message": "이미 존재하는 아이디 입니다"})
    else:
        return User.create(item.email, item.nickname, item.password)

@router.post('/login')
async def login(item: LoginType):
    userInfo = await User.get_email_user(item.email)

    if not userInfo:
        return JSONResponse(status_code=401, content={"result": "fail", "message": "존재하지 않는 아이디 입니다"})
    else:
        print(userInfo['password'])
        return User.login(item.email, item.password, userInfo['password'])

@router.post('/logout')
async def logout(request: Request):
    print('로그아웃 시작')
    print(request.cookies)
    cookies = request.cookies
    return await User.logout(cookies.get("refresh_token"))


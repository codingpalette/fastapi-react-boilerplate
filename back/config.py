from pydantic import BaseSettings


class Settings(BaseSettings):
    DB_HOST = 'localhost'
    DB_USER = 'root'
    DB_PASSWORD = 'root'
    DB_NAME = 'test'
    SECRET_KEY = 'secret'


def conf():
    settings = Settings()
    return settings
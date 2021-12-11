from dotenv import load_dotenv
import os




def conf():
    load_dotenv(".config")
    config = {
        "HOST":os.getenv('DB_HOST'),
        "DATABASE":os.getenv('DB_NAME'),
        "USERNAME":os.getenv('DB_USER'),
        "PASSWORD":os.getenv('DB_PASSWORD'),
        "TOKEN_KEY":os.getenv('TOKEN_KEY')
    }
    return config


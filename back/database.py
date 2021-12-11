import pymysql
from config import conf


def basic():
    config = conf()
    conn = pymysql.connect(
        host=config['HOST'],
        user=config['USERNAME'],
        password=config['PASSWORD'],
        db=config['DATABASE'],
        charset='utf8'
    )
    return conn

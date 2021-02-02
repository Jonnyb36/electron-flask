from web_app.config import *
from web_app import app


if __name__ == "__main__":
    application.config['EXPLAIN_TEMPLATE_LOADING'] = True
    application.run(host="localhost", port=3000)

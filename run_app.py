from web_app.app import create_app
from web_app.config import *

print("Loaded Python!")
application = create_app(DevelopmentConfig)
port=3000

if __name__ == "__main__":
    application.config['EXPLAIN_TEMPLATE_LOADING'] = True
    application.run(host="localhost", port=port)

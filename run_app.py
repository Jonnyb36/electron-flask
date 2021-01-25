from web_app.app import create_app
from web_app.config import *

application = create_app(DevelopmentConfig)

if __name__ == "__main__":
    application.run()

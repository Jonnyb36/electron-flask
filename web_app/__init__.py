from .app import create_app
from .config import DevelopmentConfig

app = create_app(DevelopmentConfig)
import web_app.api
print("Loaded Python!")
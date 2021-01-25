from flask import Flask, render_template
import os
import sys
from .home import home as home_blueprint
from pathlib import Path


def get_root_dir_abs_path() -> str:
    """
    Get the absolute path to the root directory of the application.
    """
    if getattr(sys, "frozen", False):
        bundle_dir  = Path(sys._MEIPASS).resolve()
    else:
        bundle_dir = Path(".").resolve() / "my-app" 
    root_dir_abs_path = bundle_dir / "build"
    print(root_dir_abs_path)
    return root_dir_abs_path

def init_extensions(app: Flask):
    # use .init_app() on your extensions to register them on
    # the Flask instance
    pass

def create_app(config_object_name) -> Flask:
    """
    :param config_object_name: The python path of the config object.
                               E.g. appname.settings.ProdConfig
    """

    root_dir_abs_path = get_root_dir_abs_path()

    # Initialize the core application
    app = Flask(
        __name__,
        instance_relative_config=False,
        static_folder=str(root_dir_abs_path / "static"),
        template_folder=str(root_dir_abs_path),
    )
    app.config.from_object(config_object_name)

    # Initialize Plugins at startup using init_app()
    init_extensions(app)

    with app.app_context():
        # Register Blueprints
        app.register_blueprint(home_blueprint, url_prefix="/")

        @app.errorhandler(404)
        def page_not_found(error):
            #C:\Users\jonbr\Documents\Github_Personal\electron-flask\web_app\app\templates\page\errors\404.html
            #str(root_dir_abs_path / r"web_app/app/templates/page/errors/404.html")
            return render_template("404.html", title="Page Not Found"), 404

        return app

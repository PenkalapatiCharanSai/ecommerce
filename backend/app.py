from flask import Flask, jsonify, render_template
from flask_cors import CORS
import os

from config import Config
from extensions import db, jwt, migrate
# blueprints import will be inside create_app to avoid import issues

def create_app():
    app = Flask(__name__, template_folder="templates")
    app.config.from_object(Config)
    CORS(app)  # allow React dev server

    # init extensions
    db.init_app(app)
    migrate.init_app(app, db)  # optional: we aren't using migrations now
    jwt.init_app(app)

    # import blueprints after db is initialised
    from blueprints.auth import auth_bp
    from blueprints.users import users_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(users_bp, url_prefix="/api/users")

    @app.route("/")
    def index():
        return render_template("status.html", status="OK")

    @app.route("/api/health")
    def health():
        return jsonify({"status": "ok"})

    # create DB tables on first start (DEV only)
    with app.app_context():
        db.create_all()

    return app

if __name__ == "__main__":
    app = create_app()
    # change host if you want to allow external devices
    app.run(debug=True, host="127.0.0.1", port=5000)

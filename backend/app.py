# backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests during development

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == "__main__":
    # debug=True for development; remove or set False in production
    app.run(debug=True, host="0.0.0.0", port=5000)

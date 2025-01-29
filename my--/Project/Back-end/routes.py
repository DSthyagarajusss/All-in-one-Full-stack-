from flask import Flask, request, jsonify
from flask_cors import CORS
from .modules import mongo, User
from flask import Flask, request, jsonify

import json

app = Flask(__name__)
app.config.from_object('config.Config')
CORS(app)
mongo.init_app(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    user = User(data['username'], data['password'])
    mongo.db.users.insert_one({
        'username': user.username,
        'password': user.password_hash
    })
    return jsonify({"msg": "User registered successfully!"}), 201

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    filename = file.filename
    file.save(f'./uploads/{filename}')
    # Handle GeoJSON/KML or TIFF processing here
    return jsonify({"msg": "File uploaded successfully!"}), 200


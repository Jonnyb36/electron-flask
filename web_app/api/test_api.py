from web_app import app
from flask import request, jsonify, abort


# string, int, float, path
@app.route("/api/basic_param/<path:intrinsic_fp>", methods=['GET'])
def read_intrinsic(intrinsic_fp):
    print(intrinsic_fp)
    return "Hit API, BOOM"

# filepath in request args
@app.route("/api/basic_param/", methods=['GET'])
def read_intrinsic_args():
    if 'filepath' in request.args:
        filepath = request.args['filepath']
    else:
        return "Error: No filepath field provided. Please specify a filepath."
    
    print(filepath)
    return "Hit request args API, BOOM"

# filepath in json object
@app.route("/api/basic_body_param/", methods=['GET', 'POST'])
def read_intrinsic_json():
    if not request.json or not 'filepath' in request.json:
        abort(400)
    else:
        file_info = {
            'filepath':  request.json['filepath']
        }
    return jsonify(file_info), 201




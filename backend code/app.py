from flask import Flask, request
from flask import Flask, request, jsonify, make_response, send_file
from flask_restx import Api, Resource, fields
from flask_cors import CORS
import numpy as np
import sys
import pickle
import mysql.connector
import supabase

from flask_uploads import UploadSet, configure_uploads, VIDEO

# Creating the app
flask_app = Flask(__name__)
CORS(flask_app)
app = Api(app=flask_app,
        version="1.0",
        title="AnantRaah",
        description="Predict results using a trained model")

# Creating the app route
name_space = app.namespace('prediction', description='Prediction APIs')

# Calling the model
model = app.model('Prediction params',
                {'years': fields.Integer(required=True,
                                        description="Years of Experience",
                                        help="Years cannot be blank"),

                })


# classifier = joblib.load('classifier.joblib')
# filename = 'final_model1.sav'
# regressor = pickle.load(open(filename, 'rb'))


# for upload video files
videos = UploadSet('videos', VIDEO)
app.config['UPLOADED_VIDEOS_DEST'] = '/tmp'
configure_uploads(app, videos)


# connecting to SQL server and converting a query to a list
def connectSQL():
    conn = mysql.connector.connect(
        host="localhost",
        database="somedbname",
        user="myuser",
        password="goodpasswd")
    cursor = conn.cursor()
    cursor.execute("SELECT .. .. .. from ......")
    onerecord = cursor.fetchone()
    results = cursor.fetchall()

    return onerecord, results


# Initialize Supabase client
client = supabase.Client('SUPABASE_URL', 'SUPABASE_KEY')

# Define Flask route to accept video file


@app.route('/upload', methods=['POST'])
def upload_file():
    # Retrieve video file from Supabase bucket
    bucket_name = 'BUCKET_NAME'
    file_name = 'FILE_NAME'
    file_data = client.storage.from_bucket(bucket_name).download(file_name)

    # Process video file with ML model
    # ...

    return 'Video file processed successfully'

# creating json in another way


@name_space.route('/person/')
def hello():
    return jsonify({onerecord})


# creating json in a way
@name_space.route("/")
class MainClass(Resource):

    def options(self):
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

    @app.expect(model)
    def post(self):
        try:
            formData = request.json
            data = [val for val in formData.values()]

            for val in data:
                if (val < 0):
                    return jsonify({
                        "statusCode": 500,
                        "status": "Prediction cannot be made",
                        "result": "Some negative values are found in the data provided"
                    })

            prediction = regressor.predict(
                np.array(data, dtype=float).reshape(-1, 1))

            response = jsonify({
                "statusCode": 200,
                "status": "Prediction made",
                "result": "The predicted salary for the experience of "+str(data[0])+" years is $"+str(prediction[0].round(2))
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except Exception as error:
            return jsonify({
                "statusCode": 500,
                "status": "Could not make prediction",
                "result": "Please review your response and try again",
                "error": str(error)
            })

import numpy as np
from flask import Flask, request, jsonify, render_template, redirect, url_for, json
import pickle
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)
model = pickle.load(open('model_individual.pkl', 'rb'))
model2 = pickle.load(open('model_industry.pkl', 'rb'))

fin = []


@app.route('/query', methods=['POST'])
@cross_origin(supports_credentials=True)
def create_account():
    description = request.args.get('description')
    # [eBill, gill, ]
    inputData = [int(i) for i in description.split(',')]

    # print(f"Answer idhar h-> {description}")
    # f = fin[-8:]
    # f = [float(x) for x in description]
    # final_features = [np.array(f[0:8])]
    # sort_res = sort_resume(description)
    # prediction = model.predict(final_features)
    print(f"idhar answer h -> {type(inputData)}")
    # prediction.headers.add('Access-Control-Allow-Origin', '*')
    return [10, "Something"]


if __name__ == "__main__":
    app.run(debug=True)

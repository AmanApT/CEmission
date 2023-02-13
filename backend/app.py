import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template, redirect, url_for, json
import pickle
import os
from flask_cors import CORS, cross_origin
from json import *

app = Flask(__name__)
CORS(app, supports_credentials=True)
model1 = pickle.load(open('individual_RF_model.pickle', 'rb'))
model2 = pickle.load(open('industry_RF_model.pickle', 'rb'))

fin = []


@app.route('/query1', methods=['POST'])
@cross_origin(supports_credentials=True)
def model_pred_1():
    description = request.args.get('description')

    # [eBill, gill, ]

    keys_d = ['Electricity Bill(Monthly in Rs.)', 'Gas Bill (Monthly in Rs.)',
              'Oil Bill (Monthly in Rs)', 'Car Mileage (Yearly in Rs.)',
              'No. of flights in Past year(4hr or less)',
              'No. of flights in past year (4hrs or more)',
              'Recycled Newspaper past year', 'Recycled Aluminium and Tin Past year']

    inputData = [float(i) for i in description.split(',')]
    print(f"Yaha Input aa rha h ------->  {inputData}")

    df = pd.DataFrame(dict(zip(keys_d, inputData)), index=[0])

    y_pred = model1.predict(df)[0]

    print(f"idhar answer h -> {type(inputData)}")
    # prediction.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify([round(y_pred, 3), "Something1"])


@app.route('/query2', methods=['POST'])
@cross_origin(supports_credentials=True)
def model_pred_2():
    description = request.args.get('description')
    # [eBill, gill, ]

    keys_d = ['NumberofFloors', 'PropertyGFAParking', 'PropertyGFABuilding(s)',
              'SiteEUI(kBtu/sf)', 'SourceEUI(kBtu/sf)',
              'SteamUse(kBtu)', 'Electricity(kBtu)', 'NaturalGas(kBtu)']

    inputData = [float(i) for i in description.split(',')]

    df = pd.DataFrame(dict(zip(keys_d, inputData)), index=[0])

    y_pred = model2.predict(df)[0]

    print(f"idhar answer h -> {type(inputData)}")
    # prediction.headers.add('Access-Control-Allow-Origin', '*')
    return jsonify([round(y_pred, 3), "Something2"])


if __name__ == "__main__":
    app.run(debug=True)

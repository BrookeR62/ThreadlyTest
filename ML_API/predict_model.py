import sys
import joblib
import numpy as np

# Load model and encoders
model = joblib.load("threadly_model.pkl")
encoders = joblib.load("encoders.pkl")

# Read arguments from PHP
brand, category, material, size, color = sys.argv[1:]

brand = encoders["Brand"].transform([brand])[0]
category = encoders["Category"].transform([category])[0]
material = encoders["Material"].transform([material])[0]
size = encoders["Size"].transform([size])[0]
color = encoders["Color"].transform([color])[0]

X = np.array([[brand, category, color, size, material]])

price = model.predict(X)[0]


print(int(price))
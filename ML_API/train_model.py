import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load CSV
df = pd.read_csv("ML_API/data.csv")

# REQUIRED COLUMN ORDER
FEATURES = ['Brand', 'Category', 'Material', 'Size', 'Color']
TARGET = 'Price'

# Encode categorical columns
encoders = {}
for col in FEATURES:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le

X = df[FEATURES]
y = df[TARGET]

# Train model
model = RandomForestRegressor(
    n_estimators=200,
    random_state=42
)
model.fit(X, y)

# Save model and encoders
joblib.dump(model, "threadly_model.pkl")
joblib.dump(encoders, "encoders.pkl")

print("Model trained successfully.")
print(df.head())
print(df.columns)
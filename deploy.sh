#!/bin/bash

# Install Python dependencies
pip install -r requirements.txt

# Start Gunicorn server
gunicorn -w 4 -b 0.0.0.0:5000 flask-server:app

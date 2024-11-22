#!/bin/bash

echo "Setting up the Spin Wheel Application..."

# Build the Docker image
echo "Building Docker image for Spin Wheel Application..."
docker build -t roda .

# Run the Docker container
echo "Running Docker container for Spin Wheel Application..."
docker run -p 3000:3000 roda

# Access the application
echo "Access the Spin Wheel Application at: http://localhost:3000/examples/themes/"

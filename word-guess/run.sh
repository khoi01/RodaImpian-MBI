#!/bin/bash

echo "Setting up the Word-Guess Game..."

# Build the Docker image
echo "Building Docker image for Word-Guess Game..."
docker build -t dashboard-word .

# Run the Docker container
echo "Running Docker container for Word-Guess Game..."
docker run -p 8080:8080 dashboard-word

# Access the application
echo "Access the Word-Guess Game at: http://localhost:8080"

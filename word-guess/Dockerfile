# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the project files to the working directory
COPY . .

# Install a simple static file server
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Command to start the static file server
CMD ["http-server", "-p", "8080"]

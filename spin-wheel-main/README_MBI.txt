Here's a `README.md` file that guides users on setting up the environment using Docker and accessing the application.

```markdown
# Spin Wheel Application Setup

This guide will help you set up and run the Spin Wheel application using Docker.

## Prerequisites

- Install [Docker](https://www.docker.com/) on your system.
- Ensure you have a terminal or command prompt to run commands.

---

## Setup Instructions

### 1. Clone or Navigate to the Project Directory

Ensure all project files (e.g., `index.html`, `script.js`, `styles.css`, etc.) are located in the same directory.

Navigate to the directory where the project is stored:
```bash
cd <path-to-your-project-directory>
```

### 2. Build and Run the Docker Environment

1. **Build the Docker Image**  
   Run the following command to build the Docker image:
   ```bash
   docker build -t roda .
   ```

2. **Run the Docker Container**  
   Use the following command to start the container and expose the application:
   ```bash
   docker run -p 3000:3000 roda
   ```

### 3. Access the Application

Once the container is running, open the following URL in your browser to access the Spin Wheel application:

```plaintext
http://localhost:3000/examples/themes/
```

You should see the application running in your browser.

---


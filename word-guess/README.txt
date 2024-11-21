1. **Build the Docker Image**:
   Open a terminal, navigate to the project folder, and run:
   ```bash
   docker build -t dashboard-word .
   ```

2. **Run the Docker Container**:
   Run the container with:
   ```bash
   docker run -p 8080:8080 dashboard-word
   ```

3. **Access the Application**:
   Open a browser and go to `http://localhost:8080` to see your word-guess game running.

Let me know if you need additional help setting this up!
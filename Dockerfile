# Use Python 3.12 on Debian Bullseye as the base image
FROM python:3.12-bullseye

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file
COPY src/requirements.txt /app/

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire source directory into the container
COPY src /app/src

# Set environment variables (modify as needed)
ENV GALYLEO_PORT=5000

# Expose the port
EXPOSE $GALYLEO_PORT

# Set the default command to start your service
CMD ["python", "src/main.py"]
# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Setting Working Directory
WORKDIR /app

# Copying only package.json
COPY package.json .

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 3000

# Run the React app
CMD ["npm", "start"]

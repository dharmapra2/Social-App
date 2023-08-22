FROM node:18-alpine

WORKDIR /app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Install and start MongoDB
# RUN apk add --no-cache mongodb && mkdir -p /data/db && mongod --fork --logpath /var/log/mongodb.log && npm run seed

# Expose the app port
EXPOSE 5000

# Run the API on Nodemon
CMD ["npm", "start"]

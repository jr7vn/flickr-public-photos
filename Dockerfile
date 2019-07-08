 # Create image based on the official Node 8 image from dockerhub
FROM node:8

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

RUN npm install -g react-scripts

# Get all the code needed to run the app
COPY . /app/

# build the app
RUN npm run build

ENV PORT=80

ENV NODE_ENV=production

# Expose the port the app runs in
EXPOSE 80

# Serve the app
CMD ["node", "api/server"]
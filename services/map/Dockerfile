FROM node:12

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
#COPY package-lock.json /app/
RUN npm install

# Bundle app source
COPY ./src /app/src

EXPOSE 6203
CMD [ "npm", "start"]

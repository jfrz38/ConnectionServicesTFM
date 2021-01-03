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
# COPY ./images /app/images

EXPOSE 6106
CMD [ "npm", "start" ]

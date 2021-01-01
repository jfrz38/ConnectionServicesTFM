FROM node:12

# Create app directory
RUN mkdir -p /code
WORKDIR /code

# Install app dependencies
COPY package.json /code/
COPY webpack.config.js /code/
#COPY package-lock.json /code/
RUN npm install

# Bundle app source
COPY ./src /code/src
# COPY ./images /code/images
RUN npx webpack --config webpack.config.js

EXPOSE 6104
CMD [ "npm", "start"]

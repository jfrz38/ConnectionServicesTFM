FROM node:12

RUN wget -O /bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /bin/wait-for-it.sh

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
#COPY package-lock.json /app/
RUN npm install

# Bundle app source
COPY ./src /app/src

EXPOSE 6206
#CMD [ "npm", "start"]
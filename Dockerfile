FROM node:latest

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package-lock.json /app/package.json

RUN npm install --no-progress --ignore-optional
RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start:dev"]
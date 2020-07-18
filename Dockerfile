FROM node:12.18.0-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "node", "src/app.js" ]





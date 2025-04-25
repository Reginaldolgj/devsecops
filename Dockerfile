FROM node:lts-alpine

WORKDIR /api

COPY . .

RUN npm install && npm install express

CMD ["npm", "start"]

EXPOSE 3000

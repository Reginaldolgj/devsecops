FROM node:lts-alpine

WORKDIR /api

RUN rm -rf node_modules

COPY . .

RUN npm install && npm install express supertest jest

CMD ["npm", "start"]

EXPOSE 3000

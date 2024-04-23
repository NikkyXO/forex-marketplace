FROM node:18-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install class-validator

COPY . .
RUN npm run build:api-gateway

FROM node:18-alpine as production
ENV NODE_ENV=production

USER node
WORKDIR /app

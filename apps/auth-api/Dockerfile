FROM node:18-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build:auth-api

FROM node:18-alpine as production
ENV NODE_ENV=production

USER node
WORKDIR /app

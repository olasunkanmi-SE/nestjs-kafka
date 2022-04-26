FROM node:16 AS development
WORKDIR /nestjs-kafka/consumer/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

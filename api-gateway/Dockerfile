FROM node:16 AS development
WORKDIR /nestjs-kafka/api-gateway/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

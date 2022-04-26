FROM node:16 AS development
WORKDIR /nestjs-kafka/frontend/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@13.3.2
COPY . .
RUN npm run build
EXPOSE 4200
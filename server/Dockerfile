# 1. Используем стабильную версию Node.js
FROM node:13
# 2. Создаем рабочую директорию. В ней будет код приложения.
WORKDIR /server
# Install app dependencies
COPY package*.json ./

RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 8080
CMD [ "npm", "start" ]
FROM node:6.11.3
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 5000
CMD npm start
FROM node:18

#create app directory

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

#if production
#RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

#give any command here
CMD ["node", "server.js"]
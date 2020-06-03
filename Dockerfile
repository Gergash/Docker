FROM node:10

ADD package.json package-lock.json /usr/src/

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["npx", "nodemon ", "index.js"]

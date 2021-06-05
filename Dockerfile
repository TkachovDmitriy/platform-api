FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install yarn
RUN rm -rf package-lock.json
RUN rm -rf ./node_modules

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]
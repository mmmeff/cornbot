FROM node:7-alpine

RUN mkdir -p /usr/src
COPY . /usr/app

WORKDIR /usr/app
RUN yarn --prod &\
    yarn cache clean

EXPOSE 3000
CMD [ "yarn", "start" ]

FROM node:7-alpine

RUN mkdir -p /usr/app
COPY . /usr/app

WORKDIR /usr/app
RUN yarn            &\
    yarn cache clean

EXPOSE 3000
CMD [ "yarn", "start" ]

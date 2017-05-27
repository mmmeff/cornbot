FROM node:7-alpine

RUN mkdir -p /usr/app
COPY . /usr/app

WORKDIR /usr/app
RUN yarn                &&\
    ls node_modules     &&\
    yarn cache clean


EXPOSE 3000
CMD [ "yarn", "start" ]

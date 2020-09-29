FROM node:lts-alpine3.9

WORKDIR /home/node
COPY $pwd /home/node/app
WORKDIR /home/node/app

RUN npm install

ENTRYPOINT ["npm", "run"]
CMD ["start"]

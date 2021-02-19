#### NODE EXPRESS ####

FROM node:14.5-alpine as builder

WORKDIR /app

COPY ./ .

RUN npm install --no-optional && npm cache clean --force

ENV PATH="./node_modules/.bin:$PATH"

CMD ["npm", "run", "start"]
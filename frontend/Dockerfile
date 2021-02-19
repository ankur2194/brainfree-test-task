#### ANGULAR ####

FROM node:14.5-alpine as builder

WORKDIR /app

COPY ./ .

RUN npm install --no-optional && npm cache clean --force

ENV PATH="./node_modules/.bin:$PATH"

RUN ng build --prod --output-path=dist


#### NGINX ####

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html

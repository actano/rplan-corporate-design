FROM node:10 as build

WORKDIR /build

COPY package.json yarn.lock ./

RUN yarn install

COPY storybook storybook
COPY src src

RUN yarn build-storybook

FROM nginx:alpine as webserver

COPY storybook/webserver/nginx.conf /etc/nginx
COPY --from=build /build/storybook-static /html

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]

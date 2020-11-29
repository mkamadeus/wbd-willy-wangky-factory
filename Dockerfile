FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
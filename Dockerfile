FROM node:18.16.0-alpine3.17
RUN mkdir -p /Entrevista
WORKDIR /Entrevista
COPY Entrevista/package.json Entrevista/package-lock.json .
RUN npm install
COPY Entrevista/ .
EXPOSE 3000
CMD [ "npm", "start"]
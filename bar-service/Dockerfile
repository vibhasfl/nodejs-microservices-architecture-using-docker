FROM node:8-alpine
COPY package*.json ./
RUN  npm i
COPY api/ .
CMD node index.js
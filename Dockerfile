# FROM node:12

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# ENV PORT=3010

# EXPOSE 3010

# CMD [ "npm", "start"]

FROM postgres:14.1

COPY *.sql /docker-entrypoint-initdb.d/

ADD schema.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*


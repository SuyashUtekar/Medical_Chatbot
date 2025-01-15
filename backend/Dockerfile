FROM node:alpine3.18
WORKDIR /app
COPY package.json ./
RUN npm
RUN apk add --no-cache python3 py3-pip
RUN pip install --upgrade pip && pip install gradio_client
COPY ..
EXPOSE 4000
CMD ["npm", "run", "dev"]

FROM node:latest
# Create the directory!
RUN mkdir -p /usr/src/kyro
WORKDIR /usr/src/kyro

# Copy and Install our bot
COPY package.json /usr/src/kyro
RUN npm install

# Our precious bot
COPY . /usr/src/kyro

# Start me!
CMD ["node", "server.js"]

EXPOSE 443/tcp

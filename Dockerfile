FROM node:18

# Create the directory!
RUN mkdir -p /usr/src/kyro
WORKDIR /usr/src/kyro

# Copy and Install our bot
COPY package.json /usr/src/kyro
RUN npm install

# Our precious bot
COPY . /usr/src/kyro

# Start me!
CMD ["node", "index.js"]

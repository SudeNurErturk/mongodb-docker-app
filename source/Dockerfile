FROM  --platform=linux/amd64 node:14
#WORKDIR /Users/sudenurerturk/Desktop/Servissoft/Projeler/Deneme/source
#COPY source /Users/sudenurerturk/Desktop/Servissoft/Projeler/Deneme
WORKDIR /src
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 5001 
CMD npm run start


#------STAGE 1-------BUILD STAGE
FROM node:22.16-alpine AS build
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

#-----STAGE 2--------PRODUCTION STAGE
FROM node:22.16-alpine
WORKDIR /app
COPY --from=build /base /app/
EXPOSE 5173
ENV PORT=5173
CMD ["npm", "run", "dev"]

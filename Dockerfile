FROM node:18.13.0-alpine As development

WORKDIR /usr/src/app
RUN apk add --no-cache g++ make python3
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
USER node

FROM node:18.13.0-alphine As build

WORKDIR /usr/src/app
RUN apk add --no-cache g++ make python3
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./nodule_modules
COPY --chown=node:node . .
RUN npm run build

# set node_env environment variable
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force

USER node

#production

FROM node:18.13.0-alpine as production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
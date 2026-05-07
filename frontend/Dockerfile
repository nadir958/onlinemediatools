FROM node:20-alpine AS builder
ARG FRONTEND_URL
ARG API_URL
ENV FRONTEND_URL=${FRONTEND_URL}
ENV API_URL=${API_URL}
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
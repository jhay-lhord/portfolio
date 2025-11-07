# ---------------------------------------------------------
# 1️⃣ Base stage – define Node version (shared between all)
# ---------------------------------------------------------
  FROM node:20-alpine AS base
  WORKDIR /app
  ENV NODE_ENV=production
  
  # ---------------------------------------------------------
  # 2️⃣ Dependencies stage – install all deps (cached)
  # ---------------------------------------------------------
  FROM base AS deps
  WORKDIR /app
  
  # Copy only dependency files for better layer caching
  COPY package*.json ./
  
  # ✅ Install ALL dependencies (including devDependencies)
  RUN NODE_ENV=development npm ci
  
  # ---------------------------------------------------------
  # 3️⃣ Builder stage – build Next.js (includes Sanity Studio)
  # ---------------------------------------------------------
  FROM base AS builder
  WORKDIR /app
  
  # Copy dependency layer (so node_modules is available)
  COPY --from=deps /app/node_modules ./node_modules
  
  # Copy the rest of your source code
  COPY . .
  
  # Build the Next.js app (this will include your embedded Sanity)
  RUN npm run build
  
  # ---------------------------------------------------------
  # 4️⃣ Runner stage – small production image
  # ---------------------------------------------------------
  FROM base AS runner
  WORKDIR /app
  
  # Copy only what’s needed for runtime
  COPY --from=builder /app/public ./public
  COPY --from=builder /app/.next ./.next
  COPY --from=builder /app/package*.json ./
  COPY --from=deps /app/node_modules ./node_modules
  
  # Use a non-root user for better security
  RUN addgroup -g 1001 nodejs && \
      adduser -u 1001 -G nodejs -s /bin/sh -D nextjs
  USER nextjs
  
  EXPOSE 3000
  CMD ["npm", "start"]
  
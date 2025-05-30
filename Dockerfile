# --- Build Stage ---
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # 1. Копируем только то, что нужно для установки зависимостей
    COPY package.json package-lock.json ./
    COPY prisma ./prisma/
    
    # 2. Устанавливаем зависимости (включая devDependencies)
    RUN npm ci
    
    # 3. Копируем остальной код и собираем приложение
    COPY . .
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    
    # 4. Устанавливаем только production зависимости
    COPY --from=builder /app/package.json /app/package-lock.json ./
    COPY --from=builder /app/prisma ./prisma
    RUN npm ci --only=production
    
    # 5. Копируем собранное приложение
    COPY --from=builder /app/dist ./dist
    
    # 6. Для безопасности - создаем непривилегированного пользователя
    RUN addgroup -S appgroup && adduser -S appuser -G appgroup
    RUN chown -R appuser:appgroup /app
    USER appuser
    
    EXPOSE 3001
    
    # 7. Оптимизированная команда запуска
    CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && node dist/main.js"]
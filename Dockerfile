# --- Этап сборки (Build Stage) ---
    FROM node:20-alpine AS builder

    WORKDIR /app
    
    # Копируем файлы для установки зависимостей
    COPY package.json package-lock.json ./
    
    # Копируем директорию prisma.
    # Это важно, так как 'npm install' может вызвать 'postinstall' скрипт,
    # который запускает 'prisma generate', и ему нужна схема.
    COPY prisma ./prisma/
    
    RUN npm install --ci
    
    # Копируем остальной код вашего приложения
    COPY . .
    
    # Примечание: 'npx prisma generate' вызывается через 'postinstall' после 'npm install'
    # Если вам нужно явно генерировать клиент здесь (например, если у вас нет 'postinstall' или он не работает),
    # раскомментируйте следующую строку:
    # RUN npx prisma generate
    
    RUN npm run build
    
    
    # --- Этап продакшн-сервера (Production Stage) ---
    FROM node:20-alpine AS runner
    
    WORKDIR /app
    
    # Копируем package.json и package-lock.json.
    COPY package.json package-lock.json ./
    
    # !!! ВАЖНОЕ ИЗМЕНЕНИЕ: Снова копируем директорию prisma СЮДА !!!
    # Это критично, так как 'npm install --production --ci' на этом этапе
    # также запускает 'postinstall' скрипт, который требует 'schema.prisma'.
    COPY prisma ./prisma/
    
    RUN npm install --production --ci
    
    # Копируем скомпилированный JavaScript-код
    COPY --from=builder /app/dist ./dist
    
    # Директория prisma уже скопирована выше, но убедимся, что она нужна для runtime тоже
    # Хотя она уже есть, я оставляю эту строку, если вы решите не копировать ее раньше
    # (например, если postinstall не будет запускаться, но prisma client все равно нужен)
    # Но в данном случае, она уже должна быть из предыдущего COPY.
    # Если вы уверены, что COPY prisma ./prisma/ выше покрывает все нужды,
    # эту строку можно было бы и удалить, но для надежности пока оставим.
    # COPY --from=builder /app/prisma ./prisma
    
    
    EXPOSE 3001
    
    CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
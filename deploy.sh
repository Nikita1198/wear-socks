#!/bin/bash

# Скрипт развертывания для носиноски.рф
# Запускать на сервере с правами sudo

set -e

echo "🚀 Начинаем развертывание носиноски.рф..."

# Проверка наличия Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Установите Docker и повторите попытку."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Установите Docker Compose и повторите попытку."
    exit 1
fi

# Создание директории для SSL сертификатов
echo "📁 Создание директории для SSL сертификатов..."
mkdir -p ssl

# Проверка наличия SSL сертификатов
if [ ! -f "ssl/fullchain.pem" ] || [ ! -f "ssl/privkey.pem" ]; then
    echo "⚠️  SSL сертификаты не найдены в директории ssl/"
    echo "   Поместите файлы fullchain.pem и privkey.pem в директорию ssl/"
    echo "   Или используйте Let's Encrypt для автоматического получения:"
    echo "   sudo certbot certonly --standalone -d носиноски.рф -d www.носиноски.рф"
    exit 1
fi

# Остановка старых контейнеров
echo "🛑 Остановка старых контейнеров..."
docker-compose -f docker-compose.prod.yml down --remove-orphans || true

# Сборка новых образов
echo "🔨 Сборка новых образов..."
docker-compose -f docker-compose.prod.yml build --no-cache

# Запуск контейнеров
echo "▶️  Запуск контейнеров..."
docker-compose -f docker-compose.prod.yml up -d

# Проверка статуса
echo "✅ Проверка статуса контейнеров..."
docker-compose -f docker-compose.prod.yml ps

# Очистка неиспользуемых образов
echo "🧹 Очистка старых образов..."
docker image prune -f

echo ""
echo "🎉 Развертывание завершено!"
echo "📱 Сайт доступен по адресу: https://носиноски.рф"
echo "📊 Проверить логи: docker-compose -f docker-compose.prod.yml logs -f"
echo "📈 Статус контейнеров: docker-compose -f docker-compose.prod.yml ps" 
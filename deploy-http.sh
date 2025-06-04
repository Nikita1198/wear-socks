#!/bin/bash

# Скрипт развертывания HTTP версии для носиноски.рф
# Запускать на сервере с правами sudo

set -e

echo "🚀 Начинаем развертывание носиноски.рф (HTTP)..."

# Проверка наличия Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен. Установите Docker и повторите попытку."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен. Установите Docker Compose и повторите попытку."
    exit 1
fi

# Остановка старых контейнеров
echo "🛑 Остановка старых контейнеров..."
docker-compose -f docker-compose.http.yml down --remove-orphans || true

# Сборка новых образов
echo "🔨 Сборка новых образов..."
docker-compose -f docker-compose.http.yml build --no-cache

# Запуск контейнеров
echo "▶️  Запуск контейнеров..."
docker-compose -f docker-compose.http.yml up -d

# Проверка статуса
echo "✅ Проверка статуса контейнеров..."
docker-compose -f docker-compose.http.yml ps

# Очистка неиспользуемых образов
echo "🧹 Очистка старых образов..."
docker image prune -f

echo ""
echo "🎉 Развертывание завершено!"
echo "📱 Сайт доступен по адресу: http://носиноски.рф"
echo "📱 Также доступен по IP: http://46.149.66.86"
echo "📊 Проверить логи: docker-compose -f docker-compose.http.yml logs -f"
echo "📈 Статус контейнеров: docker-compose -f docker-compose.http.yml ps" 
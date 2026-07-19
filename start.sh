#!/bin/bash
# DevOps Todo App - Quick Start Script for Linux/Mac

echo ""
echo "========================================="
echo "  TODO DevOps - Docker Compose Launcher"
echo "========================================="
echo ""

# Check if Docker is running
if ! docker ps > /dev/null 2>&1; then
    echo "[ERROR] Docker daemon is not running!"
    echo "Please start Docker first."
    echo ""
    read -p "Press Enter to exit..."
    exit 1
fi

echo "[OK] Docker is running"
echo ""
echo "Starting services:"
echo "  - MongoDB (Port 27017)"
echo "  - Mongo Express (Port 8081)"
echo "  - Backend API (Port 5000)"
echo ""
echo "Frontend will run separately on Port 5173"
echo ""

cd "$(dirname "$0")"
docker-compose up

echo ""
read -p "Press Enter to exit..."

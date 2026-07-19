@echo off
REM DevOps Todo App - Quick Start Script for Windows

echo.
echo =========================================
echo  TODO DevOps - Docker Compose Launcher
echo =========================================
echo.

REM Check if Docker is running
docker ps >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker daemon is not running!
    echo Please start Docker Desktop first.
    echo.
    pause
    exit /b 1
)

echo [OK] Docker is running
echo.
echo Starting services:
echo  - MongoDB (Port 27017)
echo  - Mongo Express (Port 8081)
echo  - Backend API (Port 5000)
echo.
echo Frontend will run separately on Port 5173
echo.

cd /d "%~dp0"
docker-compose up

pause

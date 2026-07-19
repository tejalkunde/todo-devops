# DevOps Todo App - Quick Start Script for PowerShell

Write-Host "`n=========================================" -ForegroundColor Cyan
Write-Host "  TODO DevOps - Docker Compose Launcher" -ForegroundColor Cyan
Write-Host "=========================================`n" -ForegroundColor Cyan

# Check if Docker is running
try {
    $null = docker ps 2>$null
    if ($LASTEXITCODE -ne 0) {
        throw "Docker daemon not responding"
    }
} catch {
    Write-Host "[ERROR] Docker daemon is not running!" -ForegroundColor Red
    Write-Host "Please start Docker Desktop first." -ForegroundColor Yellow
    Write-Host "`nPress any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Host "[OK] Docker is running" -ForegroundColor Green
Write-Host "`nStarting services:" -ForegroundColor Yellow
Write-Host "  - MongoDB (Port 27017)"
Write-Host "  - Mongo Express (Port 8081)"
Write-Host "  - Backend API (Port 5000)"
Write-Host "`nFrontend will run separately on Port 5173`n" -ForegroundColor Cyan

Set-Location $PSScriptRoot
docker-compose up

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

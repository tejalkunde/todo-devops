# DevOps Todo App - Docker Commands Reference

## Quick Start

### Option 1: Using Batch Script (Windows)
```bash
start.bat
```

### Option 2: Using PowerShell Script (Windows)
```powershell
PowerShell -ExecutionPolicy Bypass -File start.ps1
```

### Option 3: Using Bash Script (Linux/Mac)
```bash
chmod +x start.sh
./start.sh
```

### Option 4: Manual Docker Compose (All Platforms)
```bash
cd C:\Users\Tejal\todo-devops
docker-compose up
```

---

## Essential Docker Compose Commands

### Start All Services
```bash
docker-compose up
```

### Start in Background (Detached Mode)
```bash
docker-compose up -d
```

### View Running Containers
```bash
docker-compose ps
```

### View Service Logs
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs backend
docker-compose logs mongodb
docker-compose logs mongo-express

# Follow logs in real-time
docker-compose logs -f backend
```

### Stop All Services
```bash
docker-compose stop
```

### Stop and Remove Containers
```bash
docker-compose down
```

### Stop and Remove Everything (including data volumes)
```bash
docker-compose down -v
```

### Rebuild Images
```bash
docker-compose build

# No cache rebuild
docker-compose build --no-cache
```

### Restart a Service
```bash
docker-compose restart backend
```

### Execute Command in Container
```bash
# Access backend container shell
docker-compose exec backend sh

# Run npm command in backend
docker-compose exec backend npm install
```

---

## Docker Direct Commands

### View All Containers
```bash
docker ps -a
```

### View Images
```bash
docker images
```

### Remove Unused Images
```bash
docker image prune
```

### View Volumes
```bash
docker volume ls
```

### Remove Volumes
```bash
docker volume rm todo-devops_mongodb_data
docker volume rm todo-devops_mongodb_config
```

### Inspect Container
```bash
docker inspect todo-backend
```

### View Container Logs
```bash
docker logs -f todo-backend
```

### Remove Container
```bash
docker rm todo-backend
```

---

## Access Services

| Service | URL | Username | Password |
|---------|-----|----------|----------|
| Frontend | http://localhost:5173 | - | - |
| Backend API | http://localhost:5000 | - | - |
| Mongo Express | http://localhost:8081 | admin | pass |
| MongoDB | localhost:27017 | admin | password |

---

## Troubleshooting Commands

### Check if Docker is Running
```bash
docker ps
```

### Check Docker Version
```bash
docker --version
docker-compose --version
```

### Check Disk Usage
```bash
docker system df
```

### Clean Up Unused Resources
```bash
docker system prune
docker system prune -a  # Remove all unused images too
```

### Check Network
```bash
docker network ls
docker network inspect todo-devops_todo-network
```

### Port Forwarding Check (Windows)
```bash
netstat -ano | findstr :5000
netstat -ano | findstr :27017
netstat -ano | findstr :8081
```

### Kill Process Using Port (Windows)
```bash
taskkill /PID <PID> /F
```

---

## Performance Tips

### Increase Docker Memory (Docker Desktop Settings)
1. Right-click Docker Desktop → Settings
2. Resources → Memory: Increase if needed
3. Restart Docker

### View Container Resource Usage
```bash
docker stats

# Or with compose
docker-compose stats
```

### Optimize Dockerfile
- Use `.dockerignore` to exclude unnecessary files
- Use multi-stage builds for smaller images
- Cache dependencies layer

---

## Development Workflow

### Make Changes to Backend Code
1. Edit files in `backend/`
2. Changes auto-reload (nodemon configured)
3. Check logs: `docker-compose logs -f backend`

### Access MongoDB
1. Open http://localhost:8081
2. Login: admin / pass
3. Navigate to: todo-db → todos

### Test API
```bash
# Get all todos
curl http://localhost:5000/api/todos

# Create todo
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Test Task\"}"

# Update todo
curl -X PUT http://localhost:5000/api/todos/<ID> \
  -H "Content-Type: application/json" \
  -d "{\"completed\":true}"

# Delete todo
curl -X DELETE http://localhost:5000/api/todos/<ID>
```

---

## Production Deployment

### Build for Production
```bash
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d
```

### Push to Docker Hub
```bash
docker tag todo-backend:latest <your-username>/todo-backend:latest
docker push <your-username>/todo-backend:latest
```

### Deploy to Cloud (AWS, GCP, Azure)
- Use AWS ECS, Google Cloud Run, or Azure Container Instances
- Update connection strings to cloud databases
- Use managed MongoDB Atlas instead of self-hosted

---

## Common Issues & Solutions

### Issue: Port Already in Use
**Solution:**
```bash
# Find process using port
netstat -ano | findstr :5000

# Kill it
taskkill /PID <PID> /F
```

### Issue: Docker Daemon Not Running
**Solution:**
- Start Docker Desktop from Start menu
- Wait 2-3 minutes for it to fully initialize

### Issue: MongoDB Connection Failed
**Solution:**
```bash
# Check if mongodb container is running
docker-compose ps

# Check logs
docker-compose logs mongodb

# Verify environment variables in docker-compose.yml
```

### Issue: Frontend Can't Reach Backend
**Solution:**
```bash
# Ensure backend is running
docker-compose ps

# Check if port 5000 is accessible
curl http://localhost:5000

# Check frontend API URL in services/api.js
```

### Issue: Out of Disk Space
**Solution:**
```bash
# Clean up unused resources
docker system prune -a

# Remove specific volume
docker volume rm todo-devops_mongodb_data
```

---

## Environment Variables Reference

### MongoDB (docker-compose.yml)
```
MONGO_INITDB_ROOT_USERNAME: admin
MONGO_INITDB_ROOT_PASSWORD: password
MONGO_INITDB_DATABASE: todo-db
```

### Mongo Express (docker-compose.yml)
```
ME_CONFIG_MONGODB_ADMINUSERNAME: admin
ME_CONFIG_MONGODB_ADMINPASSWORD: password
ME_CONFIG_BASICAUTH_USERNAME: admin
ME_CONFIG_BASICAUTH_PASSWORD: pass
```

### Backend (backend/.env)
```
PORT: 5000
MONGO_URI: mongodb://admin:password@mongodb:27017/todo-db?authSource=admin
NODE_ENV: development
```

---

## Useful Resources

- Docker Documentation: https://docs.docker.com/
- Docker Compose: https://docs.docker.com/compose/
- MongoDB Docker: https://hub.docker.com/_/mongo
- Mongo Express: https://hub.docker.com/_/mongo-express
- Node.js Best Practices: https://nodejs.org/en/docs/

---

Generated: 2026-07-18

# DevOps Todo App - Docker Setup Guide

## Prerequisites
1. **Docker Desktop** must be installed and running
   - Download from: https://www.docker.com/products/docker-desktop
   - After installation, start Docker Desktop

## Project Structure
```
todo-devops/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── .env
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── routes/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   └── ...
├── docker-compose.yml    ← NEW
└── README.md
```

## Services Running in Docker

### 1. **MongoDB** (Port 27017)
   - Image: mongo:7.0
   - Container: todo-mongodb
   - Credentials: admin / password
   - Database: todo-db
   - Data persisted in volume: `mongodb_data`

### 2. **Mongo Express** (Port 8081)
   - Image: mongo-express:1.0.0
   - Container: todo-mongo-express
   - Web UI to view/manage MongoDB
   - Login: admin / pass
   - Access: http://localhost:8081

### 3. **Backend API** (Port 5000)
   - Built from: ./backend/Dockerfile
   - Container: todo-backend
   - Connects to MongoDB via `mongodb://admin:password@mongodb:27017/todo-db`
   - Hot reload enabled with nodemon

### 4. **Frontend** (Port 5173)
   - Runs locally (not in Docker)
   - Vite dev server
   - Connects to backend at http://localhost:5000

## Setup Steps

### Step 1: Start Docker Desktop
- Windows: Search for "Docker Desktop" and open it
- Wait for Docker daemon to start (check system tray)

### Step 2: Start All Services
```bash
cd C:\Users\Tejal\todo-devops
docker-compose up
```

This will:
- Pull MongoDB and mongo-express images
- Build the backend image
- Start all 3 containers on the `todo-network`
- Show logs in terminal

### Step 3: Start Frontend (in separate terminal)
```bash
cd C:\Users\Tejal\todo-devops\frontend
npm run dev
```

### Step 4: Access Your App

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:5173 | Todo app UI |
| Backend API | http://localhost:5000 | API endpoints |
| Mongo Express | http://localhost:8081 | View MongoDB data |

### Step 5: Test Workflow

1. Open frontend: http://localhost:5173
2. Add a task in the input field
3. Click "Add" button
4. Open mongo-express: http://localhost:8081
5. Navigate: todo-db → todos collection
6. Your task should appear there! ✅

## Stopping Services

To stop all containers:
```bash
docker-compose down
```

To stop and remove volumes (clean slate):
```bash
docker-compose down -v
```

## View Logs

In the docker-compose terminal:
- Backend logs: Look for `todo-backend` messages
- MongoDB logs: Look for `todo-mongodb` messages

## Troubleshooting

### Docker daemon not running
- Open Docker Desktop from Start menu
- Wait 2-3 minutes for it to fully start

### Port already in use
- MongoDB (27017): `netstat -ano | findstr :27017`
- Mongo Express (8081): `netstat -ano | findstr :8081`
- Backend (5000): `netstat -ano | findstr :5000`
- Kill process: `taskkill /PID <PID> /F`

### MongoDB won't connect
- Check credentials in .env: `admin / password`
- Ensure containers are on same network: `docker network ls`

### Frontend can't reach backend
- Verify backend container is running: `docker ps`
- Check if port 5000 is exposed

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://admin:password@mongodb:27017/todo-db?authSource=admin
NODE_ENV=development
```

### Docker Compose Env
- MongoDB Admin: `admin`
- MongoDB Password: `password`
- Mongo Express Admin: `admin` / `pass`

## Next Steps (Optional)

### Build Optimized Frontend Image
Create `frontend/Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Then add to docker-compose.yml:
```yaml
frontend:
  build: ./frontend
  container_name: todo-frontend
  ports:
    - "80:80"
  networks:
    - todo-network
```

## Done! 🎉

Your DevOps Todo app is now fully containerized with:
- ✅ MongoDB database (persistent storage)
- ✅ Mongo Express UI (database management)
- ✅ Express backend API (containerized)
- ✅ React frontend (local dev server)
- ✅ Docker Compose orchestration (network connectivity)

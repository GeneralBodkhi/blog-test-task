Run project
1. Clone repository <br>
``` git clone https://github.com/GeneralBodkhi/blog-test-task.git ``` <br>
``` cd blog-test-task/blog-api ``` <br>
2. Start backend (Docker) <br>
``` docker compose up -d --build ``` <br>
3. Install backend dependencies <br>
```docker compose exec app composer install``` <br>
4. Generate app key <br>
```docker compose exec app php artisan key:generate``` <br>
5. Run migrations <br>
```docker compose exec app php artisan migrate --seed``` <br>
Backend API will be available at: <br>
http://localhost:8000/api/articles <br>
6. Start frontend <br>
```cd ../blog-frontend``` <br>
```npm install``` <br>
```npm run dev``` <br>
Frontend runs at: <br>
```http://localhost:5173``` <br>
Project structure <br>
blog-api        - Laravel backend (Dockerized) <br>
blog-frontend   - React frontend <br>

1. Clone project
  git clone https://github.com/GeneralBodkhi/blog-test-task.git
  cd blog-test-task/blog-api

2. Start Docker containers
   docker compose up -d --build

3. Install dependencies
  docker compose exec app composer install

4. Generate application key
  docker compose exec app php artisan key:generate

5. Run migrations and seeders
  docker compose exec app php artisan migrate --seed

6. Start frontend
  cd ../blog-frontend
  npm install
  npm run dev
frontend run at http://localhost:5173

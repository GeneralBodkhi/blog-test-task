Run project
1. Clone repository <br>
<pre> git clone https://github.com/GeneralBodkhi/blog-test-task.git <br>
 cd blog-test-task/blog-api  <br></pre>
2. Start backend (Docker) <br>
<pre> docker compose up -d --build </pre> <br>
3. Install backend dependencies <br>
<pre>docker compose exec app composer install</pre> <br>
4. Generate app key <br>
<pre>docker compose exec app php artisan key:generate</pre> <br>
5. Run migrations <br>
<pre>docker compose exec app php artisan migrate --seed</pre> <br>
Backend API will be available at: <br>
<pre>http://localhost:8000/api/articles </pre> <br>
6. Start frontend <br>
<pre>cd ../blog-frontend <br>
npm install <br>
npm run dev <br></pre>
Frontend runs at: <br>
<pre>http://localhost:5173</pre> <br>
Project structure <br>
blog-api        - Laravel backend (Dockerized) <br>
blog-frontend   - React frontend <br>

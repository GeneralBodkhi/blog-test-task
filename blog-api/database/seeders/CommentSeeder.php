<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articles = Article::all();

        foreach ($articles as $article) 
            {
                Comment::factory()
                    ->count(rand(3, 5))
                    ->create([
                        'article_id' => $article->id,
                    ]);
            }
    }
}

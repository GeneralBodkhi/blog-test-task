<?php

use App\Http\Controllers\Api\ArticleController;
use Illuminate\Support\Facades\Route;

Route::apiResource('articles', ArticleController::class)->only(['index', 'show', 'store']);
Route::post('articles/{article}/comments', [ArticleController::class, 'storeComment']);
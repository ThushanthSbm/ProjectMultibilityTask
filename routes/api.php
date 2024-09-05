<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

// Public routes for posts
Route::get('posts', function () {
    $response = Http::get('https://jsonplaceholder.typicode.com/posts');
    return $response->json();
});

Route::get('post/{id}', function ($id) {
    $response = Http::get("https://jsonplaceholder.typicode.com/posts/{$id}");
    return $response->json();
});

// API routes for user CRUD
Route::apiResource('users', UserController::class);

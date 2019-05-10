<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\News;
use Faker\Generator as Faker;

$factory->define(News::class, function (Faker $faker) {
    return [
      'news_title'              => $faker->jobTitle,
      'news_detail'             => $faker->bs,
      'news_types_id'           => mt_rand(1,4),
      'created_by'          => $faker->name,


    ];
});

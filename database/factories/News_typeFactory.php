<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\News_type;
use Faker\Generator as Faker;

$factory->define(News_type::class, function (Faker $faker) {
    return [
      'type_name'              => $faker->jobTitle,
      'created_by'             => $faker->name,


    ];
});

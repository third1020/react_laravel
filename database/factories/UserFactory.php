<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name'              => $faker->firstNameMale,
        'email'             => $faker->email,
        'nameuser'          => $faker->name,
        'id_card'           => rand(000000,999999),
        'phone_number'      => rand(000000,999999),
        'permission_id'           => rand(1,50),
        'image'             => $faker->imageUrl($width = 1920, $height = 1080, 'cats'),
        'password'          => '$2y$10$0yRiTWnNI6RROm/icG2Um.8M0pz8fPtcX59jKjGujWA1dkFigjku.', // secret

    ];
});

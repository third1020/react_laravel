<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\User;
use Faker\Generator as Faker;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name'              => $faker->firstNameMale,
        'email'             => $faker->email,
        'nameuser'          => $faker->name,
        'id_card'          => mt_rand(0000000000000,9999999999999),
        'phone_number'      => mt_rand(0000000000,9999999999),
        'permission_id'           => mt_rand(1,50),
        'image'             => $faker->imageUrl($width = 1920, $height = 1080, 'cats'),
        'password'          => '$2y$10$0yRiTWnNI6RROm/icG2Um.8M0pz8fPtcX59jKjGujWA1dkFigjku.', // secret

    ];
});

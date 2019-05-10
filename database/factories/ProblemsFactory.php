<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Problems;
use Faker\Generator as Faker;

$factory->define(Problems::class, function (Faker $faker) {
    return [
      'problems_tital'              => $faker->firstNameMale,
      'problems_detail'             => $faker->bs,
      'problems_status'             => mt_rand(1,4),
      'equipment_id'         => mt_rand(1,50),
      'contact_id'           => mt_rand(1,50),
      'impact_id'            => mt_rand(1,50),
      'priority_id'          => mt_rand(1,50),

    ];
});

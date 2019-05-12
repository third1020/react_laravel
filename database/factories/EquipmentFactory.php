<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Equipment;
use Faker\Generator as Faker;

$factory->define(Equipment::class, function (Faker $faker) {
    return [
      'equipment_name'         => $faker->firstNameMale,
      'equipment_detail'       => $faker->bs,
      'equipment_number'       => mt_rand(0000000,99999999),
      'contact_detail'         => mt_rand(0000000,99999999),
      'equipment_type_id'      => mt_rand(1,50),
      'created_by'             => $faker->firstNameMale,
      'equipment_image'        =>$faker->imageUrl($width = 1920, $height = 1080, 'cats'),

    ];
});

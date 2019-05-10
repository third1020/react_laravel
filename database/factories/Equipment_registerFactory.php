<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Equipment_register;
use Faker\Generator as Faker;

$factory->define(Equipment_register::class, function (Faker $faker) {
    return [
      'equipment_name'      => $faker->firstNameMale,
      'equipment_type'      => $faker->creditCardType,
      'username'            => $faker->name,
      'department'          => $faker->company,
      'detail'              => $faker->bs,
      'created_by'          => $faker->firstNameMale, // secret

    ];
});

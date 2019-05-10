<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Incident;
use Faker\Generator as Faker;

$factory->define(Incident::class, function (Faker $faker) {
    return [
      'incident_tital'              => $faker->firstNameMale,
      'incident_detail'             => $faker->bs,
      'incident_status'             => mt_rand(1,4),
      'equipment_id'          => mt_rand(1,50),
      'contact_id'            => mt_rand(1,50),
      'impact_id'             => mt_rand(1,50),
      'priority_id'           => mt_rand(1,50),

      'created_by'          => $faker->firstNamefeMale,

    ];
});

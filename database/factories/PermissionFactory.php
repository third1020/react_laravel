<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Permission;
use Faker\Generator as Faker;

$factory->define(Permission::class, function (Faker $faker) {
  return [
      'permission_name'                => $faker->firstNamefeMale,
      'created_by'                     => $faker->firstNameMale,
      'manage_user'                    => mt_rand(0,1),
      'manage_knowledge'               => mt_rand(0,1),
      'manage_message'                 => mt_rand(0,1),
      'manage_equipment'               => mt_rand(0,1),
      'manage_requipment'              => mt_rand(0,1),
      'manage_problem'                 => mt_rand(0,1),
      'manage_incident'                => mt_rand(0,1),
      'manage_contact'                 => mt_rand(0,1),
      'manage_impact'                  => mt_rand(0,1),
      'manage_priority'                => mt_rand(0,1),
      'manage_solution'                => mt_rand(0,1),
      'Report'                         => mt_rand(0,1)

  ];
});

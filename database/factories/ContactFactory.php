<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Contact;
use Faker\Generator as Faker;

$factory->define(Contact::class, function (Faker $faker) {
    return [
      'contact_name'              => $faker->Name,
      'contact_phone'             => $faker->phoneNumber,
      'contact_email'             => $faker->email,
      'contact_address'           => $faker->address,
      'contact_detail'            => $faker->bs ,
      'user_id'                   => mt_rand(1,50),
      'created_by'                 => $faker->firstNameMale

    ];
});

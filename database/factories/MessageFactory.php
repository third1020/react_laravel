<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Message;
use Faker\Generator as Faker;

$factory->define(Message::class, function (Faker $faker) {
    return [
      'message_title'               => $faker->jobTitle,
      'message_message'             => $faker->bs,
      'message_from'                => mt_rand(1,50),
      'message_to'           => mt_rand(1,50),
      'status'               => mt_rand(1,4),
      'created_by'           => $faker->name,
      

    ];
});

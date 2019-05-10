<?php

use Illuminate\Database\Seeder;

class Equipment_registerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Equipment_register::class, 50)->create();
    }
}

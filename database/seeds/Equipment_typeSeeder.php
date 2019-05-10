<?php

use Illuminate\Database\Seeder;

class Equipment_typeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Equipment_type::class, 50)->create();
    }
}

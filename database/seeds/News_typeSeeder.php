<?php

use Illuminate\Database\Seeder;

class News_typeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\News_type::class, 50)->create();
    }
}

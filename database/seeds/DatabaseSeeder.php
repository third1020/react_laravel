<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PermissionSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ContactSeeder::class);
        $this->call(Equipment_registerSeeder::class);
        $this->call(Equipment_typeSeeder::class);
        $this->call(EquipmentSeeder::class);
        $this->call(ImpactSeeder::class);
        $this->call(MessageSeeder::class);
        $this->call(News_typeSeeder::class);
        $this->call(NewsSeeder::class);
        $this->call(PrioritySeeder::class);
        $this->call(IncidentSeeder::class);
        $this->call(ProblemsSeeder::class);
        $this->call(RequestSeeder::class);

    }
}

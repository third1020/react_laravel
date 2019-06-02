<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimPersonContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_person_contact', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
			$table->primary('id');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			
			$table->uuid('company_id')->comment('รหัสข้อมูลบริษัท');
			$table->uuid('person_responsible_id')->comment('รหัสข้อมูลผู้รับผิดชอบ');
			
            $table->timestamps();
			$table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dim_person_contact');
    }
}

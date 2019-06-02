<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimAddressTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		
        Schema::create('dim_address', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
			$table->primary('id');
			
			$table->uuid('province_id')->comment('รหัสข้อมูลจังหวัด');
			$table->uuid('district_id')->comment('รหัสข้อมูลอำเภอ');
			$table->uuid('sub_district_id')->comment('รหัสข้อมูลตำบล');
			$table->uuid('postal_code_id')->comment('รหัสข้อมูลรหัสไปรษณีย์');
			
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
        Schema::dropIfExists('dim_address');
    }
}

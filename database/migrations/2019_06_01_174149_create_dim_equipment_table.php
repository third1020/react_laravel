<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimEquipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_equipment', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
			$table->primary('id');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			$table->uuid('location_id')->comment('รหัสข้อมูลตำเหน่งที่อยู่');
			$table->string('name')->comment('ชื่ออุปกรณ์');
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
        Schema::dropIfExists('dim_equipment');
    }
}

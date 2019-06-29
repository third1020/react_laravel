<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactRequestGeneralTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fact_request_general', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');

			$table->uuid('request_general_id')->comment('รหัสข้อมูลคำร้อง');
			$table->uuid('equipment_id')->comment('อุปกรณ์');

			$table->uuid('return_date')->nullable()->comment('วันที่คืน');
			$table->uuid('receive_date')->nullable()->comment('วันที่ยืม');

			$table->string('request_time')->comment('เวลาที่ยืม');
			$table->enum('request_sort', ['Hour', 'Day', 'Year'])->default('Hour')->comment('ตัวเลือกเวลาที่ยืม');

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
        Schema::dropIfExists('fact_request_general');
    }
}

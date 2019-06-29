<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactEquipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fact_equipment', function (Blueprint $table) {
          $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			$table->uuid('equipment_id')->comment('รหัสข้อมูลอุปกรณ์');
			$table->integer('document_number')->unsigned()->comment('เลขเอกสาร');
			$table->string('name')->comment('ชื่ออุปกรณ์');
			$table->text('detail')->comment('รายละเอียดอุปกรณ์');
			$table->enum('image_show', ['default', 'image1', 'image2'])->default('default')->comment('แสดงรูปภาพ');
			$table->uuid('image_id')->nullable()->comment('รหัสข้อมูลรูปภาพ');
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
        Schema::dropIfExists('fact_equipment');
    }
}

<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateDimLocationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_location', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
			$table->primary('id');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			
			$table->string('name');
			
			$table->text('address_1')->comment('ที่อยู่ ช่อง 1');
			$table->text('address_2')->nullable()->comment('ที่อยู่ ช่อง 2');
			$table->text('address_3')->nullable()->comment('ที่อยู่ ช่อง 3');
			$table->double('address_latitude')->nullable()->comment('ตำเหน่ง latitube');
			$table->double('address_longitude')->nullable()->comment('ตำเหน่ง longitude');
			$table->uuid('address_id')->comment('รหัสข้อมูลที่อยู่');
			
			$table->enum('image_show', ['default', 'image1', 'image2'])->default('default')->comment('ชนิดการแสดงรูปภาพ');
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
        Schema::dropIfExists('dim_building');
    }
}
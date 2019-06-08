<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
            $table->primary('id');
			$table->uuid('client_id')->nullable()->comment('รหัสข้อมูลผู้สร้าง');
      $table->string('username')->comment('ชื่อผู้ใช้งาน');
      $table->string('password')->comment('รหัสผ่าน');

			$table->text('email')->comment('อีเมล');
            $table->text('hashed_email')->comment('เข้ารหัสอีเมล');

			$table->enum('is_block', ['block', 'unblock'])->default('unblock')->comment('สถานะการใช้งาน');

			$table->enum('user_right', ['admin', 'staff'])->default('staff')->comment('สิทธิ์เข้าใช้งานหลัก');



			$table->enum('image_show', ['default', 'image1', 'image2'])->default('default')->comment('แสดงรูปภาพ');
			$table->uuid('image_id')->comment('รหัสข้อมูลรูปภาพ');

			$table->uuid('permission_id')->comment('รหัสข้อมูลสิทธิ์การใช้งาน');
      $table->rememberToken();

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
        Schema::dropIfExists('users');
    }
}

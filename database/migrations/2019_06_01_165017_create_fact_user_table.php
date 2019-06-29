<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fact_user', function (Blueprint $table) {
          $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');

			$table->uuid('user_id')->comment('รหัสข้อมูลผู้ใช้งาน');

			$table->string('first_name')->comment('ชื่อจริง');
            $table->string('last_name')->comment('นามสกุล');
            $table->string('nick_name')->comment('ชื่อเล่น');

			$table->uuid('location_id')->comment('รหัสข้อมูลตำเหน่ง');

            $table->string('telephone')->comment('เบอรโทรศัพท์');
            $table->string('telephone_emergency')->comment('เบอร์โทรศัพท์สามาติดต่อได้');

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
        Schema::dropIfExists('fact_user');
    }
}

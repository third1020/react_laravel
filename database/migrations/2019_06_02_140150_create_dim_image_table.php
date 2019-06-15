<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimImageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_image', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');

			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');

			$table->text('image')->nullable();

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
        Schema::dropIfExists('dim_image');
    }
}

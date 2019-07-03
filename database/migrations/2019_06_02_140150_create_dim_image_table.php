<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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

        DB::table('dim_image')->insert(
            array(
                'client_id' => 'admin',
                'image' => 'images/img/image-not-found.png',
            )
        );
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

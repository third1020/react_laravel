<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimMessageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_message', function (Blueprint $table) {
          $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');

			$table->string('tital')->comment('หัวข้อ');
			$table->text('detail')->comment('รายละเอียด');

			$table->enum('status', ['O', 'C'])->default('O')->comment('สถานะ O=Open, C=Close');

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
        Schema::dropIfExists('dim_message');
    }
}

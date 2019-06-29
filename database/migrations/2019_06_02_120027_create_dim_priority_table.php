<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimPriorityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_priority', function (Blueprint $table) {
          $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');

			$table->string('name')->comment('ชื่อ');
			$table->enum('value', ['High', 'Medium', 'Low', 'None'])->default('None')->comment('ตัวเลือก ระดับความสำคัญ');

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
        Schema::dropIfExists('dim_priority');
    }
}

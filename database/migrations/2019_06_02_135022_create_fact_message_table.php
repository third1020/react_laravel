<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactMessageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fact_message', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลของตาราง');
			$table->primary('id');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			$table->uuid('message_id')->comment('รหัสข้อมูลข้อความ');
			
			$table->text('comment')->comment('ความคิดเห็น');
			
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
        Schema::dropIfExists('fact_message');
    }
}

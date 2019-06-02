<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fact_news', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลของตาราง');
			$table->primary('id');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			$table->uuid('news_id')->comment('รหัสข้อมูลข่าวสาร');
			
			$table->text('comment')->comment('ข้อคิดเห็น');
			
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
        Schema::dropIfExists('fact_news');
    }
}

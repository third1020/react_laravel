<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_news', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลของตาราง');
			$table->primary('id');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			
			$table->uuid('setting_news_id')->comment('รหัสข้อมูลการตั้งค่าข่าวสาร');
			
			$table->string('name')->comment('ชื่่อหัวข้อข่าวสาร');
			$table->text('detail')->comment('รายละเอียดข่าวสาร');
			
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
        Schema::dropIfExists('dim_news');
    }
}

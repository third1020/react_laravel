<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactRequestIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fact_request_issues', function (Blueprint $table) {
			$table->uuid('id')->comment('รหัสข้อมูลตาราง');
			$table->primary('id');
			
			$table->uuid('request_issues_id')->comment('รหัสข้อมูลปัญหา');
			$table->uuid('equipment_id')->comment('รหัสข้อมูลอุปกรณ์');
			
			$table->string('name')->comment('ชื่อ');
			$table->text('comment')->comment('ข้อคิดเห็น');
			
			$table->enum('issues_level', ['Problems', 'Incidents', 'None'])->default('None')->comment('ตัวเลือก ปัญหา');
			
			$table->uuid('modify_id')->nullable()->comment('รหัสข้อมูลแก้ไข');
			$table->enum('modify_status', ['Pending', 'Successful', 'Unsuccessful'])->default('Pending')->comment('รหัสข้อมูลสถานะแก้ไข');
			
			$table->uuid('impact_id')->nullable()->comment('รหัสข้อมูล ผลกระทบ');
			$table->uuid('priority_id')->nullable()->comment('รหัสข้อมูล ความสำคัญ');
			
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
        Schema::dropIfExists('fact_request_issues');
    }
}

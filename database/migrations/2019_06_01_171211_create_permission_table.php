<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permission', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
			$table->primary('id');
			
			$table->text('name')->comment('ชื่อสิทธิ์เข้าใช้');
			$table->text('guard_name')->comment('การป้องกัน');
			
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
        Schema::dropIfExists('dim_permission');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
            $table->primary('id');
			
			$table->enum('name', ['Administrator (Admin)', 'Staff', 'Supervisor', 'Manager', 'guest'])->default('guest')->comment('ตัวเลือกบททาบ');
			$table->string('guard_name')->comment('การป้องกัน');
			
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
        Schema::dropIfExists('dim_role');
    }
}

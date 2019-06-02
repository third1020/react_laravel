<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDimPersonResponsibleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_person_responsible', function (Blueprint $table) {
            $table->uuid('id')->comment('รหัสข้อมูลตาราง');
			$table->primary('id');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			
			$table->string('first_name')->comment('ชื่อจริง');
            $table->string('last_name')->comment('นามสกุล');
            $table->string('nick_name')->comment('ชื่อเล่น');
			$table->string('telephone')->comment('เบอร์โทรศัพท์');
			$table->string('email')->comment('อีเมล');
			$table->string('position')->comment('ตำเหน่ง');
			$table->string('id_card')->comment('เลขประจำตัวประชาชน');
			$table->string('id_employee')->comment('เลขประจำตัวพนักงาน');

			$table->uuid('location_id')->comment('รหัสข้อมูลตำเหน่ง');
			$table->uuid('company_id')->comment('รหัสข้อมูลบริษัท');
			$table->uuid('department_id')->comment('รหัสข้อมูลแผนก');
			
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
        Schema::dropIfExists('dim_person_responsible');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFactPersonContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fact_person_contact', function (Blueprint $table) {
          $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');
			$table->uuid('client_id')->comment('รหัสข้อมูลผู้สร้าง');
			$table->uuid('person_contact_id')->comment('รหัสข้อมูลผู้ติดต่อ');
			$table->integer('document_number')->unsigned()->comment('เลขเอกสาร');

			$table->string('first_name')->comment('ชื่อจริง');
            $table->string('last_name')->comment('นามสกุล');
            $table->string('nick_name')->comment('ชื่อเล่น');
			$table->string('telephone')->comment('เบอร์โทรศัพท์');
			$table->string('email')->comment('อีเมล');
			$table->string('id_card')->comment('เลขประจำตัวประชาชน');
			$table->string('id_employee')->comment('เลขประจำตัวพนักงาน');

			$table->uuid('location_id')->comment('รหัสข้อมูลตำเหน่ง');

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
        Schema::dropIfExists('fact_person_contact');
    }
}

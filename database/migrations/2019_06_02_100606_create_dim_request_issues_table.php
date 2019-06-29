<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateDimRequestIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dim_request_issues', function (Blueprint $table) {
          
		$table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');

			$table->string('name')->comment('ชื่อ');

			$table->enum('status', ['Pending', 'Approve', 'Auditor', 'Rejected'])->default('Pending')->comment('ตัวเลือกสถานะ');

			$table->uuid('auditor_user_id')->nullable()->comment('รหัสข้อมูลผู้ตรวจสอบ');
            $table->uuid('approval_user_id')->nullable()->comment('รหัสข้อมูลผู้อนุมัติ');
            $table->dateTime('audit_timestamp')->nullable()->comment('เวลาบันทึกผู้ตรวจสอบ');
            $table->dateTime('approval_timestamp')->nullable()->comment('เวลาบันทึกผู้อนุมัติ');

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
        Schema::dropIfExists('dim_request_issues');
    }
}

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

			$table->bigIncrements('id');

			$table->string('permission_name')->comment('ชื่อสิทธิ์เข้าใช้');
      $table->boolean('ManageUser')->default(false);
      $table->boolean('ManageNews')->default(false);
      $table->boolean('ManageMessage')->default(false);
      $table->boolean('ManageEquipment')->default(false);
      $table->boolean('ManageRequipment')->default(false);
      $table->boolean('ManageProblem')->default(false);
      $table->boolean('ManageIncident')->default(false);
      $table->boolean('ManageContact')->default(false);
      $table->boolean('ManageImpact')->default(false);
      $table->boolean('ManagePriority')->default(false);
      $table->boolean('ManageSolution')->default(false);
      $table->boolean('Report')->default(false);


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

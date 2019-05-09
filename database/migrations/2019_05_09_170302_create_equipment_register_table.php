<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquipmentRegisterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipment_register', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('remark')->nullable();
          $table->string('equipment_name');
          $table->string('equipment_type');
          $table->string('username');
          $table->string('department');
          $table->longText('detail');
          $table->BIginteger('equipment_type_id')->unsigned();
          $table->foreign('equipment_type_id')->references('id')->on('equipment_type');
          $table->string('created_by')->nullable();
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipment_register');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipment', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('remark')->nullable();
          $table->string('equipment_name');
          $table->string('equipment_detail');
          $table->string('equipment_number');
          $table->longText('contact_detail');
          $table->BIginteger('equipment_type_id')->unsigned();
          $table->foreign('equipment_type_id')->references('id')->on('equipment_types');
          $table->string('created_by')->nullable();
          $table->timestamps();
        });
        DB::statement("ALTER TABLE equipment ADD equipment_image  MEDIUMBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipment');
    }
}

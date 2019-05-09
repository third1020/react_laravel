<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIncidentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incident', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('remark')->nullable();
          $table->string('incident_tital');
          $table->longText('incident_detail');
          $table->string('incident_status');
          $table->BIginteger('equipment_id')->unsigned();
          $table->foreign('equipment_id')->references('id')->on('equipment');
          $table->BIginteger('contact_id')->unsigned();
          $table->foreign('contact_id')->references('id')->on('contact');
          $table->BIginteger('impact_id')->unsigned();
          $table->foreign('impact_id')->references('id')->on('impact');
          $table->BIginteger('priority_id')->unsigned();
          $table->foreign('priority_id')->references('id')->on('priority');
        

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
        Schema::dropIfExists('incident');
    }
}

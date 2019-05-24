<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProblemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('problems', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('remark')->nullable();
          $table->string('problems_tital');
          $table->string('problems_detail');
          $table->string('problems_status');
          $table->BIginteger('equipment_id')->unsigned();
          $table->foreign('equipment_id')->references('id')->on('equipment');
          $table->BIginteger('contact_id')->unsigned();
          $table->foreign('contact_id')->references('id')->on('contacts');
          $table->BIginteger('impact_id')->unsigned();
          $table->foreign('impact_id')->references('id')->on('impacts');
          $table->BIginteger('priority_id')->unsigned();
          $table->foreign('priority_id')->references('id')->on('priorities');

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
        Schema::dropIfExists('problems');
    }
}

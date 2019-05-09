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
        Schema::create('permissions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('permission_name');
            $table->string('created_by');

            $table->boolean('manage_user');
            $table->boolean('manage_knowledge');
            $table->boolean('manage_message');
            $table->boolean('manage_equipment');
            $table->boolean('manage_requipment');
            $table->boolean('manage_problem');
            $table->boolean('manage_incident');
            $table->boolean('manage_contact');
            $table->boolean('manage_impact');
            $table->boolean('manage_priority');
            $table->boolean('manage_solution');
            $table->boolean('Report');




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
        Schema::dropIfExists('permissions');

    }
}

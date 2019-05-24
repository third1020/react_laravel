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
            $table->string('permission_name')->nullable();
            $table->string('created_by')->nullable();

            $table->boolean('manage_user')->nullable();
            $table->boolean('manage_knowledge')->nullable();
            $table->boolean('manage_message')->nullable();
            $table->boolean('manage_equipment')->nullable();
            $table->boolean('manage_requipment')->nullable();
            $table->boolean('manage_problem')->nullable();
            $table->boolean('manage_incident')->nullable();
            $table->boolean('manage_contact')->nullable();
            $table->boolean('manage_impact')->nullable();
            $table->boolean('manage_priority')->nullable();
            $table->boolean('manage_solution')->nullable();
            $table->boolean('Report')->nullable();
            $table->softDeletes();




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

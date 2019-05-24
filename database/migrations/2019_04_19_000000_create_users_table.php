<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('users', function (Blueprint $table) {
        $table->bigIncrements('id');
          $table->string('name');
          $table->string('email')->nullable();

          $table->string('password');
          $table->string('nameuser')->nullable();

          $table->string('id_card')->nullable();
          $table->string('phone_number')->nullable();

          $table->BIginteger('permission_id')->unsigned();
          $table->foreign('permission_id')->references('id')->on('permissions');

          $table->timestamps();
          $table->softDeletes();
        });

        DB::statement("ALTER TABLE users ADD image  MEDIUMBLOB");





    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');

    }
}

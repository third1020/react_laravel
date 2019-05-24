<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('remark')->nullable();
          $table->string('message_title');
          $table->longText('message_message');
          $table->BIginteger('message_from')->unsigned();
          $table->foreign('message_from')->references('id')->on('users');
          $table->BIginteger('message_to')->unsigned();
          $table->foreign('message_to')->references('id')->on('users');

          $table->Integer('status');
          $table->string('created_by')->nullable();
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
        Schema::dropIfExists('messages');
    }
}

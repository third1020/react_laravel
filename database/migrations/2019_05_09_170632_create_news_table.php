<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
          $table->bigIncrements('id');
          $table->string('remark')->nullable();
          $table->string('news_title');
          $table->longText('news_detail');
          $table->BIginteger('news_types_id')->unsigned();
          $table->foreign('news_types_id')->references('id')->on('news_types');
          $table->string('created_by')->nullable();
          $table->timestamps();
        });
        DB::statement("ALTER TABLE news ADD news_image  MEDIUMBLOB");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}

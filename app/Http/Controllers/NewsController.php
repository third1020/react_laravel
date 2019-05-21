<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NewsResource;
use App\News;
use Illuminate\Support\Facades\DB;


class NewsController extends Controller
{
  protected $list;



  public function __construct(News $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('news')->latest()->limit(3)->get();

    return $getdata->toJson();


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query =DB::table('news')->where('id','like',$wordsearch)
                                                 ->orwhere('news_title','like',$wordsearch)
                                                 ->orwhere('news_types_id','like',$wordsearch)

                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return NewsResource::collection($list);

 }

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'news_title' => 'required',
     'news_detail' => 'required',
     'news_types_id' => 'required',


   ]);

   News::create([

     'news_title' => $validatedData['news_title'],
     'news_detail' => $validatedData['news_detail'],
     'news_types_id' => $validatedData['news_types_id'],


   ]);
   return response()->json('User created!');

 }

 public function edit($id)
 {
   $listdata = DB::table('news')->where('id',$id)->get();

   return $listdata->toJson();
 }


 public function update(Request $request, $id) {


   $validatedData = $request->validate([
     'news_title' => 'required',
     'news_detail' => 'required',
     'news_types_id' => 'required',
   ]);


        News::findOrFail($id)
            ->update([
              'news_title' => $validatedData['news_title'],
              'news_detail' => $validatedData['news_detail'],
              'news_types_id' => $validatedData['news_types_id'],
          ]);





}


 public function destroy($id) {
  News::findOrFail($id)->delete();

}

}

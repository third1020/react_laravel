<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NewsResource;
use App\News;


class NewsController extends Controller
{
  protected $list;



  public function __construct(News $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('news_title','like',$wordsearch)
                                                 ->orwhere('news_types_id','like',$wordsearch)
                                                
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return NewsResource::collection($list);

 }


 public function destroy($id) {
  News::findOrFail($id)->delete();

}

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\News_typeResource;
use App\News_type;

class News_typeController extends Controller
{
  protected $list;



  public function __construct(News_type $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('type_name','like',$wordsearch)
                                              
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return News_typeResource::collection($list);

 }


 public function destroy($id) {
  News_type::findOrFail($id)->delete();

}
}

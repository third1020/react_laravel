<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Contact;

class ContactController extends Controller
{
  protected $list;



  public function __construct(Contact $list)
  {
      $this->list = $list;


  }

 public function getTable(Request $request)
 {
   $wordsearch = $request->search.'%';


                       $query = $this->list->where('id','like',$wordsearch)
                                                 ->orwhere('contact_name','like',$wordsearch)
                                                 ->orwhere('contact_phone','like',$wordsearch)
                                                 ->orwhere('contact_email','like',$wordsearch)
                                                 ->orwhere('contact_address','like',$wordsearch)
                                                 ->orwhere('created_at','like',$wordsearch)
                                                 ->orderBy($request->column, $request->order);


         $list = $query->paginate($request->per_page ?? 5);



         return ContactResource::collection($list);

 }


 public function destroy($id) {
  Contact::findOrFail($id)->delete();

}
}

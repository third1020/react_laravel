<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;
use App\Contact;
use Illuminate\Support\Facades\DB;

class ContactController extends Controller
{
  protected $list;



  public function __construct(Contact $list)
  {
      $this->list = $list;


  }

  public function index()
  {

    $getdata = DB::table('contacts')->get();

    return $getdata->toJson();


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

 public function store(Request $request)
 {

   $validatedData = $request->validate([
     'contact_name' => 'required',
     'contact_phone' => 'required|min:8',
     'contact_email' => 'required',
     'contact_address' => 'required',
     'contact_detail' => 'required',
     'user_id' => 'required',

   ]);

   Contact::create([

     'contact_name' => $validatedData['contact_name'],
     'contact_phone' => $validatedData['contact_phone'],
     'contact_email' => $validatedData['contact_email'],
     'contact_address' => $validatedData['contact_address'],
     'contact_detail' => $validatedData['contact_detail'],
     'user_id' => $validatedData['user_id'],

   ]);
   return response()->json('User created!');

 }

 public function edit($id)
 {
   $listdata = DB::table('contacts')->where('id',$id)->get();

   return $listdata->toJson();
 }


 public function update(Request $request, $id) {


   $validatedData = $request->validate([
     'contact_name' => 'required',
     'contact_phone' => 'required|min:8',
     'contact_email' => 'required',
     'contact_address' => 'required',
     'contact_detail' => 'required',
     'user_id' => 'required',

   ]);


        Contact::findOrFail($id)
            ->update([
              'contact_name' => $validatedData['contact_name'],
              'contact_phone' => $validatedData['contact_phone'],
              'contact_email' => $validatedData['contact_email'],
              'contact_address' => $validatedData['contact_address'],
              'contact_detail' => $validatedData['contact_detail'],
              'user_id' => $validatedData['user_id'],
          ]);





}


 public function destroy($id) {
  Contact::findOrFail($id)->delete();

}
public function destroy_select(Request $request) {

    Contact::destroy($request->foo);


  return response()->json([
     'data' => 'delect successfully',
   ]);

}
}

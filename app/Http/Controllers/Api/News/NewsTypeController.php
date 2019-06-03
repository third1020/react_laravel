<?php

namespace App\Http\Controllers\Api\News;

use Illuminate\Http\Request;
use App\Http\Resources\News_typeResource;
use App\News_type;
use Illuminate\Support\Facades\DB;

class NewsTypeController extends Controller
{
    protected $list;

    public function __construct(News_type $list)
    {
        $this->list = $list;
    }

    public function index()
    {
        $getdata = DB::table('news_types')->get();

        return $getdata->toJson();
    }

    public function getTable(Request $request)
    {
        $wordsearch = $request->search.'%';

        $query = $this->list->where('id', 'like', $wordsearch)
                                                 ->orwhere('type_name', 'like', $wordsearch)

                                                 ->orwhere('created_at', 'like', $wordsearch)
                                                 ->orderBy($request->column, $request->order);

        $list = $query->paginate($request->per_page ?? 5);

        return News_typeResource::collection($list);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
     'type_name' => 'required',
   ]);

        News_type::create([
     'type_name' => $validatedData['type_name'],
   ]);

        return response()->json('User created!');
    }

    public function edit($id)
    {
        $listdata = DB::table('news_types')->where('id', $id)->get();

        return $listdata->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
     'type_name' => 'required',
   ]);

        News_type::findOrFail($id)
            ->update([
            'type_name' => $validatedData['type_name'],
          ]);
    }

    public function destroy($id)
    {
        News_type::findOrFail($id)->delete();
    }

    public function destroy_select(Request $request)
    {
        News_type::destroy($request->foo);

        return response()->json([
      'data' => 'delect successfully',
    ]);
    }
}

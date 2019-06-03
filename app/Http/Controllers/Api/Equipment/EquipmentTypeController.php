<?php

namespace App\Http\Controllers\Api\Equipment;

use Illuminate\Http\Request;
use App\Http\Resources\Equipment_typeResource;
use App\Equipment_type;
use Illuminate\Support\Facades\DB;

class EquipmentTypeController extends Controller
{
    protected $list;

    public function __construct(Equipment_type $list)
    {
        $this->list = $list;
    }

    public function index()
    {
        $getdata = DB::table('equipment_types')->get();

        return $getdata->toJson();
    }

    public function getTable(Request $request)
    {
        $wordsearch = $request->search.'%';

        $query = $this->list->where('id', 'like', $wordsearch)
                                                 ->orwhere('type_name', 'like', $wordsearch)

                                                 ->orderBy($request->column, $request->order);

        $list = $query->paginate($request->per_page ?? 5);

        return Equipment_typeResource::collection($list);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
     'type_name' => 'required',
   ]);

        Equipment_type::create([
     'type_name' => $validatedData['type_name'],
   ]);

        return response()->json('User created!');
    }

    public function edit($id)
    {
        $listdata = DB::table('equipment_types')->where('id', $id)->get();

        return $listdata->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
     'type_name' => 'required',
   ]);

        Equipment_type::findOrFail($id)
            ->update([
            'type_name' => $validatedData['type_name'],
          ]);
    }

    public function destroy($id)
    {
        Equipment_type::findOrFail($id)->delete();
    }

    public function destroy_select(Request $request)
    {
        Equipment_type::destroy($request->foo);

        return response()->json([
     'data' => 'delect successfully',
   ]);
    }
}

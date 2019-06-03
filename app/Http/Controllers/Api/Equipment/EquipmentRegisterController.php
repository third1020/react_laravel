<?php

namespace App\Http\Controllers\Api\Equipment;

use Illuminate\Http\Request;
use App\Http\Resources\Equipment_registerResource;
use App\Equipment_register;
use Illuminate\Support\Facades\DB;

class EquipmentRegisterController extends Controller
{
    protected $list;

    public function __construct(Equipment_register $list)
    {
        $this->list = $list;
    }

    public function index()
    {
        $getdata = DB::table('equipment_registers')->get();

        return $getdata->toJson();
    }

    public function getTable(Request $request)
    {
        $wordsearch = $request->search.'%';

        $query = $this->list->where('id', 'like', $wordsearch)
                                                 ->orwhere('equipment_name', 'like', $wordsearch)
                                                 ->orwhere('equipment_type', 'like', $wordsearch)
                                                 ->orwhere('username', 'like', $wordsearch)
                                                 ->orwhere('department', 'like', $wordsearch)
                                                 ->orwhere('created_at', 'like', $wordsearch)
                                                 ->orderBy($request->column, $request->order);

        $list = $query->paginate($request->per_page ?? 5);

        return Equipment_registerResource::collection($list);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
     'equipment_name' => 'required',
     'equipment_type' => 'required',
     'username' => 'required',
     'department' => 'required',
     'detail' => 'required',
   ]);

        Equipment_register::create([
     'equipment_name' => $validatedData['equipment_name'],
     'equipment_type' => $validatedData['equipment_type'],
     'username' => $validatedData['username'],
     'department' => $validatedData['department'],
     'detail' => $validatedData['detail'],
   ]);

        return response()->json('User created!');
    }

    public function edit($id)
    {
        $listdata = DB::table('equipment_registers')->where('id', $id)->get();

        return $listdata->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
     'equipment_name' => 'required',
     'equipment_type' => 'required',
     'username' => 'required',
     'department' => 'required',
     'detail' => 'required',
   ]);

        Equipment_register::findOrFail($id)
            ->update([
              'equipment_name' => $validatedData['equipment_name'],
              'equipment_type' => $validatedData['equipment_type'],
              'username' => $validatedData['username'],
              'department' => $validatedData['department'],
              'detail' => $validatedData['detail'],
          ]);
    }

    public function destroy($id)
    {
        Equipment_register::findOrFail($id)->delete();
    }

    public function destroy_select(Request $request)
    {
        Equipment_register::destroy($request->foo);

        return response()->json([
     'data' => 'delect successfully',
   ]);
    }
}

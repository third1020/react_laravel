<?php

namespace App\Http\Controllers\Api\Problems;

use Illuminate\Http\Request;
use App\Http\Resources\ProblemsResource;
use App\Problems;
use Illuminate\Support\Facades\DB;

class ProblemsController extends Controller
{
    protected $list;

    public function __construct(Problems $list)
    {
        $this->list = $list;
    }

    public function index()
    {
        $getdata = DB::table('problems')->get();

        return $getdata->toJson();
    }

    public function getTable(Request $request)
    {
        $wordsearch = $request->search.'%';

        $query = $this->list->where('id', 'like', $wordsearch)
                                                 ->orwhere('problems_tital', 'like', $wordsearch)
                                                 ->orwhere('problems_status', 'like', $wordsearch)

                                                 ->orwhere('created_at', 'like', $wordsearch)
                                                 ->orderBy($request->column, $request->order);

        $list = $query->paginate($request->per_page ?? 5);

        return ProblemsResource::collection($list);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
     'problems_tital' => 'required',
     'problems_detail' => 'required',
     'problems_status' => 'required',
     'equipment_id' => 'required',
     'contact_id' => 'required',
     'impact_id' => 'required',
     'priority_id' => 'required',
   ]);

        Problems::create([
     'problems_tital' => $validatedData['problems_tital'],
     'problems_detail' => $validatedData['problems_detail'],
     'problems_status' => $validatedData['problems_status'],
     'equipment_id' => $validatedData['equipment_id'],
     'contact_id' => $validatedData['contact_id'],
     'impact_id' => $validatedData['impact_id'],
     'priority_id' => $validatedData['priority_id'],
   ]);

        return response()->json('User created!');
    }

    public function edit($id)
    {
        $listdata = DB::table('problems')->where('id', $id)->get();

        return $listdata->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
     'problems_tital' => 'required',
     'problems_detail' => 'required',
     'problems_status' => 'required',
     'equipment_id' => 'required',
     'contact_id' => 'required',
     'impact_id' => 'required',
     'priority_id' => 'required',
   ]);

        Problems::findOrFail($id)
            ->update([
              'problems_tital' => $validatedData['problems_tital'],
              'problems_detail' => $validatedData['problems_detail'],
              'problems_status' => $validatedData['problems_status'],
              'equipment_id' => $validatedData['equipment_id'],
              'contact_id' => $validatedData['contact_id'],
              'impact_id' => $validatedData['impact_id'],
              'priority_id' => $validatedData['priority_id'],
          ]);
    }

    public function destroy($id)
    {
        Problems::findOrFail($id)->delete();
    }

    public function destroy_select(Request $request)
    {
        Problems::destroy($request->foo);

        return response()->json([
     'data' => 'delect successfully',
   ]);
    }
}

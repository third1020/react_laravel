<?php

namespace DurianSoftware\Traits;

use Illuminate\Database\Eloquent\Model;
use DurianSoftware\Traits\Uuids;

class Audits extends Model implements \OwenIt\Auditing\Contracts\Audit
{
    use \OwenIt\Auditing\Audit;
    use Uuids;

    /**
     * {@inheritdoc}
     */
    public $primaryKey = 'id';
    public $incrementing = false;
    protected $guarded = [];

    /**
     * {@inheritdoc}
     */
    protected $casts = [
        'old_values'   => 'json',
        'new_values'   => 'json',
    ];

    protected $auditEvents = [
        'created',
        'updated',
        'deleted',
        'restored',
    ];
    public function user()
    {
        return $this->hasOne('DurianSoftware\Models\User', 'id', 'user_id');
    }
}

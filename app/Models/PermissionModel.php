<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Uuids;

class PermissionModel extends Model
{
    use SoftDeletes;


    protected $table = 'permission';
    public $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
            'permission_name',
            'ManageUser',
            'ManageUserView',
            'ManageUserEdit',
            'ManageUserDelete',
            'ManagePermission',
            'ManagePermissionView',
            'ManagePermissionEdit',
            'ManagePermissionDelete',
            'ManageAddress',
            'ManageAddressView',
            'ManageAddressEdit',
            'ManageAddressDelete',
            'ManageCompany',
            'ManageCompanyView',
            'ManageCompanyEdit',
            'ManageCompanyDelete',
            'ManageDepartment',
            'ManageDepartmentView',
            'ManageDepartmentEdit',
            'ManageDepartmentDelete',
            'ManageDistrict',
            'ManageDistrictView',
            'ManageDistrictEdit',
            'ManageDistrictDelete',
            'ManageEquipment',
            'ManageEquipmentView',
            'ManageEquipmentEdit',
            'ManageEquipmentDelete',
            'ManageImage',
            'ManageImageView',
            'ManageImageEdit',
            'ManageImageDelete',
            'ManageImpact',
            'ManageImpactView',
            'ManageImpactEdit',
            'ManageImpactDelete',
            'ManageLocation',
            'ManageLocationView',
            'ManageLocationEdit',
            'ManageLocationDelete',
            'ManageMessage',
            'ManageMessageView',
            'ManageMessageEdit',
            'ManageMessageDelete',
            'ManageModify',
            'ManageModifyView',
            'ManageModifyEdit',
            'ManageModifyDelete',
            'ManageNews',
            'ManageNewsView',
            'ManageNewsEdit',
            'ManageNewsDelete',
            'ManagePersonContact',
            'ManagePersonContactView',
            'ManagePersonContactEdit',
            'ManagePersonContactDelete',
            'ManagePersonResponsible',
            'ManagePersonResponsibleView',
            'ManagePersonResponsibleEdit',
            'ManagePersonResponsibleDelete',
            'ManagePostalCode',
            'ManagePostalCodeView',
            'ManagePostalCodeEdit',
            'ManagePostalCodeDelete',
            'ManagePriority',
            'ManagePriorityView',
            'ManagePriorityEdit',
            'ManagePriorityDelete',
            'ManageProvince',
            'ManageProvinceView',
            'ManageProvinceEdit',
            'ManageProvinceDelete',
            'ManageRequestGeneral',
            'ManageRequestGeneralView',
            'ManageRequestGeneralEdit',
            'ManageRequestGeneralDelete',
            'ManageRequestIssuses',
            'ManageRequestIssusesView',
            'ManageRequestIssusesEdit',
            'ManageRequestIssusesDelete',
            'ManageSettingNews',
            'ManageSettingNewsView',
            'ManageSettingNewsEdit',
            'ManageSettingNewsDelete',
            'Report'
    ];

    protected $softDelete = true;



}

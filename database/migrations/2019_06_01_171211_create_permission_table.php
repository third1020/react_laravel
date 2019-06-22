<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermissionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permission', function (Blueprint $table) {

          $table->bigIncrements('id')->comment('รหัสข้อมูลตาราง');


			$table->string('permission_name')->comment('ชื่อสิทธิ์เข้าใช้')->nullable();

      $table->boolean('ManageUser')->nullable()->default(false);
      $table->boolean('ManageUserView')->nullable()->default(false);
      $table->boolean('ManageUserEdit')->nullable()->default(false);
      $table->boolean('ManageUserDelete')->nullable()->default(false);

      $table->boolean('ManagePermission')->nullable()->default(false);
      $table->boolean('ManagePermissionView')->nullable()->default(false);
      $table->boolean('ManagePermissionEdit')->nullable()->default(false);
      $table->boolean('ManagePermissionDelete')->nullable()->default(false);

      $table->boolean('ManageAddress')->nullable()->default(false);
      $table->boolean('ManageAddressView')->nullable()->default(false);
      $table->boolean('ManageAddressEdit')->nullable()->default(false);
      $table->boolean('ManageAddressDelete')->nullable()->default(false);

      $table->boolean('ManageCompany')->nullable()->default(false);
      $table->boolean('ManageCompanyView')->nullable()->default(false);
      $table->boolean('ManageCompanyEdit')->nullable()->default(false);
      $table->boolean('ManageCompanyDelete')->nullable()->default(false);

      $table->boolean('ManageDepartment')->nullable()->default(false);
      $table->boolean('ManageDepartmentView')->nullable()->default(false);
      $table->boolean('ManageDepartmentEdit')->nullable()->default(false);
      $table->boolean('ManageDepartmentDelete')->nullable()->default(false);

      $table->boolean('ManageDistrict')->nullable()->default(false);
      $table->boolean('ManageDistrictView')->nullable()->default(false);
      $table->boolean('ManageDistrictEdit')->nullable()->default(false);
      $table->boolean('ManageDistrictDelete')->nullable()->default(false);

      $table->boolean('ManageEquipment')->nullable()->default(false);
      $table->boolean('ManageEquipmentView')->nullable()->default(false);
      $table->boolean('ManageEquipmentEdit')->nullable()->default(false);
      $table->boolean('ManageEquipmentDelete')->nullable()->default(false);

      $table->boolean('ManageImage')->nullable()->default(false);
      $table->boolean('ManageImageView')->nullable()->default(false);
      $table->boolean('ManageImageEdit')->nullable()->default(false);
      $table->boolean('ManageImageDelete')->nullable()->default(false);

      $table->boolean('ManageImpact')->nullable()->default(false);
      $table->boolean('ManageImpactView')->nullable()->default(false);
      $table->boolean('ManageImpactEdit')->nullable()->default(false);
      $table->boolean('ManageImpactDelete')->nullable()->default(false);

      $table->boolean('ManageLocation')->nullable()->default(false);
      $table->boolean('ManageLocationView')->nullable()->default(false);
      $table->boolean('ManageLocationEdit')->nullable()->default(false);
      $table->boolean('ManageLocationDelete')->nullable()->default(false);

      $table->boolean('ManageMessage')->nullable()->default(false);
      $table->boolean('ManageMessageView')->nullable()->default(false);
      $table->boolean('ManageMessageEdit')->nullable()->default(false);
      $table->boolean('ManageMessageDelete')->nullable()->default(false);

      $table->boolean('ManageModify')->nullable()->default(false);
      $table->boolean('ManageModifyView')->nullable()->default(false);
      $table->boolean('ManageModifyEdit')->nullable()->default(false);
      $table->boolean('ManageModifyDelete')->nullable()->default(false);

      $table->boolean('ManageNews')->nullable()->default(false);
      $table->boolean('ManageNewsView')->nullable()->default(false);
      $table->boolean('ManageNewsEdit')->nullable()->default(false);
      $table->boolean('ManageNewsDelete')->nullable()->default(false);

      $table->boolean('ManagePersonContact')->nullable()->default(false);
      $table->boolean('ManagePersonContactView')->nullable()->default(false);
      $table->boolean('ManagePersonContactEdit')->nullable()->default(false);
      $table->boolean('ManagePersonContactDelete')->nullable()->default(false);

      $table->boolean('ManagePersonResponsible')->nullable()->default(false);
      $table->boolean('ManagePersonResponsibleView')->nullable()->default(false);
      $table->boolean('ManagePersonResponsibleEdit')->nullable()->default(false);
      $table->boolean('ManagePersonResponsibleDelete')->nullable()->default(false);

      $table->boolean('ManagePostalCode')->nullable()->default(false);
      $table->boolean('ManagePostalCodeView')->nullable()->default(false);
      $table->boolean('ManagePostalCodeEdit')->nullable()->default(false);
      $table->boolean('ManagePostalCodeDelete')->nullable()->default(false);

      $table->boolean('ManagePriority')->nullable()->default(false);
      $table->boolean('ManagePriorityView')->nullable()->default(false);
      $table->boolean('ManagePriorityEdit')->nullable()->default(false);
      $table->boolean('ManagePriorityDelete')->nullable()->default(false);

      $table->boolean('ManageProvince')->nullable()->default(false);
      $table->boolean('ManageProvinceView')->nullable()->default(false);
      $table->boolean('ManageProvinceEdit')->nullable()->default(false);
      $table->boolean('ManageProvinceDelete')->nullable()->default(false);

      $table->boolean('ManageRequestGeneral')->nullable()->default(false);
      $table->boolean('ManageRequestGeneralView')->nullable()->default(false);
      $table->boolean('ManageRequestGeneralEdit')->nullable()->default(false);
      $table->boolean('ManageRequestGeneralDelete')->nullable()->default(false);

      $table->boolean('ManageRequestIssuses')->nullable()->default(false);
      $table->boolean('ManageRequestIssusesView')->nullable()->default(false);
      $table->boolean('ManageRequestIssusesEdit')->nullable()->default(false);
      $table->boolean('ManageRequestIssusesDelete')->nullable()->default(false);

      $table->boolean('ManageSettingNews')->nullable()->default(false);
      $table->boolean('ManageSettingNewsView')->nullable()->default(false);
      $table->boolean('ManageSettingNewsEdit')->nullable()->default(false);
      $table->boolean('ManageSettingNewsDelete')->nullable()->default(false);

      $table->boolean('Report')->nullable()->default(false);



			$table->timestamps();
			$table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dim_permission');
    }
}

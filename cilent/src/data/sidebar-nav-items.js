export default function() {
    var permission = [
        'ManageUser',
        'ManagePermission',
        'ManagePersonContact',
        'ManagePersonResponsible',

        'ManageAddress',
        'ManageCompany',
        'ManageDepartment',
        'ManageProvince',
        'ManageDistrict',
        'ManagePostalCode',
        'ManageLocation',

        'ManageEquipment',

        'ManageRequestGeneral',
        'ManageRequestIssuses',

        'ManageNews',
        'ManageSettingNews',

        'ManageImage',

        'ManageMessage',

        'ManageModify',

        'ManagePriority',
        'ManageImpact',

        'Report'
    ];

    var array = [
        {
            title: 'Blog Dashboard',
            to: '/blog-overview',
            htmlBefore: '<i class="material-icons">edit</i>',
            htmlAfter: ''
        }
    ];

    permission.map(item => {
        if (sessionStorage[item] == '1') {
            array.push({
                title: item,
                htmlBefore: '<i class="material-icons">table_chart</i>',
                to: '/' + item
            });
        }
    });

    return array;
}

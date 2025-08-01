export default {
    bodyIteratorField: 'Results',
    dependencies: ['dataExtension'],
    dependencyGraph: null,
    filter: {},
    hasExtended: false,
    idField: 'ObjectID',
    keyIsFixed: true, // renamed via name_new on dataExtension update
    keyField: 'CustomerKey',
    nameField: 'Name',
    restPagination: false,
    type: 'dataExtensionField',
    typeDescription: 'Internal Type: Fields for type dataExtension.',
    typeRetrieveByDefault: false,
    typeCdpByDefault: false,
    typeName: 'Data Extension Field',
    deleteSynchronously: true, // should be run one at a time to allow asking for permission to mass-delete if *.fieldname is used
    fields: {
        'Client.ID': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        CreatedDate: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        CustomerKey: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        'DataExtension.CustomerKey': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: true,
            template: true,
        },
        'DataExtension.PartnerKey': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        'DataExtension.ObjectID': {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        DefaultValue: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        FieldType: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        IsPrimaryKey: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        IsRequired: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        MaxLength: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        ModifiedDate: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        Name: {
            isCreateable: true,
            isUpdateable: true,
            retrieving: true,
            template: true,
        },
        ObjectID: {
            isCreateable: false,
            isUpdateable: true,
            retrieving: false,
            template: false,
        },
        Ordinal: {
            isCreateable: true,
            isUpdateable: true, // Ignored on update for existing fields but respected for the order of amended new fields. to re-order existing fields, delete DE on target & recreate
            retrieving: true,
            template: true,
        },
        PartnerKey: {
            isCreateable: false,
            isUpdateable: false,
            retrieving: false,
            template: false,
        },
        Scale: {
            isCreateable: true,
            isUpdateable: true, // Doesnt work for decimal field updates
            retrieving: true,
            template: true,
        },
    },
};

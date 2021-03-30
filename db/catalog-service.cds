using {ZAPI_RETURN_WP as external} from '../srv/external/ZAPI_RETURN_WP.csn';

service CatalogService {

    @readonly
    entity ZAPI_RETURN_WP as projection on external.ZC_RETRUNWORK_WP {
    key DocRelationshipUUID,
    key SubsequentDocument,
    key SubsequentDocumentItem,
        SubsequentDocumentCategory,
        BillingDocument,
        BillingDocumentItem,
        Material,
        MaterialName,
        Customer
    };

}
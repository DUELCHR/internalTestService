using {metadata.ZEW_ODOSet as external} from '../srv/external/metadata.csn';

service CatalogService @(requires:'authenticated-user') {

    @readonly
    entity ZEW_ODOSet as projection on external{
       OrderNo,
       Itemno

    };


}
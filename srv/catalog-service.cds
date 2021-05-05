using {metadata.ZEW_ODOSet as external} from '../srv/external/metadata.csn';

service CatalogService {

    @readonly
    entity ZEW_ODOSet as projection on external{
       OrderNo,
       Itemno

    };


}
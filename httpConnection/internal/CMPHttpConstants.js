/* jshint esversion: 6 */

const KContentType = "Content-Type";

const ContentTypeEnum =
{

    KApplicationJson    : 1,
    KXXXUrlEncoded      : 2,
    KMultipartFormData  : 3,
    KByteArrayData      : 4,
    

};

const HttpMethod =
{

    get     : "GET",
    post    : "POST",
    put     : "PUT",
    patch   : "PATCH",
    delete  : "DELETE"    

};

class CMPHttpConstants
{
    
    static get ContentType()        { return KContentType; }
    static get ContentTypeEnum()    { return ContentTypeEnum; }
    static get HttpMethod()         { return HttpMethod; }
    
    
}

module.exports = CMPHttpConstants;

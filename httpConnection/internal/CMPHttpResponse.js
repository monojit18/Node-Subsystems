/* jshint esversion: 6 */

class CMPHttpResponse
{
    
    constructor(responseBody, response, error)
    {
        
        let _self = this;
        _self.statusCode = (response !== null) ? response.statusCode : -1;        
        _self.headers = response.headers;
        _self.error = error;
        
        let typeString = typeof responseBody;
        _self.responseBody = (typeString === "string") ? 
                            JSON.parse(responseBody) : responseBody;
        
    }
    
}

module.exports = CMPHttpResponse;
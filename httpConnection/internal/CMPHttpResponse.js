/* jshint esversion: 6 */

class CMPHttpResponse
{
    
    constructor(responseBody, response, error)
    {
        
        let _self = this;
        _self.statusCode = (response !== null) ? response.statusCode : -1;        
        _self.headers = response.headers;
        _self.error = error;

        try
        {

            _self.responseBody = JSON.parse(responseBody);

        }
        catch(exception)
        {

            _self.responseBody = responseBody;

        }
        
    }
    
}

module.exports = CMPHttpResponse;
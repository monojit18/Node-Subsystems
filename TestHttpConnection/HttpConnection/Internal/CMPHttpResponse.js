class CMPHttpResponse
{
    
    constructor(response, statusCode, statusMessageString)
    {
        
        let _self = this;
        
        _self.response = response;
        _self.statusCode = statusCode;
        _self.statusMessageString = statusMessageString;
        
    }
    
}

module.exports = CMPHttpResponse;
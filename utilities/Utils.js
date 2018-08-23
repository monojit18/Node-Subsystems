/*jshint esversion: 6 */

const FileSystemModule = require("fs");
const PathModule = require("path");
const kUTF8String = "utf8";

function Utils(){}

Utils.readDataFile = function(filePathString)
{
        
    const resolvedFilePathString = PathModule.join(__dirname, "..", filePathString);
    console.log(resolvedFilePathString);
    const fileDataRef = FileSystemModule.readFileSync(resolvedFilePathString, kUTF8String);
    return fileDataRef;
    
};

Utils.isValidDictionary = function(dictionaryRef)
{
  
    return ((dictionaryRef !== null) && (dictionaryRef !== undefined));
    
};

Utils.isValidNonEmptyDictionary = function(dictionaryRef)
{
  
    const isValid = Utils.isValidDictionary(dictionaryRef);
    if (isValid === false)
        return false;
    
    return ((isValid === true) && (Object.keys(dictionaryRef).length > 0));
        
};

Utils.isValidArray = function(arrayRef)
{
  
    if (Array.isArray(arrayRef) === false)
        return false;
    
    return ((arrayRef !== null) && (arrayRef !== undefined));
        
};

Utils.isValidNonEmptyArray = function(arrayRef)
{
    
    const isValid = Utils.isValidArray(arrayRef);
    if (isValid === false)
        return false;
    
    return ((isValid === true) && (arrayRef.length > 0));
        
};

Utils.isNullOrEmptyString = function(stringRef)
{
  
    if ((stringRef === null) || (stringRef === undefined) || (stringRef.length === 0))
        return true;
    
    return false;
        
};

Utils.getEnvironmentDetails = function(environmentsArray, selectedEnvironmentString)
{
  
    if (Utils.isValidNonEmptyArray(environmentsArray) === false)
        return null;
    
    if (Utils.isNullOrEmptyString(selectedEnvironmentString) === true)
        return null;
    
    const index = 0;
    for (let index = 0;index < environmentsArray.length;++index)
    {
        
        const environmentInfo = environmentsArray[index];
        if (environmentInfo.Environment === selectedEnvironmentString)
            return environmentInfo;

    }
    
    return null;
    
    
};

Utils.getErrorWarningDetails = function(errorWarningsArray, errorWarningCodeString)
{
  
    if (Utils.isValidNonEmptyArray(errorWarningsArray) === false)
        return null;
    
    if (Utils.isNullOrEmptyString(errorWarningCodeString) === true)
        return null;
    
    const index = 0;
    for (let index = 0;index < errorWarningsArray.length;++index)
    {
        
        const errorWarningInfo = errorWarningsArray[index];
        if (errorWarningInfo.Code === errorWarningCodeString)
            return errorWarningInfo;

    }
    
    return null;
    
    
};

Utils.processLatLng = function(latlngString)
{
    
    if (Utils.isNullOrEmptyString(latlngString) === true)
        return null;
    
    const latlngArray = latlngString.split(",");   
    const latlng = {};
    latlng.latitude = latlngArray[0];
    latlng.longitude = latlngArray[1];
    return latlng;
    
    
};

String.prototype.format = function()
{
    
    let self = this;
    for (let number in arguments)
        self = self.replace("{" + number + "}", arguments[number]);
  
    return self;
    
};

module.exports = Utils;


/*jshint esversion: 6 */

const CMPLUISBinder = require("./CMPLUISBinder");
const CMPLUISConstants = require("./CMPLUISConstants");
const HttpConnectionRef = require("../node_modules/https_connection_binder");
const Utils = require("./Utils");
// const Utils = require("../node_modules/utility_helper");

class CMPLUISEntityBinder extends CMPLUISBinder
{
    
    constructor(subscriptionKeyString, regionKeyString)
    {

        super(subscriptionKeyString, regionKeyString);
        const _self = this;

        this.performGetEntityAsync = (appConfigInfo, entityIdString,
                                        responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntity:
                {

                    urlString = CMPLUISConstants.LUISURLs.KEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);

                }                                
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntity:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KCompositeEntity
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntity:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KListEntity
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntity:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KHierarchialEntity
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntity:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KCompositeEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KListEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRoles:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;
                    
            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performGetAsync);
            
        };

        this.performGetAllEntitiesAsync = (appConfigInfo, skipLimitString,
                                            takeLimitString,
                                            responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KGetEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KGetEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString); 

                }
                    break;

                case CMPLUISConstants.EntityOptions.KGetHierarchialEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KGetHierarchialEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);                    

                }
                    break;
    
            }

            if (Utils.isNullOrEmptyString(skipLimitString) === false)
                urlString = urlString.format(skipLimitString);

            if (Utils.isNullOrEmptyString(takeLimitString) === false)
                urlString = urlString.format(takeLimitString);   

            _self.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performGetAsync);
            
        };

        this.performGetEntityRoleAsync = (appConfigInfo, entityIdString,
                                            roleIdString, responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(roleIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntityRole:
                {

                    urlString = CMPLUISConstants.LUISURLs.KEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);

                }                                
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntityRole:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRole
                                                                        .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString,
                                                                        roleIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRole:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KListEntityRole
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString,
                                                                        roleIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntityRole:
                    {
        
                        urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRole
                                                                .format(_self
                                                                        .regionKeyString,
                                                                        appConfigInfo
                                                                        .appIdString,
                                                                        appConfigInfo
                                                                        .versionIdString,
                                                                        entityIdString,
                                                                        roleIdString);
        
                    }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRole:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(null,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performGetAsync);
            
        };

        this.performCreateEntityAsync = (appConfigInfo, requestBody,
                                            responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);

                }                                
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KListEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KRegExEntities:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KPreBuiltEntitiesList:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KPreBuiltEntitiesList
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KPreBuiltDomain:
                {
    
                    urlString = CMPLUISConstants.LUISURLs.KPreBuiltDomain
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performPostAsync);
            
        };

        this.performCreateChildEntityAsync = (appConfigInfo, entityIdString,
                                                requestBody, responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }
            
            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KCompositeChildEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KCompositeChildEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);

                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialChildEntities:
                {

                    urlString = CMPLUISConstants.LUISURLs.KHierarchialChildEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);

                }
                    break;

                case CMPLUISConstants.EntityOptions.KSubListEntities:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KSubListEntities
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performPostAsync);
            
        };

        this.performCreateEntityRoleAsync = (appConfigInfo, entityIdString,
                                                requestBody, responseCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;
    
            }

            if (Utils.isValidNonEmptyDictionary(requestBody) === false)
            {

                _self.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KListEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KHierarchialEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRoles:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRoles
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

            }

            _self.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            _self.performHttpAsync(responseCallback, _self.performPostAsync);
            
        };

        this.performModifyEntityAsync = (appConfigInfo, entityIdString,
                                            requestBody, responseCallback,
                                            entityCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if ((entityCallback === null) || (entityCallback === undefined))
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KListEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString);
    
                }
                    break;

            }

            this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody, urlString);
            this.performHttpAsync(responseCallback, entityCallback);
            
        };

        this.performModifyChildEntityAsync = (appConfigInfo, entityIdString,
                                                childIdString, requestBody,
                                                responseCallback,
                                                entityCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(childIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if ((entityCallback === null) || (entityCallback === undefined))
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KCompositeChildEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeChildEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    childIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KHierarchialChildEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialChildEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    childIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KSubListEntity:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KSubListEntity
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    childIdString);
    
                }
                    break;

            }

            this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            this.performHttpAsync(responseCallback, entityCallback);
            
        };

        this.performModifyEntityRoleAsync = (appConfigInfo, entityIdString,
                                                roleIdString, requestBody,
                                                responseCallback,
                                                entityCallback) =>
        {
            
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if (Utils.isNullOrEmptyString(roleIdString) === true)
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            if ((entityCallback === null) || (entityCallback === undefined))
            {

                this.processArgumentNullErrorResponse(responseCallback);
                return;

            }

            let urlString = "";
            let entityOption = appConfigInfo.entityOption;
            switch(entityOption)
            {

                case CMPLUISConstants.EntityOptions.KEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KCompositeEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KCompositeEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KListEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KListEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;
                
                case CMPLUISConstants.EntityOptions.KHierarchialEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KHierarchialEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                    break;

                case CMPLUISConstants.EntityOptions.KRegExEntityRole:
                {
        
                    urlString = CMPLUISConstants.LUISURLs.KRegExEntityRole
                                                            .format(_self
                                                                    .regionKeyString,
                                                                    appConfigInfo
                                                                    .appIdString,
                                                                    appConfigInfo
                                                                    .versionIdString,
                                                                    entityIdString,
                                                                    roleIdString);
    
                }
                        break;

            }

            this.httpsClientProxy = this.prepareJSONHttpConnection(requestBody,
                                                                    urlString);
            this.performHttpAsync(responseCallback, entityCallback);
            
        };

    }

    createEntityAsync(appConfigInfo, requestBody, responseCallback)
    {
        
        this.performCreateEntityAsync(appConfigInfo, requestBody, responseCallback);
        
    }

    updateEntityAsync(appConfigInfo, entityIdString, requestBody,
                        responseCallback)
    {
        
        this.performModifyEntityAsync(appConfigInfo, entityIdString,
                                        requestBody, responseCallback,
                                        this.performPutAsync);
        
    }

    deleteEntityAsync(appConfigInfo, entityIdString, responseCallback)
    {
        
        this.performModifyEntityAsync(appConfigInfo, entityIdString,
                                        null, responseCallback,
                                        this.performDeleteAsync);
        
    }

    createChildEntityAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {
        
        this.performCreateChildEntityAsync(appConfigInfo, entityIdString,
                                            requestBody, responseCallback);
        
    }

    updateChildEntityAsync(appConfigInfo, entityIdString,
                            childIdString, requestBody, responseCallback)
    {
        
        this.performModifyChildEntityAsync(appConfigInfo, entityIdString,
                                            childIdString, requestBody,
                                            responseCallback, this.performPutAsync);
        
    }

    deleteChildEntityAsync(appConfigInfo, entityIdString, childIdString,
                            responseCallback)
    {
        
        this.performModifyChildEntityAsync(appConfigInfo, entityIdString,
                                            childIdString, null, responseCallback,
                                            this.performDeleteAsync);

    }

    createEntityRoleAsync(appConfigInfo, entityIdString, requestBody,
                            responseCallback)
    {
        
        this.performCreateEntityRoleAsync(appConfigInfo, entityIdString,
                                            requestBody, responseCallback);
    }

    updateEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            requestBody, responseCallback)
    {
        
        this.performModifyEntityRoleAsync(appConfigInfo, entityIdString,
                                            roleIdString, requestBody,
                                            responseCallback,
                                            this.performPutAsync);
        
    }

    deleteEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                            responseCallback)
    {
        
        this.performModifyEntityRoleAsync(appConfigInfo, entityIdString,
                                            roleIdString, responseCallback,
                                            this.performDeleteAsync);
        
    }

    getEntityAsync(appConfigInfo, entityIdString, requestBody, responseCallback)
    {
        
        this.performGetEntityAsync(appConfigInfo, entityIdString,
                                    requestBody, responseCallback);
        
    }

    getAllEntitiesAsync(appConfigInfo, skipLimitString, takeLimitString,
                        requestBody, responseCallback)
    {
        
        this.performGetAllEntitiesAsync(appConfigInfo, skipLimitString,
                                        takeLimitString, requestBody,
                                        responseCallback);
        
    }

    getHierarchialEntityAsync(appConfigInfo, entityIdString, requestBody,
                                responseCallback)
    {
        
        this.performGetEntityAsync(appConfigInfo, entityIdString,
                                    requestBody, responseCallback);
        
    }

    getAllHierarchialEntitiesAsync(appConfigInfo, skipLimitString, takeLimitString,
                                    requestBody, responseCallback)
    {
        
        this.performGetAllEntitiesAsync(appConfigInfo, skipLimitString,
                                        takeLimitString, requestBody,
                                        responseCallback);
        
    }

    getEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                        requestBody, responseCallback)
    {
        
        this.performGetEntityRoleAsync(appConfigInfo, entityIdString, roleIdString,
                                        requestBody, responseCallback);
        
    }
}

module.exports = CMPLUISEntityBinder;
# LUISBinder
A component for binding with Azure LUIS APIs

## Exposed Classe(s)
CMPLUISBinderProxy
This is the interface exposed to the outside world

## Exposed Methods
All are Async calls

- getAllIntentsAsync

Returns All Intents

- getPatternsAsync

Returns All Patterns

- getIntentPatternsAsync

Returns Patterns for an Intent

- getTrainStatusAsync

Returns status of a Train operation

- reviewExamplesAsync

Returns list of Predictions and Label pairs for every example in the application

- createEntityAsync

Creates an Entity in the application

- updateEntityAsync

Updates an existing Entity in the application

- deleteEntityAsync

Deletes an existing Entity from the application

- createChildEntityAsync

Creates a child Entity for an existing Entity in the application

- updateChildEntityAsync

Updates an existing child Entity for an existing Entity in the application

- deleteChildEntityAsync

Deletes a child Entity from an existing Entity in the application

- createEntityRoleAsync

Creates a Role for an existing Entity in the application

- updateEntityRoleAsync

Updates an existing Role for an existing Entity in the application

- deleteEntityRoleAsync

Deletes an existing Role from an existing Entity in the application

- createIntentAsync

Creates an Intent in the application

- updateIntentAsync

Updates an existing Intent in the application

- deleteIntentAsync

Deletes an existing Intent from the application

- getEntityAsync

Returns details of an existing Entity in the application

- getAllEntitiesAsync

Returns all Entities in the application

- getHierarchialEntityAsync

Returns details of an existing hierarchial Entity in the application

- getAllHierarchialEntitiesAsync

Returns all hierarchial Entities in the application

- getEntityRoleAsync

Returns details of Role for an existing Entity in the application

- getIntentAsync

Returns details of an existing Intent in the application

- addLabelsAsync

Adds Labels in the application

- deleteLabelAsync

Deletes Labels from the application

- updatePatternsAsync

Updates existing Pattern(s) in the application

- addPatternsAsync

Adds Pattern(s) in the application

- deletePatternsAsync

Deletes Pattern(s) from the application

- trainApplicationAsync

Trains an Application

- getPredictionsAsync

Returns Predictions in the application
# react-finance
Simple stock tracker written using basic react/redux

This project was written from scratch starting with the create-react-app package. The goal of the project was to simuluate a stock portfolio similar to Google Finance using the real-time stock quoting API offered by Alphavantage.

## Testing

Testing for this app was written using the combination of Jest-Jasmine-Enzyme. Though it made sense to test the action-creators, components, containers and reducers, the nature of testing sagas seemed to mimic the exact code within the saga itself. Thus the declaritive nature of sagas was not tested. Will have further explore testing of sagas on future interations. 

Run tests by typing `npm test`

## Running Application 

Clone repository and then run `npm start`

## TODO
1. Still need to complete API calls for the table list view.
2. Current API does not provide name of stock. Still researching a proper symbol to name API.
3. Need to provide a persistance layer since state does not persist after page refresh 
4. Further styling.


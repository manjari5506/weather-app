# weather-app
This project is about building a web application to show current weather data using weather API from external services Open weather map. Here you will be able to search for a specific location in the world and also it will automatically detect your current location and will display all the related weather details.

It contains some cool features like save the weather data in redux-store and session-storage to reduce the dependency of network requests, search weather data according to city, fetch your current location, sync data to get the latest updated details of the current weather, toast notification for every action.

To use the app, type a name of the city and click on 'Search' or on 'Get Your Location' button, every time you click on the button first it will check if the data is available in the session storage or not, and if not then it will send a network request else it will take the data from session-storage.

# Live app link
https://guileless-bonbon-74d7b5.netlify.app/

////text box

var text= document.createElement("INPUT");
text.setAttribute("type","text");


//// add api for link 5 dayforcast

    /////////

    //const api_url = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=51241d70f9864f731416c8455e0e7870"
    
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=51241d70f9864f731416c8455e0e7870&contentType=json", {
        method: 'GET', 
        headers: {
       
        },
                 
      }).then(response => {
        if (!response.ok) {
          throw response; //check the http response code and if isn't ok then throw the response as an error
        }
                  
        return response.json(); //parse the result as JSON
      
      }).then(response => {
        //response now contains parsed JSON ready for use
        processWeatherData(response);
      
      }).catch((errorResponse) => {
        if (errorResponse.text) { //additional error information
          errorResponse.text().then( errorMessage => {
            //errorMessage now returns the response body which includes the full error message
          })
        } else {
          //no additional error information 
        } 
      });
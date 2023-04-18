
//const api_url = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=51241d70f9864f731416c8455e0e7870"
//fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=51241d70f9864f731416c8455e0e7870", {
//fetch ("http://api.openweathermap.org/geo/1.0/direct?q={bloomington},{state code},{country code}&limit={limit}&appid=API51241d70f9864f731416c8455e0e7870 key")
// location     http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}



//function myFunction() {
//  document.getElementById("mytext").Search();

//};
//fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=51241d70f9864f731416c8455e0e7870')
//.then (res => res.json())
//.then(data =>console.log(data))


//fetch ('http://api.openweathermap.org/geo/1.0/direct?q=bloomington&limit=1&appid=51241d70f9864f731416c8455e0e7870')
//.then (res => res.json())
//.then(data =>console.log(data))



let weather = {
  "apiKey": "51241d70f9864f731416c8455e0e7870",
  fetchLonLat: function (city) {
    fetch(
      'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        console.log({ data })
        this.fetchWeather(data[0].lon, data[0].lat)
        ///-------------------------------
        localStorage.setItem('name', 'data');
        console.log(data)
        let myName = localStorage.getItem('data');
        data;
        var clickMeButton= document.createElement('button')
        clickMeButton.id ='myButton'
        clickMeButton.innerHTML=(city);///////
        document.body.appendChild(clickMeButton)
        if (myButton.onclick = showAlert);
        function showAlert(event){
          console.log(city);
        }

        //--------------------------------
      });

  },
  fetchWeather: function (lon, lat) {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=" + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));

  },


  displayWeather: function (data) {
    const { name } = data;
    console.log(data);

    console.log("Today's weather is:");
    city1 = data.city.name
    console.log(city1)
    todaysTemp = data.list[1].main.temp
    todaysWeatherCondition = data.list[1].weather[0].main
    wind = data.list[1].wind.speed /// this line
    humid = data.list[1].main.humidity;


    city1 = data.city.name
    
    todaysTemp1 = data.list[2].main.temp
    todaysWeatherCondition1 = data.list[2].weather[0].main
    wind1 = data.list[2].wind.speed /// this line
    humid1 = data.list[2].main.humidity;


    ///
    city2 = data.city.name
    
    todaysTemp2 = data.list[10].main.temp
    todaysWeatherCondition2 = data.list[10].weather[0].main
    wind2 = data.list[10].wind.speed /// this line
    humid2 = data.list[10].main.humidity;

    ////

    city3 = data.city.name
    console.log(city1)
    todaysTemp3 = data.list[18].main.temp
    todaysWeatherCondition3 = data.list[18].weather[0].main
    wind3 = data.list[18].wind.speed /// this line
    humid3 = data.list[18].main.humidity;
  

    city4 = data.city.name
    
    todaysTemp4 = data.list[25].main.temp
    todaysWeatherCondition4 = data.list[25].weather[0].main
    wind4 = data.list[25].wind.speed /// this line
    humid4 = data.list[25].main.humidity;
 

    city5 = data.city.name
    console.log(city1)
    todaysTemp5 = data.list[33].main.temp
    todaysWeatherCondition5 = data.list[33].weather[0].main
    wind5 = data.list[33].wind.speed /// this line
    humid5 = data.list[33].main.humidity;
    console.log(todaysTemp);
    console.log(todaysWeatherCondition);
    console.log("todays wind speed" + wind)


    document.querySelector(".city").innerText = "City:  " + (city1);
    document.querySelector(".weather").innerText = "Temp:  " + (todaysTemp);
    document.querySelector(".wind").innerText = "Wind Speed:  " + (wind)
    document.querySelector(".humid").innerText = "Humidity:  " + (humid);
    document.querySelector(".current").innerText = "Current Weather  ";
    document.querySelector(".weather").innerText = (todaysTemp);
    //
    document.querySelector(".city1").innerText = "City:  " + (city1);
    document.querySelector(".weather1").innerText = "Temp:  " + (todaysTemp1);
    document.querySelector(".wind1").innerText = "Wind Speed:  " + (wind1)
    document.querySelector(".humid1").innerText = "Humidity:  " + (humid1);
    document.querySelector(".current1").innerText = "Day 1  ";
    document.querySelector(".weather").innerText = (todaysTemp);
    //
    document.querySelector(".city2").innerText = "City:  " + (city2);
    document.querySelector(".weather2").innerText = "Temp:  " + (todaysTemp2);
    document.querySelector(".wind2").innerText = "Wind Speed:  " + (wind2)
    document.querySelector(".humid2").innerText = "Humidity:  " + (humid2);
    document.querySelector(".current2").innerText = "Day 2 ";
    //
    document.querySelector(".city3").innerText = "City:  " + (city3);
    document.querySelector(".weather3").innerText = "Temp:  " + (todaysTemp3);
    document.querySelector(".wind3").innerText = "Wind Speed:  " + (wind3)
    document.querySelector(".humid3").innerText = "Humidity:  " + (humid3);
    document.querySelector(".current3").innerText = "Day 3 ";
    //
    document.querySelector(".city4").innerText = "City:  " + (city4);
    document.querySelector(".weather4").innerText = "Temp:  " + (todaysTemp4);
    document.querySelector(".wind4").innerText = "Wind Speed:  " + (wind4)
    document.querySelector(".humid4").innerText = "Humidity:  " + (humid4);
    document.querySelector(".current4").innerText = "Day 4 ";
    //
    document.querySelector(".city5").innerText = "City:  " + (city5);
    document.querySelector(".weather5").innerText = "Temp:  " + (todaysTemp5);
    document.querySelector(".wind5").innerText = "Wind Speed:  " + (wind5)
    document.querySelector(".humid5").innerText = "Humidity:  " + (humid5);
    document.querySelector(".current5").innerText = "Day 5 ";
  },

  search: function () {
    this.fetchLonLat(document.querySelector(".text").value);
  }
};


document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
// document.querySelector(".search button").addEventListener("click", function (event) {
//   if (event.key === "Enter") {
//     weather.search();
//   }
// }
// );



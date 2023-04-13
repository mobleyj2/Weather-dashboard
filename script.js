
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


let weather ={
    "apiKey": "51241d70f9864f731416c8455e0e7870",
fetchWeather: function(city){
fetch(
    'http://api.openweathermap.org/geo/1.0/direct?q=' + city +'&limit=1&appid='+ this.apiKey
)
.then((response)=> response.json())
.then((data)=>this.displayWeather(data));

},
  displayWeather: function(data){
const {name} = data;
const {description}= data.weather[0];
const {temp, humidity} = data.main;
console.log(name,description,temp,humidity)
document.querySelector(". city").innerText = "Weather in " + name;
document.querySelector(". description").innerText = description
document.querySelector(". temp").innerText = temp;
document.querySelector(". humidity ").innerText = humidity+ "%";

  },
  search: function(){
this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click",function(){
weather.search();
});
document.querySelector(".search button").addEventListener("click",function(event){
if (event.key == "Enter"){
    weather.search();
}
}
);
weather.fetchWeather("Denver"); 
const ApiK="ec1392500f31152efe4b2c1eadb82ca6";
const ApiU="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srch = document.querySelector(".search input");
const srchB = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".w-icon");

console.log(srch.value);

async function checkW(city){
  const response = await fetch(ApiU + city + `&appid=${ApiK}`);

  if(response.status == 404){
    document.querySelector(".err").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
    
  else{
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png";
      document.querySelector(".container").style.background = "linear-gradient(135deg, #0077b6, #e9ecef)";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear.png";
      document.querySelector(".container").style.background = "linear-gradient(135deg, #0096c7,#e9ecef)";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png";
      document.querySelector(".container").style.background = "linear-gradient(135deg, #343a40, #e9ecef)";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
      document.querySelector(".container").style.background = "linear-gradient(135deg, #adb5bd, #a9d6e5)";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png";
      document.querySelector(".container").style.background = "linear-gradient(135deg, #48cae4, #e9ecef)";
    }

    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".err").style.display = "none";
  }
}

srchB.addEventListener("click", ()=>{
  checkW(srch.value);
})

srch.addEventListener("keypress", function(e){
  if(e.key == "Enter"){
    checkW(srch.value);
  }
})

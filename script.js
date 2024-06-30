const apikey ="8a60fa8a863c0182ff0828bfe362ca31";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchbox = document.querySelector(".search input") ;
const searchbtn = document.querySelector(".search button") ;
const wtimage  = document.querySelector(".Wheatericon");

async function cheakwheather(city){
    const responce = await fetch(apiurl +"&q="+city+ `&appid=${apikey}`);
    

    if(responce.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".Weather").style.display="none";
    }

    else{
    var data =  await responce.json();
    console.log(data);
 
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";

if(data.weather[0].main=="Clouds"){
    wtimage.src = "clouds.png";
}
else if(data.weather[0].main=="Rain"){
    wtimage.src = "rain.png";
}
else if(data.weather[0].main=="Haze"){
    wtimage.src = "haze.png";
}
else if(data.weather[0].main=="Mist"){
    wtimage.src = "mist.png";
}
else if(data.weather[0].main=="Snow"){
    wtimage.src = "snow.png";
}
else if(data.weather[0].main=="Drizzle"){
    wtimage.src = "drizzle.png";
}

document.querySelector(".Weather").style.display="block";
document.querySelector(".error").style.display="none";
}}

searchbtn.addEventListener("click" , ()=>{;
    cheakwheather(searchbox.value);
})


 
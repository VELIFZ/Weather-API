
function getData() {
    let city = document.querySelector('#city').value;
    //const API_KEY = '';
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f628866358be722e72afa5f6680078b`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        // icon
        let icon = data['weather'][0]['icon'];
        document.querySelector('#icon').innerHTML=`<img src="${icon}@2x.png">`;

        // city name
        let cityname = data['name'];
        let country= data['sys']['country'];
        document.querySelector('#cityname').innerHTML=(`${cityname}, ${country}`);
        // card basligi
        document.querySelector('#baslik').innerHTML=(`Weather in ${cityname}`);
        console.log(cityname)
        // current date
        var today = new Date();
        var currentDate = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
        document.querySelector('#date').innerHTML=currentDate;

        // description
        let desc = data['weather'][0]['description'];
        document.querySelector('#descr').innerHTML=desc;
        // temp
        let temp = Math.round(((data['main']['temp']-273.15)*1.8+32));
        document.querySelector('#temp').innerHTML=`${temp}°F`;
        // feels_like
        let feels = data['main']['tfeels_like'];
        document.querySelector('#feels').innerHTML=feels;
        // Humidity
        let humi = data['main']['humidity'];
        document.querySelector('#humi').innerHTML=`${humi}%`;
        // wind
        let wind = data['wind']['speed'];
        document.querySelector('#wind').innerHTML=`${wind} mph`;
        // Max-Temp
        let max_temp = Math.round(((data['main']['temp_max']-273.15)*1.8+32));
        document.querySelector('#max_temp').innerHTML=`${max_temp}°F`;
        // Min-Temp
        let min_temp = Math.round(((data['main']['temp_min']-273.15)*1.8+32));
        document.querySelector('#min_temp').innerHTML=`${min_temp}°F`;
    })
}

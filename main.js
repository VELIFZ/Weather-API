// 1 ilk once mutlaka api'yin calisip calismadigina bak

let getWeatherData = async (city) => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f628866358be722e72afa5f6680078b`)
    let data = await response.json()
    //console.log(data)
    return await data
}

//getWeatherData()

// 2 aldigin datayi goster eventlistener ile baglayarak 
    // ayni zamanda bu adimda html sayfasina yuklemek istedikelerini olustuyorsun. table,card gibi

let loadWeatherData = async (city) => {
    let data = await getWeatherData(city);
    console.log(data);

    // html'deki degisiklik yapacagin elemenleri sec


}

// 3 forma event listener ekle

let form = document.querySelector('#weatherForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let city = e.target.city.value;
    console.log(city)
    let tahmin = await getWeatherData(city); // bunu aslinda ilk yaacaksin cunku ikinin icinde kullanilacak
    console.log(tahmin);
    loadWeatherData(tahmin);
    form.reset();
})


// let form = document.querySelector('#weatherForm');
// form.addEventListener('submit', async (e) => {
//     e.preventDefault;
//     let city = e.target.city.value;
//     console.log(city);
//     await loadData(city);
//     form.reset();
// });

// let getData = async (city) => {
//     try {
//         let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }



                // bunla gun vs yap

// function todaydate() {
//     var today_date = new Date();
//     var myyear = today_date.getYear();
//     var mymonth = today_date.getMonth() + 1;
//     var mytoday = today_date.getDate();

//     document.write("<h1>" + myyear + "/" + mymonth + "/"+mytoday + "/h1">);
// }
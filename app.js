const express = require('express');
const app = express();
const bodyparser = require('body-parser');
// const { request } = require('express');


app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/weather.html');
});
app.post('/', (req, res) => {
    let city = req.body.city;
    console.log(city);
    // const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=59e30983d7b7f60075b0b823a0b41e1b`)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     res.send(data);
    // }
    // );
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=59e30983d7b7f60075b0b823a0b41e1b`;
    request(url, function (err, response, body) {

        // On return, check the json data fetched
        if (err) {
            console.log('error');
        } else {
            let weather = JSON.parse(body);
            // Next, you will check if your weather data returned is undefined. This will indicate errors. If not, you will proceed to store the content.
            // you shall output it in the console just to make sure that the data being displayed is what you want
            console.log(weather);

    //         if (weather.main == undefined) {
    //             console.log("Plz try again")
    //         } else {
    //             // we shall use the data got to set up your output
    //             let place = `${weather.name}, ${weather.sys.country}`,
    //                 /* you shall calculate the current timezone using the data fetched*/
    //                 weatherTimezone = `${new Date(
    //                     weather.dt * 1000 - weather.timezone * 1000
    //                 )}`;
    //             let weatherTemp = `${weather.main.temp}`,
    //                 weatherPressure = `${weather.main.pressure}`,
    //                 /* you will fetch the weather icon and its size using the icon data*/
    //                 weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
    //                 weatherDescription = `${weather.weather[0].description}`,
    //                 humidity = `${weather.main.humidity}`,
    //                 clouds = `${weather.clouds.all}`,
    //                 visibility = `${weather.visibility}`,
    //                 main = `${weather.weather[0].main}`,

    //     }
    // }
        }
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
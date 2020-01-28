$(document).ready(function() { $("#submitForecast").click(function() { return getForecast(); }); });

function
getForecast() {
    var city = $("#city").val();
    var fiveDay = $("#fiveDay").val();
    if (city != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
                city + "&units=metric" + "&cnt="
            1 day "&APPID=a85ae77cdf014dc6b4ed9a09b04bdb1d",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                var table = '';
                var header = ' <
                    h2 style = "font-weight:bold; font-size:30px; margin-top:20px;" > Weather forecast
                for ' + data.city.name + ', ' +
                data.city.country + '</h2>'
                for (var i = 0; i < data.list.length; i++) {
                    table += "<tr>";
                    table
                        += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>";
                    table += "<td>" +
                        data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                    table
                        += "<td>" + data.list[i].temp.morn + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.night + "&deg;C</td>";
                    table
                        += "<td>" + data.list[i].temp.min + "&deg;C</td>";
                    table += "<td>" + data.list[i].temp.max + "&deg;C</td>";
                    table
                        += "<td>" + data.list[i].pressure + "hpa</td>";
                    table += "<td>" + data.list[i].humidity + "%</td>";
                    table += "<td>" +
                        data.list[i].speed + "m/s</td>";
                    table += "<td>" + data.list[i].uv + "&uv;</td>";
                    table += "</tr>";
                }
                $("#forecastWeather").html(table);
                $("#header").html(header);
                $("#city").val('');
                $("#five day").val('')
            }
        });
    }
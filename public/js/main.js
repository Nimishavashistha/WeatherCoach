const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
      city_name.innerText = "Please write the City Name before your search";
      dataHide.classList.add('data_hide');
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=abc292670696c04b326467cee75ce8dc`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else if(tempMood == "Haze"){
                temp_status.innerHTML = "<i class='fas fa-smog' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            dataHide.classList.remove('data_hide');

        }catch{
            city_name.innerText = "Please Enter the city Name properly";
            dataHide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click',getInfo);
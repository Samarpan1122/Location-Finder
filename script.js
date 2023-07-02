const button = document.getElementById('button');
    button.addEventListener("click", () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
            fetch(url).then(res => res.json()).then(data => {
                let div = document.getElementById('div');
                div.textContent = `Country: ${data.address.country}
                country_code: ${data.address.country_code}
                State: ${data.address.state}
                City: ${data.address.city}
                state_district: ${data.address.state_district}
                Postcode: ${data.address.postcode}
                neighbourhood: ${data.address.neighbourhood}`;
                console.table(data.address);
            }).catch(() => {
                console.log("Error Fetching data from API");
            })
        });
    })
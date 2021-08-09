// sort products
if(document.getElementById('sort_by') != null) {
    document.querySelector('#sort_by').addEventListener('change', function(e) {
        // get current url
        var url = new URL(window.location.href);
        // add ?sort_by=[value of selected] to the url
        url.searchParams.set('sort_by', e.currentTarget.value);
        window.location = url.href;
    });
}

//auto fill cities when country is selected
if (document.getElementById('AddressCountryNew') != null) {
    document.getElementById('AddressCountryNew').addEventListener('change', function(e) {
        var cities = this.options[this.selectedIndex].getAttribute('data-provinces');
        var citySelector = document.getElementById('AddressCityNew');
        var cityArray = JSON.parse(cities);

        console.log(cityArray);
        if (cityArray.length < 1) {
            citySelector.setAttribute('disabled', 'disabled');
        } else {
            citySelector.removeAttribute('disabled');
        }

        citySelector.innerHTML = '';
        var options = '';
        for (var i = 0; i < cityArray.length; i++) {
            options += `<option value="${cityArray[i][0]}">${cityArray[i][0]}</option>`;
        }
        citySelector.innerHTML = options;
    })
}

//forgot password form shows on login page
if (document.getElementById("forgotPassword") != null) {
    document.getElementById("forgotPassword").addEventListener("click", function(e) {
        const element = document.querySelector("#forgot_password_form");
        if (element.classList.contains("d-none")) {
            element.classList.remove("d-none");
            element.classList.add("d-block");
        }
    })
}
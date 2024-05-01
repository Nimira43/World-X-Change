const allCountries = document.querySelectorAll('path')

allCountries.forEach((country) => {
    country.onclick = (event) => {
        allCountries.forEach((country) => country.classList.remove('selected'))
        let selectedCountry = event.target
        if (!selectedCountry.classList.contains('selected')) {
            selectedCountry.classList.add('selected')
        }
        let currencyCountry = selectedCountry.getAttribute('name')
        let currencyCode = selectedCountry.id || selectedCountry.className.baseVal
        if (
            currencyCode === 'DE' ||
            currencyCode === 'FR' ||
            currencyCode === "IT" ||
            currencyCode === "ES" ||
            currencyCode === "NL" ||
            currencyCode === "BE" ||
            currencyCode === "GR" ||
            currencyCode === "PT" ||
            currencyCode === "IE" ||
            currencyCode === "AT" ||
            currencyCode === "FI"
        ) {
            currencyCode = "EUR";
        }
        if (currencyCode === "GB") {
            currencyCode = "GBP";
        }
        if (currencyCode === "US") {
            currencyCode = "USD";
        }
        if (currencyCode === "CA") {
            currencyCode = "CAD";
        }
        console.log(currencyCode)
    }
})
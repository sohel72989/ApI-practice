const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data =>allCountries(data));
}
const allCountries = countries => {
    console.log(countries[0])
    const getCountries = countries.map(country => oneCountry(country))
    console.log(getCountries[0]);
    const getCountryHTML = document.getElementById('countries');
    getCountryHTML.innerHTML = getCountries.join('');
}
const oneCountry = country => {
    return `
        <div class="main-head">
            <h2>Country Name: <span class="text-color">${country.name}</span></h2>
            <img src="${country.flags.png}"/>
            <h3>Capital: <span class="text-color2">${country.capital}</span></h3>
            <h3>Population: <span class="text-color3">${country.population}</span></h3>
            <h3>Region: <span class="text-color4">${country.region}</span></h3>
        </div>
    `
}
loadCountries();
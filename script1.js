var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    for (let i = 0; i < result.length; i++) {
        const country = result[i];
        const name = country.name.common;
        const region = country.region;
        const subRegion = country.subregion;
        const population = country.population;

        console.log(`Country: ${name}`);
        console.log(`Region: ${region}`);
        console.log(`Subregion: ${subRegion}`);
        console.log(`Population: ${population}`);
        console.log("--------------");
    }
};

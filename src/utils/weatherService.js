import Metolib from '@fmidev/metolib';

export async function getWeatherData() {
    return new Promise((resolve, reject) => {
        const SERVER_URL = "https://opendata.fmi.fi/wfs";
        const STORED_QUERY_FORECAST = "fmi::forecast::hirlam::surface::point::multipointcoverage";
        const parser = new Metolib.WfsRequestParser();

        parser.getData({
            url: SERVER_URL,
            storedQueryId: STORED_QUERY_FORECAST,
            requestParameter: "WeatherSymbol3,Temperature,WindDirection,WindSpeedMS",
            begin: new Date(), // Time now
            end: new Date((new Date()).getTime() + 23 * 60 * 60 * 1000), // Time tomorrow
            timestep: 60 * 60 * 1000, // Every hour
            sites: ["Liukasaari", "Veräjämäki", "Koivusaari,Helsinki", "Silvola,Vantaa", "Rastila", "Tervasaari,Helsinki", "Läntinen Pihlajasaari", "Vasikkasaari,Helsinki", "Marjaniemi,Helsinki", "Grisen", "Killingholma", "Uppby", "Granholmen,Espoo", "Eira,Helsinki", "Vällskog"],
            callback: function (data, errors) {
                // Handle the data and errors object in a way you choose.
                // Here, we delegate the content for a separate handler function.
                resolve(data);
            }
        });


    });


}
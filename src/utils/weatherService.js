import Metolib from '@fmidev/metolib';

export async function getWeatherData() {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
        const SERVER_URL = "http://opendata.fmi.fi/wfs";
        const STORED_QUERY_FORECAST = "fmi::forecast::hirlam::surface::point::multipointcoverage";
=======
        const SERVER_URL = 'https://opendata.fmi.fi/wfs';
        const STORED_QUERY_FORECAST = 'fmi::forecast::hirlam::surface::point::multipointcoverage';
>>>>>>> ab37688ddabd33cd94d71c43fdfa000729b5d89a
        const parser = new Metolib.WfsRequestParser();

        parser.getData({
            url: SERVER_URL,
            storedQueryId: STORED_QUERY_FORECAST,
<<<<<<< HEAD
            requestParameter: "WeatherSymbol3,Temperature,WindDirection,WindSpeedMS",
            begin: new Date(), // Time now
            end: new Date((new Date()).getTime() + 23 * 60 * 60 * 1000), // Time tomorrow
            timestep: 60 * 60 * 1000, // Every hour
            sites: ["Liukasaari", "Veräjämäki", "Koivusaari,Helsinki", "Silvola,Vantaa", "Rastila", "Tervasaari,Helsinki", "Läntinen Pihlajasaari", "Vasikkasaari,Helsinki", "Marjaniemi,Helsinki", "Grisen", "Killingholma", "Uppby", "Granholmen,Espoo", "Eira,Helsinki", "Vällskog"],
=======
            requestParameter: 'WeatherSymbol3,Temperature,WindDirection,WindSpeedMS',
            begin: new Date(), // Time now
            end: new Date(new Date().getTime() + 4 * 60 * 60 * 1000), // Time tomorrow
            timestep: 60 * 60 * 1000, // Every hour
            sites: [
                'Liukasaari',
                'Veräjämäki',
                'Koivusaari,Helsinki',
                'Silvola,Vantaa',
                'Rastila',
                'Tervasaari,Helsinki',
                'Läntinen Pihlajasaari',
                'Vasikkasaari,Helsinki',
                'Marjaniemi,Helsinki',
                'Grisen',
                'Killingholma',
                'Uppby',
                'Granholmen,Espoo',
                'Eira,Helsinki',
                'Vällskog',
            ],
>>>>>>> ab37688ddabd33cd94d71c43fdfa000729b5d89a
            callback: function (data, errors) {
                // Handle the data and errors object in a way you choose.
                // Here, we delegate the content for a separate handler function.
                resolve(data);
<<<<<<< HEAD
            }
        });


    });


}
=======
            },
        });
    });
}
>>>>>>> ab37688ddabd33cd94d71c43fdfa000729b5d89a

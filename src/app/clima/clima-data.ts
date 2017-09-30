export class ClimaData {
    cod: string;
    message: number;
    cnt: number;
    list: ClimaElement[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    dt_txt: string;
}
export class ClimaElement {
    dt: number;
    main: Temperature;
    weather : Weather[];
}
export class Temperature {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}
export class Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
/**
 * {
    "dt": 1506740400,
    "main": {
        "temp": 286.83,
        "temp_min": 284.297,
        "temp_max": 286.83,
        "pressure": 991.61,
        "sea_level": 1034.75,
        "grnd_level": 991.61,
        "humidity": 86,
        "temp_kf": 2.54
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "clouds": {
        "all": 0
    },
    "wind": {
        "speed": 1.21,
        "deg": 56.0009
    },
    "rain": {},
    "sys": {
        "pod": "n"
    },
    "dt_txt": "2017-09-30 03:00:00"
}
 */
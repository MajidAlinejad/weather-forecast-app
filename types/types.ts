export interface WeatherData {
  city_name: string;
  country_code: string;
  temperature: number;
  description: string;
  icon: string;
  datetime: string;
}

export interface ForecastData {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

export interface UseWeatherDataResult {
  currentWeather: WeatherData | null;
  forecast: ForecastData[] | null;
  loading: boolean;
  error: string | null;
  refreshData: () => void;
}

export interface DailyForecastDataRequest {
  city_name: string;
  country_code: string;
  data: {
    app_max_temp: number;
    app_min_temp: number;
    clouds: number;
    clouds_hi: number;
    clouds_low: number;
    clouds_mid: number;
    datetime: string;
    dewpt: number;
    high_temp: number;
    low_temp: number;
    max_dhi: number;
    max_temp: number;
    min_temp: number;
    moon_phase: number;
    moon_phase_lunation: number;
    moonrise_ts: number;
    moonset_ts: number;
    ozone: number;
    pop: number;
    precip: number;
    pres: number;
    rh: number;
    slp: number;
    snow: number;
    snow_depth: number;
    sunrise_ts: number;
    sunset_ts: number;
    temp: number;
    ts: number;
    uv: number;
    valid_date: string;
    vis: number;
    weather: {
      description: string;
      code: number;
      icon: string;
    };
    code: number;
    description: string;
    icon: string;
    wind_cdir: string;
    wind_cdir_full: string;
    wind_dir: number;
    wind_gust_spd: number;
    wind_spd: number;
  }[];
  lat: number;
  lon: number;
  state_code: string;
  timezone: string;
}

export interface CurrentWeatherDataRequest {
  count: 1;
  data: {
    app_temp: number;
    aqi: number;
    city_name: string;
    clouds: number;
    country_code: string;
    datetime: string;
    dewpt: number;
    dhi: number;
    dni: number;
    elev_angle: number;
    ghi: number;
    gust: number;
    h_angle: number;
    lat: number;
    lon: number;
    ob_time: string;
    pod: string;
    precip: number;
    pres: number;
    rh: number;
    slp: number;
    snow: number;
    solar_rad: number;
    sources: string[];
    state_code: string;
    station: string;
    sunrise: string;
    sunset: string;
    temp: number;
    timezone: string;
    ts: number;
    uv: number;
    vis: number;
    weather: {
      description: string;
      code: number;
      icon: string;
    };
    code: number;
    description: string;
    icon: string;
    wind_cdir: string;
    wind_cdir_full: string;
    wind_dir: number;
    wind_spd: number;
  }[];
}

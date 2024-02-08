"use client";

import { useState } from "react";
import { API_KEY } from "@/constants";
import style from "../weatherApp/page.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import WeatherIcon from "./WeatherConditions";

const Clock = dynamic(
    () => import("../components/forecastComponent/Clock/Clock").then((module) => module.Clock),
    {
        ssr: false,
    }
);

export function WeatherApp() {
    const [city, setCity] = useState("");
    const [cityData, setCityData] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`;
        try {
            const response = await fetch(url, {
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setCityData(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <div className={style.app__wrapper}>
                <section className={style.main__section}>
                    <div className={style.main__info}>
                        <h1 className={style.clock}>
                            <Clock />
                        </h1>
                        <p className={style.paragraph}>WEDNESDAY</p>
                        <p className={style.paragraph}>MAY 23</p>
                        <h2 className={style.currentTemp}>{cityData.current?.temp_c}&deg;C</h2>
                        <p className={style.paragraph}>{cityData.location?.name}</p>
                        <p className={style.paragraph}>Humidity 61%</p>
                    </div>
                    <div className={style.main__icon}>
                        <WeatherIcon condition={cityData.current?.condition.text} />
                    </div>
                </section>
                <section className={style.forecast}>
                    <div className={style.forecast__column}>
                        <div className={style.forecast__info}>
                            <p>MON</p>
                            <p>16</p>
                        </div>
                        <div className={style.forecast__icon}>
                            <WeatherIcon
                                condition={cityData.forecast?.forecastday[0].day.condition.text}
                            />
                        </div>
                    </div>
                    <div className={style.forecast__grid}>
                        <div className={style.forecast__info}>
                            <p>TUE</p>
                            <p>26</p>
                        </div>
                        <div className={style.forecast__icon}>
                            <WeatherIcon
                                condition={cityData.forecast?.forecastday[1].day.condition.text}
                            />
                        </div>
                    </div>
                    <div className="forecast__column">
                        <div className={style.forecast__info}>
                            <p>WED</p>
                            <p>20</p>
                        </div>
                        <div className={style.forecast__icon}>
                            <WeatherIcon
                                condition={cityData.forecast?.forecastday[2].day.condition.text}
                            />
                        </div>
                    </div>
                </section>
                <footer>
                    <p className={style.app_footer}>Inspired by Freepik designs </p>
                    <a className={style.app__settings} href="">
                        <i className="fa-solid fa-gear"></i>
                    </a>
                </footer>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Search for your city : </label>
                <input type="text" id="city" onChange={(e) => setCity(e.target.value)} />
                <button type="submit">SEARCH</button>
            </form>

            <p>Country:{cityData.location?.country}</p>
            <p>City:{cityData.location?.name}</p>
            <p>date:{cityData.current?.last_updated}</p>
            <p>Weather Condition day 1:{cityData.forecast?.forecastday[0].day.condition.text}</p>
            <img src={cityData.forecast?.forecastday[0].day.condition.icon} alt="sun" />
            <p>Weather Condition day 2:{cityData.forecast?.forecastday[1].day.condition.text}</p>
            <img src={cityData.forecast?.forecastday[1].day.condition.icon} alt="sun" />
            <p>Weather Condition day 3:{cityData.forecast?.forecastday[2].day.condition.text}</p>
            <img src={cityData.forecast?.forecastday[2].day.condition.icon} alt="sun" />

            <p>Temperature:{cityData.current?.temp_c} Celsius</p>
        </>
    );
}

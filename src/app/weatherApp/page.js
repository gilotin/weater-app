"use client";

import { useState } from "react";
import { API_KEY } from "@/constants";
import style from "../weatherApp/page.module.css";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("../components/Clock/Clock").then((module) => module.Clock), {
    ssr: false,
});

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
            <section className={style.timer}>
                <Clock />
            </section>

            <h1>Hello to my test weather app</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Search for your city : </label>
                <input type="text" id="city" onChange={(e) => setCity(e.target.value)} />
                <button type="submit">SEARCH</button>
            </form>

            <p>Country:{cityData.location?.country}</p>
            <p>City:{cityData.location?.name}</p>
            <p>date:{cityData.current?.last_updated}</p>
            <p>Weather Condition:{cityData.current?.condition.text}</p>
            <img src={cityData.current?.condition.icon} alt="sun" />
            <p>Temperature:{cityData.current?.temp_c} Celsius</p>
        </>
    );
}

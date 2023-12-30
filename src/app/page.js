import { Footer } from "./footer/page";
import { WeatherApp } from "./weatherApp/page";

export default function Home() {
    return (
        <>
            <main>
                <WeatherApp />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

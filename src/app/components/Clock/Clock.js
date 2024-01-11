import { useEffect, useState } from "react";

export function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section>
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
        </section>
    );
}

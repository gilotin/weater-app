import Image from "next/image";

export default function WeatherIcon({ condition }) {
    const customIcon = `/icons/${condition}.png`;

    return <Image src={customIcon} width={150} height={150} alt="condition icon" />;
}

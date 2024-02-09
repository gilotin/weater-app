import Image from "next/image";

export default function WeatherIcon({ condition, isDay }) {
    let customIcon = `/icons/${condition}.png`;

    if (isDay == 0) {
        customIcon = `/icons/Night_${condition}.png`;
    }

    return <Image src={customIcon} width={150} height={150} alt="condition icon" />;
}

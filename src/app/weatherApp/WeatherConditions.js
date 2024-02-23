import Image from "next/image";

export default function WeatherIcon({ condition, isDay }) {
    let trimmedData;
    let customIcon;

    if (condition) {
        trimmedData = condition.trimEnd();
    }

    customIcon = `/icons/${trimmedData}.png`;

    if (isDay == 0) {
        customIcon = `/icons/Night_${trimmedData}.png`;
    }

    return <Image src={customIcon} width={150} height={150} alt="condition icon" priority={true} />;
}

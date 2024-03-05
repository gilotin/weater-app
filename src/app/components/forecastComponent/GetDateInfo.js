export default function GetDateInfo({ info, option }) {
    let formatDate = "";

    const date = new Date();

    if (info == "weekDay") {
        formatDate = date.toLocaleDateString("en-US", { weekday: "long" });
    }

    if (info == "monthDay") {
        formatDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    }
    return formatDate;
}

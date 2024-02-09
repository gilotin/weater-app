export default function GetDateInfo({ info, option }) {
    let formatDate = "";

    const date = new Date();

    if (info == "weekDay") {
        formatDate = date.toLocaleDateString("en-US", { weekday: "long" });
        if (option == "short") {
            date.setDate(date.getDate() + 1);
            formatDate = date.toLocaleDateString("en-US", { weekday: "short" });
        }
    }

    if (info == "monthDay") {
        formatDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    }

    return formatDate;
}

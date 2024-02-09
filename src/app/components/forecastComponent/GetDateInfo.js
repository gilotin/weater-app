function GetDateInfo(info) {
    const date = new Date();

    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

    const monthDay = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });

    if (info) {
        return monthDay;
    }

    return weekday;
}

function DayDisplay() {
    const time = new Date() 
    const day = time.toLocaleString("en-us", {weekday: "long"}) 
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let display;

    if (day.toLowerCase() === "monday") {
        display = `Happy ${day}`
    } else if (day.toLowerCase() === "tuesday") {
        display = `Happy ${day}`
    } else if (day.toLowerCase() === "wednesday") {
        display = `Happy ${day}`
    } else if (day.toLowerCase() === "thursday") {
        display = `Happy ${day}`
    } else if (day.toLowerCase() === "friday") {
        display = `Happy ${day}`
    } else if (day.toLowerCase() === "saturday") {
        display = `Happy ${day}`
    } else {
        display = `Happy ${day}`
    }

    return (
        <>
        <h1>{display}</h1>
        {morning ? <h3>Have youhad your breakfast yet?</h3> : <h3>Hope you're having a nice day :)  </h3>}
        </>
    )
}
 
export default DayDisplay
function Promo() {
    const stile = {
        color: "tomato",
        fontSize: "40px",
        fontWeight: "bold"
    }
    return (
        <div className="promo-section">
            <div>
                <h1 style={stile}>Don't miss out on this week's awesome deals</h1>
                <h2>Subscribe to my Newsletter and get all the shop items at {Math.random() >= 0.5 ? <p>Big Dicount</p> : <p>Small Discount</p>} </h2>
            </div>
        </div>
    )
}

export default Promo
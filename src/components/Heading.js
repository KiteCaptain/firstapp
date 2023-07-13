

function Heading(props) {
    let title = "React Journey"
    return (
        <div>
            <h1>{title}</h1>
            <h2>Hello {props.name}, are you ready to react to your React Journey </h2>
        </div>
    ) 
    
    
}

export default Heading;
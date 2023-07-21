import { useRef, useState } from "react";

// Uncontrolled input
const Form = () => {
    const inputRef = useRef(null);
    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        // do something with value
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" />
        </form>
    )
}

// Controlled input 
const Form2 = () => {
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form>
            <input 
            value={value} onChange={handleChange} type="text"
            />
        </form>
    )
}

// Uncontrollable file input type
const FormFileInput = () => { 
    const fileInput = useRef(null); 
   
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      const files = fileInput.current.files; 
      // Do something with the files here 
    } 
   
    return ( 
      <form onSubmit={handleSubmit}> 
        <input 
          ref={fileInput} 
          type="file" 
        /> 
      </form> 
    ); 
   }; 

export {Form, Form2, FormFileInput}
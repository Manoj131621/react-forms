import { useState } from "react";

function Form() {
    const [email, setEmail] = useState("")
    const [error,setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email.includes("@")){
            setError("Invalid email");
            return;
        }
        setError("")
        alert("Form submitted")
    }
  return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter Email"/>
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type="submit">Submit</button>
    </form>
  )
}
export default Form;

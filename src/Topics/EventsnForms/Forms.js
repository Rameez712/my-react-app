import React from "react";





function Form(){

    const options = ["India", "Canada", "US"];
    const [name,setName] = React.useState("");

    const setNameFunc =(e)=>{
        alert(e)
      }

    const handleSubmit =(event)=>{

        //- we can use the event.preventDefault() method to prevent the default form submission behavior(page load), and then handle the form submission ourselves using JavaScript.
        event.preventDefault();
        alert("Form Submitted");
        console.log()
    }

    const onselectionchange =(e)=>{
        alert(e)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name
            <input type="text" 
            name="name" 
            value={name}
            onChange={(e)=>setNameFunc(e.target.value)}/>
            </label>
            <br/><br/>
            <label>Country
            <select onChange={(e)=>onselectionchange(e.target.value)}>
                    {options.map((option)=>
                    <option>{option}</option>

                    )}
            </select>
            </label>

            <br/><br/>
        {/* this caused error- <input type="submit">Submit</input> */}
            <input type="submit" />
        </form>
    );
}

export default Form;
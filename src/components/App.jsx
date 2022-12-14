import React, { useState } from "react";

function App() {
  const [fullName,setfullName]=useState({ fname:"", lname:"" });
  function updateName(event){
const {value,name}=event.target;

setfullName(prevValue=>{

    if(name==="fName"){
      return{fname:value,lname:prevValue.lname}
      
    }else{
      return{fname:prevValue.fname,lname:value}
      
    }
  

});
}
  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input onChange={updateName} name="fName" placeholder="First Name" value={fullName.fname}/>
        <input onChange={updateName} name="lName" placeholder="Last Name"  value={fullName.lname}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

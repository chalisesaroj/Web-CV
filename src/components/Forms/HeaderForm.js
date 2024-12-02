import React from "react";
function HeaderForm({data,setData}){
    const handleChange=(e,field)=>{
 const newheader={...data.header};
 newheader[field]=e.target.value;

    }
    return(
<div>
    <h3>Your Basic Details</h3>
    <input type="text" value={data.header.personname} placeholder="Enter your name" onChange={(e)=>handleChange(e,"personname")}/>
    <input type="text" value={data.header.title} placeholder="Your Title eg.: Software Engineer"onChange={(e)=>handleChange(e,"title")}/>
</div>
    )
}export default HeaderForm;
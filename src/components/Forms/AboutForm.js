import React from "react";
function AboutForm({data,setData}){
    return(
<textarea type="text" value={data.aboutus} placeholder="How would you like to describe yourself?" onChange={(e)=>{
setData({...data,aboutus:e.target.value})
}}></textarea>
    )
}export default AboutForm;
import React from "react";
function ContactForm({data,setData}){
    // contact: {
    //     email: "",
    //     phone: "",
    //     linkedin: "",
    //     github: ""
    // },
return(
    <div>
        <h3>Contacts</h3>
        <input type="email" placeholder="Email Address" value={data.contact.email} onChange={(e)=>{
           const updatedContact={...data.contact,email:e.target.value};
           setData({...data,contact:updatedContact});
        }}></input>
        <input type="text" placeholder="Phone number" value={data.contact.phone} onChange={(e)=>{
           const updatedContact={...data.contact,phone:e.target.value};
           setData({...data,contact:updatedContact});
        }}></input>
                <input type="text" placeholder="Linkedin Address" value={data.contact.linkedin} onChange={(e)=>{
           const updatedContact={...data.contact,linkedin:e.target.value};
           setData({...data,contact:updatedContact});
        }}></input>
         <input type="text" placeholder="GitHUb Address" value={data.contact.github} onChange={(e)=>{
           const updatedContact={...data.contact,github:e.target.value};
           setData({...data,contact:updatedContact});
        }}></input>
    </div>
)
}export default ContactForm;
import { Stack, TextField } from "@mui/material";
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
       <Stack direction="column" label="E-mail ID" spacing={3}> <TextField type="email" placeholder="Email Address" value={data.contact.email} onChange={(e)=>{
           const updatedContact={...data.contact,email:e.target.value};
           setData({...data,contact:updatedContact});
        }}/>
        <TextField type="text" label="Phone number" placeholder="Phone number" value={data.contact.phone} onChange={(e)=>{
           const updatedContact={...data.contact,phone:e.target.value};
           setData({...data,contact:updatedContact});
        }}/>
                <TextField type="text" label="Linkedin Address"placeholder="Linkedin Address" value={data.contact.linkedin} onChange={(e)=>{
           const updatedContact={...data.contact,linkedin:e.target.value};
           setData({...data,contact:updatedContact});
        }}/>
         <TextField type="text" label="Github Address" placeholder="GitHub Address" value={data.contact.github} onChange={(e)=>{
           const updatedContact={...data.contact,github:e.target.value};
           setData({...data,contact:updatedContact});
        }}/></Stack>
    </div>
)
}export default ContactForm;
import React from "react";
import TextField from '@mui/material/TextField';
import './formStyling.css';
import { Typography } from "@mui/material";
function AboutForm({ data, setData }) {
   
    return (
        <div>
            <h3>How would you like to describe yourself?</h3>
            <TextField  fullWidth multiline rows={5}className="aboutUsTextField" label="describe yourself" type="text" value={data.aboutus} placeholder="How would you like to describe yourself?" onChange={(e) => {
            setData({ ...data, aboutus: e.target.value })
        }}></TextField>
        <Typography variant="subtitle2" classname="subtitle2">
           ** Please mention your title,your experience,your attitude,your aspirations
        </Typography>
           <Typography variant="body2">A sample example will be: </Typography> 
           <div className="sampledescription">
         <Typography variant="body2">
         A <strong><u>Mechanical Engineer </u></strong> with <strong><u>ten years of experience 
                in <strong><u>Automotives Industry</u></strong></u></strong> who loves to 
                solve engineering problems through research and brainstorming and who aspires to be the 
                team leader in top companies.
         </Typography>
           </div>
           <div className="sampledescription">
         <Typography variant="body2">
         A <strong><u>Software Engineer </u></strong> with <strong><u>five years of experience 
                in <strong><u>Enterprise Web Development</u></strong></u></strong> with great passion in  
                solve complex programming problems through research and brainstorming and who aspires to be the 
                team leader in top companies.
         </Typography>
           </div>
        </div>
    )
} export default AboutForm;
import React from 'react'
import {  Typography, Box} from '@mui/material';

const NextPart = () => {
  return (
    <Box style={{ display:"flex", flexDirection: 'row', alignItems:'center'}}>
      <div style={{display:"flex",textAlign:"right", flexDirection:"column",paddingRight:"600px", margin:"15px",alignItems:"right", justifyContent:"flex-end"}}>
        
        <Typography variant='h2'>Transform your internet</Typography>
      <Typography variant='h5'>enhance your internet with AI</Typography>
     
      </div>
      <div>
      <Box
              component="img"
              src="https://beconnected.esafety.gov.au/pluginfile.php/99437/mod_resource/content/2/what-is-ai%20%281%29.jpg"
              alt="Hero Image"
              sx={{
                width: '1000px',
                borderRadius: '8px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                
              }}
            />
            </div>
    </Box>
  )
}

export default NextPart

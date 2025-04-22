import React from 'react'
import {  Typography, Box} from '@mui/material';

const Stats = () => {
  return (
    <Box style={{ display:"flex", flexDirection: 'row-reverse', alignItems:'center'}}>
      <div style={{display:"flex", flexDirection:"column", margin:"15px",}}>
        
        <Typography variant='h2'>Transform your internet</Typography>
      <Typography variant='h5'>enhance your internet with AI</Typography>
      <div style={{display:"flex",flexDirection:"row", justifyContent:"flex-end", }}>

        <div style={{marginRight:"25px"}}><Typography variant='h2'>50k</Typography>
             <Typography variant='h6'>customer</Typography></div>    

         <div style={{marginRight:"25px"}}><Typography variant='h2'>70</Typography>
         <Typography variant='h6'> countries</Typography></div> 

         <div style={{marginRight:"25px"}}><Typography variant='h2'>10k</Typography>
         <Typography variant='h6'>employees</Typography></div>   
         
             <div style={{marginRight:"25px"}}><Typography variant='h2'>500</Typography>
             <Typography variant='h6'>innoGuard</Typography></div>
        </div>
      </div>
      <div>
      <Box
              component="img"
              src="https://www.cnet.com/a/img/resize/6a619fa8d8cb6f22df311d2a96ae2d1f16964f07/hub/2024/05/17/19332b4a-75aa-46a9-a474-a17e2bbed6ab/best-internet-speed-tests.jpg?auto=webp&width=1200"
              alt="Hero Image"
              sx={{
                width: '700px',
                borderRadius: '8px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                
              }}
            />
            </div>
    </Box>
  )
}

export default Stats


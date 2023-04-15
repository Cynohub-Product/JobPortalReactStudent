import React from 'react'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardHeader from 'src/views/cards/CardHeader'
import Box from '@mui/material/Box'
import CardTwitter from 'src/views/cards/CardTwitter'
function index() {
  return (

     <Box sx={{ display: 'flex',  marginTop:'10px'  ,  flexDirection:'column' ,  gap:'20px'  }}>

     <CardFacebook/>
     <CardTwitter/>
        </Box>
   
  )
}

export default index

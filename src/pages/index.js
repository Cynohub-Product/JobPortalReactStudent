// ** MUI Imports

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Facebook from 'mdi-material-ui/Facebook'
import ShareVariant from 'mdi-material-ui/ShareVariant'
import { useTheme } from '@emotion/react'
import CardHeader from 'src/views/cards/CardHeader'
import CardJob from 'src/views/cards/CardJob'
import CardDetailJob from 'src/views/cards/CardDeatilJob'
import Grid from '@mui/material/Grid'

const Dashboard = () => {
  return (

    <Box sx={{
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',

  // make responsive in mobile
  "@media (max-width: 600px)": {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
}}>
  <Box sx={{ mr: 2, display: 'flex', flexWrap:'wrap' ,  alignItems: 'center', gap:"10PX" , mt:3 }}>
    <CardJob />
    <CardJob />
   
 
  </Box>
 
  <Box sx={{ display: 'flex', alignItems: 'center' , height:'auto'  }}>
  <CardDetailJob/>
  </Box>

</Box>


    

  )
}

export default Dashboard

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
import { Button } from '@mui/material'

const CardJob = () => {
    
    const theme = useTheme();


  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'black', backgroundColor: 'ligthgrey' ,   maxWidth: '50%',  marginTop:'10px',
      // make responsive in mobile

        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '50%',
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '80%',
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: '90%',
        },


     }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` , borderRadius:'40px'  }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            {/* <Avatar alt='Eugene Clarke' src='/images/avatars/1.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} /> */}
            <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'black' }}
        >
          <Facebook sx={{ marginRight: 2.5 }} />
          Facebook
        </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
            
              
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              
              <Typography variant='body2' sx={{ color: 'black' }}>
                Hyderabad
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'black' }}>
          Frontend Developer
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'grey' }}>
          You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital
          ingredients in an effective.
        </Typography>

        <Typography variant='body2' sx={{ marginBottom: 3, color: 'black' }}>
           $ 1000 - $ 2000 / Year 
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            {/* <Avatar alt='Eugene Clarke' src='/images/avatars/1.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} /> */}
            <Typography variant='body2' sx={{ color: 'grey' }}>
             2 days ago
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
            
              <Typography variant='body2' sx={{ color: 'grey' }}>
               View Details
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              
            <Button variant="contained"  sx={{   padding:'10px' , fontSize:'12px' }}>
        Apply Now
      </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardJob

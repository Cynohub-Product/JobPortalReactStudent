// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Facebook from 'mdi-material-ui/Facebook'
import { useTheme } from '@mui/material'

const CardDetailJob = () => {
   
    const theme = useTheme()

  return ( 
    <Card sx={{ width: 1000,  height:'auto' ,
        
          [theme.breakpoints.down('md')]: {
            width: 500, 
            height: 700,
          },
          [theme.breakpoints.down('sm')]: {
            width: 350,
            height: 750,
          },
          [theme.breakpoints.down('xs')]: {
            width: 400,
            height: 650,
          },
          [theme.breakpoints.down('xxs')]: {
            width: 400,
            height: 650,
          },


       }} >
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' ,   }}>
          <Box sx={{ mr: 5, display: 'flex', alignItems: 'center'  }}>
            {/* <Avatar alt='Eugene Clarke' src='/images/avatars/1.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} /> */}
            <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, marginLeft:1.75, marginTop:1.5,  alignItems: 'center', color: 'blue' }}
        >
          <Facebook sx={{ marginRight: 2.5 }}  />
          Facebook 
        </Typography>
        
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
            
              <Typography variant='body2' sx={{ color: 'grey' }}>
                 April 2021
              </Typography>
            </Box>
           
          </Box>
        </Box> 
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 5, display: 'flex', alignItems: 'center' }}>
            {/* <Avatar alt='Eugene Clarke' src='/images/avatars/1.png' sx={{ width: 34, height: 34, marginRight: 2.75 }} /> */}
            <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, marginLeft:'20px', marginTop:1.5,  alignItems: 'center', color: 'black' }}
        >
         
         Front End Developer
        </Typography>
        
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
            
              <Button variant='contained'>
                Apply Now
                </Button>

            </Box>
           
          </Box>
        </Box>
    <CardContent>
      <Box sx={{ mb: 5,  alignItems: 'center' }}>
      
        <Typography variant='body2'> Full Time | Hyderabad | $ 1000 - $ 2000 / Year   </Typography>
      </Box>
         
        <Typography variant='h6' sx={{ marginBottom: 3.25 , color:'black' , fontSize:'18px' ,  fontWeight:'600px'    }}>
            Job Description
                </Typography> 

      <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
        If you are looking for a new way to promote your business that won’t cost you more money, maybe printing is
        one of the options you won’t resist.
      </Typography>
      <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
        Printing is a widely use process in making printed materials that are used for advertising. It become fast,
        easy and simple. If you want your promotional material to be an eye-catching.
      </Typography>
      <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
        Printing is a widely use process in making printed materials that are used for advertising. It become fast,
        easy and simple. If you want your promotional material to be an eye-catching.
      </Typography>
      <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
        Printing is a widely use process in making printed materials that are used for advertising. It become fast,
      
      </Typography>
    </CardContent>
    <CardActions className='card-action-dense'>
    <Button variant='contained' >
                Apply Now
    </Button>
      
    </CardActions>
  </Card>
    
  )
}

export default CardDetailJob

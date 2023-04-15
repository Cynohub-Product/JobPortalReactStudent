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
import CardFacebook from './CardFacebook'

const CardHeader = () => {
  return (
    <>
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' , borderRadius:"20px"  }}>
       <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` , height:'150px' ,  }}>
     </CardContent>
      </Card>

    </>
  )
}

export default CardHeader

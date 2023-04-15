import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { Calendar } from 'react-date-range'
function TabExperience() {
  return (
    <CardContent>
           <Grid container spacing={7}>
       
            
       <Grid item xs={12} sm={6}>
         <TextField fullWidth label='Current Company ' placeholder='Cureent Company' />
       </Grid>
       <Grid item xs={12} sm={6}>
         <TextField fullWidth label=' Current CTC' placeholder='Current CTC'  />
       </Grid>
        <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel fullWidth>Avalibilty </InputLabel>
              <Select label='Role' defaultValue='admin'>
                <MenuItem value=''></MenuItem>
                <MenuItem value='author'>Immediately</MenuItem>
                <MenuItem value='editor'>One Week </MenuItem>
                <MenuItem value='maintainer'>15 Days </MenuItem>
                <MenuItem value='subscriber'>More Than 15 days</MenuItem>
              </Select>
            </FormControl>
          </Grid>
         
       </Grid>
       <Box sx={{ mb: 3 , display:'flex ' ,   justifyContent:'end'   }}>
          <Button variant='contained' sx={{ marginRight: 3.5 }}>
            Add Work  Experience
          </Button>
        </Box>
        <Grid container spacing={7}>
       
            
       <Grid item xs={12} sm={6}>
         <TextField fullWidth label='Company Name ' placeholder='Company Name' />
       </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label='Designation' placeholder='Designation'  />
        </Grid>
          <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Roles & Responsbilites' placeholder='Roles & Responsbilites' />
            </Grid>
            
            </Grid>
            <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
           <Typography variant='h6' gutterBottom>
            Start Date
          </Typography>
          <Calendar />

            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom>
            End Date
          </Typography>
          <Calendar />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
          </Grid>
            </Grid>

           
        </CardContent>
  )
}

export default TabExperience

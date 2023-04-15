// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Achievement Date' fullWidth {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState(null)

  return (
    <CardContent>
        <Box sx={{ mb: 3 , display:'flex ' ,   justifyContent:'end'   }}>
          <Button variant='contained' sx={{ marginRight: 3.5 }}>
            Add Achievements
          </Button>
        </Box>
      <form>
        <Grid container spacing={7}>
       
       
        
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='text' label='Achivement Name' placeholder='Achievement Name' />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='text' label='Achivement Url' placeholder='Achivement Url' />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='text' label='Achivement Image' placeholder='Achivement Image' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='text' label='Achivement Description' placeholder='Achivement Description' />
          </Grid>

             <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='account-settings-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
              />
            </DatePickerWrapper>
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
      </form>
    </CardContent>
  )
}

export default TabInfo

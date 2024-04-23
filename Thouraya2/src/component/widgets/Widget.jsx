import React from 'react'
import './widget.scss'
import EngineeringIcon from '@mui/icons-material/Engineering';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Widget = ({titel,type,sxx , statestique}) => {
  return (
    <Card sx={sxx}>
    <CardContent>
    <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {titel}
              </Typography>
              <Typography variant="h4">{type}</Typography>
            </Stack>
         

      <div className="right">
      <Avatar sx={{ backgroundColor: 'red', height: '56px', width: '56px' }}>
              <EngineeringIcon />
            </Avatar>
  <p>{statestique}</p>
      </div>
    
  
          </Stack>
          </Stack> 
          <span className="link">see all ...</span>
          </CardContent>
          </Card>
 
  )
}

export default Widget

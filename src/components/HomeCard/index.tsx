import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

export const HomeCard = () => {
  return (
    <Box sx={{width:'22%'}}>
        <Box component="img" src="" />
        <Card>
          <Typography>
            Home Title
          </Typography>
          <Typography>
            Price
          </Typography>
          <Typography>
            Description
          </Typography>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography>
              info
            </Typography>
            <Button sx={{backgroundColor: 'Secondary.100'}}>
              <Typography sx={{color:'Primary.light'}}>
                Details
              </Typography>
            </Button>
          </Box>
        </Card>
    </Box>
  )
}

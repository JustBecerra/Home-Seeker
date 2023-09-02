import React from "react";
import { Box, AppBar, Button, Typography } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar position="fixed" variant="elevation" sx={{backgroundColor: 'Primary.light', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
      <Box sx={{width: 'auto'}}>
        <Button  variant="text" sx={{m: '0.75rem', height: '3rem'}}>
          <Typography sx={{color: 'Primary.100', textTransform: 'none'}}>button 1</Typography>
        </Button>
        <Button  variant="text" sx={{m: '0.75rem', height: '3rem'}}>
          <Typography sx={{color: 'Primary.100', m: '0.75rem', textTransform: 'none'}}>button 2</Typography>
        </Button>
      </Box>
      <Typography sx={{color: 'Primary.100', fontSize: '1.5rem', textTransform: 'none'}}>
        Home Seeker
      </Typography>
      <Button disableRipple sx={{backgroundColor: 'Primary.100'}}>
        <Typography sx={{color: 'Primary.light',p: '0.75rem', fontSize: '1rem', textTransform: 'none'}}>
          Contact the creator!
        </Typography>
      </Button>
    </AppBar>
  );
}

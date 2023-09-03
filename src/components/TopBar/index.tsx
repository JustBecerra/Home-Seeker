"use client"
import React from "react";
import { AppBar, Button, Typography, Autocomplete, TextField } from "@mui/material";

export const TopBar = () => {
  
  return (
    <AppBar position="fixed" variant="elevation" sx={{backgroundColor: 'Primary.light', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
      <Autocomplete 
        sx={{m: '0.75rem', marginLeft: '1rem', width:'8rem'}}
        options={[]}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Search..." sx={{borderRadius: '1.5rem'}} />}
      />
      <Typography sx={{color: 'Primary.100', fontSize: '1.5rem', textTransform: 'none', display:'flex', alignSelf:'center', m:'auto'}}>
        Home Seeker
      </Typography>
      <Button sx={{backgroundColor: 'Primary.100', px: '1rem', m: '0.75rem', marginRight: '1rem',height: '3rem', borderRadius: '1.5rem'}}>
        <Typography sx={{color: 'Primary.light', fontSize: '1rem', textTransform: 'none'}}>
          Contact the creator
        </Typography>
      </Button>
    </AppBar>
  );
}


import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuComponent from "../MenuComponent/MenuComponent";
import Box from '@mui/material/Box';
function NavBar() {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">
            BlogPessoal
          </Typography>
          <Box ml="auto">
          <MenuComponent/>
            </Box>
         
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar


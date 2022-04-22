import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import CloseIcon from '@mui/icons-material/Close'
import {
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from '@mui/material'
import DrawerHeader from '@/styles/Navbar'
import NavBarProps from '@/types/interfaces/NavBar'

const NavBar = ({ ...props }: NavBarProps) => (
  <>
    <AppBar position="absolute">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={props.openDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="temporary"
      open={props.drawerState}
      onClose={props.closeDrawer}
    >
      <DrawerHeader>
        <Typography variant="h6">
          Virtual KIT Campus
        </Typography>
        <IconButton
          color="inherit"
          onClick={props.closeDrawer}
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  </>
)

export default NavBar
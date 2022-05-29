import { Laptop,Mail } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, styled, Toolbar, Typography, Box, InputBase,Badge, Avatar, Menu, MenuItem, Checkbox } from '@mui/material'
import { pink } from '@mui/material/colors';
import React, { useState } from 'react'

const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Search = styled("div")(({ theme }) => ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]: {
        display:"flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]: {
        display:"none",
    },
}));

const Navbar = ({mode,setMode}) => {
    const [Open, setOpen] = useState(false);
    const [text, setText] = useState("Dark Mode")
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>WinkBook</Typography>
            <Laptop sx={{display:{xs:"block", sm:"none"}}}/>
            <Search>
              <InputBase placeholder='Search...'/>
            </Search>
            <Icons>
            <Badge badgeContent={4} color="error">
            <Mail fontSize='large'/>
            </Badge>
            <Badge badgeContent={2} color="error">
            <NotificationsIcon fontSize='large'/>
            </Badge>
            <Avatar sx={{ bgcolor: "lightcoral",height:32, width:32}} onClick={e => setOpen(true)} >
                HN
            </Avatar>
            </Icons>
            <UserBox onClick={e => setOpen(true)}>
            <Avatar sx={{ bgcolor: "lightcoral",height:32, width:32}}>HN</Avatar>
            <Typography variant='span'>Hasib</Typography>
            </UserBox>
        </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose = {e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
        <MenuItem >
        <Checkbox
        {...label}
        sx={{'&.Mui-checked': {color: pink[600]},}}
        onChange={e=>setMode(mode === "light"? "dark":"light")}
        onClick={e=>setText("Light Mode")}
        />
        {text}
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
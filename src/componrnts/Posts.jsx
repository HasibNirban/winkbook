import { Checkbox } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder} from '@mui/icons-material';
import { useState } from 'react'
import {Divider} from '@mui/material';
import { Menu, MenuItem } from '@mui/material';

 const Posts = ({ob}) => {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
console.log(ob);

const [Open, setOpen] = useState(false);


if (typeof ob !== 'undefined')
  return (
    <Card sx={{margin:0.5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "lightcoral" }} aria-label="recipe">
            <PersonIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={e => setOpen(true)}/>
          </IconButton>
        }
        title={ob.userName}
        subheader= {ob.updated_at.split("T")[0]}
      />
      <CardMedia
        component="img"
        height="20%"
        image= {ob.url}
        alt={ob.caption}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {ob.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose = {e => setOpen(false)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem >Edit Post</MenuItem>
        <Divider />
        <MenuItem >Delete Post</MenuItem>
        <Divider />
        <MenuItem >Quick Share</MenuItem>
        <Divider />
        <MenuItem >Send via chats</MenuItem>
        <Divider />
        <MenuItem >Copy Link</MenuItem>
      </Menu>
    </Card>
  );
}

export default Posts
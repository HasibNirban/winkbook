import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const Styledmodal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
});

const Userbox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
});

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Tooltip title="Create new Post" sx={{position:"fixed",bottom:20,left:10}}>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={e=>setOpen(true)}/>
      </Fab>
    </Tooltip>
<Styledmodal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box bgcolor={"background.default"} color={"text.primary"} height={280} p={3} borderRadius={5} width={400}>
    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
    <Userbox>
      <Avatar
      sx={{ bgcolor: "lightcoral",height:32, width:32}} >HN</Avatar>
      <Typography variant='span' fontWeight={500}>Hasib Nirban</Typography>
    </Userbox>
    <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your Mind?"
          sx={{width:"100%"}}
          variant="standard"
        />
        <Stack direction={"row"} mt={1} mb={4} gap={1}>
          <EmojiEmotions color="primary"/><Image color="secondary"/><VideoCameraBack color="success"/>
          <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
          <Button>Post</Button>
          <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
  </Box>
</Styledmodal>
      </Box>
      );
}

export default Add;
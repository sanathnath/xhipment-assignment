import { Backdrop, Box, Button, Fade, Modal, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'
import { PostState } from '../contexts/PostContext'

function EditForm({info}) {
  const [open, setOpen] = useState(false);
  const { post, setPost } = PostState();

  const handleEditOpen = () => {
    setOpen(true);
  };
  const handleEditClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    let data = {...info, title: event.target.title.value,
                body: event.target.description.value }
    axios.put(`https://jsonplaceholder.typicode.com/posts/${info.id}`, data).then((res)=>{
      let arr = post.map((item)=>{
        if(item.id == res.data.id){
          return res.data;
        }else{
          return item;
        }
      })
      setPost(arr);
      setOpen(false);

    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div>
      <Button onClick={handleEditOpen}>Edit</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box zIndex="2000">
          <form onSubmit={handleSubmit}>
          <Box
              display="flex"
              flexDirection="column"
              backgroundColor="white"
              boxShadow="3px 2px 1px gray"
              padding="3rem"
              gap="2rem"
          >
            <TextField size="small" name="title" defaultValue={info.title} required/>
            <TextField size="small" name="description" defaultValue={info.body} multiline rows={4} required/>
            <Button type="submit" variant="contained">Done</Button>
          </Box>
          </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default EditForm;

import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { PostState } from "../contexts/PostContext";
import { UserState } from "../contexts/UserContext";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { user } = UserState();
  const { post, setPost } = PostState();

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(user);
    const data = { title: event.target.title.value, body: event.target.description.value ,userId:user.uid };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => {
        console.log(res.data);
        setPost([...post,res.data]);
        navigate('/');
      }).catch((err)=>{
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <Box
        height="100vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="Center"
      >
        <form onSubmit={handleSubmit}>
          <Box
            border=".5px solid gray"
            padding="3rem 2rem"
            gap="2rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <TextField name="title" label="title" size="small" required />
            <TextField
              name="description"
              label="description"
              size="small"
              multiline
              rows={4}
              required
            />
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              gap="1rem"
              justifyContent="end"
            >
              <Button variant="contained" size="small"
              onClick={()=>{navigate('/')}}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" size="small">
                Create
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default CreatePostPage;

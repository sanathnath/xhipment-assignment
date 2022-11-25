import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { PostState } from "../contexts/PostContext";
function HomePage() {
  const { post } = PostState();
  console.log(post);
  return (
    <>
      <Header />
      <Box padding="3rem 1rem" height="100vh">
        <Container>
          <Grid container spacing={3}>
            {post != undefined &&
              post.map((item) => {
                return (
                  <Grid key={item.id} item xs={12} sm={6}>
                    <PostCard info={item} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;

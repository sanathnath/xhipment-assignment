import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

function PostCard({ info, user }) {
  return (
    <Paper elevation={6}>
      <Box
        minHeight="15rem"
        padding="2rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box color="#1e3963" padding="1rem 0">
          <Typography variant="h5">{info.title}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">{info.body}</Typography>
        </Box>
        {(user != undefined || user != null) && <Box marginTop="2rem">
          <Button>Edit</Button>
          <Button color="error">Delete</Button>
        </Box>}
      </Box>
    </Paper>
  );
}

export default PostCard;

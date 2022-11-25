import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

function AccountPage() {
  return (
    <>
    <Header />
    <Box height="100vh" padding="2rem" display="flex" flexDirection="row">
      <Box borderRight="1px solid gray" padding="1rem" width="20%" display="flex" alignItems="center" flexDirection="column" >
          <Box bgcolor="lightslategray" borderRadius="50%" width="6rem" height="6rem" ></Box>
        <Box marginTop="2rem">
          <Typography variant="h6">Sanath nath</Typography>
          <Typography>sanathnath5@gmail.in</Typography>
        </Box>
        <Box marginTop="2rem">
          <Button variant="contained">Create post</Button>
        </Box>
      </Box>
      <Box width="80%">fd</Box>
    </Box>
    </>
  )
}

export default AccountPage
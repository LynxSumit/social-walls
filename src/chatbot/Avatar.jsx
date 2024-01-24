import { Person } from '@mui/icons-material'
import { Box } from '@mui/joy'
import React from 'react'

const Avatar = () => {
  return (
    <Box sx={{height : 20, width : 20, borderRadius : '50%', bgcolor : 'yellow'}}>
      <Person/>
    </Box>
  )
}

export default Avatar

import React from 'react'
import { styled } from '@mui/material/styles'
import { AppBar, Box, Grid, IconButton, Toolbar } from '@mui/material'
import Iconify from '@/components/iconify'
import Logo from '@/components/logo'
import Searchbar from "@/components/header/Searchbar";

const HEADER_MOBILE = 64

const HEADER_DESKTOP = 64

const StyledRoot = styled(AppBar)(({ theme }) => ({
  // ...bgBlur({ color: theme.palette.background.default }),
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${0}px)`
  }
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}))

function Header ({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <Grid
          container
          direction='row'
          columns={{
            lg: 12,
            xs: 2
          }}
        >
          {/* Brand */}
          <Grid
            item
            lg={2}
            xs={1}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                paddingLeft: {
                  lg: '40px',
                  xs: '0px'
                }
              }}
            >
              <IconButton
                onClick={onOpenNav}
                sx={{
                  color: 'text.primary',
                  display: { lg: 'none' }
                }}
              >
                <Iconify icon='eva:menu-2-fill' />
              </IconButton>
              <Logo />
            </Box>
          </Grid>

          {/*  tim kiem  */}
          <Grid
            item
            lg={7}
            md={0}
          >
            <Searchbar />
          </Grid>
        </Grid>
      </StyledToolbar>
    </StyledRoot>
  )
}

export default Header

const style = {
  width: '70%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24
}

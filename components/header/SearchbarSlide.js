'use client'

import React, { useState } from 'react'
import { Autocomplete, Button, ClickAwayListener, IconButton, Input, InputBase, Slide, Stack } from '@mui/material'
import Iconify from '@/components/iconify'
import { styled, useTheme } from '@mui/material/styles'
import useResponsive from '@/hooks/useResponsive'

const HEADER_MOBILE = 64

function SearchbarSlide () {
  const theme = useTheme()
  // const router = useRouter()
  const [open, setOpen] = useState(false)
  const isDesktop = useResponsive('up', 'lg')

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSearch = () => {
    // router.push(`/search?q=${autocompleteState.query}&search_type=${searchType}`)
    setOpen(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton
            onClick={handleOpen}
            sx={{
              display: isDesktop ? 'none' : 'block'
            }}
          >
            <Iconify icon='eva:search-fill' />
          </IconButton>
        )}

        <Slide direction='down' in={open} mountOnEnter unmountOnExit>
          <StyledRootSeachbar>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Input
                fullWidth
                autoFocus
                disableUnderline
                inputProps={{
                  'aria-label': 'search articles'
                }}
                sx={{ paddingLeft: 3, ml: 1, fontSize: '14px' }}
              />
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                py={1}
                spacing={2}
              >
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  defaultValue={options[0]}
                  clearIcon={null}
                  getOptionLabel={(option) => option.label}
                  options={options}
                  renderInput={(params) => {
                    const { InputLabelProps, InputProps, ...rest } = params
                    return <InputBase {...params.InputProps} {...rest} sx={{ width: '120px', fontSize: '14px', borderLeft: `1px solid ${theme.palette.grey[300]}`, paddingLeft: '8px' }} placeholder='Bài viết' />
                  }}
                />

              </Stack>
            </Stack>
            <Button
              variant='contained'
                            // color={theme.palette.grey[300]}
              onClick={handleSearch}
              aria-label='Search for keyword'
              type='button'
              sx={{
                borderRadius: 0,
                height: '40px',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                minWidth: '40px',
                // marginLeft: '12px',
                backgroundColor: theme.palette.grey[400],
                '&:hover': {
                  backgroundColor: theme.palette.grey[500]
                }
              }}
            >
              <Iconify icon='eva:search-fill' color={theme.palette.grey[900]} />
            </Button>
          </StyledRootSeachbar>
        </Slide>
      </div>
    </ClickAwayListener>
  )
}

export default SearchbarSlide

const StyledRootSeachbar = styled('div')(({ theme }) => ({
  // ...bgBlur({ color: theme.palette.background.default }),
  backgroundColor: theme.palette.background.default,
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 1),
  boxShadow: theme.customShadows.z8
}))

const options = [
  { label: 'Bài viết', value: 'articles_index' },
  { label: 'Câu hỏi', value: 'threads_index' }
]

'use client'

import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { Autocomplete, Button, Input, InputBase, Stack } from '@mui/material'
import Iconify from '@/components/iconify'
import { useRouter } from 'next/router'

function Searchbar () {
  const theme = useTheme()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [autocompleteState, setAutocompleteState] = React.useState({})
  const [searchType, setSearchType] = React.useState('articles_index')

  const handleSearch = () => {
    router.push(`/search?q=${autocompleteState.query}&search_type=${searchType}`)
    setAutocompleteState({})
    setOpen(false)
  }

  // const handleKeyDown = (e) => {
  //   console.log(e)
  // }

  return (
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
            onChange={(e, value) => {
              setSearchType(value.value)
            }}
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
  )
}

export default Searchbar

const StyledRootSeachbar = styled('div')(({ theme }) => ({
  width: '100%',
  maxHeight: '40px',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: 4,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}))

const options = [
  { label: 'Bài viết', value: 'articles_index' },
  { label: 'Câu hỏi', value: 'threads_index' }
]

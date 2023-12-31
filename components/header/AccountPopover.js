import React, { useContext, useState } from 'react'
import { Context } from '@/hooks/context'
// @mui
import { alpha } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Stack,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useEffectOnce } from 'react-use'
import { useRouter } from 'next/router'
import Link from 'next/link'
import account from '@/_mock/account'
// mocks_

// ----------------------------------------------------------------------

export default React.memo(function AccountPopover () {
  const router = useRouter()
  const [open, setOpen] = useState(null)
  const { user, setUser } = useContext(Context)
  // const lock = React.useRef(false)
  const [lock, startLock] = React.useTransition()
  const MENU_OPTIONS = [
    {
      label: 'Trang chủ',
      icon: 'eva:home-fill',
      url: '/'
    },
    {
      label: 'Trang cá nhân',
      icon: 'eva:person-fill',
      url: `/user/${user?.username}.${user?.id}`
    },
    {
      label: 'Cài đặt',
      icon: 'eva:settings-2-fill',
      url: '/settings'
    },
    {
      label: 'Tạo bài viết',
      icon: 'eva:settings-2-fill',
      url: '/new-article'
    }
  ]

  // useEffectOnce(() => {
  //   setUser(account)
  // })

  // console.log('AccountPopover')
  const handleOpen = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
    // console.log('handleClose')
  }

  const handleClick = (url) => {
    setOpen(null)
    // console.log('handleClick')
    router.push(url)
  }

  const handleLogout = () => {
    console.log('handleLogout')
    setUser(null)
    setOpen(null)
    router.push('/login')
  }
  // console.log('user', user)
  return (
    <>
      {user?.isAuth
        ? (
          <IconButton
            onClick={handleOpen}
            sx={{
              p: 0,
              marginLeft: '4px',
              ...(open && {
                '&:before': {
                  zIndex: 1,
                  content: "''",
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  position: 'absolute',
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8)

                }
              })
            }}
          >
            <Avatar
              src={user.profileImage}
              alt='photoURL'
              size='md'
              imgProps={{
                width: '500',
                height: '600',
                loading: 'lazy',
                title: 'avt-user'
              }}
            />
          </IconButton>
          )
        : (
          <Button
            type='button'
            component={Link}
            href='/login'
            variant='outlined'
            onClick={() => {
              // eslint-disable-next-line no-undef
              localStorage.setItem('currentPath', router.asPath)
            }}
            sx={{
              fontSize: '12px'
            }}
          >
            Login
          </Button>
          )}

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75
            }
          }
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2' noWrap>
            {user?.username}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClick(option.url)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Đăng xuất
        </MenuItem>
      </Popover>
    </>
  )
})

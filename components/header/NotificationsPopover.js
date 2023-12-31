import React, { useContext, useState } from 'react'
// @mui
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Popover,
  Tooltip,
  Typography
} from '@mui/material'
import Iconify from '@/components/iconify'
import Scrollbar from '@/components/scrollbar/Scrollbar'
import { fToNow } from '@/utils/formatTime'
import { Context } from '@/hooks/context'
import { faker } from '@faker-js/faker'
import { set, sub } from 'date-fns'
// utils
// components

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatar: null,
    type: 'order_placed',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isRead: true
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.fullName(),
    description: 'answered to your comment on the Minimal',
    avatar: '/assets/images/avatars/avatar_2.jpg',
    type: 'friend_interactive',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isRead: true
  },
  {
    id: faker.datatype.uuid(),
    title: 'You have new message',
    description: '5 unread messages',
    avatar: null,
    type: 'chat_message',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isRead: false
  },
  {
    id: faker.datatype.uuid(),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatar: null,
    type: 'mail',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isRead: false
  },
  {
    id: faker.datatype.uuid(),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatar: null,
    type: 'order_shipped',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isRead: false
  }
]

// ----------------------------------------------------------------------

export default function NotificationsPopover () {
  const { user } = useContext(Context)
  // const { message } = useWebSocket('notifications')
  const [notifications, setNotifications] = useState(NOTIFICATIONS)

  const totalUnRead = notifications.filter((item) => item.isRead === false).length

  const [open, setOpen] = useState(null)

  const handleOpen = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isRead: true
      }))
    )
  }
  return (
    <>
      <IconButton type='button' color={open ? 'primary' : 'default'} onClick={handleOpen} sx={{ width: 40, height: 40 }}>
        <Badge badgeContent={totalUnRead} color='primary'>
          <Iconify icon='solar:bell-linear' />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 0,
            ml: -2,
            height: 900,
            width: 360
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='subtitle1'>Notifications</Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Bạn có {totalUnRead} thông báo mới
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=' Mark all as read'>
              <IconButton color='primary' onClick={handleMarkAllAsRead}>
                <Iconify icon='eva:done-all-fill' />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar sx={{ height: 'auto' }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Chưa xem
              </ListSubheader>
                        }
          >
            {/* eslint-disable-next-line no-return-assign */}
            {notifications.filter((item) => item.isRead === false).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                setOpen={setOpen}
              />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Đã xem
              </ListSubheader>
                        }
          >
            {notifications.filter((item) => item.isRead === true).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                setOpen={setOpen}
              />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            Xem tất cả
          </Button>
        </Box>
      </Popover>
    </>
  )
}

// ----------------------------------------------------------------------

function NotificationItem ({ notification, setOpen }) {
  const { title } = renderContent(notification)
  const handleClick = () => {
    console.log('readed')
  }

  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(!notification.isRead && {
          bgcolor: 'action.selected'
        })
      }}
    >
      <ListItemAvatar>
        <Avatar
          src={notification.avatar ?? '/assets/icons/ic_notification_chat.svg'}
          sx={{ bgcolor: 'background.neutral' }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant='caption'
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled'
            }}
          >
            <Iconify icon='eva:clock-outline' sx={{ mr: 0.5, width: 16, height: 16 }} />
            {fToNow(notification.createdAt)}
          </Typography>
                }
      />
    </ListItemButton>
  )
}

// ----------------------------------------------------------------------

function renderContent (notification) {
  console.log(notification)
  const title = (
    <Typography variant='subtitle2'>
      {notification.title}
      <Typography component='span' variant='body2' sx={{ pl: 0.5, color: 'text.secondary' }}>
        {notification.description}:
      </Typography>
      <Typography component='span' variant='body2' sx={{ pl: 0.5, color: 'text.secondary' }}>
        {/*{notification?.thread?.title}*/}
        {/*{notification?.articles?.title}*/}
      </Typography>
    </Typography>
  )

  if (notification.type === 'order_placed') {
    return {
      avatar: <img alt={notification.title} src='/assets/icons/ic_notification_package.svg' />,
      title
    }
  }
  if (notification.type === 'order_shipped') {
    return {
      avatar: <img alt={notification.title} src='/assets/icons/ic_notification_shipping.svg' />,
      title
    }
  }
  if (notification.type === 'mail') {
    return {
      avatar: <img alt={notification.title} src='/assets/icons/ic_notification_mail.svg' />,
      title
    }
  }
  if (notification.type === 'chat_message') {
    return {
      avatar: <img alt={notification.title} src='/assets/icons/ic_notification_chat.svg' />,
      title
    }
  }
  return {
    avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
    title
  }
}

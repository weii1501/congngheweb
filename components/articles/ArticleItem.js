import React from 'react'
import { faker } from '@faker-js/faker'
import {StyledDate, Styledp, StyledTitle, StyledUsername} from '@/components/articles/styles'
import { Avatar, Box, Grid, Stack } from '@mui/material'
import { Context } from '@/hooks/context'
import {fDateTime} from "@/utils/formatTime";

function ArticleItem () {
  const { user } = React.useContext(Context)
  console.log(user)
  const statistics = [
    {
      icon: 'iconamoon:eye-light',
      number: faker.datatype.number()
    },
    {
      icon: 'bx:comment',
      number: faker.datatype.number()
    },
    {
      icon: 'mdi:like-outline',
      number: faker.datatype.number()
    }
  ]

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <StyledTitle href='#'>
        Tiêu đề
      </StyledTitle>

      <Grid
        container
        spacing={1}
        direction='row'
        columns={12}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='start'
          spacing={1}
          pl={1}
          mt={1}
        >
          <Avatar
            src={user?.profileImage}
            alt='avatar'
            sx={{
              width: 14,
              height: 14
            }}
            imgProps={{
              width: 14,
              height: 14,
              loading: 'eager'
            }}
          />

          <StyledUsername href='#'>
            {user?.username}
          </StyledUsername>
          <span>
            -
          </span>
          <StyledDate>
            {fDateTime(faker.date.past())}
          </StyledDate>
        </Stack>
      </Grid>

      <Styledp>
        Trang web tại https://www.office.com/?auth=2 có thể tạm thời không hoạt động hay được chuyển vĩnh viễn sang địa chỉ web mới.
      </Styledp>
    </Box>
  )
}

export default ArticleItem

import React from 'react'
import { faker } from '@faker-js/faker'
import { StyledDate, Styledp, StyledTag, StyledTitle, StyledUsername } from '@/components/articles/styles'
import { Avatar, Box, Grid, Stack } from '@mui/material'
import { Context } from '@/hooks/context'
import { fDateTime } from '@/utils/formatTime'
import StatisticsItem from '@/components/articles/StatisticsItem'
import { v4 as uuidv4 } from 'uuid'

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
        Trên tay BMW 735i M sport G70 chính hãng: Ghế da Merino cao cấp, giá 4,999 tỷ Đồng
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
        BMW 735i sở hữu gói trang bị M sport sẽ cho cái nhìn khác biệt rất đáng kể so với phiên bản Pure Excellence trước đó. Với cách tạo hình mạch lạc trong đường nét và phối màu tạo tương phản mạnh, chiếc 735i M sport thể hiện rõ nét được sự thể thao đồng thời các nét thiết kế này cũng hoà nhập tốt hơn với cụm đèn hai tầng và "đôi quả thận" cỡ lớn.
      </Styledp>

      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        flexWrap='wrap'
      >
        <Stack
          direction='row'
          spacing={1}
          alignItems='start'
          justifyContent='start'
          flexWrap='wrap'
          useFlexGap
        >
          <StyledTag href='#'>
            Thẻ 1
          </StyledTag>

          <StyledTag href='#'>
            Thẻ 2
          </StyledTag>

          <StyledTag href='#'>
            Thẻ 3
          </StyledTag>
        </Stack>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='end'
          spacing={3}
          sx={{
            flexGrow: 1
          }}
        >
          {statistics.map((item) => (
            <StatisticsItem key={uuidv4()} icon={item.icon} number={item.number} />
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default ArticleItem

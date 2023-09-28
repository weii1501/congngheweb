import React from 'react'
import {StyledDate, Styledp, StyledTag, StyledTitle, StyledUsername} from '@/components/articles/styles'
import {Avatar, Box, Grid, Stack} from '@mui/material'
import {fDateTime} from '@/utils/formatTime'
import {v4 as uuidv4} from 'uuid'
import {useTheme} from '@mui/material/styles'
import {numberFormatter} from '@/utils/utils'
import {faker} from '@faker-js/faker'
import {Context} from '@/hooks/context'

function ThreadItem () {
  const theme = useTheme()
  const { user } = React.useContext(Context)
  const statistics = [
      {
          title: 'Trả lời',
          number: faker.datatype.number()
      },
      {
      title: 'Bình chọn',
      number: faker.datatype.number()
    },
    {
      title: 'Lượt xem',
      number: faker.datatype.number()
    }
  ]
  return (
    <Grid
      container
      direction={{
        lg: 'row',
        md: 'column',
        sm: 'column',
        xs: 'column'
      }}
      columns={16}
      spacing={1}
    >
      <Grid
        item
        xs={2}
      >
        <Stack
          direction={{
            xs: 'row',
            sm: 'row',
            md: 'row',
            lg: 'column'
          }}
          alignItems='end'
          justifyContent='start'
          mt='6px'
          pr={2}
          spacing={1}
        >
          {statistics.map((statistic) => (
            <Box
              key={uuidv4()}
              component='span'
              sx={{
                width: 'auto',
                height: 'auto',
                fontSize: '12px',
                color: theme.palette.grey[600]
              }}
            >
              {numberFormatter(statistic.number, 0)} {statistic.title}
            </Box>
          ))}
        </Stack>
      </Grid>
      {/*  cmt */}
      <Grid
        item
        xs={14}
      >
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <StyledTitle
            href='#'
            sx={{
              fontSize: '18px',
              mb: 1
            }}
          >
            Cúm gia cầm H5N1 đang có khả năng gây nguy hiểm cho sự sống còn của chim cánh cụt tại Nam Cực
          </StyledTitle>
          <Grid
            container
            spacing={1}
            direction='row'
            columns={12}
          />
          <Styledp>
            Điều này được thể hiện thông qua lời cảnh báo của người đứng đầu văn phòng phát triển đối ngoại và khối thịnh vượng chung của Anh. Theo lời của bác sỹ Jane Rumble với tình trạng dịch cúm gia cầm đã tàn sát hàng triệu sinh vật hồi năm ngoái thì việc chúng xuất hiện ở vùng cực sẽ chỉ là khi nào, chứ không phải là có xuất hiện hay không.
          </Styledp>

          <Grid
            container
            spacing={1}
            direction={{
              lg: 'row',
              md: 'row',
              sm: 'row',
              xs: 'column-reverse'
            }}
            columns={{
              lg: 10,
              md: 10,
              sm: 10,
              xs: 1
            }}
          >
            <Grid
              item
              lg={7}
              md={7}
              sm={7}
              xs={1}
            >
              <Stack
                fullWidth
                direction='row'
                spacing={1}
                alignItems='start'
                justifyContent='start'
                flexWrap='wrap'
                useFlexGap
              >
                <StyledTag href='#'>
                  Cúm gia cầm
                </StyledTag>

                <StyledTag href='#'>
                  Chim cánh cụt
                </StyledTag>

                <StyledTag href='#'>
                  Nam Cực
                </StyledTag>
              </Stack>
            </Grid>

            <Grid
              item
              lg={3}
              md={3}
              sm={3}
              xs={1}
            >
              <Stack
                direction='row'
                alignItems='center'
                justifyContent={{
                  lg: 'end',
                  md: 'end',
                  sm: 'start',
                  xs: 'start'
                }}
                spacing={1}
                pl={1}
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
                    objectFit: 'cover',
                    loading: 'lazy'
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
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ThreadItem

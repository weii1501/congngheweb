import React from 'react'
import BreadcrumbsContainer from '@/components/breadcrumbs/BreadcrumbsContainer'
import { Box, Container, Divider, Stack, Tab, Tabs } from '@mui/material'
import Iconify from '@/components/iconify'
import { styled, useTheme } from '@mui/material/styles'
import { Pagination, PaginationItem } from '@mui/lab'
import { buildFullUrl } from '@/utils/utils'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ArticleItem from '@/components/articles/ArticleItem'
import ThreadItem from '@/components/threads/ThreadItem'
import NoSSR from '@/components/NoSSR'

const round = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export async function getServerSideProps (context) {
  const breadcrumbs = [
    {
      label: 'Trang chủ',
      url: '/'
    }
  ]

  return {
    props: {
      breadcrumbs
    }
  }
}

function Home ({ breadcrumbs }) {
  const pageDesc = 'Nơi mọi người có thể chia sẻ kiến thức, tham gia thảo luận và tìm kiếm giải đáp về lĩnh vực tin học cũng như công nghệ thông tin tại Việt Nam.'
  const router = useRouter()
  const [value, setValue] = React.useState('article')
  const theme = useTheme()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <BreadcrumbsContainer breadcrumbs={breadcrumbs} />

      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='start'
          spacing={{
            lg: 1,
            md: 1,
            sm: 1,
            xs: 0
          }}
          mb={2}
        >
          <Iconify
            icon='uiw:message'
            width={24}
            height={24}
            sx={{
              display: {
                lg: 'block',
                md: 'block',
                sm: 'block',
                xs: 'none'
              }
            }}
          />
          <Styledh1>
            DIỄN ĐÀN CÔNG NGHỆ THÔNG TIN
          </Styledh1>
        </Stack>

        <Styledp>
          {pageDesc}
        </Styledp>

        <Box sx={{ width: '100%', mb: 1 }}>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Tabs
              onChange={handleChange}
              value={value}
              aria-label='Tabs where each tab needs to be selected manually'
              sx={{
                minHeight: 'unset',
                '& .MuiTabs-indicator': {
                  top: 0
                },
                '& .MuiTab-root': {
                  minWidth: 'unset',
                  minHeight: 'unset',
                  fontWeight: 500,
                  fontSize: '14px',
                  padding: '8px 0',
                  marginRight: '16px'
                }
              }}
            >
              <Tab value='article' label='Bài viết' />
              <Tab value='thread' label='Câu hỏi' />
            </Tabs>

            {/* <Filter /> */}
          </Stack>
        </Box>
        <Divider flexItem sx={{ borderColor: theme.palette.grey[200] }} />
      </Container>

      <Container>
        <Stack
          direction='column'
          spacing={3}
          alignItems='start'
          justifyContent='start'
          mt={2}
          divider={<Divider flexItem sx={{ borderColor: theme.palette.grey[200] }} />}
        >
          {value === 'article' && round.map((item, index) => (
            <ArticleItem key={index} />
          ))}

          {value === 'thread' && round.map((item, index) => (
            <ThreadItem key={index} />
          ))}
        </Stack>

        <Divider flexItem sx={{ borderColor: theme.palette.grey[200], mt: 4 }} />
      </Container>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          mt: 1
        }}
      >
        <Stack spacing={2} my={1}>
          <Pagination
            component={Link}
            renderItem={(item) => {
              console.log(item)
              return (
                <PaginationItem
                  component={Link}
                  href={buildFullUrl(
                    router.asPath.split('?')[0],
                    {
                      page: item.page,
                      filter: router.query.filter
                    })}
                  {...item}
                />
              )
            }}
            count={100}
            shape='rounded'
            size='small'
            defaultPage={1}
              // onChange={onChange}
            page={parseInt(router?.query?.page || 1)}
            sx={{
              '& .MuiPaginationItem-root': {
                color: theme.palette.grey[600]
              }
            }}
          />
        </Stack>
      </Container>
    </>
  )
}

export default NoSSR(Home)

const Styledh1 = styled('h1')(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 600,
  // lineHeight: '40px',
  color: theme.palette.text.primary,
  marginBottom: '16px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '24px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '16px'
  }
}))

export const Styledp = styled('p')(({ theme }) => ({
  fontSize: '14px'
}))

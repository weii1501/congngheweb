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

export default function Home ({ breadcrumbs }) {
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
        <Stack direction='row' alignItems='center' justifyContent='start' spacing={1} mb={2}>
          <Iconify icon='uiw:message' width={24} height={24} />
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
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </Container>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          pt: 1
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

const Styledh1 = styled('h1')(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '40px',
  color: theme.palette.text.primary,
  marginBottom: '16px'
}))

export const Styledp = styled('p')(({ theme }) => ({
  fontSize: '14px'
}))

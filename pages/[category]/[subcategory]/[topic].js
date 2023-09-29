import React from 'react'
import { CATEGORIES } from '@/_mock/categories'
import BreadcrumbsContainer from '@/components/breadcrumbs/BreadcrumbsContainer'
import { Box, Container, Divider, Stack, Tab, Tabs } from '@mui/material'
import Iconify from '@/components/iconify'
import { Styledh1 } from '@/styles'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import Filter from '@/components/Filter'
import ArticleItem from '@/components/articles/ArticleItem'
import ThreadItem from '@/components/threads/ThreadItem'

export async function getServerSideProps (context) {
  const { topic: topicParam, subcategory, category } = context.params
  const subcategorydata = await CATEGORIES.find((item) => item.slug === category)
    .children.find((item) => item.slug === subcategory)
  const topic = await CATEGORIES.find((item) => item.slug === category)
    .children.find((item) => item.slug === subcategory)
    .topics.find((topic) => topic.slug === topicParam)

  const breadcrumbs = [
    {
      label: 'Trang chủ',
      url: '/'
    },
    {
      label: subcategorydata?.parent?.name,
      url: `/${subcategorydata?.parent?.slug}`
    },
    {
      label: subcategorydata?.name,
      url: `/${subcategorydata?.parent?.slug}/${subcategorydata?.slug}`
    },
    {
      label: topic?.title,
      url: `/${subcategorydata?.parent?.slug}/${subcategorydata?.slug}/${topic?.slug}`
    }
  ]

  return {
    props: {
      topic,
      breadcrumbs
    }
  }
}

function TopicPage ({ topic, breadcrumbs }) {
  const router = useRouter()
  const theme = useTheme()
  const [value, setValue] = React.useState('article')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log('topic:', topic)
  console.log('breadcrumbs:', breadcrumbs)
  return (
    <>
      <BreadcrumbsContainer breadcrumbs={breadcrumbs} />

      <Container
        sx={{
          mb: 3
        }}
      >

        <Stack direction='row' alignItems='center' justifyContent='start' spacing={1} mb={0} mt={1}>
          <Iconify icon={topic.icon ?? 'uiw:message'} width={24} height={24} />
          <Styledh1 sx={{ marginBottom: '4px' }}>
            Chủ đề: {topic.title} {topic?.otherName && topic?.otherName !== 'Đang cập nhật' && `(${topic?.otherName})`}
          </Styledh1>
        </Stack>

        <Styledp sx={{ marginBottom: '20px' }}>
          {topic.description}
        </Styledp>

        <Box sx={{ width: '100%' }}>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            md={2}
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

            <Filter />
          </Stack>
        </Box>

        <Divider flexItem sx={{ mt: 1 }} />
      </Container>

      <Container>
        <Stack
          fullWidth
          direction='column'
          spacing={3}
          alignItems='start'
          justifyContent='start'
          divider={<Divider flexItem sx={{ borderColor: theme.palette.grey[200] }} />}
        >
          {value === 'article' && round.map((item, index) => (
            <ArticleItem key={index} />
          ))}

          {value === 'thread' && round.map((item, index) => (
            <ThreadItem key={index} />
          ))}
        </Stack>

        <Divider flexItem sx={{ borderColor: theme.palette.grey[200], marginTop: '32px' }} />
      </Container>
    </>
  )
}

export default TopicPage

const round = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Styledp = styled('p')(({ theme }) => ({
  fontSize: '14px'
}))

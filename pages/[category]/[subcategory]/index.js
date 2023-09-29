import React from 'react'
import { CATEGORIES } from '@/_mock/categories'
import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import BreadcrumbsContainer from '@/components/breadcrumbs/BreadcrumbsContainer'
import { Container, Divider, Stack } from '@mui/material'
import Iconify from '@/components/iconify'
import { Styledh1 } from '@/styles'
import TopicItem from '@/components/topic/TopicItem'
import { v4 as uuidv4 } from 'uuid'

export async function getServerSideProps (context) {
  const { category, subcategory } = context.params
  const data = await CATEGORIES.find((item) => item.slug === category).children.find((item) => item.slug === subcategory)
  const breadcrumbs = [
    {
      label: 'Trang chủ',
      url: '/'
    },
    {
      label: data?.parent?.name,
      url: `/${data?.parent?.slug}`
    },
    {
      label: data?.name,
      url: `/${data?.parent?.slug}/${data?.slug}`
    }
  ]

  return {
    props: {
      data,
      breadcrumbs
    }
  }
}

function Index ({ data, breadcrumbs }) {
  const router = useRouter()
  const theme = useTheme()
  console.log('data:', data)
  console.log('breadcrumbs:', breadcrumbs)
  return (
    <>
      <BreadcrumbsContainer breadcrumbs={breadcrumbs} />

      <Container
        sx={{
          mb: 3
        }}
      >
        <Stack direction='row' alignItems='center' justifyContent='start' spacing={1} mb={2} mt={1}>
          <Iconify icon={data.icon ?? 'uiw:message'} width={24} height={24} />
          <Styledh1>
            Chuyên mục: {data.name} {data?.otherName && data.otherName !== 'Đang cập nhật' && `(${data?.otherName})`}
          </Styledh1>
        </Stack>

        <Styledp>
          {data.description}
        </Styledp>
      </Container>

      <Container>
        <Stack
          direction='row'
          spacing={0}
          alignItems='center'
          justifyContent='start'
          mb={1}
        >
          <StyledTopic>Chủ đề</StyledTopic>
          <StyledCell>Bài viết</StyledCell>
          <StyledCell>Câu hỏi</StyledCell>
        </Stack>

        <Divider flexItem sx={{ borderColor: theme.palette.grey[300], borderBottomWidth: 'unset' }} />

        {data?.topics?.map((topic, index) => (
          <TopicItem key={uuidv4()} topic={topic} />
        ))}

      </Container>
    </>
  )
}

export default Index

const StyledTopic = styled('span')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold',
  color: theme.palette.grey[600],
  width: 'calc(100% - 160px)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    width: 'calc(100% - 120px)'
  }
}))

const StyledCell = styled('span')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold',
  color: theme.palette.grey[600],
  width: '80px',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '60px'
  }
}))

const Styledp = styled('p')(({ theme }) => ({
  fontSize: '14px'
}))

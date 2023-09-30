import { styled } from '@mui/material/styles'

export const Styledh1 = styled('h1')(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: 'auto',
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
  }
}))

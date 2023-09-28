import '@/styles/main.scss'

import Head from 'next/head'
import React from 'react'
import { useAmp } from 'next/amp'
import { Provider } from 'react-redux'
import store from '../store'
import NextProgressbar from '../components/NextProgressbar'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/vi'
import { ScopedCssBaseline } from '@mui/material'
import ThemeProvider from '@/theme'
import Layout from '@/components/Layout'
import UserProvider from '@/hooks/context'
import { useRouter } from 'next/router'

dayjs.extend(relativeTime)
dayjs.locale('vi')

export default function App ({ Component, pageProps }) {
  const router = useRouter()
  const isAmp = useAmp()
  // const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      {!isAmp && (
        <NextProgressbar
          nonce='my-nonce'
          showOnShallow
          color='#65BFE7'
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          options={{
            showSpinner: false
          }}
        />
      )}

      <Head>
        {!isAmp && (
          <>
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' key='viewport' />
            <meta httpEquiv='x-ua-compatible' content='ie=edge' />

            <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
            <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
            <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
            <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
            <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
            <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
            <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
            <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
            <link rel='manifest' href='/favicon/manifest.json' />
            <link rel='shortcut icon' href='/favicon/favicon.ico' type='image/x-icon' />
          </>
        )}
      </Head>

      <ThemeProvider>
        <ScopedCssBaseline>
          <Provider store={store()}>
            {router.pathname === '/login' || router.pathname === '/register'
              ? (
                <UserProvider>
                  <GoogleAnalytics trackPageViews />
                  <Component {...pageProps} />
                </UserProvider>
                )
              : (
                <UserProvider>
                  <Layout>
                    <GoogleAnalytics trackPageViews />
                    <Component {...pageProps} />
                  </Layout>
                </UserProvider>
                )}
          </Provider>
        </ScopedCssBaseline>
      </ThemeProvider>
    </>
  )
}

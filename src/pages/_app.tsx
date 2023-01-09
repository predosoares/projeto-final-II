/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Inter } from '@next/font/google'
import { Provider } from 'jotai'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { UserPreferencesProvider } from 'contexts/UserPreferencesContext'

import Layout from 'components/Layout'

import 'styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <UserPreferencesProvider>
      <Provider>
        <Layout className={inter.className}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UserPreferencesProvider>
  )
}

export default MyApp

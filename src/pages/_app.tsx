import { Inter } from '@next/font/google'
import clsx from 'clsx'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'

import { UserPreferencesProvider } from 'contexts/UserPreferencesContext'

import 'styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className={clsx('__next__wrapper', inter.className)}>
      <UserPreferencesProvider>
        <Component {...pageProps} />
      </UserPreferencesProvider>
    </div>
  )
}

export default MyApp

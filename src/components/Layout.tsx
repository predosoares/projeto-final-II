import clsx from 'clsx'
import { ReactNode } from 'react'

import Cursor from './Cursor'
import Header from './Header'

interface ILayoutProps {
  children: ReactNode
  className?: string
}

const Layout = ({ children, className = '' }: ILayoutProps) => {
  return (
    <div className={clsx('layout', className)}>
      <Cursor />
      <Header />
      {children}
    </div>
  )
}

export default Layout

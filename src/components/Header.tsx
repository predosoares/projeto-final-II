import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ArrowLeft as ArrowLeftIcon } from 'phosphor-react'

import { DropdownConfigMenu } from './Dropdown'

const Header = () => {
  const router = useRouter()

  const showBackBtn = router.pathname.match('chapter')

  const handleClickOnBack = () => {
    router.back()
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__group --left">
          {showBackBtn && (
            <button
              className={clsx('btn')}
              type="button"
              onClick={handleClickOnBack}
            >
              <ArrowLeftIcon className="btn__icon" />
              Voltar
            </button>
          )}
        </div>

        <div className="header__group --right">
          <DropdownConfigMenu />
        </div>
      </div>
    </header>
  )
}

export default Header

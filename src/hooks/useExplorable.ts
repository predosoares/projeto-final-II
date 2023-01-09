import { useState } from 'react'

enum ExplorableProgress {
  NOT_STARTED,
  START,
  DEVELOP,
  EXPLORE,
  FINISHED,
}

const useExplorable = () => {
  const [progress, setProgress] = useState<ExplorableProgress>(
    ExplorableProgress.NOT_STARTED,
  )

  return {
    progress,
    setProgress,
  }
}

export { useExplorable, ExplorableProgress }

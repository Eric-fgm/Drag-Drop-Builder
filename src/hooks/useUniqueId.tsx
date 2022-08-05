import { useMemo } from 'react'

let idCounter = 0

const useUniqueId = (): number => {
  const id = useMemo(() => idCounter++, [])
  return id
}

export default useUniqueId

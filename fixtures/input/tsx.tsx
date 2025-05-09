import { useEffect, useState } from 'react'

export const a = <div>hello</div>

export function Comp() {
  const [count, setCount] = useState(0)

  if (count) {
    useState()
  }

  useEffect(() => {
    console.log(count)
  }, [])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>add</button>
      {[1, 2, 3].map((i) => (
        <div>{i}</div>
      ))}
    </div>
  )
}

import React from 'react'

export function AsyncUseEffect() {
  const [content, setContent] = React.useState<string>('')

  React.useEffect(() => {
    let cancelled = false

    const file = new File(['Hello world'], 'test.txt')

    const reader = new FileReader()
    reader.onload = () => {
      if (!cancelled) {
        setContent(reader.result as string)
      }
    }

    reader.onerror = () => {
      if (!cancelled) {
        console.error('File read error')
      }
    }

    reader.readAsText(file)

    return () => {
      cancelled = true
    }
  }, [])


  // bad solution, but it works
  
  // React.useEffect(async () => {
  //   let cancelled = false

  //   const file = await  new File(['Hello world'], 'test.txt')

  //   const reader = new FileReader()
  //   reader.onload = () => {
  //     if (!cancelled) {
  //       setContent(reader.result as string)
  //     }
  //   }

  //   reader.onerror = () => {
  //     if (!cancelled) {
  //       console.error('File read error')
  //     }
  //   }

  //   reader.readAsText(file)

  //   return () => {
  //     cancelled = true
  //   }
  // }, [])

  return <pre>{content}</pre>
}

import React from "react"

function MyInput1({ innerRef }: { innerRef: React.RefObject<HTMLInputElement | null> }) {
  console.log('MyInput1 render')
  return <input ref={innerRef} />
}

export function InnerRefExample() {
  // const ref = React.useRef<HTMLInputElement>(null)

  // React.useEffect(() => {
  //   // ⚠️ Иногда null
  //   ref.current?.focus()
  // }, [])

  // return <MyInput1 innerRef={ref} />
    const ref = React.useRef<HTMLInputElement>(null)
    const [show, setShow] = React.useState(false)

    // ⚠️ имитируем concurrent / delayed mount
    React.useEffect(() => {
      // сначала родитель смонтирован, эффекты запланированы
      setTimeout(() => {
        setShow(true)
      }, 0)
    }, [])

    React.useEffect(() => {
      console.log('effect run, ref =', ref.current)
      ref.current?.focus()
    }, [])

    return (
      <div>
        <p>InnerRef demo</p>
        {show ? <MyInput1 innerRef={ref} /> : null}
      </div>
    )
}

const MyInput2 = React.forwardRef<HTMLInputElement>((props, ref) => {
  console.log('MyInput2 render')
  return <input ref={ref} />
})

export function ForwardRefExample() {
  const ref = React.useRef<HTMLInputElement>(null)
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 0)
  }, [])

  React.useEffect(() => {
    console.log('ForwardRefExample effect run, ref =', ref.current)
    ref.current?.focus()
  }, [])

  return (
    <div>
      <p>ForwardRef demo</p>
      {show ? <MyInput2 ref={ref} /> : null}
    </div>
  )
}

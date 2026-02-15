export type Greeting = `Hello, ${string}`
const a: Greeting = 'Hello, John'   // ✅
// const b: Greeting = 'Hi, John'      // ❌

// example
type Direction = 'top' | 'bottom'
type CSSClass = `margin-${Direction}`
// 'margin-top' | 'margin-bottom'


//example
type Events = 'click' | 'focus' | 'blur'
type DOMEvent = `on${Capitalize<Events>}`
// 'onClick' | 'onFocus' | 'onBlur'



// API routes

type Entity = 'users' | 'products'
type Id = string

type ApiRoute = `/api/${Entity}/${Id}`

const r: ApiRoute = '/api/users/123' // ✅
// const r2: ApiRoute = '/api/orders/123' // ❌
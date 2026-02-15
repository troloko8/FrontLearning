export function identity<T>(value: T): T {
    return value
}


const str: string = identity<string>('hello')
const num: number = identity<number>(2+2)
const obj = identity<{name: string}>({name: 'string'})

console.log({str})

//   - - - --  

function getFirst<T>(arr: T[]): T {
    return arr[0]
}

const num1 = getFirst([1, 2, 3])      // number
const str2 = getFirst(['a', 'b'])     // string

// Ограничения (Constraints)

function getLength<T extends { length: number }>(value: T) {
    return value.length
}

getLength('hello')      // ok
getLength([1, 2])       // ok
getLength({length: 3})       // ok
// getLength({length: ''})       // not ok
// getLength(123)          // ошибка



function mapObject<K extends string, V>(
    key: K,
    value: V
): Record<K, V> {
    return { [key]: value } as Record<K, V>
}

mapObject('blaBo', 2)
mapObject('blaBo', 's')
mapObject('blaBo',[])
mapObject('blaBo',{bla:'bla'})

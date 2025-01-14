function wrapInArray<T>(value: T): T[] {
    return [value];
}
console.log(wrapInArray(5));      
console.log(wrapInArray("hello"));

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}


const obj1 = { name: "Alice" };
const obj2 = { age: 30 };

console.log(mergeObjects(obj1, obj2));



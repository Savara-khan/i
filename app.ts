import bookData from './bookstore.json'
type  customer = {
    name:string;
    email:string;
    phone:string;
}

const cart: (typeof bookData[number])[] = [];

const Book = (book:typeof bookData[number], index:number ) => {
    return `
        <li data-index= ${index}">${book.title}</li>
    `
}


const Books= (books: typeof bookData) => {
    return `
    <ul>
     ${books.map (book => {
        const originalIndex = bookData.indexOf(book)
        return `
        <li data-index= ${originalIndex}>${book.title}</li>
        `
     }).join ('')}
    </ul>

    `
}

const render = (books: typeof bookData, query: string = '')=> {
    document.getElementById('results')!.innerHTML= Books(books.filter(book => {
        return book.title.toLowerCase().includes(query.toLowerCase())
    }));
}

document.getElementById('search-input')?.addEventListener('keyup', (event) => {
    const query = (event.target as HTMLInputElement).value
    
    render(bookData, query)
})
document.getElementById('search-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
})

document.getElementById('results')?.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLLIElement) )return
   
    (event.target as HTMLLIElement).classList.toggle('selected')
})
render(bookData)
    
// app 




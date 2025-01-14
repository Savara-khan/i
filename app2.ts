import bookData from './bookstore.json'

// Define the core interfaces
type Book = typeof bookData[number]

interface Customer {
    id: number;
    name: string;
    email: string;
    membershipLevel: "regular" | "premium";
}

interface Customer {
    id: number;
    name: string;
    email: string;
    membershipLevel: "regular" | "premium";
}

const updateStock = (bookId: string, quantity: number): Book => {
    const book = bookData.find(b => b.book_id === bookId);
    if (!book) {
        throw new Error("Book not found");
    }
    book.stock_quantity += quantity;
    return book;
}

interface CartItem {
    book: Book;
    quantity: number;
}

class ShoppingCart {
    public items: CartItem[] = [];

    addItem(book: Book, quantity: number): void {
        if (book.stock_quantity < quantity) {
            throw new Error("Insufficient stock");
        }

        const existingItem = this.items.find(item => item.book.book_id === book.book_id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ book, quantity });
        }
        book.stock_quantity -= quantity;
    }

    getTotal(): number {
        return this.items.reduce((total, item) => 
            total + (item.book.price * item.quantity), 0);
    }
}

interface Order {
    id: number;
    customer: Customer;
    items: CartItem[];
    total: number;
    date: Date;
    status: "pending" | "completed" | "cancelled";
}

class OrderProcessor {
    private orders: Order[] = [];

    createOrder(customer: Customer, cart: ShoppingCart): Order {
        const order: Order = {
            id: this.orders.length + 1,
            customer,
            items: [...cart.items],
            total: cart.getTotal(),
            date: new Date(),
            status: "pending"
        };
        this.orders.push(order);
        return order;
    }

    processOrder(orderId: number): void {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) {
            throw new Error("Order not found");
        }
        order.status = "completed";
    }
}

//Class 
// import bookData from './bookstore.json'

// // Define the core interfaces
// type Book = typeof bookData[number]

// interface Customer {
//     id: number;
//     name: string;
//     email: string;
//     membershipLevel: "regular" | "premium";
// }

// interface Customer {
//     id: number;
//     name: string;
//     email: string;
//     membershipLevel: "regular" | "premium";
// }

// const updateStock = (bookId: string, quantity: number): Book => {
//     const book = bookData.find(book => book.book_id === bookId);
//     if (!book) {
//         throw new Error("Book not found");
//     }
//     book.stock_quantity += quantity;
//     return book
// }

// interface CartItem {
//     book: Book
//     quantity: number
// }

// type Item = {
//     book: Book
//     quantity: number
// }

// class BaseShoppingCart {
//     items: CartItem[]
//     addItem(book: Book, quantity: number): void {

//     }
//     getTotal(): number {
//         return 1
//     }
// }

// class ShoppingCart extends BaseShoppingCart {
//     items: CartItem[] = [];

//     addItem(book: Book, quantity: number): void {
//         if (book.stock_quantity < quantity) {
//             throw new Error("Insufficient stock");
//         }

//         const existingItem = this.items.find(item => item.book.book_id === book.book_id);
//         if (existingItem) {
//             existingItem.quantity += quantity;
//         } else {
//             this.items.push({ book, quantity });
//         }
//         book.stock_quantity -= quantity;
//     }

//     getTotal(): number {
//         return this.items.reduce((total, item) => 
//             total + (item.book.price * item.quantity), 0);
//     }
// }

// type Order = {
//     id: number;
//     customer: Customer;
//     items: CartItem[];
//     total: number;
//     date: Date,
//     status: "pending";
// } | {
//     id: number;
//     customer: Customer;
//     items: CartItem[];
//     total: number;
//     date: Date,
//     status: "completed" | "cancelled"
// }


// class OrderProcessor {
//     orders: Order[] = [];

//     createOrder(customer: Customer, cart: ShoppingCart): Order {
//         const order: Order = {
//             id: this.orders.length + 1,
//             customer,
//             items: [...cart.items],
//             total: cart.getTotal(),
//             date: new Date(),
//             status: "pending"
//         };
//         this.orders.push(order);
//         return order;
//     }

//     processOrder(orderId: number): void {
//         const order = this.orders.find(o => o.id === orderId);
//         if (!order) {
//             throw new Error("Order not found");
//         }
//         order.status = "completed";
//     }
// }

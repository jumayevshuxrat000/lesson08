// // class Car {
// //     constructor(brand, year, color) {
// //         this.carname = brand;
// //         this.year = year;
// //         this.color = color;
// //     }
// // }


// // let mycar1 = new Car("BMW M8 Compotition", 2024, "Black");

// // console.log(mycar1);


// // class Model extends Car {
// //     constructor(brand, year, color, model) {
// //         super(brand, year, color);
// //         this.model = model;
// //     }
// // }

// // let mycar2 = new Model("BMW M5 Compotition", 2025, "Black", "Coupe");

// // console.log(mycar2);






// class Book {
//     constructor(title, author, genre, avilable) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.avilable = avilable;
//     }
//     isAvilable() {
//         this.avilable = !this.avilable;
//     }

//     getDetails() {
//         return `${this.title} by ${this.author}, Genre: ${this.genre}, Avilable: ${this.avilable}`;
//     }

//     markAsBorrowed() {
//         if (this.avilable) {
//             this.avilable = false;
//             console.log(`Not borrowed "${this.title}"`);
//         } else {
//             console.log(`Sorry, "${this.title}" is not available.`);
//         }
//     }
//     markAsReturned() {
//         this.avilable = true;
//         console.log(`"${this.title}" retuerned.`);
//     }
// }

// let book1 = new Book("Lissobonda O`tgan Tunlar", "Fyudor Dastayevski", "Romantik", true);

// console.log(book1.getDetails());


  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });



class Bus {
    constructor(id, route, seats, reservedSeats = 0) {
        this.id = id;
        this.route = route;
        this.seats = seats;
        this.reservedSeats = reservedSeats;
    }

    getDetails() {
        return `Bus ID: ${this.id}, Route: ${this.route}, Total Seats: ${this.seats}, Reserved Seats: ${this.reservedSeats}`;
    }

    reserveSeat() {
        if (this.reservedSeats < this.seats) {
            this.reservedSeats++;
            console.log(`Orin band. Jami band qilingan orinlar: ${this.reservedSeats}`);
        } else {
            console.log("Band qilish uchun joy yoq.");
        }
    }

    cancelReservation() {
        if (this.reservedSeats > 0) {
            this.reservedSeats--;
            console.log(`Joy bekor qilindi. Jami band qilingan orinlar: ${this.reservedSeats}`);
        } else {
            console.log("Bekor qilish uchun band qilingan orinlar yoq");
        }
    }
}

const bus1 = new Bus(1, "Toshkent - Surxondaryo", 40);


class BusSystem {
    constructor() {
        this.buses = [];
    }

    addBus(bus) {
        this.buses.push(bus);
        console.log(` ID ${bus.id} bus added.`);
    }

    listBuses() {
        if (this.buses.length === 0) {
            console.log("Have not buses");
        } else {
            this.buses.forEach(bus => {
                console.log(bus.getDetails());
            });
        }
    }

    searchByRoute(route) {
        const foundBuses = this.buses.filter(bus => bus.route.toLowerCase() === route.toLowerCase());
        if (foundBuses.length === 0) {
            console.log(`Route ${route} dont found.`);
        } else {
            foundBuses.forEach(bus => console.log(bus.getDetails()));
        }
    }

    reserveSeat(busId) {
        const bus = this.buses.find(bus => bus.id === busId);
        if (bus) {
            bus.reserveSeat();
        } else {
            console.log(`Id ${busId} dont found.`);
        }
    }

    cancelReservation(busId) {
        const bus = this.buses.find(bus => bus.id === busId);
        if (bus) {
            bus.cancelReservation();
        } else {
            console.log(`Id ${busId} dont found.`);
        }
    }
    
}
const system = new BusSystem();
const bus2 = new Bus(2, "Toshkent - Surxondaryo", 60);

system.addBus(bus1);
system.addBus(bus2);
system.listBuses();
system.searchByRoute("Toshkent - Surxondaryo");
system.reserveSeat(1);
system.reserveSeat(1);
system.cancelReservation(1);


console.log("<---------------------2-Masala----------------------------->");


class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price} so'm, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        if (quantity >= 0) {
            this.stock = quantity;
            console.log(`Stock updated: ${this.name}, New stock: ${this.stock}`);
        } else {
            console.log("Invalid stock quantity.");
        }
    }
}

class OrderItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    calculatePrice() {
        return this.product.price * this.quantity;
    }
}

class Order {
    constructor(id) {
        this.id = id;
        this.items = [];
    }

    addItem(orderItem) {
        if (orderItem.quantity <= orderItem.product.stock) {
            this.items.push(orderItem);
            orderItem.product.stock -= orderItem.quantity;
            console.log(`${orderItem.quantity} ta "${orderItem.product.name}" buyurtmaga qo'shildi.`);
        } else {
            console.log(`Not enough stock for ${orderItem.product.name}.`);
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.calculatePrice(), 0);
    }
}

class Shop {
    constructor() {
        this.products = [];
        this.orders = [];
        this.orderCounter = 1; 
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Product "${product.name}" added to the shop.`);
    }

    listProducts() {
        if (this.products.length === 0) {
            console.log("No products available.");
        } else {
            this.products.forEach(p => console.log(p.getDetails()));
        }
    }

    createOrder() {
        const order = new Order(this.orderCounter++);
        this.orders.push(order);
        console.log(`Order with ID ${order.id} created.`);
        return order;
    }
}

const shop = new Shop();

const p1 = new Product(1, "Laptop", 77777, 5);
const p2 = new Product(2, "Telefon", 1111111, 10);

shop.addProduct(p1);
shop.addProduct(p2);
shop.listProducts();

const order1 = shop.createOrder();

order1.addItem(new OrderItem(p1, 2));
order1.addItem(new OrderItem(p2, 3)); 

console.log(`Order #${order1.id} total: ${order1.calculateTotal()} so'm`);

shop.listProducts();

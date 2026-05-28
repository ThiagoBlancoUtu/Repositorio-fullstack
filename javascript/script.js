const precios = [100, 200, 300];

const conIva = precios.map(precio => {
return precio * 1.21;
});

const descuentoIva = precios.map(coste => {
    return coste * 0.82;
    });

    const mitadPrecio = precios.map(price => {
        return price / 2;
        });

        const diezPorciento = precios.map(cash => {
            return cash * 1.10;
            });

const productos = [
    {nombre: "Laptop", precio: 1000, stock: 4},
    {nombre: "mouse", precio: 20, stock: 5},
    {nombre: "Teclado", precio: 80, stock: 20}
    
];

productos[1].precio = 100;

const caros = productos.filter(p => p.precio >= 80);

const baratos = productos.filter(p => p.precio <= 60);

const stock = productos.filter(c => c.stock <= 10);


const carrito = [1, 2, 3, 4];
const total = carrito.reduce(
    (acc, valor) => acc + valor, 
    0
);
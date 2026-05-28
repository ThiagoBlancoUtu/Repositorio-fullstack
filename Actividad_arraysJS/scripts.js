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
    {nombre: "Laptop", precio: 1000, ventas: 4, categoria: "Electronica"},
    {nombre: "mouse", precio: 20, ventas: 5, categoria: "Electronica"},
    {nombre: "Teclado", precio: 80, ventas: 20, categoria: "Electronica"},

    {nombre: "Sarten", precio: 50, ventas: 17, categoria: "Cocina"},
    {nombre: "Espatula", precio: 15, ventas: 25, categoria: "Cocina"},
    {nombre: "Horno", precio: 1500, ventas: 6, categoria: "Cocina"},

    {nombre: "Cortadora", precio: 400, ventas: 13, categoria: "Jardineria"},
    {nombre: "Semillas", precio: 5, ventas: 75, categoria: "Jardineria"},
    {nombre: "Regadera", precio: 120, ventas: 17, categoria: "Jardineria"}
    
    
];

const total = productos.reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + p.precio;
    return acc;
  }, {});
  
  
const masVendido = productos.reduce((max, producto) => {

    if (producto.ventas > max.ventas) {
        return producto;
    }

    return max;

});

const VentasCaras = productos.filter(p => p.precio * p.ventas > 1000);

const promedioVentas = productos.reduce((acc, p) => acc + p.ventas, 0) / 9;




productos[1].precio = 100;

const caros = productos.filter(p => p.precio >= 80);

const baratos = productos.filter(p => p.precio <= 60);

const stock = productos.filter(c => c.stock <= 10);


// src/data/products.js

// 🛑 PASO 1: IMPORTAR IMÁGENES DESDE LA CARPETA 'assets'
// NOTA: Los nombres de archivo deben coincidir exactamente con los que tienes en src/assets/
import laptopImg from '../assets/laptop.jpg'; 
import phoneImg from '../assets/telefono.jpg';
import audifonosImg from '../assets/auriculares.jpg';
import tecladoImg from '../assets/teclado_mecanico.jpg';
import monitorImg from '../assets/monitor.jpg';
import mouseImg from '../assets/mouse.jpg'; // Asumiendo que 'mouse.jpg' es el que falta en la captura, pero debe existir.
import tabletImg from '../assets/tablet.jpg';
import impresora3dBaseImg from '../assets/impresora_3d.jpg';
import impresora3dUltimateImg from '../assets/impresora_3d.jpg'; // Usando 'Impresora Pro' para 'Ultimate'
import impresoraLaserImg from '../assets/impresora_pro.jpg';


const mockProducts = [
    {
        id: 1,
        name: 'Laptop Gamer Pro',
        price: 1200,
        imageSrc: laptopImg, 
        description: 'Potente laptop para juegos y desarrollo de software.',
    },
    {
        id: 2,
        name: 'Smartphone Elite',
        price: 800,
        imageSrc: phoneImg, 
        description: 'El último modelo con cámara de alta resolución.',
    },
    {
        id: 3,
        name: 'Auriculares Bluetooth',
        price: 150,
        imageSrc: audifonosImg, 
        description: 'Sonido de alta fidelidad sin cables.',
    },
    {
        id: 4,
        name: 'Teclado Mecánico',
        price: 200,
        imageSrc: tecladoImg, 
        description: 'Para una experiencia de tecleo precisa y superior.',
    },
    {
        id: 5,
        name: 'Monitor 4K Ultra',
        price: 450,
        imageSrc: monitorImg, 
        description: 'Experiencia visual inmersiva con alta definición.',
    },
    {
        id: 6,
        name: 'Mouse Inalámbrico',
        price: 80,
        imageSrc: mouseImg, // Asumiendo mouse.jpg
        description: 'Libertad de movimiento sin cables.',
    },
    {
        id: 7,
        name: 'Tablet Pro',
        price: 350,
        imageSrc: tabletImg, 
        description: 'Ideal para diseño, lectura y productividad.',
    },
    {
        id: 8,
        name: 'Impresora Laser 3D',
        price: 800,
        imageSrc: impresora3dBaseImg, 
        description: 'Modelo base para impresión 3D profesional.',
    },
    {
        id: 9,
        name: 'Impresora Laser 3D Ultimate',
        price: 1000,
        imageSrc: impresora3dUltimateImg, 
        description: 'La versión más avanzada con mayor velocidad y precisión.',
    },
    {
        id: 10,
        name: 'Impresora Laser',
        price: 500,
        imageSrc: impresoraLaserImg, 
        description: 'Impresión rápida y económica para oficina.',
    },
];

export default mockProducts;
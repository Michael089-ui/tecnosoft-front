// src/data/services.js

// 📥 IMPORTAR IMÁGENES
// Descarga las imágenes y guárdalas en src/assets/ con estos nombres exactos:
import uiuxImg from '../assets/diseno_uiux.jpg';
import frontendImg from '../assets/desarrollo_frontend.jpg';
import backendImg from '../assets/desarrollo_backend.jpg';
import cloudImg from '../assets/consultoria_cloud.jpg';
import qaImg from '../assets/qa_testing.jpg';
import mobileImg from '../assets/desarrollo_movil.jpg';
import digitalImg from '../assets/estrategia_digital.jpg';
import bigdataImg from '../assets/big_data.jpg';
import securityImg from '../assets/seguridad_it.jpg';
import supportImg from '../assets/soporte_247.jpg';

const mockServices = [
    {
        id: 1,
        name: 'Servicio 1: Diseño UI/UX',
        title: 'Diseño UI/UX',
        header: 'Experiencias visuales memorables',
        description: 'Creamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario',
        imageSrc: uiuxImg,
    },
    {
        id: 2,
        name: 'Servicio 2: Desarrollo Frontend',
        title: 'Desarrollo Frontend',
        header: 'Interfaces web modernas',
        description: 'Desarrollamos aplicaciones web responsivas con las últimas tecnologías',
        imageSrc: frontendImg,
    },
    {
        id: 3,
        name: 'Servicio 3: Desarrollo Backend',
        title: 'Desarrollo Backend',
        header: 'Arquitecturas robustas',
        description: 'Construimos sistemas backend escalables y seguros para tu negocio',
        imageSrc: backendImg,
    },
    {
        id: 4,
        name: 'Servicio 4: Consultoría Cloud',
        title: 'Consultoría Cloud',
        header: 'Migración a la nube',
        description: 'Te ayudamos a migrar y optimizar tu infraestructura en la nube',
        imageSrc: cloudImg,
    },
    {
        id: 5,
        name: 'Servicio 5: QA y Testing',
        title: 'QA y Testing',
        header: 'Calidad garantizada',
        description: 'Aseguramos la calidad de tu software con pruebas exhaustivas',
        imageSrc: qaImg,
    },
    {
        id: 6,
        name: 'Servicio 6: Desarrollo Móvil',
        title: 'Desarrollo Móvil',
        header: 'Apps nativas e híbridas',
        description: 'Creamos aplicaciones móviles para iOS y Android',
        imageSrc: mobileImg,
    },
    {
        id: 7,
        name: 'Servicio 7: Estrategia Digital',
        title: 'Estrategia Digital',
        header: 'Transformación digital',
        description: 'Definimos la estrategia digital perfecta para tu empresa',
        imageSrc: digitalImg,
    },
    {
        id: 8,
        name: 'Servicio 8: Big Data',
        title: 'Big Data',
        header: 'Análisis de datos',
        description: 'Convertimos tus datos en insights accionables',
        imageSrc: bigdataImg,
    },
    {
        id: 9,
        name: 'Servicio 9: Seguridad IT',
        title: 'Seguridad IT',
        header: 'Protección total',
        description: 'Protegemos tu infraestructura con las mejores prácticas de seguridad',
        imageSrc: securityImg,
    },
    {
        id: 10,
        name: 'Servicio 10: Soporte 24/7',
        title: 'Soporte 24/7',
        header: 'Disponibilidad continua',
        description: 'Brindamos soporte técnico las 24 horas del día, los 7 días de la semana',
        imageSrc: supportImg,
    },
];

export default mockServices;
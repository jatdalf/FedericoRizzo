import main from '../Assets/main.png'
import main1 from '../Assets/main1.png'
import main2 from '../Assets/main2.png'
import main3 from '../Assets/main3.png'
import main4 from '../Assets/main4.png'

const TempRentDb = [{
        id: 1,
        alt: 'casa de verano',
        image: 'https://static.wixstatic.com/media/400291_d7d4000c212b472794fe382864073c74~mv2.jpg',
        text: 'VERANO'
    },{
        id: 2,
        alt: 'casa de otoño',
        image: 'https://static.wixstatic.com/media/400291_de8f8e14a0694a66b8a12955168f51a6~mv2.jpg',
        text: 'OTOÑO'
    },{
        id: 3,
        alt: 'casa de invierno',
        image: 'https://static.wixstatic.com/media/400291_1eb9adcfde06409ba5eeb19706799478~mv2.jpg',
        text: 'INVIERNO'
    },{
        id: 4,
        alt: 'casa de primavera',
        image: 'https://static.wixstatic.com/media/400291_0056ad813caf424a840220065e602445~mv2.jpg',
        text: 'PRIMAVERA'
    },{
        id: 5,
        alt: 'casa de invierno',
        image: 'https://static.wixstatic.com/media/400291_1eb9adcfde06409ba5eeb19706799478~mv2.jpg',
        text: 'INVIERNO'
    }]

    const SalesDb = [{
        id: 1,
        alt: 'Duplex',
        image: main,
        text: 'Duplex'
    },{
        id: 2,
        alt: 'casa de gobierno',
        image: main1,
        text: 'casa de gobierno'
    },{
        id: 3,
        alt: 'Plaza América',
        image: main2,
        text: 'Plaza América'
    },{
        id: 4,
        alt: 'Bv Illia',
        image: main3,
        text: 'Boulevard illia'
    },{
        id: 5,
        alt: 'Capitalinas',
        image: main4,
        text: 'vista del edificio Capitalinas'
    },{
        id: 6,
        alt: 'casa en venta',
        image: 'https://static.wixstatic.com/media/400291_04d44e86ce63464d8da94981cb742531~mv2.jpg',
        text: 'CASAS'
    },{
        id: 7,
        alt: 'departamento en venta',
        image: 'https://static.wixstatic.com/media/400291_0b463829e41c49188626e2d0c1a8c586~mv2.jpg',
        text: 'DEPARTAMENTOS'
    }]

const RentDb =[{
        id: 1,
        alt: 'Monoambiente en alquiler',
        image: 'https://static.wixstatic.com/media/400291_84d392b976294789be75f26c11a60790~mv2.jpg',
        text: 'MONOAMBIENTE'
    },{
        id: 2,
        alt: 'casa en barrio exclusivo',
        image: 'https://static.wixstatic.com/media/400291_28d3ea2146884c3ba3c33ef9ec0c4832~mv2.jpg',
        text: 'EXCLUSIVAS'    
    },{
        id: 3,
        alt: 'casa en alquiler',
        image: 'https://static.wixstatic.com/media/400291_6d9748d050b24dcc8f552089cd4ccd32~mv2.jpg',
        text: 'CASAS'
    },{
        id: 4,
        alt: 'epacios de coworking',
        image: 'https://static.wixstatic.com/media/400291_de706a0b6de64076b84e0c7c1e31bed9~mv2.jpg',
        text: 'COWORKING'
    },{
        id: 5,
        alt: 'Departamentos en alquiler',
        image: 'https://static.wixstatic.com/media/400291_a3a061362da3475eb4ba645bba29c571~mv2.jpg',
        text: 'DEPARTAMENTOS'
}]

export {TempRentDb, SalesDb, RentDb} 
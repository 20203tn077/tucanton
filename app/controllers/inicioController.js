app.controller('inicioController', $scope => {
    $scope.sales = [
        { type: 'Venta', image: 'house01.jpg', price: 3750000, title: 'Compra Departamento En Burgos', description: '"Disfruta de tu nuevo espacio, si, en la colonia que has elejido para vivir e invertir, Narvarte, donde las vías de comunicación son super accesibles, además de contar con ejes viales a la mano, metrobus, metro, colectivos, en fin , ya conoces mejor que yo esta linda colonia, no lo piesnes más y contactanos para agendar tu cita."', location: '62584, P.º Burgos Sur 102, Burgos Cuernavaca, 62584 Tres de Mayo, Mor.', publishedDate: new Date('08/12/2022'), rooms: 2, area: 85, floors: 1, fullBaths: 2, halfBaths: 0, parkings: 1, pools: 1, additionalDetails: 'asd' },
        {
            type: 'Venta', image: 'house03.jpg', price: 22000000, title: 'Venta Casa Valle De Bravo, México', description: '"Acércate a la naturaleza en nuestra moderna propiedad con excelente distribución que aprovecha al máximo la luz natural. Su vestíbulo a doble altura da una sensación de lujo y total comodidad.En su terraza un jacuzzi donde te conectas con amigos y familiares.Si prefieres de un rico asado, el área de jardín es lo tuyo.Aquí podrás jugar  con tus hijos, tomar el sol, simplemente encontrar felicidad en cada rincón y espacio.A solo 200 metros de la reserva ecológica Monte Alto donde podrás realizar actividades extremas como volar en parapente, acampar, andar en bicicleta o simplemente caminar."', location: 'Los Misioneros, Valle De Bravo, Valle De Bravo, Estado De México', publishedDate: new Date('06/12/2022'), rooms: 4, area: 604, floors: 2, fullBaths: 6, halfBaths: 1, parkings: 4, pools: 0, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house05.jpg', price: 980000, title: 'Venta Casa Las Arboledas, Atizapán De Zaragoza', description: '"Esta propiedad da una sensación de lujo y amplitud en su diseño, ya que aprovecha al máximo la luz natural.  Es la casa ideal y exclusiva para una familia donde cada integrante tendrá su  propio espacio y al mismo tiempo áreas de convivencia e integración con familiares y amigos.Las áreas sociales son lo mejor.En su gran estancia y alberca podrás realizar las mejores reuniones.Esta última, climatizada y equipada con un sistema que le da  autonomía para su limpieza y mantenimiento."', location: 'Avenida De Los Deportes, Las Arboledas, Atizapán De Zaragoza, Estado De México', publishedDate: new Date('10/10/2022'), rooms: 3, area: 260, floors: 2, fullBaths: 3, halfBaths: 1, parkings: 2, pools: 1, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house06.jpg', price: 17000000, title: 'Casa La Herradura, Huixquilucan', description: '"Esta propiedad proporciona lujo, comodidad y una distribución que aprovecha al máximo la orientación para iluminar con luz natural cada espacio durante la mayor parte del día. Las áreas sociales son parte esencial de esta propiedad.Cuenta con un terraza para disfrutar desde el amanecer hasta la puesta sol, disfrutando de un cocktail y una velada con amigos familiares."', location: 'Cda Del Rayo, La Herradura, Huixquilucan, Estado De México', publishedDate: new Date('07/12/2022'), rooms: 3, area: 400, floors: 2, fullBaths: 4, halfBaths: 2, parkings: 4, pools: 1, additionalDetails: 'asd'
        }
    ]
    $scope.rents = [
        { type: 'Renta', image: 'house10.jpg', price: 3000, title: 'Casa minimalista en Juriquilla -Querétaro ', description: 'Esta hermosa casa cuenta con dos baños completas , 3 recamaras, una cocina,medio baño, terraza, cochera y una sala  l . Cuenta con alberca y palapa en área común oerfecto para reuniones familiares, fiestas, celebraciones de fin de año etc. Se encuentra ubicada en una zona exclusiva dentro del fraccionamiento Zibata a 30 min de la universidad Arkansas State.', location: 'Juriquilla, Querétaro, Querétaro', publishedDate: new Date('12/12/22'), rooms: 3, area: 300, floors: 2, fullBaths: 2, halfBaths: 1, parkings: 1, pools: 1, additionalDetails: 'Tiene terraza' },

        { type: 'Renta', image: 'house12.jpg', price: 3850, title: 'Venta Departamento Tipo Industrial cerca Walmart Domingo Diez', description: 'Venta departamento al norte de Cuernavaca Clima Fresco, excelente ubicación entre avenidas principales Domingo Diez y Emiliano Zapata a 5 minutos de la Autopista, cerca de supermercados, escuelas y centros comerciales Conjunto de sólo 6 departamentos tipo industrial con elementos como: acero, concreto y madera Espacios amplios, abiertos y con mucha luz natural Departamentos desde 145 metros, con 2 y 3 recamaras (3 modelos diferentes) Amplia sala-comedor, cocina equipada, estudio, 2 baños completos, 2 estacionamientos techados Area común con alberca y asoleado Contamos con departamento muestra Excelente Inversión', location: 'Cuernavaca, Morerlos', publishedDate: new Date('10/10/2022'), rooms: 3, area: 50, floors: 1, fullBaths: 2, halfBaths: 0, parkings: 1, pools: 0, additionalDetails: 'asd' },
        { type: 'Renta', image: 'house13.jpg', price: 4000, title: 'Departamentos nuevos con doble altura', description: '*Excelente ubicación!! Aprovecha los precios de promoción!! Entrega inmediata… 20 amplios departamentos ubicados en la Col. Miraval, Cuernavaca, Morelos. Estamos en una vialidad principal que conecta el oriente y poniente de la ciudad, tenemos Plaza Cuernavaca a 5 minutos, la autopista a 10 minutos, centro de la ciudad a 10 minutos y Galerias Cuernavaca a 20 minutos. El desarrollo cuenta con 20 departamentos estilo loft industrial, elevador, alberca y chapoteadero equipados con bomba de calor, jardín, palapa, bodega, cisterna de 34 mil litros, 6 estacionamientos de visitas y portón eléctrico. Cada departamento cuenta con 67 m2 en dos niveles, 2 recámaras, 2 baños completos, sala-comedor con doble altura, cocina equipada, closet de lavado, un estacionamiento, calentador de gas de paso, tinaco de 750 lts, tanque de gas estacionario de 100 litros y las mejores garantías! Precios desde $1,935,000.00 piso 2, $1,980,000.00 piso 3, $2,200,000.00 piso 1 y 4, $2,280,000.00 piso 5… (Los precios no incluyen gastos notariales) ** Los precios están sujetos a cambio sin previo aviso hasta que se aparta la casa. Es IMPORTANTE agendar una cita para poder ingresar al fraccionamiento, recibir una excelente asesoría y una atención personalizada. Hogar Yluz Asesor Patrimonial (55) 8526-6881', location: 'Cuernavaca, Morerlos', publishedDate: new Date('10/15/2022'), rooms: 2, area: 62, floors: 1, fullBaths: 2, halfBaths: 1, parkings: 1, pools: 0, additionalDetails: 'asd' },

        {
            type: 'Renta', image: 'house15.jpg', price: 13700, title: 'Casa En Renta - Echegaray', description: '"Tenemos los que estás buscando para tu familia, totalmente remodelada, cocina integral abierta, INCREIBLES ESPACIOS con su distribución en dos niveles, con 3 recámaras y 2 baños  completos, cuarto de servicio y 1 lugar de estacionamiento adentro y con facilidad afuera de la casa En una muy buena ubicación,con centros comerciales, Walmart Echegaray y todo tipo de restaurantes a unos pasos"', location: 'Hacienda De Echegaray, Naucalpan, Estado De México', publishedDate: new Date('10/12/2022'), rooms: 3, area: 100, floors: 2, fullBaths: 2, halfBaths: 1, parkings: 3, pools: 0, additionalDetails: 'asd'
        }
    ]
    $scope.project = {
        type: 'Venta', image: 'house02.jpg', price: 14900000, title: 'Moderna casa en venta', description: '"Moderna casa en venta. Casa de un nivel rodeada de jardín.Cuenta con 509 m2 construcción / 880 m2 terreno. Recámara de servicio con baño, 4 recámaras suite con baño propio, ventilación y luz natural uniforme, salón de juegos/ bar con baño.Alberca privada con calentador y salón de estar con baño - Cuarto de TV"', location: 'Arroyo La Estancia, Juriquilla, Querétaro, Querétaro', publishedDate: new Date('01/12/2022'), rooms: 4, area: 880, floors: 1, fullBaths: 5, halfBaths: 2, parkings: 2, pools: 1, additionalDetails: 'asd'
    }

    $scope.notifications= [1,2,3,4]
    $scope.sessionUser = getSessionUser()
    $scope.showProperty = property => window.location.replace('/app/views/propiedad.html')
    window.onload = loaded
})
app.controller('productController', $scope => {
    $scope.sales = [
        { type: 'Venta', image: 'house01.jpg', price: 3750000, title: 'Compra Departamento En Burgos', description: '"Disfruta de tu nuevo espacio, si, en la colonia que has elejido para vivir e invertir, Narvarte, donde las vías de comunicación son super accesibles, además de contar con ejes viales a la mano, metrobus, metro, colectivos, en fin , ya conoces mejor que yo esta linda colonia, no lo piesnes más y contactanos para agendar tu cita."', location: '62584, P.º Burgos Sur 102, Burgos Cuernavaca, 62584 Tres de Mayo, Mor.', publishedDate: new Date('08/12/2022'), rooms: 2, area: 85, floors: 1, fullBaths: 2, halfBaths: 0, parkings: 1, pools: 1, additionalDetails: 'asd' },
        {
            type: 'Venta', image: 'house02.jpg', price: 14900000, title: 'Moderna casa en venta', description: '"Moderna casa en venta. Casa de un nivel rodeada de jardín.Cuenta con 509 m2 construcción / 880 m2 terreno. Recámara de servicio con baño, 4 recámaras suite con baño propio, ventilación y luz natural uniforme, salón de juegos/ bar con baño.Alberca privada con calentador y salón de estar con baño - Cuarto de TV"', location: 'Arroyo La Estancia, Juriquilla, Querétaro, Querétaro', publishedDate: new Date('01/12/2022'), rooms: 4, area: 880, floors: 1, fullBaths: 5, halfBaths: 2, parkings: 2, pools: 1, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house03.jpg', price: 22000000, title: 'Venta Casa Valle De Bravo, México', description: '"Acércate a la naturaleza en nuestra moderna propiedad con excelente distribución que aprovecha al máximo la luz natural. Su vestíbulo a doble altura da una sensación de lujo y total comodidad.En su terraza un jacuzzi donde te conectas con amigos y familiares.Si prefieres de un rico asado, el área de jardín es lo tuyo.Aquí podrás jugar  con tus hijos, tomar el sol, simplemente encontrar felicidad en cada rincón y espacio.A solo 200 metros de la reserva ecológica Monte Alto donde podrás realizar actividades extremas como volar en parapente, acampar, andar en bicicleta o simplemente caminar."', location: 'Los Misioneros, Valle De Bravo, Valle De Bravo, Estado De México', publishedDate: new Date('06/12/2022'), rooms: 4, area: 604, floors: 2, fullBaths: 6, halfBaths: 1, parkings: 4, pools: 0, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house04.jpg', price: 13800000, title: 'Casa En Venta En Vista Hermosa, Cuernavaca, Residencia En Exclusivo Fraccionamiento', description: '"La casa cuenta con las siguientes características: Vestíbulo, sala, comedor, medio baño de visitas, cocina con alacena y ante comedor. 3 recamaras con baño propio y vestidor, terraza en planta alta con acceso a la recámara principal"', location: 'Monterrey , Zona 1, Nogales, Cuernavaca, Vista Hermosa, Cuernavaca, Morelos', publishedDate: new Date('07/12/2022'), rooms: 5, area: 600, floors: 2, fullBaths: 5, halfBaths: 1, parkings: 2, pools: 1, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house05.jpg', price: 980000, title: 'Venta Casa Las Arboledas, Atizapán De Zaragoza', description: '"Esta propiedad da una sensación de lujo y amplitud en su diseño, ya que aprovecha al máximo la luz natural.  Es la casa ideal y exclusiva para una familia donde cada integrante tendrá su  propio espacio y al mismo tiempo áreas de convivencia e integración con familiares y amigos.Las áreas sociales son lo mejor.En su gran estancia y alberca podrás realizar las mejores reuniones.Esta última, climatizada y equipada con un sistema que le da  autonomía para su limpieza y mantenimiento."', location: 'Avenida De Los Deportes, Las Arboledas, Atizapán De Zaragoza, Estado De México', publishedDate: new Date('10/10/2022'), rooms: 3, area: 260, floors: 2, fullBaths: 3, halfBaths: 1, parkings: 2, pools: 1, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house06.jpg', price: 17000000, title: 'Casa La Herradura, Huixquilucan', description: '"Esta propiedad proporciona lujo, comodidad y una distribución que aprovecha al máximo la orientación para iluminar con luz natural cada espacio durante la mayor parte del día. Las áreas sociales son parte esencial de esta propiedad.Cuenta con un terraza para disfrutar desde el amanecer hasta la puesta sol, disfrutando de un cocktail y una velada con amigos familiares."', location: 'Cda Del Rayo, La Herradura, Huixquilucan, Estado De México', publishedDate: new Date('07/12/2022'), rooms: 3, area: 400, floors: 2, fullBaths: 4, halfBaths: 2, parkings: 4, pools: 1, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house07.jpg', price: 14950000, title: 'Depa Remodelado 220m2 En Polanco Venta', description: '"Totalmente remodelado y amuebladoBalcón, 2 departamentos por piso.1 elevador con código de seguridad único.3 recamaras.Persianas y Blackout eléctricos.2 y medio baños Cocina integral equipada Centro de lavado.Cuarto de servicio con baño.1 lugar de estacionamiento techado."', location: 'Polanco, Miguel Hidalgo, Distrito Federal', publishedDate: new Date('09/09/2022'), rooms: 3, area: 220, floors: 1, fullBaths: 2, halfBaths: 0, parkings: 1, pools: 0, additionalDetails: 'asd'
        },
        {
            type: 'Venta', image: 'house08.jpg', price: 2490000, title: 'Venta Departamento Punta Norte', description: '"Departamento con acabados de lujo y excelente iluminación natural. Además cuenta con su propia bodega y dos lugares de estacionamiento techado totalmente independientes.El condominio cuenta con vigilancia las 24 hrs, elevador, amenidades como roof- garden, área de juegos infantiles, áreas verdes, zona de asadores y próximamente gimnasio y salón de usos múltiples.Ubicado a 5 min. Galerías Perinorte y Outlet Punta Norte.Fácil acceso a la autopista México Querétaro."', location: 'Parque Hacienda Residencial, Hacienda Del Parque, Cuautitlán Izcalli, Estado De México', publishedDate: new Date('06/12/2022'), rooms: 3, area: 98, floors: 1, fullBaths: 2, halfBaths: 0, parkings: 1, pools: 0, additionalDetails: 'asd'
        }
    ]
    $scope.rents = [
        {
            type: 'Renta', image: 'house09.jpg', price: 16000, title: 'Preciosa Casa En Renta En Grand Juriquilla', description: '"Hermosa casa en renta en Grand Juriquilla. En fraccionamiento cerrado muy cerca de la Casa Club. La casa consta de amplia sala-comedor, cocina integral, 3 recamaras en planta alta, mas un estudio o cuarta recamara en planta baja, amplio jardin y un roof garden muy agradable con baño. El conjunto tiene un parque central y muchas areas verdes, area de asadores, lago y alberca.Vigilancia las 24 horas. "', location: 'Juriquilla, Querétaro, Querétaro', publishedDate: new Date('08/12/2022'), rooms: 4, area: 200, floors: 2, fullBaths: 3, halfBaths: 0, parkings: 2, pools: 0, additionalDetails: 'asd'
        },
        { type: 'Renta', image: 'house10.jpg', price: 3000, title: 'Casa minimalista en Juriquilla -Querétaro ', description: 'Esta hermosa casa cuenta con dos baños completas , 3 recamaras, una cocina,medio baño, terraza, cochera y una sala  l . Cuenta con alberca y palapa en área común oerfecto para reuniones familiares, fiestas, celebraciones de fin de año etc. Se encuentra ubicada en una zona exclusiva dentro del fraccionamiento Zibata a 30 min de la universidad Arkansas State.', location: 'Juriquilla, Querétaro, Querétaro', publishedDate: new Date('12/12/22'), rooms: 3, area: 300, floors: 2, fullBaths: 2, halfBaths: 1, parkings: 1, pools: 1, additionalDetails: 'Tiene terraza' },
        { type: 'Renta', image: 'house11.jpg', price: 3500, title: 'Cuarto cómodo para estudiante', description: 'Se rentan cuartos para estudiantes cerca de Av, Universidad, cada recámara cuenta con baño propio, barra para trabajo y su pequeña cocineta. ', location: 'Cuernavaca, Morerlos', publishedDate: new Date('5/11/2022'), rooms: 1, area: 19, floors: 1, fullBaths: 1, halfBaths: 0, parkings: 0, pools: 0, additionalDetails: 'asd' },
        { type: 'Renta', image: 'house12.jpg', price: 3850, title: 'Venta Departamento Tipo Industrial cerca Walmart Domingo Diez', description: 'Venta departamento al norte de Cuernavaca Clima Fresco, excelente ubicación entre avenidas principales Domingo Diez y Emiliano Zapata a 5 minutos de la Autopista, cerca de supermercados, escuelas y centros comerciales Conjunto de sólo 6 departamentos tipo industrial con elementos como: acero, concreto y madera Espacios amplios, abiertos y con mucha luz natural Departamentos desde 145 metros, con 2 y 3 recamaras (3 modelos diferentes) Amplia sala-comedor, cocina equipada, estudio, 2 baños completos, 2 estacionamientos techados Area común con alberca y asoleado Contamos con departamento muestra Excelente Inversión', location: 'Cuernavaca, Morerlos', publishedDate: new Date('10/10/2022'), rooms: 3, area: 50, floors: 1, fullBaths: 2, halfBaths: 0, parkings: 1, pools: 0, additionalDetails: 'asd' },
        { type: 'Renta', image: 'house13.jpg', price: 4000, title: 'Departamentos nuevos con doble altura', description: 'Excelente ubicación!! Aprovecha los precios de promoción!! Entrega inmediata… 20 amplios departamentos ubicados en la Col. Miraval, Cuernavaca, Morelos. Estamos en una vialidad principal que conecta el oriente y poniente de la ciudad, tenemos Plaza Cuernavaca a 5 minutos, la autopista a 10 minutos, centro de la ciudad a 10 minutos y Galerias Cuernavaca a 20 minutos. El desarrollo cuenta con 20 departamentos estilo loft industrial, elevador, alberca y chapoteadero equipados con bomba de calor, jardín, palapa, bodega, cisterna de 34 mil litros, 6 estacionamientos de visitas y portón eléctrico. Cada departamento cuenta con 67 m2 en dos niveles, 2 recámaras, 2 baños completos, sala-comedor con doble altura, cocina equipada, closet de lavado, un estacionamiento, calentador de gas de paso, tinaco de 750 lts, tanque de gas estacionario de 100 litros y las mejores garantías! Precios desde $1,935,000.00 piso 2, $1,980,000.00 piso 3, $2,200,000.00 piso 1 y 4, $2,280,000.00 piso 5… (Los precios no incluyen gastos notariales) * Los precios están sujetos a cambio sin previo aviso hasta que se aparta la casa. Es IMPORTANTE agendar una cita para poder ingresar al fraccionamiento, recibir una excelente asesoría y una atención personalizada. Hogar Yluz Asesor Patrimonial (55) 8526-6881', location: 'Cuernavaca, Morerlos', publishedDate: new Date('10/15/2022'), rooms: 2, area: 62, floors: 1, fullBaths: 2, halfBaths: 1, parkings: 1, pools: 0, additionalDetails: 'asd' },
        { type: 'Renta', image: 'house14.jpg', price: 8500, title: 'Departamento moderno en xochitepec', description: 'LA MEJOR OPORTUNIDAD EN XOCHITEPEC MORELOS Exclusivos servicios, amenidades y 30,600 M2 DE ÁREAS VERDES que promueven la convivencia o bien, el goce de espacios idóneos para el encuentro con uno mismo. El Residencial cuenta con: • Alberca • Cancha de tenis • Cancha de futbol 7 • Cancha de basketball • Pet Park • Aqua Park • Área para yoga • Cicloplista • Gimnasio al aire libre • Palapas con asador • Juegos infantiles • Mesas de ping pong Prototipo: Basalto departamento Con 95m2 cuenta con: • 1 cajón estacionamiento • Elevador • Calentador de paso • Patio de lavado • Piso de loseta porcelanica • Muros de pasta texturizada • Detalles de granito en cocina • Sala • Comedor • Terraza • 2 recamaras con closet y mosquiteros • 2 baño completos • Recámara principal con vestidor y baño completo', location: 'Xochitepec, Morerlos', publishedDate: new Date('01/09/2022'), rooms: 3, area: 95, floors: 1, fullBaths: 2, halfBaths: 1, parkings: 1, pools: 0, additionalDetails: 'asd' },
        {
            type: 'Renta', image: 'house15.jpg', price: 13700, title: 'Casa En Renta - Echegaray', description: '"Tenemos los que estás buscando para tu familia, totalmente remodelada, cocina integral abierta, INCREIBLES ESPACIOS con su distribución en dos niveles, con 3 recámaras y 2 baños  completos, cuarto de servicio y 1 lugar de estacionamiento adentro y con facilidad afuera de la casa En una muy buena ubicación,con centros comerciales, Walmart Echegaray y todo tipo de restaurantes a unos pasos"', location: 'Hacienda De Echegaray, Naucalpan, Estado De México', publishedDate: new Date('10/12/2022'), rooms: 3, area: 100, floors: 2, fullBaths: 2, halfBaths: 1, parkings: 3, pools: 0, additionalDetails: 'asd'
        }
    ]
    $scope.project = {
        type: 'Venta', image: 'house02.jpg', price: 14900000, title: 'Moderna casa en venta', description: '"Moderna casa en venta. Casa de un nivel rodeada de jardín.Cuenta con 509 m2 construcción / 880 m2 terreno. Recámara de servicio con baño, 4 recámaras suite con baño propio, ventilación y luz natural uniforme, salón de juegos/ bar con baño.Alberca privada con calentador y salón de estar con baño - Cuarto de TV"', location: 'Arroyo La Estancia, Juriquilla, Querétaro, Querétaro', publishedDate: new Date('01/12/2022'), rooms: 4, area: 880, floors: 1, fullBaths: 5, halfBaths: 2, parkings: 2, pools: 1, additionalDetails: 'asd'
    }

    $scope.owner = {
        name: 'Emmanuel Alexander',
        surname: 'Machado',
        lastname: 'Ambrocio',
        birthDate: new Date(),
        phoneNumber: '7773065982',
        location: 'Cuernavaca',
        email: 'alexander@gmail.com',
        picture: 'admin.jpg',
        role: 'Administrador',
        paymentMethods: [
            {
                network: 'Visa',
                bank: 'BBVA',
                number: '1287284728462957',
                cvv: '374',
                owner: 'Emmanuel Alexander Machado Ambrocio'
            }
        ]
    }

    $scope.getBankColor = getBankColor
    $scope.getBankImage = getBankImage

    $scope.notifications= [1,3]
    $scope.sessionUser = getSessionUser()
    $scope.showProperty = property => window.location.replace('/app/views/propiedad.html')
    window.onload = loaded
    $scope.addToCart = () => $scope.cartItems = [2]
})
import { GeoPoint } from "firebase/firestore";
export const dataMock = {
    bien: {
        tipo: "Terreno",
        area: 100,
        avaluoActual: 50000,
        caracteristicasImportantes: ['Plano', 'Todos los servicios básicos', 'Bordillos'],
        factibilidadVentaRapida: true,
        promedioRefPrecios: 40000,
        avaluoAnterior: 0,
        direccion: {
            canton: 'Chordeleg',
            ciudad: 'Cuenca',
            direccion: 'Cerca de mamá conchita',
            provincia: 'Azuay',
            geolocalizacion: new GeoPoint(-0.22985, -78.52495)
        },
        pictures: ['https://cdn.pixabay.com/photo/2019/03/21/22/41/currants-4072164_960_720.jpg']
    },
    informacionProceso: {
        codigoFJ: 'EC-RJ-123456',
        numeroProcesoJudicial: '11333 2015 00143',
        actor: {
            nombres: 'Pepe pecas',
            identificacion: 'A03251GF'
        },
        demandado: {
            nombres: 'Aserrin',
            identificacion: '1102126635'
        },
        factibilidadCompraAntesRemate: false,
        montoDeuda: 150000,
        contactoPerito: '',
        fechaLiquidacion: new Date(),
        fechaPeritaje: '',
        fechaPostura: new Date('01/01/2020'),
        montoLiquidacion: 0,
        nombrePerito: '',
        numeroSenialamiento: 1,
        tipoObligacion: 'Pagaré a la orden',
        unidadJudicial: 'Cantón pillig'
    }
}
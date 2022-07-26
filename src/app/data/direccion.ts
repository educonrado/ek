import { GeoPoint } from 'firebase/firestore'
export interface Direccion {
    provincia?: string,
    ciudad?: string,
    canton?: string,
    direccion?: string,
    geolocalizacion?: GeoPoint
}

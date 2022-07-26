import { Direccion } from "./direccion";

export interface Bien {
    tipo?: string,
    direccion?: Direccion,
    area?: number,
    caracteristicasImportantes?: string[],
    avaluoActual?: number,
    avaluoAnterior?: number,
    promedioRefPrecios?: number
    factibilidadVentaRapida?: boolean,
    pictures?: string[]
}

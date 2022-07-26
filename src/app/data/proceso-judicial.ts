import { Persona } from "./persona";

export interface ProcesoJudicial {
    codigoFJ?: string,
    numeroProcesoJudicial?: string,
    actor?: Persona,
    demandado?: Persona,
    numeroSenialamiento?: number,
    fechaPostura?: Date,
    unidadJudicial?: string,
    nombrePerito?: string,
    contactoPerito?: string,
    fechaPeritaje?: string,
    tipoObligacion?: string,
    montoDeuda?: number,
    montoLiquidacion?: number,
    fechaLiquidacion?: Date,
    factibilidadCompraAntesRemate?: boolean
}

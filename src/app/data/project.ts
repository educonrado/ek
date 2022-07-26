import { Bien } from "./bien";
import { ProcesoJudicial } from "./proceso-judicial";

export interface Project {
    key$?: string,
    bien?: Bien,
    informacionProceso?: ProcesoJudicial
}


export interface Notificacion {
    id?: number;
    titulo: string;
    descripcion: string;
    tipo: number;
    fecha?: string;
    hora?: string;
    destinatario?: string;
}


export interface Noticia {
    id?: number;
    titulo: string;
    descripcion: string;
    tipo: string;
    fecha?: string;
    enlace?: string;
    idCarrera?: number;
    urlImagen?: string;
}

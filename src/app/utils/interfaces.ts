
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
    idCarrera?: string;
    urlImagen?: string;
    imagen?: File;
}

export interface ResServer {
    okay: boolean;
    noticias?: any;
    id?: number;
}

export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
    type: string;
    options: Componente[];
}

export interface CarouselSlide {
    name: string;
    redirectTo: string;
    urlToImage: string;
    dataSlideTo: string;
}

export interface RespuestaProductos {
    productos: Articulo[];
}

export interface Familia {
    clave: string;
    nombre: string;
}

export interface Articulo {
    codigo: string;
    familia: Familia;
    descripcion: string;
    caracteristicas: string;
    aplicaciones: string;
    urlToFichaTecnica: string;
    urlToImage: string;
    publishedAt: string;
}

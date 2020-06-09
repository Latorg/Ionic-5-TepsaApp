export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
    type: string;
    open: boolean;
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
    categoria: string;
    subcategoria: string;
}

export interface Categoria {
    id: string;
    nombre?: string;
    urlToImageCard?: string;
    urlToImageBannerDesktop?: string;
    urlToImageBannerMobile?: string;
    subcategorias?: Categoria[];
}

export interface Componente {
    id: string;
    icon: string;
    name: string;
    redirectTo: string;
    type: string;
    open: boolean;
    options: Componente[];
}

export interface CarouselSlide {
    name: string;
    title: string;
    subtitle: string;
    urlToImage: string;
    isButtonToRef: boolean;
    urlToRef: string;
    isActive: boolean;
    user: string ;
    created: Date;
    order: number;
    dataSlideTo?: string;
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
    familia?: Familia;
    descripcion: string;
    caracteristicas?: string;
    aplicaciones?: string;
    urlToFichaTecnica: string;
    urlToImage: string;
    publishedAt?: string;
    categoria: string;
    subcategoria: string;
    nombreSubcategoria: string;
}

export interface Categoria {
    id: string;
    nombre?: string;
    urlToImageCard?: string;
    urlToImageBannerDesktop?: string;
    urlToImageBannerMobile?: string;
    subcategorias?: Categoria[];
}

export interface Servicio {
    id?: string;
    idServicioParent?: string;
    nombre?: string;
    nombreParent?: string;
    urlToImageCard?: string;
    header?: string;
    description?: string;
    carouselImages?: CarouselSlide[];
}

export class Producto{
    
    constructor(
        public idProducto:number,
        public nombreProducto:string,
        public descripcionProducto:string,
        public precioProducto:number,
        public rutaImagenProducto:string,
        public activo:number,
        public idTipoProducto:number,
        ){

    }

}
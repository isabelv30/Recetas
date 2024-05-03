export interface Receta {
    Id: number;
    Nombre: string;
    Pasos: string;
    Categoria: "Sopas" | "Ensaladas" | "Platos Fuertes" | "Postres";
    TiempoPreparacion: number;
    Ingredientes: string[];
    Imagen?: string;
    NombreRuta?: string;
}

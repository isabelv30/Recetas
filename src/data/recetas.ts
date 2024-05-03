import { Receta } from "../models/Receta";

export const recetas: Receta[] = [
    {
        Id: 1,
        Nombre: "Ensalada César",
        Pasos: "Lava y corta la lechuga romana en trozos. Agrega los crutones y el queso parmesano rallado. Rocía con aderezo César al gusto y mezcla bien. ¡Listo para servir!",
        Categoria: "Ensaladas",
        TiempoPreparacion: 30,
        Ingredientes: [
            "Lechuga Romana",
            "Crutones",
            "Queso Parmesano Rallado",
            "Aderezo César"
        ],
        Imagen: "../../assets/ensalada-cesar.jpg",
        NombreRuta: "ensalada-cesar"
    },
    {
        Id: 2,
        Nombre: "Sopa de Tomate",
        Pasos: "Cocina cebolla y ajo en aceite de oliva hasta que estén suaves. Agrega tomates pelados y picados, caldo de verduras, albahaca fresca y sal. Cocina a fuego lento durante 20 minutos. Tritura la sopa y sirve caliente.",
        Categoria: "Sopas",
        TiempoPreparacion: 40,
        Ingredientes: [
            "Cebolla",
            "Ajo",
            "Tomates",
            "Caldo de Verduras",
            "Albahaca Fresca",
            "Sal"
        ],
        NombreRuta: "sopa-de-tomate"
    },
    {
        Id: 3,
        Nombre: "Pollo a la Parrilla con Verduras",
        Pasos: "Marina el pollo con limón, ajo, orégano y aceite de oliva. Asa el pollo en la parrilla hasta que esté cocido. A la parrilla también, cocina las verduras (pimientos, cebolla, calabacín) sazonadas con sal y pimienta. Sirve el pollo con las verduras asadas.",
        Categoria: "Platos Fuertes",
        TiempoPreparacion: 45,
        Ingredientes: [
            "Pechugas de Pollo",
            "Limón",
            "Ajo",
            "Orégano",
            "Aceite de Oliva",
            "Pimientos",
            "Cebolla",
            "Calabacín",
            "Sal",
            "Pimienta"
        ],
        NombreRuta: "pollo-a-la-parrilla-con-verduras",
    },
    {
        Id: 4,
        Nombre: "Pastel de Chocolate",
        Pasos: "Derrite el chocolate y la mantequilla en un recipiente al baño maría. Aparte, bate los huevos y el azúcar hasta obtener una mezcla espumosa. Incorpora el chocolate derretido y la harina tamizada. Hornea a 180°C durante 30 minutos. Deja enfriar y sirve.",
        Categoria: "Postres",
        TiempoPreparacion: 60,
        Ingredientes: [
            "Chocolate",
            "Mantequilla",
            "Huevos",
            "Azúcar",
            "Harina"
        ],
        NombreRuta: "pastel-de-chocolate"
    },
    {
        Id: 5,
        Nombre: "Sándwich de Pollo y Aguacate",
        Pasos: "Cocina pechuga de pollo a la parrilla y corta en rodajas. Unta mayonesa en dos rebanadas de pan integral. Coloca rodajas de aguacate, tomate y pollo sobre una rebanada, cubre con la otra rebanada y sirve.",
        Categoria: "Platos Fuertes",
        TiempoPreparacion: 20,
        Ingredientes: [
            "Pechuga de Pollo",
            "Pan Integral",
            "Mayonesa",
            "Aguacate",
            "Tomate"
        ],
        NombreRuta: "sandwich-de-pollo-y-aguacate",
    },
    {
        Id: 6,
        Nombre: "Gazpacho Andaluz",
        Pasos: "Licúa tomates, pepinos, pimientos, cebolla, ajo, aceite de oliva, vinagre, sal y pan remojado en agua. Refrigera durante al menos 2 horas antes de servir. Decora con trozos de verduras picadas y crutones.",
        Categoria: "Sopas",
        TiempoPreparacion: 20,
        Ingredientes: [
            "Tomates",
            "Pepinos",
            "Pimientos",
            "Cebolla",
            "Ajo",
            "Aceite de Oliva",
            "Vinagre",
            "Sal",
            "Pan",
            "Crutones"
        ],
        NombreRuta: "gazpacho-andaluz",
    },
    {
        Id: 7,
        Nombre: "Ensalada Griega",
        Pasos: "Combina pepinos, tomates, cebolla roja, aceitunas, queso feta y orégano fresco en un tazón grande. Aliña con aceite de oliva, jugo de limón, sal y pimienta. Mezcla bien y sirve frío.",
        Categoria: "Ensaladas",
        TiempoPreparacion: 15,
        Ingredientes: [
            "Pepinos",
            "Tomates",
            "Cebolla Roja",
            "Aceitunas",
            "Queso Feta",
            "Orégano Fresco",
            "Aceite de Oliva",
            "Jugo de Limón",
            "Sal",
            "Pimienta"
        ],
        NombreRuta: "ensalada-griega",
    },
    {
        Id: 8,
        Nombre: "Lasaña de Carne",
        Pasos: "Cocina la carne molida con cebolla y ajo. Agrega salsa de tomate y hierbas italianas. En un molde, alterna capas de salsa, láminas de lasaña y queso ricotta. Cubre con queso mozzarella rallado y hornea a 180°C durante 30 minutos.",
        Categoria: "Platos Fuertes",
        TiempoPreparacion: 60,
        Ingredientes: [
            "Carne Molida",
            "Cebolla",
            "Ajo",
            "Salsa de Tomate",
            "Hierbas Italianas",
            "Láminas de Lasaña",
            "Queso Ricotta",
            "Queso Mozzarella"
        ],
        NombreRuta: "lasana-de-carne",
    },
    {
        Id: 9,
        Nombre: "Tiramisú",
        Pasos: "Bate yemas de huevo con azúcar hasta obtener una mezcla espumosa. Agrega queso mascarpone y mezcla bien. Remoja bizcochos en café y coloca en un molde. Cubre con la mezcla de mascarpone y espolvorea cacao en polvo. Refrigera durante al menos 4 horas antes de servir.",
        Categoria: "Postres",
        TiempoPreparacion: 45,
        Ingredientes: [
            "Yemas de Huevo",
            "Azúcar",
            "Queso Mascarpone",
            "Bizcochos",
            "Café",
            "Cacao en Polvo"
        ],
        NombreRuta: "tiramisu",
    },
    {
        Id: 10,
        Nombre: "Arroz con Pollo",
        Pasos: "Cocina arroz en caldo de pollo con cebolla, ajo, pimiento, zanahoria y guisantes. Aparte, cocina pechugas de pollo y córtalas en tiras. Mezcla el arroz con el pollo y sirve caliente.",
        Categoria: "Platos Fuertes",
        TiempoPreparacion: 40,
        Ingredientes: [
            "Arroz",
            "Caldo de Pollo",
            "Cebolla",
            "Ajo",
            "Pimiento",
            "Zanahoria",
            "Guisantes",
            "Pechugas de Pollo"
        ],
        NombreRuta: "arroz-con-pollo",
    }
]
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS Recetas;
USE Recetas;

-- Crear la tabla Comentario
CREATE TABLE IF NOT EXISTS Comentario (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255),
    Mensaje TEXT,
    Calificacion INT
);

-- Insertar datos en la tabla Comentario
INSERT INTO Comentario (Nombre, Mensaje, Calificacion) VALUES
	('Persona Prueba Ejemplo', 'Las recetas estaban muy fáciles.', 4),
	('Usuario1', '¡Excelente servicio y recetas deliciosas!', 5),
	('Usuario2', 'No quedé satisfecho con la calidad de la comida.', 2),
	('Usuario3', 'La atención fue aceptable, pero la comida pudo ser mejor.', 3),
	('Usuario4', 'No recomendaría este restaurante a mis amigos.', 1);

-- Crear la tabla Receta
CREATE TABLE IF NOT EXISTS Receta (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255),
    Pasos TEXT,
    Categoria ENUM('Sopas', 'Ensaladas', 'Platos Fuertes', 'Postres'),
    TiempoPreparacion INT,
    Ingredientes TEXT,
    Imagen VARCHAR(255),
    NombreRuta VARCHAR(255)
);

-- Insertar datos en la tabla Receta
INSERT INTO Receta (Nombre, Pasos, Categoria, TiempoPreparacion, Ingredientes, Imagen, NombreRuta) VALUES
	('Ensalada César', 'Lava y corta la lechuga romana en trozos. Agrega los crutones y el queso parmesano rallado. Rocía con aderezo César al gusto y mezcla bien. ¡Listo para servir!', 'Ensaladas', 30, 'Lechuga Romana, Crutones, Queso Parmesano Rallado, Aderezo César', '../../assets/ensalada-cesar.jpg', 'ensalada-cesar'),
	('Sopa de Tomate', 'Cocina cebolla y ajo en aceite de oliva hasta que estén suaves. Agrega tomates pelados y picados, caldo de verduras, albahaca fresca y sal. Cocina a fuego lento durante 20 minutos. Tritura la sopa y sirve caliente.', 'Sopas', 40, 'Cebolla, Ajo, Tomates, Caldo de Verduras, Albahaca Fresca, Sal', NULL, 'sopa-de-tomate'),
	('Pollo a la Parrilla con Verduras', 'Marina el pollo con limón, ajo, orégano y aceite de oliva. Asa el pollo en la parrilla hasta que esté cocido. A la parrilla también, cocina las verduras (pimientos, cebolla, calabacín) sazonadas con sal y pimienta. Sirve el pollo con las verduras asadas.', 'Platos Fuertes', 45, 'Pechugas de Pollo, Limón, Ajo, Orégano, Aceite de Oliva, Pimientos, Cebolla, Calabacín, Sal, Pimienta', NULL, 'pollo-a-la-parrilla-con-verduras'),
	('Pastel de Chocolate', 'Derrite el chocolate y la mantequilla en un recipiente al baño maría. Aparte, bate los huevos y el azúcar hasta obtener una mezcla espumosa. Incorpora el chocolate derretido y la harina tamizada. Hornea a 180°C durante 30 minutos. Deja enfriar y sirve.', 'Postres', 60, 'Chocolate, Mantequilla, Huevos, Azúcar, Harina', NULL, 'pastel-de-chocolate'),
	('Sándwich de Pollo y Aguacate', 'Cocina pechuga de pollo a la parrilla y corta en rodajas. Unta mayonesa en dos rebanadas de pan integral. Coloca rodajas de aguacate, tomate y pollo sobre una rebanada, cubre con la otra rebanada y sirve.', 'Platos Fuertes', 20, 'Pechuga de Pollo, Pan Integral, Mayonesa, Aguacate, Tomate', NULL, 'sandwich-de-pollo-y-aguacate'),
	('Gazpacho Andaluz', 'Licúa tomates, pepinos, pimientos, cebolla, ajo, aceite de oliva, vinagre, sal y pan remojado en agua. Refrigera durante al menos 2 horas antes de servir. Decora con trozos de verduras picadas y crutones.', 'Sopas', 20, 'Tomates, Pepinos, Pimientos, Cebolla, Ajo, Aceite de Oliva, Vinagre, Sal, Pan, Crutones', NULL, 'gazpacho-andaluz'),
	('Ensalada Griega', 'Combina pepinos, tomates, cebolla roja, aceitunas, queso feta y orégano fresco en un tazón grande. Aliña con aceite de oliva, jugo de limón, sal y pimienta. Mezcla bien y sirve frío.', 'Ensaladas', 15, 'Pepinos, Tomates, Cebolla Roja, Aceitunas, Queso Feta, Orégano Fresco, Aceite de Oliva, Jugo de Limón, Sal, Pimienta', NULL, 'ensalada-griega');


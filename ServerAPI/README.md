# Recetario Virtual

El Recetario Virtual es una aplicación web diseñada para que los usuarios puedan explorar una amplia variedad de recetas, dejar comentarios sobre las mismas y ponerse en contacto con el restaurante responsable. Con una interfaz intuitiva y amigable, esta aplicación ofrece una experiencia única para los amantes de la cocina.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local utilizando Git:

    ```bash
    git clone https://github.com/isabelv30/Recetas.git
    ```

2. Navega hasta el directorio del proyecto:

    ```bash
    cd Recetas
    ```

3. Inicia el proyecto del Back-End:

    En MySQL ejecuta el archivo [DataBaseScript.sql](./ServerAPI/DataBaseScript.sql) para crear la base de datos, las tablas e insertar información de prueba.

    Para iniciar el proyecto:
    ```bash
    cd ServerAPI
    npm install
    npm start
    ```
    
4. Inicia el proyecto del Front-End:

    ```bash
    cd FrontEnd
    npm install
    npm run dev
    ```

5. ¡Listo! La aplicación debería estar corriendo localmente en [http://localhost:5173](http://localhost:5173) y el API en [http://localhost:4000](http://localhost:4000).

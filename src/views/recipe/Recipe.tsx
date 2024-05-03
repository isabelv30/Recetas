import { Card } from "primereact/card";
import { Receta } from "../../models/Receta"
import imagen from "../../assets/ensalada-cesar.jpg"
import Comments from "../../components/Comments";

interface RecipeProps{
  receta: Receta;
}

const Recipe: React.FC<RecipeProps> = ({ receta }) => {
  
  return (
    <>
      <div className="grid">
        {/* IZQUIERDA */}
        <div className="col-12 sm:col-4 md:col-4">
          {/* PRIMERA TARJETA */}
          <Card className="mt-3">
            {/* CATEGORIA */}
            <p className="text-xl font-bold">
              Categoría
            </p>
            <p>
              {receta.Categoria}
            </p>
            {/* TIEMPO DE PREPARACION */}
            <p className="text-xl font-bold">
              Tiempo de Preparación
            </p>
            <p>
              {receta.TiempoPreparacion} min
            </p>
          </Card>
          {/* SEGUNDA TARJETA */}
          <Card className="mt-3">
            {/* INGREDIENTES */}
            <p className="text-xl font-bold">
              Ingredientes
            </p>
            {receta.Ingredientes.map((ingrediente:string) => (
              <ul>{ingrediente}</ul>
            ))}
          </Card>
        </div>
        {/* DERECHA */}
        <div className="col-12 sm:col-8 md:col-8">
          <Card className="mt-3">
            <p className="text-3xl font-bold">
              {receta.Nombre}
            </p>
            <p>
              {receta.Pasos}
            </p>
            <div className="justify-content-center m-auto">
              <img src={imagen} alt={receta.Nombre} style={{ width: '400px', height: '350px' }} />
            </div>
          </Card>
        </div>
      </div>
      <Comments />
    </>
  )
}
export default Recipe;
import { Card } from "primereact/card"
import { recetas } from "../../data/recetas"
import { Receta } from "../../models/Receta"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import { Dropdown } from "primereact/dropdown"
import { useEffect, useState } from "react"
import { ScrollPanel } from "primereact/scrollpanel"
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const RecipeDashboard: React.FC = () => {

  const navigate = useNavigate();
  const categorias = [ "Sopas" , "Ensaladas" , "Platos Fuertes" , "Postres" ];
  const [ recetasFiltro, setRecetasFiltro ] = useState<Receta[] | null>(null);
  const [ categoriaSelec, setCategoriaSelec ] = useState<string | null>(null);
  const [ textoFiltro, setTextoFiltro ] = useState<string | null>(null);

  const abrirReceta = (recetaSeleccionada:Receta) => {
    navigate("/" + recetaSeleccionada.NombreRuta)
  };

  useEffect(() => {
    setRecetasFiltro(recetas);
  }, []);

  useEffect(() => {
    //debugger
    let recetasAux = categoriaSelec === null || categoriaSelec === undefined 
      ? recetas 
      : recetas.filter(x => x.Categoria === categoriaSelec) ?? null;
    
    recetasAux = textoFiltro === null || textoFiltro === undefined
      ? recetasAux
      : recetasAux.filter(x => x.Nombre.toLowerCase().includes(textoFiltro.toLowerCase())) ?? null;

    if(recetasAux !== null)
      setRecetasFiltro(recetasAux);
  }, [categoriaSelec, textoFiltro]);

  return (
    <>
      <div className="mt-4">
        <Card>
          <div className="flex gap-3">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText v-model="value1" placeholder="Buscar" onChange={(e) => setTextoFiltro(e.target.value)} />
            </IconField>
            <Dropdown value={categoriaSelec} onChange={(e) => setCategoriaSelec(e.value)} options={categorias} showClear
              placeholder="Seleccione una categoría" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
          </div>
        </Card>
      </div>
      <div className="grid mt-2">
        {recetasFiltro?.map((receta:Receta) => (
          <div className="col-12 md:col-4 sm:col-6" key={receta.Id}>
            <Card title={receta.Nombre} className="mb-0">
              <ScrollPanel style={{ width: '100%', height: '100px' }}>
                <p>
                  {receta.Pasos}
                </p>
              </ScrollPanel>
              <div className="d-flex justify-content-end mt-1">
                <Button label="Ir" onClick={() => abrirReceta(receta)} />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  )
}
export default RecipeDashboard;
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { Comentario } from "../models/Comentario";
import { ScrollPanel } from "primereact/scrollpanel";
import { Fieldset } from "primereact/fieldset";

const Comments: React.FC = () => {
    const [valueMessage, setValueMessage] = useState<string>('');
    const [valueName, setValueName] = useState<string>('');
    const [comentariosLista, setComentariosLista] = useState<Comentario[]>([]);
    const [calificacion, setCalificacion] = useState<number>(0);

    useEffect(() => {
        //setComentariosLista(comentarios);
        const fetchData = async () => {
            try {
                //debugger
                const response = await fetch('http://localhost:4000/comentarios');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const jsonData = await response.json();
                setComentariosLista(jsonData);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    const guardarComentario = () => {
        const nuevoComentario : Comentario = {
            Id: comentariosLista.length + 1,
            Nombre: valueName,
            Mensaje: valueMessage,
            Calificacion: calificacion
        };
        setComentariosLista([...comentariosLista, nuevoComentario]);
        setValueName('');
        setValueMessage('');
        setCalificacion(0);
    };

    const handleClickEstrella = (index: number) => {
        setCalificacion(index);
    };

    const renderizarEstrellas = () => {
        const estrellas = [];
        for (let i = 1; i <= 5; i++) {
            const clase = i <= calificacion ? 'pi pi-star-fill' : 'pi pi-star';
            estrellas.push(
                <i key={i} className={clase} onClick={() => handleClickEstrella(i)} style={{ cursor: 'pointer' }}></i>
            );
        }
        return estrellas;
    };

    return (
        <>
            <div className="mt-2 mb-2">
                <Card title="Comentarios">
                    <div className="grid">
                        {/* ESCRIBIR COMENTARIO */}
                        <div className="col-1 md:col-4 sm:col-4">
                            <div className="flex mb-2">
                                {renderizarEstrellas()}
                            </div>
                            <InputText placeholder="Nombre" value={valueName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueName(e.target.value)} />
                            <div className="mt-2">
                                <InputTextarea placeholder="Comentario" value={valueMessage} onChange={(e) => setValueMessage(e.target.value)} rows={5} cols={30} />
                            </div>
                            <div className="d-flex mt-1">
                                <Button label="Guardar" onClick={guardarComentario} />
                            </div>
                        </div>
                        {/* LISTA DE COMENTARIOS */}
                        <div className="col-1 md:col-8 sm:col-8">
                            <ScrollPanel style={{ width: '100%', height: '250px' }}>
                                {comentariosLista.map((comentario:Comentario) => (
                                    <div key={comentario.Id} className="mb-4">
                                        <Fieldset legend={comentario.Nombre}>
                                            <div>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((index) => (
                                                        <i key={index} className={`pi ${index <= comentario.Calificacion ? 'pi-star-fill' : 'pi-star'}`}></i>
                                                    ))}
                                                </div>
                                                <p>
                                                    {comentario.Mensaje}
                                                </p>
                                            </div>
                                        </Fieldset>
                                    </div>
                                ))}
                            </ScrollPanel>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}
export default Comments;
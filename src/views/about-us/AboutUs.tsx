import imagen from "../../assets/Restaurant.jfif"

const AboutUs: React.FC = () => {
    return (
        <>
            <div className="grid max-h-screen m-2">
                <div className="col-1 sm:col-6 md:col-6 d-flex justify-content-center">
                    <img src={imagen} alt="Restaurante" style={{ height: '500px', margin: 'auto', display: 'block', borderRadius: 10 }} />
                </div>
                <div className="col-1 sm:col-6 md:col-6">
                    <p className="text-xl font-bold">
                        Información
                    </p>
                    <div className="flex">
                        <p>
                            Secretos de la Cocina Restaurante
                        </p>
                    </div>
                    <div className="flex">
                        <p>
                            +57 008000 456 23 32
                        </p>
                    </div>
                    <div className="flex">
                        <p>
                            secretos@cocina.com
                        </p>
                    </div>
                    <p className="text-xl font-bold">
                        Experiencia
                    </p>
                    <div className="flex">
                        <p>
                            5 años de Experiencia
                        </p>
                    </div>
                    <div className="flex">
                        <p>
                            100+ Recetas Compartidas
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs;
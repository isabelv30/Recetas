import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"
import RecipeDashboard from "../recipe/RecipeDashboard"
import AboutUs from "../about-us/AboutUs"
import { recetas } from "../../data/recetas"
import { Receta } from "../../models/Receta"
import Recipe from "../recipe/Recipe"

function Layout() {
    return (
        <div>
            <Menu />
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to='/recetas' />} />
                    <Route path="/recetas" element={<RecipeDashboard  />} />
                    <Route path="/sobre-nosotros" element={<AboutUs />} />
                    {recetas.map((receta:Receta) => (
                        <Route path={"/" + receta.NombreRuta} element={<Recipe receta={receta} />} key={receta.Id} />
                    ))}
                </Routes>
            </div>
            <Footer />
        </div>
    )
}
export default Layout;
import { Menubar } from "primereact/menubar"
import { MenuItem } from "primereact/menuitem"
import { useNavigate } from "react-router-dom"

function Menu() {

    const navigate = useNavigate();

    const items: MenuItem[] = [
        {
            label: 'Recetas',
            icon: 'pi pi-shopping-cart',
            command: () => {
                navigate(`/recetas`)
            }
        },
        {
            label: 'Sobre Nosotros',
            icon: 'pi pi-users',
            command: () => {
                navigate(`/sobre-nosotros`)
            }
        }
    ]

    return (
        <>
            <Menubar model={items} />
        </>
    )
}
export default Menu;
import { NavLink } from "react-router-dom"
import './Home.css'

export default function Home() {
    return (
        <>
        <div>
            <h3>This is a Home Page</h3>
            <p>This a test</p>
            <NavLink to="./media">Media</NavLink>
        </div>
        </>
    )
}
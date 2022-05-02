import {Outlet, Link, NavLink, useNavigate} from "react-router-dom"
import css from "./MainLayout.module.css"

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">users</NavLink>
                <NavLink to="/posts">posts</NavLink>
                <NavLink to="/about">about</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
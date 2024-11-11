import { Link } from "react-router-dom";
const Navigation = () => {

    const textStyle = {
        color: "white",
        textDecoration: "none"
    }

    return <nav style={{ position: "sticky", top: "0", backgroundColor: "#046169", height: "48px", alignContent: "center", width: "100%" }}>
        <ul style={{ padding: "0px 32px", listStyleType: "none", display: "flex" }}>
            <li>
                <Link to="/" style={textStyle}>Home</Link>
            </li>
            <div style={{ flexGrow: '1' }} />
            <li>
                <Link style={textStyle} to="/form">Form</Link>
            </li>
            <div style={{ width: '48px' }} />
            <li>
                <Link style={textStyle} to="/todo">Todos</Link>
            </li>
            <div style={{ width: '48px' }} />
            <li>
                <Link style={textStyle} to="/about">About</Link>
            </li>
        </ul>
    </nav>
}

export default Navigation;
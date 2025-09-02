import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/" style={{ marginRight: "15px" }}>
        Главная
      </Link>
      <Link to="/lessons" style={{ marginRight: "15px" }}>
        Уроки
      </Link>
      <Link to="/theory" style={{ marginRight: "15px" }}>
        Теория
      </Link>
      <Link to="/practice">Практика</Link>
    </nav>
  );
}

export default Navigation;

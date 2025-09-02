import Navigation from "./Navigation";

function Header() {
  return (
    <header style={{ background: "#222", padding: "10px", color: "white" }}>
      <h1>🎸 Guitar School</h1>
      <Navigation />
    </header>
  );
}

export default Header;

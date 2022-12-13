const nav = (
    <nav>
        <h1>Navbar</h1>
        <ol>
            <li>About</li>
            <li>Pricing</li>
            <li>Contanct</li>
        </ol>
    </nav>
)
function MainContent() {
    return (<h1>MainContent!!!!</h1>)
}
ReactDOM.render(nav,
    document.getElementById("root"));

export default function Menu(params) {
    function handleClick(event) {
        const Container = document.getElementById("menu-container")
        const Menu = event.target
        Container.className = Container.className === "active" ? "" : "active"
        Menu.className = Menu.className === "active" ? "" : "active"
        
    }
    return (
        <>
            <img className="active" src="menu.svg" alt="Menu" id="menu" onClick={handleClick}/>
            <div id="menu-container">
                <img src="close.svg" alt="Close" id="close" />
                <div>
                    {}
                </div>
            </div>
        </>
    )
}
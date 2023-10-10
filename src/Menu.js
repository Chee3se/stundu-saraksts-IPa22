export default function Menu(params) {
    function yes() {
        console.log("fun")
    }
    return (
        <>
            <img src="menu.svg" alt="Menu" className="menu" onClick={yes}/>
            <div className="menu-container">
                <img src="close.svg" alt="Close" className="close" />
            </div>
        </>
    )
}
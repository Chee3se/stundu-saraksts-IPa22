export default function Stunda(params) {
    //console.log(params)
    return (
        <li>
            <p className="stun">{params.name+". "+params.class}</p>
            <p className="kab">{params.teacher}</p>
        </li>
    )
}
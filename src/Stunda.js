export default function Stunda(params) {
    //console.log(params)
    return (
        <tr>
            <td className="stun">{params.name+". "+params.class}</td>
            <td className="kab">{params.teacher}</td>
        </tr>
    )
}
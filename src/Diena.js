import Stunda from "./Stunda"
export default function Diena(params) {
    const need = params.info[1]
    return (
        <>
            <h2 className={params.active?"active":null}>{params.name}</h2>
            <table className={params.active?"active":null}>
                <tbody>
                {
                    need.classes.map((item, i)=>{
                        return (
                            <Stunda
                                key={i} 
                                name={i+1}
                                class={need.classes[i]}
                                teacher={need.teachers[i]}
                            />
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}
import Stunda from "./Stunda"
export default function Diena(params) {
    const need = params.info[1]
    const now = new Date()
    return (
        <>
            <h2 className={params.active?"active":null}>{params.name}</h2>
            <ul className={params.active?"active":null}>
            {
                need.classes.map((item, i)=>{
                    return (
                        <Stunda 
                            name={i+1}
                            class={need.classes[i]}
                            teacher={need.teachers[i]}
                        />
                    )
                })
            }
            </ul>
        </>
    )
}
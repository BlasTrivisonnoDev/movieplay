import { EstructureInformationDetails}  from "./estructure.js"

function showInformation() {

    const tipo=location.hash.slice(1).toLocaleLowerCase().split('=')[0]
    const id = location.hash.slice(1).toLocaleLowerCase().split('=')[1]

    conexion(`${tipo}/${id}`).then((data)=>{
    EstructureInformationDetails(data,tipo)
        })
}

export {showInformation}
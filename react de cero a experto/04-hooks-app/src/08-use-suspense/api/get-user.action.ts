

export interface User{
    id:number;
    name:string;
    location:string;
    role:string;
}

export const getUserAction = async(id:number) =>{
    console.log('Función llamada');

    await new Promise(res=>setTimeout(res,2000));

    console.log('Función resolvió')

    return {
        id:id,
        name:'David Serrudo',
        location:'Bolivia, Santa Cruz',
        role:'Instructor de software'
    }

}
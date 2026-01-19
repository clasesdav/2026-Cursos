import type { CSSProperties } from "react";

const firstName = 'David';
const lastName = 'Serrudo';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear']
const isActive = false;

const address = {
    zupCode: 'ABD-123',
    country: 'Bolivia'
}

export const MyAwesomeApp = () => {

    const myStyles: CSSProperties = {
        backgroundColor: '#fafafa',
        borderRadius: isActive ? 10 : 20,
        padding: 10,
        marginTop: 30,
    }

    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>


            <p>{2 + 2}</p>
            <p className="mi-clase-favorita">{favoriteGames.join(', ')}</p>


            <h1>{isActive ? 'activo' : 'no activo'}</h1>

            <p style={myStyles} >
                {JSON.stringify(address)}
            </p>
        </div>
    )
}

// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>David</h1>
//             <h3>Serrudo</h3>
//         </>
//     )
// }
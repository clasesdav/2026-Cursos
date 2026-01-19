import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemInCart: ItemInCart[] = [
    { productName: 'Nintento Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 1 },
    { productName: 'Super Samsh', quantity: 2 },
    // { productName: 'Mario Odisey', quantity: 1 },
    // { productName: 'Zelda', quantity: 6 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                itemInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
            {/* <ItemCounter />
            <ItemCounter name="Pro Controller" quantity={3} />*/}
            {/* <ItemCounter name="Super Samsh " quantity={2} /> */}

        </>
    )
}
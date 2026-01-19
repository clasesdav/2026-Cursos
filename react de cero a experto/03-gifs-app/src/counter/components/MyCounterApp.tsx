
import { useCounter } from "../hooks/useCounter"



export const MyCounterApp = () => {

    const { counter: counter2 } = useCounter(6);
    const { counter, handleAdd, handleSubtract, handleReset } = useCounter(6);


    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <h1>counter:{counter} - {counter2}</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

import { useCounter } from '@/hooks/useCounter'
import React, { useMemo } from 'react'

const heaveStuff = (interationNumber: number) => {
    console.time('Heavy_stuff_started');

    for (let index = 0; index < interationNumber; index++) {
        console.log('Ahí vamos...');
    }

    console.timeEnd('Heavy_stuff_started');

    return `${interationNumber} iteraciones realizadas`;
}

export const MemoCounter = () => {

    const { counter, increment } = useCounter(4_000)
    const { counter: counter2, increment: increment2 } = useCounter(5_000)

    const myHeavyValue = useMemo(() => heaveStuff(counter), [counter]);

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Memo - UseMemo - {myHeavyValue}</h1>
            <hr />
            <h4>Counter: {counter} </h4>
            <h4>Counter2: {counter2} </h4>

            <button className='bg-blue-500 text-withe px-4 rounded-md py-2 cursor-pointer'
                onClick={increment}>+1

            </button>

            <button className='bg-blue-500 text-withe px-4 rounded-md py-2 cursor-pointer'
                onClick={increment2}>+1 - Counter2

            </button>

        </div>
    )
}

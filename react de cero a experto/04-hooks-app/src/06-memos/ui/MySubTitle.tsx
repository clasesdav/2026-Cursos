import { memo } from "react";

interface Props {
    subtitle: string;

    callMyAAPI: (myValue: string) => void;
}

export const MySubTitle = memo(({ subtitle, callMyAAPI }: Props) => {
    console.log('MySubTitle re-render');

    console.log('tarea super pesada');

    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>
            <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={() => callMyAAPI(subtitle)}
            >Llamar a función</button>
        </>
    )
}
);
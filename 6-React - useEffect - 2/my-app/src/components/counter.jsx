import { useEffect, useState } from "react"

export const Counter = () => {
    const [count, SetCount] = useState(10);

    useEffect(() => {
      const id = setInterval(() => {
            SetCount((preValue) => {
        console.log("Setting State", preValue)
                if(preValue <=0){
                    clearInterval(id);
                    return 0;
                }
                return preValue - 1;
            });
        }, 1000);

        return () => {
            clearInterval(id)
        };


    }, [])

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    )
}
import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || initialValue);
        } catch (error) {
            console.log(error);
            return initialValue;
        }
        return currentValue;
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(storedValue));
    },[key, storedValue]);

    return [storedValue, setStoredValue];
}
import { useEffect, useState } from "react";

export  function useProfile() {
    const [data, setData] = useState(false);

    useEffect(() => {
        fetch('/api/menu/profile').then(response => {
            response.json().then(data => {
                setData(data);
            })
        })
    }, []);

    return {data}
}

export function getProfile() {
    const [data, setData] = useState(false);

    useEffect(() => {
        fetch('/api/userinfo').then(response => {
            response.json().then(data => {
                setData(data);
            })
        })
    }, []);

    return {data}
}
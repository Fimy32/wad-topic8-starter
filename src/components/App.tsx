import { useEffect, useState } from "react";

export default function App() {

    const [username, setUsername] = useState("");

    useEffect( ()=> {
        fetch('/login')
            .then(response => response.json())
            .then(json => setUsername(json.username));    
    }, []);

    return <h1>Welcome to the HitTastic {username}!</h1>;
}
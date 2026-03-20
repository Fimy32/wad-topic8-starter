import { useState } from 'react';
import LogOutButton from './LogOutButton';


export default function LoginField() {

    const [name, setUsername] = useState("");
    const [passcode, setPassword] = useState("");
    let loggedIn = false;


    return <>
        <div>
            <p>Login: </p>
            <input type="text" placeholder="John Smith" id="userNameText" onChange={(event) => setUsername(event.target.value)}></input>
            <input type="password" placeholder="Password" id="passwordText" onChange={(event) => setPassword(event.target.value)}></input>
            <button id="loginButton" onClick={async () => {
                if (await Login() == `{username: ${name}}`) {
                    loggedIn = true;
            }}}>Login</button>
        </div>
        <p>{loggedIn ? "Logged in as " + name : "Not logged in"}</p>
        {loggedIn ? <LogOutButton /> : null}
        </>
    
        async function Login(): Promise<string> {
            const response = await fetch('https://example.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ username: name, password: passcode })
            });
            console.log(response);
            return response.json().then(data => JSON.stringify(data));  
        }
}
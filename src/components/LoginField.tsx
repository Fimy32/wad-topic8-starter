import { useEffect, useState } from 'react';
import LogOutButton from './LogOutButton';

interface LoginResponse {
    username: string;
}

export default function LoginField() {

    const [name, setUsername] = useState("");
    const [passcode, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);


    return <>
        <div>
            <p>Login: </p>
            <input type="text" placeholder="John Smith" id="userNameText" onChange={(event) => setUsername(event.target.value)}></input>
            <input type="password" placeholder="Password" id="passwordText" onChange={(event) => setPassword(event.target.value)}></input>
            <button id="loginButton" onClick={async () => {
                const loginResponse = await Login();
                if (loginResponse.username == name) {
                    setLoggedIn(true);
                }
            }}>Login</button>
        </div>
        <p>{loggedIn ? "Logged in as " + name : "Not logged in"}</p>
        {loggedIn ? <LogOutButton /> : null}

        <button id="logoutButton" onClick={async () => {
                  await fetch('/logout');
                  setLoggedIn(false);
                  setUsername("");
                  setPassword("");
            }}>Logout</button>
        </>
    
        async function Login(): Promise<LoginResponse> {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ username: name, password: passcode })
            });
            console.log(response);
            const info = await response.json();
            return info;
        }
}
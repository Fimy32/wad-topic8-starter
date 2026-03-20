import { useState } from 'react';

export default function LogOutButton() {
      return <>
            <button id="logoutButton" onClick={async () => {
                  await fetch('https://example.com/logout', {
                        method: 'GET',
                        headers: {
                              'Content-Type' : 'application/json'
                        }
                  });
            }}>Logout</button>
      </>
}
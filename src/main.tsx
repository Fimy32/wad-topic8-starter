import ReactDOM from 'react-dom/client';
import App from './components/App';
import LoginField from './components/LoginField';

const root = ReactDOM.createRoot(
    document.getElementById('root')!
);

root.render(
    <>
        <h1>Welcome to the React Hitastic App!</h1>
        <LoginField />
    </>
)
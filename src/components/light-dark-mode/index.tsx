import useLocalStorage from "./useLocalStorage";
import './style.css';

export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    
    function handleToggleTheme(){
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className="wrapper-dark-light-mode" data-theme={theme}>
            <div className="container">
                <p>Hello world</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}
import Header from "./components/Header.jsx";
import Signup from "./components/Signup.jsx";
import StateLogin from "./components/StateLogin.jsx";
import RefLogin from "./components/RefLogin.jsx";
import CompStateLogin from "./components/CompStateLogin.jsx";

function App() {
    return (
        <>
            <Header />
            <main>
                <Signup />
                <StateLogin />
                <RefLogin />
                <CompStateLogin />
            </main>
        </>
    );
}

export default App;

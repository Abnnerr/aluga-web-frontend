
import UsuarioProvider from "./contexts/UsuarioContext";
import Login from "./pages/Login";
import './index.css'
import Paths from "./routes/Paths";


const App = () => {
  return (
    <>
      <UsuarioProvider>
        <Paths />
      </UsuarioProvider>
      
    </>
  );
}

export default App;
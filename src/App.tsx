import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <Router>
      <Routes>
        {/* Rota padrão, que redireciona para o login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rota de login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Outra rota (exemplo, você pode ter outras rotas como Home ou Dashboard) */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

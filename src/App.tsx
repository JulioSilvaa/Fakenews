import { UserContextProvider } from './Contexts/useContext';
import Router from './routes/Router';

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;

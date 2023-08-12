import { UserContextProvider } from './Contexts/userContext';
import Router from './routes/Router';

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

export default App;

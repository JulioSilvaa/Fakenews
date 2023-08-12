import { NewsContextProvider } from './Contexts/newsContext';
import { UserContextProvider } from './Contexts/userContext';
import Router from './routes/Router';

function App() {
  return (
    <UserContextProvider>
      <NewsContextProvider>
        <Router />
      </NewsContextProvider>
    </UserContextProvider>
  );
}

export default App;

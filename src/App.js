import ThemeRoutes from './routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <ThemeRoutes/>
    </BrowserRouter>
  );
}

export default App;

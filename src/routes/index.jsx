import { useRoutes } from 'react-router-dom';
import CommonRoutes from './CommonRoutes';


export default function ThemeRoutes() {
  return (
    useRoutes([CommonRoutes])
  );
}

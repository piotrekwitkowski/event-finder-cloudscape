import { BrowserRouter } from 'react-router-dom';
import { Main } from './main';

export const App = () => {
  return (
    <BrowserRouter>
      {/* TODO: Handle authorization state here */}
      <Main />
    </BrowserRouter>
  )
}

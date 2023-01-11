import { HashRouter } from 'react-router-dom';
import { Main } from './main';

export const App = () => {
  return (
    <HashRouter>
      {/* TODO: Handle authorization state here */}
      <Main />
    </HashRouter>
  )
}

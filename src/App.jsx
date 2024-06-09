import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

import { DragAndDrop, DragBox, Home, MakeSentence, MatchGame } from './pages';
import { Layout } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/dnd' element={<DragAndDrop />} />
      <Route path='/match-game' element={<MatchGame />} />
      <Route path='/reorder' element={<DragBox />} />
      <Route path='/sentence' element={<MakeSentence />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

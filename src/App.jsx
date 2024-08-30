import { lazy, Suspense } from 'react';
import Layout from './components/shared/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/shared/Loader/Loader.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const TruckPage = lazy(() => import('./pages/TruckPage/TruckPage.jsx'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Loader width="100" height="100" color="var(--Rating)" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<TruckPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

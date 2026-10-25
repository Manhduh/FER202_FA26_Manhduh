import { Routes, Route } from 'react-router-dom';
import AxiosDemo from './AxiosDemo.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<AxiosDemo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

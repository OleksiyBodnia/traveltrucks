import { Toaster } from 'react-hot-toast';
import styles from './Layout.module.css';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavigationBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

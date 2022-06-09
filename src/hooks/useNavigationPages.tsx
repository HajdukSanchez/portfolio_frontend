import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

/**
 * Custom hook to perform navigation in the application
 *
 * @return {*} Fuction to handle the navigation as we want
 */
const useNavigationPages = () => {
  const navigate = useNavigate();
  const { showMenu, toggleMenu } = useContext(AppContext);

  const makeNavigation = (route: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on navigation
    navigate(route); // Navigate to route
    if (showMenu) toggleMenu(); // Close menu if open
  };

  return { makeNavigation };
};

export { useNavigationPages };

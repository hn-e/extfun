import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Inviter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/flyer')) {
      navigate('/');
    }
  }, [location, navigate]);

  return null; 
};

export default Inviter;

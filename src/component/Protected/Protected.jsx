import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
function Protected({ children }) {
  const { user, loading } = useAuth();

  return <>{loading ? <Loading /> : user ? children : <Navigate to='/signin' />}</>;
}

export default Protected;

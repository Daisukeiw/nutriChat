import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Corrigido
import { auth } from './firebaseconfig'; // Certifique-se de que o caminho está correto

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
};

export { useAuth };
import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import auth from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]); // State to store services data


    // Function to create a user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Function to log in with email and password
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Function to log in with Google
    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Function to update user profile (name and photo)
    const updateUserProfile = async (updatedData) => {
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, updatedData);
                setUser({ ...auth.currentUser, ...updatedData }); // Update local user state
            }
        } catch (error) {
            console.error('Failed to update user profile:', error.message);
        }
    };

    // Function to log out the user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Observer to track the user's authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Set the user with displayName and photoURL
                setUser({
                    ...currentUser,
                    displayName: currentUser.displayName || '',
                    photoURL: currentUser.photoURL || '',
                });
            } else {
                setUser(null); // Set user to null if not authenticated
            }
            setLoading(false); // Ensure loading is false after user state is set
        });
        return () => unsubscribe(); // Clean up observer on component unmount
    }, []);


    // Fetch services data from the API
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:5000/services');
                const data = await response.json();
                setServices(data); // Set the services data to state
            } catch (error) {
                console.error('Error fetching services:', error);
            }   finally {
                setLoading(false);
            }
            
        };

        fetchServices(); // Call the function to fetch services
    }, []); // Empty dependency array ensures the call runs once when component mounts

    

    // Provide all auth-related functions and user state to the context
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logInUser,
        logInWithGoogle,
        logOutUser,
        updateUserProfile,
        services,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

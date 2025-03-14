import axios from '@/lib/axios';
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('user'));
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission status

    const signup = async (name, email, password, role) => {
        setIsSubmitting(true); // Start submission
        try {
            const response = await axios.post('/api/auth/sign-up', {
                name,
                email,
                password,
                role,
            });

            if (response.status === 200 || response.status === 201) {
                setUser(response.data.user);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setIsAuthenticated(true);
                setIsSubmitting(false); // End submission
                return true;
            } else {
                toast.error('Signup failed');
                setIsSubmitting(false); // End submission
                return false;
            }
        } catch (err) {
            console.error('Signup error:', err);
            if (err.response && err.response.status === 409) {
                toast.error('Email is already taken');
            } else {
                setError('Signup error');
                toast.error('Signup error');
            }
            setIsSubmitting(false); // End submission
        }
    };

    const login = async (email, password) => {
        setIsSubmitting(true); // Start submission
        try {
            const response = await axios.post('/api/auth/sign-in', {
                email: email.trim(),
                password: password.trim(),
            });

            if (response.status === 200 || response.data.message === 'Login successful') {
                setUser(response.data.user);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setIsAuthenticated(true);
                setIsSubmitting(false); // End submission
                return true;
            } else {
                setIsAuthenticated(false);
                toast.error('Invalid email or password');
                setIsSubmitting(false); // End submission
                return false;
            }
        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            toast.error(err.response?.data?.error || 'Login failed');
            setIsSubmitting(false); // End submission
            return false;
        }
    };

    const logout = async () => {
        setIsSubmitting(true); // Start submission
        try {
            const response = await axios.post('/api/auth/sign-out');

            if (response.status === 200) {
                setUser(null);
                localStorage.removeItem('user');
                setIsAuthenticated(false);
                setIsSubmitting(false); // End submission
                return true;
            } else {
                toast.error('Logout failed');
                setIsSubmitting(false); // End submission
                return false;
            }
        } catch (err) {
            console.error('Logout error:', err);
            toast.error('Logout error');
            setIsSubmitting(false); // End submission
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, isAuthenticated, isSubmitting, setIsSubmitting }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

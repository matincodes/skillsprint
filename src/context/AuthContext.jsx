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
    const [error, setError] = useState(null);

    const signup = async (name, email, password, role) => {
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
                return true;
            } else {
                setError('Signup failed');
                toast.error('Signup failed');
                return false;
            }
        } catch (err) {
            console.error('Signup error:', err);
            if (err.response && err.response.status === 409) {
                setError('Email is already taken');
                toast.error('Email is already taken');
            } else {
                setError('Signup error');
                toast.error('Signup error');
            }
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/sign-in', {
                email: email.trim(),
                password: password.trim(),
            });

            if (response.status === 200 || response.data.message === 'Login successful') {
                setUser(response.data.user);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setIsAuthenticated(true);
                setError(null);
                return true;
            } else {
                setIsAuthenticated(false);
                setError('Invalid email or password');
                toast.error('Invalid email or password');
                return false;
            }
        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            setError('Login error');
            toast.error(err.response?.data?.error || 'Login failed');
            return false;
        }
    };

    const logout = async () => {
        try {
            const response = await axios.post('/api/auth/sign-out');

            if (response.status === 200) {
                setUser(null);
                localStorage.removeItem('user');
                setIsAuthenticated(false);
                setError(null);
                return true;
            } else {
                setError('Logout failed');
                toast.error('Logout failed');
                return false;
            }
        } catch (err) {
            console.error('Logout error:', err);
            setError('Logout error');
            toast.error('Logout error');
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, isAuthenticated, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

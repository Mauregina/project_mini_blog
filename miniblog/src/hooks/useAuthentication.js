import { db } from '../firebase/config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { useEffect, useState } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    // cleanup - deal with memory leak
    const isCancelled = () => {
        if (cancelled) return;
    } 

    const createUser = async (data) => {
        isCancelled();
        setError(null);
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile( user, {
                displayName: data.name,
            } );

            setLoading(false);
            return user;
        }
        catch (error) {
            setError(error.message);
        }

        setLoading(false);
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        createUser,
        loading,
        error
    };
};
import FirebaseInitialize from '../Firebase/firebase'
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";


FirebaseInitialize();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState(false);


    /* ============ Register with email and password=============== */
    const registerWithEmailAndPass = (email, password, username, path, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                saveUserToDB(email, username, 'POST')
                setError('')
                setIsLoading(true)
                if (path) {
                    navigate(path)
                }
                else {
                    navigate('/')
                }
                updateProfile(auth.currentUser, {
                    displayName: username, email: email
                }).then(() => {
                    setUser(user)
                    setError('')

                }).catch((error) => {
                    setError(error.message)
                });

            }).catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // const createUser = async (username, email, password, e) => {
    //     e.preventDefault();

    //     try {
    //         const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //     }
    //     catch {

    //     }
    // }

    // Login With Email and Password
    const logInWithEmailAndPass = (email, password, path, navigate) => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 1) {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            setUser(user);
                            setError('');
                            if (path) {
                                navigate(path)
                            }
                            else {
                                navigate('/')
                            }
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            setError(errorMessage)
                        })
                        .finally(() => {
                            setIsLoading(false)
                        })
                } else {
                    setError('Your Account is not activate yet!')
                }

            })
            .catch(error => {
                setError(error.message);
            })


    }

    /* ===== Observer user State ====== */
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [auth]);

    //Save user data to database and initial status will be inactive
    const saveUserToDB = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }

    //get user Data from database if active then user can login
    // const getUserFromDB = (email) => {
    //     setIsLoading(true);
    //     fetch(`http://localhost:5000/users/${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setIsLoading(false);
    //             return data;
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //         })
    // }

    //user role check 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserRole(data?.role);
            })
    }, [user.email])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
            setError('');
        }).catch((error) => {
            setError(error.message)
        });
    }

    console.log(user);
    console.log(isLoading);
    return {
        registerWithEmailAndPass,
        logInWithEmailAndPass,
        logOut,
        user,
        error,
        isLoading,
        userRole

    }
};

export default useFirebase;
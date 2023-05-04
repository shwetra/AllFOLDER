import React, { useState, useEffect } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuth');
    if (storedAuth) {
      setIsAuth(true);
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // code to authenticate user
    localStorage.setItem('isAuth', true);
    setIsAuth(true);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // code to create new user
    localStorage.setItem('isAuth', true);
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
  };

  return (
    <div>
      {isAuth ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Login</button>
          </form>
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Signup</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthForm;

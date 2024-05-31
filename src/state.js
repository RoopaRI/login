import React, { useState } from "react";
import "./state.css";

export default function State() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName === "user" && password === "password") {
            setFlag(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid username or password");
            setFlag(false);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            {flag === false ? (
                <div>
                    {errorMessage && <h4>{errorMessage}</h4>}
                    <form onSubmit={handleSubmit}> 
                        <label htmlFor="Username">Username:</label>
                        <input
                            placeholder="username"
                            type="text"
                            name="name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            autoFocus
                        />
                        <br />
                        <label htmlFor="Password">Password:</label>
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        <button type="submit">Submit</button> 
                    </form>
                </div>
            ) : (
                <h4>Welcome, user!</h4>
            )}
        </div>
    );
}
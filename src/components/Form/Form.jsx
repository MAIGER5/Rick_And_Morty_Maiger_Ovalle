import { useState } from 'react';
import Validation from "./Validation";


function Form({login}) {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })
    
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        Validation({ ...userData, [property]: value}, errors, setErrors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input
                    type="text"
                    name='username'
                    value={userData.username}
                    onChange={handleInputChange}
                />
                <p>{errors.username}</p>
            </div>
            
            <div>
                <label>Password</label>
                <input 
                    type="text"
                    name='password'
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <p>{errors.password}</p>
            </div>

            <div>
                <button type='submit' >LOGIN</button>
            </div>

        </form>
    );
};

export default Form

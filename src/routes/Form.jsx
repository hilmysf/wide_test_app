import Navigation from "../components/Navigation";
import { useState } from "react";
import "../css/Home.css";
const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    function handleShowPassword(event) {
        setShowPassword(event.target.checked)
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const isPasswordMatch = password.toLowerCase() === confirmPassword.toLowerCase();
        console.log(`isPasswordMatch: ${isPasswordMatch}`)
        if (isPasswordMatch) {
            clearData();
            alert(
                "Berhasil submit data"
            )
        }
    }

    function clearData() {
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    const matchingPassword = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setConfirmPassword(value)
        const isPasswordMatch = password.toLowerCase() === value.toLowerCase();
        if (isPasswordMatch) {
            event.target.setCustomValidity('')
        } else {
            event.target.setCustomValidity('password tidak sama')
        }
    }

    const onPasswordSubmit = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setPassword(event.target.value)
        console.log(`value.length: ${value.length}`)
        if (value.length < 8) {
            event.target.setCustomValidity('Password should be at least 8 characters long')
        } else {
            event.target.setCustomValidity('')
        }
    }
    return <>
        <Navigation />
        <div className="container">
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <div className="row">
                    <div className="col">
                        <label>Nama</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} id="input-name" required />
                    </div>
                    <div className="col">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} id="input-email" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Password</label>
                        <input onChange={onPasswordSubmit} type={showPassword ? "text" : "password"} value={password} id="input-password" required />
                    </div>
                    <div className="col">
                        <label>Confirm Password</label>
                        <input onChange={matchingPassword} type={showPassword ? "text" : "password"} value={confirmPassword} id="input-confirm-password" required />
                    </div>

                </div>
                <div className="show-password">
                    <input type="checkbox" value={showPassword} onChange={(event) => handleShowPassword(event)} id="input-show-password" />
                    <div >show password</div>
                </div>
                <input type="submit" value="Submit Form" className="input-button" onSubmit={(event) => handleFormSubmit(event)} />
            </form>
        </div>
    </>

}

export default Form;
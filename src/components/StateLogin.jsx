import { useState } from "react";
export default function StateLogin() {
    const [enteredValue, setEnteredValue] = useState({
        email: "",
        password: "",
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");

    function handleSubmit(event) {
        event.preventDefault();

        if (
            enteredValue.email.trim().length === 0 ||
            enteredValue.password.trim().length === 0
        ) {
            return;
        }
        console.log(enteredValue);

        setEnteredValue({
            email: "",
            password: "",
        });
    }

    function handleInputChange(identifier, value) {
        setEnteredValue((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }));
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }));
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>State-Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onBlur={() => handleInputBlur("email")}
                        onChange={(event) =>
                            handleInputChange("email", event.target.value)
                        }
                        value={enteredValue.email}
                    />
                    <div className="control-error">
                        {emailIsInvalid && (
                            <p>Please entere a valid email address!</p>
                        )}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) =>
                            handleInputChange("password", event.target.value)
                        }
                        value={enteredValue.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button onClick={handleSubmit} className="button">
                    Login
                </button>
            </p>
        </form>
    );
}

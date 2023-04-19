import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SocialLogin from "../social-login/SocialLogin";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase.config";

const auth = getAuth(app);
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [control, setControl]= useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    if (email) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else {
      setError("bro hobe na. email dite hobe");
    }
  };

  console.log(email, password);
  return (
    <div className="w-50 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <p>
            <small>{error}</small>
          </p>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

        {control ? <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          value ={password}
          placeholder="Password"
        />

        :
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />}
        <button onClick ={()=> setControl(!control)}>toggle</button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handleRegister} variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;

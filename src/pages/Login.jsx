import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { authLogin } from '../store/features/user/authActions';

const Login = () => {

    const dispatch = useDispatch()

    const usernameRef = useRef();
    const passwordRef = useRef();

    const submit = (e) => {
        console.log('salam')
        e.preventDefault()

        const username = usernameRef.current.value
        const password = passwordRef.current.value

        dispatch(authLogin({ username, password }))
    }

  return (
    <>
        {/* (.row.my-5>.col-md-6.text-center>h1{Login}+em{Use the username and password crendential to authenticate to our System})+(.row.my-5>.col-md-4.mx-auto.bg-light.p-4>(.form-group.my-3>label{Username}+input:text.form-control#username)+(.form-group.my-3>label{Password}+input:password.form-control#password).d-grid.my-2>button.btn.btn-primary{Login}) */}
        <div className="row my-5">
            <div className="col-md-6 mx-auto text-center">
                <h1>Login</h1>
                <em>Use the username and password crendential to authenticate to our System</em>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-md-4 mx-auto bg-light p-4">
                <form onSubmit={submit}>
                    <div className="form-group my-3">
                        <label htmlFor="username">Username</label>
                        <input ref={usernameRef} type="text" id="username" className="form-control" />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="password">Password</label>
                        <input ref={passwordRef} type="password" id="password" className="form-control" />
                    </div>
                    <div className="d-grid my-2">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login
// import React, {useEffect, useState} from "react";
import '../css/Login.css';

const Login = () => {

    return (
        <div className="coloringWrapper login mt-4 pl-3 pr-3">
            <div className="row">
                <div className="col-12">
                    Login
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="email" className="form-control" id="email1" placeholder="Enter email" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Enter paasword" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Start drawing</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
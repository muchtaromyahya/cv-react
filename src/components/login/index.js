import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import { setCookie } from '../../utils/cookie';
import { authService } from '../../services';
import {
  Button,
  FormGroup,
  Input,
} from 'reactstrap';

const LoginModal = (props) => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    document.title = 'Login';
  });


  const onSubmit = () => {
    setLoginLoading(true);
    authService
      .login(username, password)
      .then((res) => {
        // console.log(JSON.stringify(res.token));
        // console.log(JSON.parse(res.token));
        const cookieToken = res.token;
        // const cookieUser = res.user;
        // setCookie('userID', JSON.stringify(cookieUser), 1000);
        setCookie('tokenn', JSON.stringify(cookieToken), 1000);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
        // toggle();
        history.push('/product');
      });
  };

  return (
    <div className="body">
      <div class="container1 h-100">
		    <div class="d-flex justify-content-center h-100">
			    <div class="user_card">
				    <div class="d-flex justify-content-center">
				    </div>
				    <div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
              <FormGroup>
              <Input 
                className="form-control input_user"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              </FormGroup>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
              <FormGroup>
              <Input
                className="form-control input_pass"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              </FormGroup>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
              <Button
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            disabled={isLoginLoading}
          >
            Login
          </Button>
				   </div>
					</form>
				</div>
			</div>
		</div>
	</div>
    </div>
  );
};

export default LoginModal;

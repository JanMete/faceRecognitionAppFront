import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      errorMessage: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    this.setState({ errorMessage: '' });

    fetch('https://face-recognition-server-3wwr.onrender.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({ errorMessage: 'Incorrect email or password' });
          setTimeout(() => {
            this.setState({ errorMessage: '' });
          }, 2000);
        }
      })
      .catch((error) => {
        console.error('Error during sign in:', error);
        this.setState({
          errorMessage: 'Unable to sign in. Please try again later.',
        });
        setTimeout(() => {
          this.setState({ errorMessage: '' });
        }, 2000);
      });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmitSignIn();
    }
  };

  render() {
    const { onRouteChange } = this.props;
    const { errorMessage } = this.state;

    return (
      <article className='animate__animated animate__fadeIn br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure tc'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  onKeyPress={this.handleKeyPress}
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                onClick={this.onSubmitSignIn}
                onKeyPress={this.handleKeyPress}
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
              />
            </div>
            <div className='lh-copy mt3'>
              <p
                onClick={() => onRouteChange('register')}
                className='f6 link dim black db pointer'
              >
                Register
              </p>
            </div>
            {errorMessage && <p className='f7 b red mt3 '>{errorMessage}</p>}
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;

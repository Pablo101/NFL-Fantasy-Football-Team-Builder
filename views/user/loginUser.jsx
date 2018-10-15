var React = require("react");

class loginUser extends React.Component {
  render() {
    return (
      <html>
        <head>
         <link rel="stylesheet" href="/views/css/index.css" />
         </head>

         <body>

        <div className="overlay">
            <div className="mainLogo">
              <img src="https://upload.wikimedia.org/wikipedia/en/5/5a/2018_NFL_Draft_logo.svg"></img>
            </div>
            <div className="welcome-message">
              <h1>WELCOME TO THE NFL FANTASY TEAM BUILDER</h1>
              <h2>LOGIN BELOW TO YOUR FANTASY FOOTBALL ACCOUNT</h2>
            </div>
            <div className="login-form">
              <form className="user-form" method="POST" action="/users/login">
                <h3>RETURNING USER:</h3>
                <div className="row1">
                  <div className="user-attribute">
                    USERNAME:<input name="name" placeholder="name" type="text" />
                  </div>
                </div>
                <div className="row2">
                  <div className="user-attribute">
                    PASSWORD:<input name="password" placeholder="password" type="password" />
                  </div>
                </div>
                <div className="submitButton">
                  <input name="submit" value="Login" type="submit" />
                </div>
              </form>
              <div className="new-user">
                <a href="/users/new">NEW USER? - CLICK TO REGISTER A NEW FANTASY ACCOUNT</a>
              </div>
            </div>
          </div>

        </body>
      </html>
    );
  }
}


module.exports = loginUser;

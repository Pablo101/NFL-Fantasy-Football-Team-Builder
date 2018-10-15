var React = require("react");

class NewUser extends React.Component {
  render() {
    return (
      <html>
        <head>

          <link rel="stylesheet" href="/views/css/index.css" />
        </head>

        <body>
          <div className="overlay">
            <div className="welcome-message">
                <h1>
                    WELCOME TO THE NFL FANTASY TEAM BUILDER
                </h1>
                <p>Build the fantasy Football Team of Your Dreams</p>

            </div>
            <form className="user-form" method="POST" action="/users">

                <ul className="features">
                    <li>Live Player Data</li>
                    <li>Customize your team</li>
                    <li>Impress your friends</li>
                </ul>

              {/* <div className="rows">
                <div className="row1">

                </div>
                <div className="row2">
                </div>
                <div className="submitButton">
                  <input name="submit" value="New Account" type="submit" />
                </div>
              </div> */}


              <div className="instructions">
                <h2>Choose a username, password (No restrictions on character, length, etc) and get ready for some Fantasy Football!</h2>
              </div>

              <div className="input-wrapper">
                <input className="input-data" name="name" placeholder="Enter Name" type="text" />
              </div>
              <div className="input-wrapper">
                <input className="input-data" name="password" placeholder="Enter Password" type="password" />
              </div>
              <div className="input-wrapper">
                <input className="button-submit" name="submit" value="New Account" type="submit" />
              </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewUser;

var React = require("react");

class NewUser extends React.Component {

    constructor(){
        super();
        this.state = {
            logo: ''
        }
    }

    updateLogo(event){
        event.preventDefault();
        console.log('Yay');
        console.log(this.state);
    }

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
                    WELCOME TO THE CUSTOMIZATION PAGE!
                </h1>
                <p>Go ahead and pick your team name and logo.</p>

            </div>
            <form className="user-form customization-form" method="POST" action="/team/create">
              {/* <div className="rows">
              <div className="row1">
              </div>
              <div className="row2">
              </div>
            </div> */}


              <div className="instructions">
                <h2>Choose your team name for the Fantasy Football!</h2>
              </div>

              <div className="input-wrapper">
                <input className="input-data" name="name" placeholder="Enter Team Name" type="text" />
              </div>

              <div className="instructions">
                <h2>Choose your team logo for the Fantasy Football!</h2>
              </div>

              <input name="team-logo" className="hidden" />

              <div className="avatar-wrapper">
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_01.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_02.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_03.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_04.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_05.svg"></img>
                </div>
              </div>

              <div className="avatar-wrapper">
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_06.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_07.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_08.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_09.svg"></img>
                </div>
                <div className="avatar">
                    <img src="http://g.espncdn.com/lm-static/logo-packs/ffl/CrazyHelmets-ToddDetwiler/Helmets_10.svg"></img>
                </div>
              </div>

              <div className="input-wrapper">
                <input className="button-submit" name="submit" value="Make My Team" type="submit" />
              </div>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewUser;
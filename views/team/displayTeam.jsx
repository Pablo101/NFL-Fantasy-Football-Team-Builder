const React = require('react')

class RenderTeamComponent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        if(!this.props.team || !this.props.players) return (
            <div> 
                <h6>Sorry you need to pass in a team and some players</h6>
            </div>
        )
        return (
            <div style={{ 
                display: "flex",
                height: "100%",
                width: "100%",
                flexFlow: "column nowrap",
                alignItems: "center"
            }}> 
                <h4>Here's your super awesome team, {this.props.team.name}</h4>
                <div 
                style={{ 
                    display: "flex",
                    height: "100%",
                    width: "50%",
                    flexFlow: "row wrap",
                    justifyContent: "space-evenly",
                    marginBottom: "20px"
                }}>
                 {this.props.players.map(player => <RenderPlayer player={player}/>)}
                </div>
                <a href="/">Home</a>
            </div>
        )  
    }
}

const RenderPlayer = ({ player }) => (
    <div 
    style={{ 
        height: "60px", 
        width: "30%", 
        backgroundColor: "#F2F3F4", 
        borderRadius: "5px",
        display: "flex",
        flexFlow: "row nowrap",
        marginBottom: "10px",
        alignItems: "center",
        justifyContent: "space-evenly"
    }}> 
        <p>{player.name}</p>
        <p>{player.position_id}</p>
    </div>
)

module.exports = RenderTeamComponent
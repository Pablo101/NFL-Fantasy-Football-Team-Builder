const React = require('react')


class CreateTeamComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.renderPositions = this.renderPositions.bind(this)
        // this.handleSelect = this.handleSelect.bind(this)
    }

 
    renderPositions () {
        return ( 
        <FormComponent 
            positions={Object.keys(this.props.positions)} 
            team={this.props.team}
            players={this.props.positions}/>
            )
    }

    // handleSelect (id) {
    //     if(this.state.selected.includes(id)) {
    //         const selected = this.state.selected.filter(item => item !== id )
    //         return this.setState({ selected })
    //     }
    //     const selected = [...this.state.selected, id]
    //     this.setState({ selected })
    // }


    render ()  {
        const { props } = this;
        if(!props.positions) return (
            <div style={{ 
                display: "flex", 
                flex: 1, 
                alignItems: "center", 
                justifyContent: "center" }}>
                Hey there are no positions to render
            </div>
        )

        
        return (
        <div style={{ 
            display: "flex", 
            flex: 1,
            paddingTop: "40px",
            height: "100%",
            width: "100%", 
            }}>
            <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center" }}> 
            <p style={{ 
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px"
            }}
            > 
            {`Select some players for ${this.props.team.name}`}
            </p> 
            <p style={{ fontSize: "15px", color: "#A6ACAF", marginBottom: "30px"}}> Pick 1 qb, 2rb, 3wr, 1te, 1 d/st and 1 k</p>
            {this.renderPositions()}
            </div>
          
        </div>
    )
 }
}

// const SelectablePlayer = ({ player, selected, handleClick }) => {
//     const generateBackgroundColor = () => {
//     if(selected && selected.includes(player.id)) return "#76D7C4"
//     return "white"
//     } 
//     return (
//         <div style={{ 
//             height: '50px', 
//             width: '80%', 
//             backgroundColor: generateBackgroundColor(), 
//             border: "1px solid #D5F5E3", 
//             marginBottom: '10px',
//             borderRadius: "2px" }}
//             onClick={() => handleClick(player.id)}
//             > 
//             {player.name}
//         </div>
//     )
// }

// const SelectablePositions = ({ position, players, handleClick, handleSelect, active, selected }) => {
//     if(!players || !players.length) return null;
//     const __players = players.map((player) => {
//         return ( <SelectablePlayer key={`player-${player.name}`}player={player} selected={selected} handleClick={handleSelect}/>)
//     })

//     const toggleDisplay = () => {
//         if(active && active === position) return "flex"
//         return "none"
//     }

//     return (
//         <button onClick={() => { console.log("YPPPPPPp")}} eid={`select-${position}`}style={{ minHeight: '50px', width: '40%', backgroundColor: "#F2F3F4", marginBottom: "20px" }}>
//             <p style={{ fontSize: "20px", fontWeight: "Bold"}}>{`Click to Select a ${position}`}</p>
//             <div style={{ 
//                 display: toggleDisplay(), 
//                 flex: 1, 
//                 flexDirection: "row",
//                 flexWrap: "nowrap"}}> 
//                 {__players}
//             </div>
//         </button>
//     )
// }


const FormComponent = ({ positions, players, team }) => {
    const posistions = () => positions.map(position => {
        return (<React.Fragment>
            <label style={{ 
                marginBottom: "20px",
                fontSize: "20px",
                fontWeight: "bold",
                position: "relative",
                left: "-20px"
            }}>
            {`Click to select a ${position}`}
            </label>
            <div style={{ 
                display: "flex", 
                height: "auto",
                width: "50%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}> 
            { players[`${position}`].map(player => (
             <div style={{ 
                 display: "flex",
                 flexDirection: "row",
                 flexWrap: "nowrap",
                 height: "60px",
                 flexBasis: "30%",
                 marginBottom: "10px",
                 backgroundColor: " "
                 }}> 
             <input 
                name={`${position}`}
                value={player.id} 
                type="checkbox"
                />
             <p style={{ 
             position: "relative", 
             top: "-15px", 
             right: "-15px"}}>
             {player.name}
             </p>
             </div>
            ))}
            </div>
        </React.Fragment>)
    })
    return (
        <form method="POST" action={`/team/${team.id}/players`} 
          style={{ 
            display: "flex", 
            flex: 1,
            flexDirection: "column",
            alignItems: "center"
            }}> 
            {posistions()}
            <input style={{ 
                backgroundColor: "green",
                height: "40px",
                width: "120px",
                textAlign: "center",
                paddingTop: "4px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                borderRadius: "5px",
            }}type="submit" />
        </form>
    )
}

module.exports = CreateTeamComponent
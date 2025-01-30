
function Goal(props) {
    const isGoal = props.scored;
    return (
       <>
       {isGoal ?  <div>No goal was scored</div> :  <div>Goal was scored</div>}
       </>
      )
}

export default Goal
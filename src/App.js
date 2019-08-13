//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


  const [home__score, setHome_score] = useState(
    0
  );
  const [away__score, setAway_score] = useState(
    0
  );
  const home = "Bikers";
  const away = "Narcs";


   adjustScore("Hawks", 20);

    function adjustScore(team, x) {
    //console.log('App.js -> %cx:', 'color: teal', x)
    //console.log('App.js -> %cteam:', 'color: blue', team)

    if (team === home) {
      //console.log('App.js -> %cteam === home:', 'color: red', team === home)

     {
       let adjustment = () => setHome_score(home__score + x);
       return adjustment
     }

    } 
    
    else {
   
      setAway_score(away__score + x)};

      
    }
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{home}</h2>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">
              {home__score}
            </div>
          </div>
          <div className="timer">00:05</div>
          <div className="away">
            <h2 className="away__name">
              {" "}
              {away}{" "}
            </h2>
            <div className="away__score">
              {away__score}
            </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button
            className="homeButtons__touchdown"
            onClick={() =>
              setHome_score(home__score + 7)
            }
          >
            {home} Touchdown
          </button>

          <button
            className="homeButtons__fieldGoal"
            onClick={() =>
              setHome_score(home__score + 3)
            }
          >
            {home} Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() =>
              setAway_score(away__score + 7)
            }
          >
            {away} Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() =>
              setAway_score(away__score + 3)
            }
          >
            {away} Field Goal
          </button>

             


        </div>
      </section>
    </div>
  );
           }
         
       

export default App;

// Woo Hoo!
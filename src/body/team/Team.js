import React from "react";
import TeamMember from "./components/TeamMembers";
import team from "./assets/officers"
import "./assets/style_team.css";

function Team() {
    return (
        <div>
            <h1 className="the-officers" data-text='Meet the Team'>
                Meet the Team
            </h1>
            <div className="members">
                {team["team"].map((value, index) => {
                    return <TeamMember key={index} attr={value} />
                })}
            </div>
        </div>
    )
}

export default Team;

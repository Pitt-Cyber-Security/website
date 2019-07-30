import React from "react";

function TeamMember(props) {
    const {name, position, image, descript, skills} = props.attr;
    return (
        <div>
            <h2>{position}</h2>
            <div className="member">
                <div className="pict">
                    <img className="profile"
                         src={image}
                         alt="profile"/>
                </div>
                <div className="info">
                    <h4 className="name">{name}</h4>
                    <div className="descript">
                        {descript}
                        <br /><br />
                        <strong className="name">Skills:</strong>
                        <br />
                        {console.log(skills)}
                        {skills.join(", ")}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default TeamMember;

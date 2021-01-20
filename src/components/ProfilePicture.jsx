import React from "react";


function ProfilePicture(props){
    return (
        <div>
            <form action={props.email}>
            <button type="submit" className="btnReachOut">
                <div className="profile-picture"><img src={props.avatarURL} alt="Lucas Sacheto" /></div>
                <img src="./assets/mail.png" className="iconReachOut" alt="reach out" />
            </button>
            </form>
        </div>
    )
}

export default ProfilePicture;
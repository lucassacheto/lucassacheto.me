import React from "react";
import ProfilePicture from "./ProfilePicture";
import SiteProfile from "../SiteProfile";

function Profile(){
    return (
        <div className="profile">
            { SiteProfile.map( sp => <ProfilePicture key={sp.id} avatarURL={sp.avatarURL} email={sp.email} /> ) }
        </div>
    )
}

export default Profile;

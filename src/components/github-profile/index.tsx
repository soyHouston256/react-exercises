import { useEffect, useState } from "react";
import './style.css';
import Profile from "./profile";
export default function GithubProfile() {

    const [username, setUsername] = useState('soyhouston256');
    const [profile, setProfile] = useState({});

    interface User {
        avatar_url: string;
        login: string;
        name: string;
        public_repos: number;
    }

    async function fectchProfileGithib() {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            if (data) {
                    setProfile(data);
                    setUsername('')
                }
    }

    function handleSubmitFetch() {
            fectchProfileGithib()
        } 

    useEffect(()=>{
        fectchProfileGithib()
    },[]);


    return <div className="wrapper-github-profile">
        
        <div className="input-wrapper">
            <input
            name="github-profile"
            type="text"
            placeholder="soyhouston256"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
            <button onClick={handleSubmitFetch}>search</button>
        </div>
        <div className="profile-wrapper">
            {
                profile && profile?.avatar_url && 
                    <Profile user={profile as User} />
            }
        </div>
    </div>
}
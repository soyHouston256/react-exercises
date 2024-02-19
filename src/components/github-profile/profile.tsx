interface User {
    avatar_url: string;
    login: string;
    name: string;
    public_repos: number;
}
export default function Profile({ user }: { user: User }) {
    const { avatar_url, login, name, public_repos } = user;
    return (
        <div className="profile-wrapper">
            {
                <div className="profile-card">
                    <img src={avatar_url} alt="avatar" />
                    <p>@{login}</p>
                    <p>Name: {name}</p>
                    <p>Repository: {public_repos}</p>
                </div>
            }
        </div>
    );
}
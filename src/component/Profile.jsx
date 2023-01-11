import "../style/profile.css";

export default function Profile({ setLogout }) {
  const logout = () => {
    setLogout(false);
  };
  return (
    <div className="profile">
      <span>Profile</span>
      <button className="button" onClick={logout}>
        Log out
      </button>
    </div>
  );
}

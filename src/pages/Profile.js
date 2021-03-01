import auth from '../auth';

function Profile() {
  const userData = auth.user
  return (
    <>
      <h1>Profile</h1>
      <p>{userData.userId}</p>
      <p>{userData.id}</p>
      <p>{userData.title}</p>
      <p>{userData.completedcompleted}</p>
      <a href="/app/my-plans">My Plans</a>
    </>
  );
}

export default Profile;

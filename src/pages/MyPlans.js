import auth from '../auth';

function MyPlans() {
  const userData = auth.user;
  return (
    <>
      <h1>My Plans</h1>
      <h1>Profile</h1>
      <p>{userData.userId}</p>
      <p>{userData.id}</p>
      <p>{userData.title}</p>
      <p>{userData.completedcompleted}</p>
    </>
  );
}

export default MyPlans;

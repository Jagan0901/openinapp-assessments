

export const Heading = () => {
    const pic = localStorage.getItem("profilePic");
  return (
    <div className="heading">
      <h1>Dashboard</h1>

        <div className="profile-photo">
          <img src={pic} alt="" />
        </div>
    </div>
  );
}

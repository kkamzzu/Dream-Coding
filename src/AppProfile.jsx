import Profile from "./components/Profile";
import "./App.css";

function AppProfile() {
  return (
    <>
      <Profile
        image="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        name="JOY"
        title="친구네 강아지"
      />
      <Profile
        image="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
        name="KIKI"
        title="우리집 강아지"
      />
      <Profile
        image="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        name="MONDAY"
        title="친구네 강아지"
      />
    </>
  );
}

export default AppProfile;

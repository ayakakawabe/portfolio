import Activity from "./components/Activity";
import Certification from "./components/Certification";
import GithubRepo from "./components/GithubRepo";
import Profile from "./components/Profile";
import Qiita from "./components/Qiita";
import Skill from "./components/SkillSet";

function App() {
  return (
    <>
      <Profile />
      <Skill />
      <Certification />
      <Activity />
      <GithubRepo />
      <Qiita />
    </>
  )
}

export default App;
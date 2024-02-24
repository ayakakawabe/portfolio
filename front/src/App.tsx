import Activity from "./components/Activity";
import Certification from "./components/Certification";
import GithubRepo from "./components/Github";
import Profile from "./components/Profile";
import QiitaArt from "./components/Qiita";
import Skill from "./components/SkillSet";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Skill />
      <Certification />
      <Activity />
      <GithubRepo />
      <QiitaArt />
    </>
  )
}

export default App;
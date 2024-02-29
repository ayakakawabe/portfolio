import Activity from "./components/Activity";
import Certification from "./components/Certification";
import Github from "./components/github/Github";
import Profile from "./components/Profile";
import QiitaArt from "./components/Qiita";
import Skill from "./components/SkillSet";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-gray-600 body-font">
      <Header />
      <Profile />
      <Skill />
      <Certification />
      <Activity />
      <Github />
      <QiitaArt />
      <Footer />
    </div>
  )
}

export default App;
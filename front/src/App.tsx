import Activities from "./components/Activity";
import Certification from "./components/Certification";
import Github from "./components/github/Github";
import Profile from "./components/Profile";
import Qiita from "./components/qiita/Qiita";
import SkillSet from "./components/SkillSet";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-gray-600 body-font">
      <Header />
      <Profile />
      <SkillSet />
      <Certification />
      <Activities />
      <Github />
      <Qiita />
      <Footer />
    </div>
  )
}

export default App;
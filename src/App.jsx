import './App.css'
import PageLayout from './components/PageLayout'
import IndexPage from './screens/IndexPage'
import About from './screens/About'
import Skill from './screens/Skill'
import Project from './screens/Project'
import Contact from './screens/Contact'

function App() {

  return (
    <PageLayout>
      < IndexPage />
      < About />
      < Skill />
      < Project />
      < Contact />
    </PageLayout>
  )
}

export default App

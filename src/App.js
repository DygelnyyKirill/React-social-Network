import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settin/Settings'
import state from './redux/state'

function App() {

  return (  
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={state.friendPage.friends}/>
        <div className='app-wrapper-content'>
          <Route path='/content' render={ () => <Content posts={state.contentPage.posts} /> } />
          <Route path='/dialogs' render={ () => <Dialogs dialogs={state.messagePage.dialogs} messages={state.messagePage.messages} /> } />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} /> 
          <Route path='/settings' component={Settings} />
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
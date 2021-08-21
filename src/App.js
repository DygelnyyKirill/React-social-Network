import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settin/Settings'

function App() {
  const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post.', likesCount: 20},
    {id: 3, message: 'All wery good', likesCount: 25},
    {id: 4, message: 'Bla', likesCount: 25},
    {id: 5, message: 'BlaBla', likesCount: 30},
    {id: 6, message: 'BlaBlaBla', likesCount: 35},
  ]
  const dialogs = [
    {id: 1, name: 'Kiril'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Anton'},
    {id: 4, name: 'Oleg'},
    {id: 5, name: 'Evgen'},
    {id: 6, name: 'Kate'},
  ]
  const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Happy'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yoyo'},
    {id: 6, message: 'yoyoyoy'},
]

  return (  
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/content' render={ () => <Content posts={posts} /> } />
          <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages} /> } />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
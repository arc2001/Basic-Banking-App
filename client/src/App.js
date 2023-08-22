import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Transactions from './components/Transactions'
import Customers from './components/Customers'
import GlobalState from './context/GobalState'
import Transfer from "./components/Transfer";
import Home from './components/Home'
import Success from "./components/Success";
const App = () => {
  return (
    <GlobalState>
      <Router>
        <NavBar />
        <div className='appContainer'>
          <Switch>
            <Route path='/transactions' component={Transactions} />
            <Route path='/customers' component={Customers} />
           
            <Route path='/transfer/:id' component={Transfer} />
           
            <Route path='/Success' component={Success} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
       
      </Router>
    </GlobalState>
  )
}

export default App

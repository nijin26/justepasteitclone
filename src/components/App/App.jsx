import React,{useState} from 'react'
import Header from '../Header/Header'
import ShareButton from '../ShareButton/ShareButton'
import Typing from '../Typing/Typing'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SharePage from '../SharePage/SharePage'

const App = () => {

 const [shareText, setShareText] = useState('');
 const [routeNav, setRouteNav] = useState(false);


    const handleInputChange = (inputValue)=>{
        setShareText(inputValue)
        console.log(shareText);
    }

    const onSubmit = (inputValue)=>{
        console.log("pressed dude");
        console.log(shareText);
        axios.post('http://localhost:2000/add',{'content':shareText})
        .then(response=>{


            let id =response.data['_id'];
            setRouteNav(true);
            console.log(id);
            console.log(routeNav)

        })
        .catch(error=>{
            console.log(error);
        })



        if(routeNav===true)
        {
        return <Redirect to='/test'/>

        }

 
    }
       return (
        <Router>

           <div>
               <Header headTitle="JustPasteit"/>

                   <Switch>
                   <Route exact path='/'>
                       <Typing handleInputChange={handleInputChange}/>
                       </Route>
                       <Route exact path='/test'>
                    <SharePage/>
                       </Route>
                   </Switch>
 
               <ShareButton onSubmit={onSubmit} />
           </div>
           </Router>

       )
}

export default App

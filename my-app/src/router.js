import React from 'react'
import {HashRouter,Route,Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import Basic from './pages/table/basicTable'
import High from './pages/table/highTable'
import Login from './pages/form/login'
import NoMatch from './pages/nomatch';
export default class IRouter extends React.Component {

    render() {
        return (
           <HashRouter>
               <App>
                   <Route path="/login" component={Login}/>
                   <Route path="/admin" component={()=>
                    <Admin>
                        <Switch>
                           
                            <Route path="/admin/ui/buttons" component={Buttons} />
                            <Route path="/admin/ui/modals" component={Modals} />
                            <Route path="/admin/ui/loadings" component={Loadings} />
                            <Route path="/admin/ui/notification" component={Notice} />
                            <Route path="/admin/ui/messages" component={Messages} />
                            <Route path="/admin/ui/tabs" component={Tabs} />
                            <Route path="/admin/ui/gallery" component={Gallery} />
                            <Route path="/admin/ui/carousel" component={Carousel} />
                            <Route path="/admin/form/carousel" component={Carousel} />
                            <Route path="/admin/form/carousel" component={Carousel} />
                            <Route path="/admin/table/basic" component={Basic} />
                            <Route path="/admin/table/high" component={High} />
                            <Route path="/admin/form/login" component={Login} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Admin>
                    }/>
                   <Route path="/order/detail" component={Login}/>
               </App>
           </HashRouter>
        );
    }
}
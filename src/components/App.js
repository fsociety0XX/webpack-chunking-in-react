import React, { Component } from 'react'
import loadable from 'react-loadable';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';
// import VS from './Visibly'
// import ZX from './Zephx'
// import JA from './JA'
import './App.css'

const App = () =>  {

const LoadingComponent = () =>  <div>Loading...</div>

// ja component
const AsyncJaComponent = loadable( {
    loader: () => import( './JA' /* webpackChunkName: "jointanalytics" */),
    loading: LoadingComponent
} );
// vs component
const AsyncVsComponent = loadable( {
    loader: () => import( './Visibly' /* webpackChunkName: "visibly" */),
    loading: LoadingComponent
} );
// zx component
const AsyncZxComponent = loadable( {
    loader: () => import( './Zephx' /* webpackChunkName: "zephx" */),
    loading: LoadingComponent
} );

        return (
            <div className="wrapper">
                <BrowserRouter>
                <div>
                    <div className="menu">
                       <div><Link exact to="/JA" activeClassName="active">JA</Link></div> 
                        <div><Link to="/VS" activeClassName="active">VS</Link></div>
                        <div><Link to="/ZX" activeClassName="active">ZX</Link></div>
                    </div>
                    
                    {/* <Switch>
                        <Route exact path="/" component={ JA } />
                        <Route path="/VS" component={ VS } />
                        <Route path="/ZX" component={ ZX } />
                    </Switch> */}
                     <Switch>
                        <Route exact path="/JA" component={ AsyncJaComponent } />
                        <Route path="/VS" component={ AsyncVsComponent } />
                        <Route path="/ZX" component={ AsyncZxComponent } />
                    </Switch>
                </div>
            </BrowserRouter>
            </div>
        )
}

export default App
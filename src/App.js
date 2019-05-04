import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PostList from './components/posts/PostList'
import PostShow from './components/posts/PostShow'
import UserList from './components/users/UserList'


class App extends Component {
render() {
return (
<BrowserRouter>
<div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
<Link to="/" className="navbar-brand">Blog-UI</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item active">
<Link to="/" className="nav-link">Home</Link>
</li>
<li className="nav-item">
<Link to="/about" className="nav-link">About</Link>
</li>
<li className="nav-item active">
<Link to="/posts" className="nav-link">Read Posts</Link>
</li>
<li className="nav-item">
<Link to="/contact" className="nav-link">Contact</Link>
</li>
<li className="nav-item active">
<Link to="/users" className="nav-link">Users</Link>
</li>

</ul>
</div>
</nav>
<Route path="/" component={Home} exact={true} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/posts" component={PostList} exact={true} />
<Route path="/posts/:id" component={PostShow} />
<Route path="/users" component={UserList}/>



</div>
</BrowserRouter>
)
}
}

export default App;
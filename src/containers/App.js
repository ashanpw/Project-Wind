import React, { Component } from 'react';
import './App.css';
import PreHome from '../components/PreHome/PreHome';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

class App extends Component {
  state = {
    page: "PreHome"
  }
  updatePageHandler = (page) => {
    this.setState({ page: page });
    console.log(this.state)
  }
  render() {
    // let display = this.state.page === "PreHome" ? <PreHome changePage={this.updatePageHandler} /> : this.state.page === "Home" ? <Home changePage={this.updatePageHandler} /> : this.state.page === "About" ? <About changePage={this.updatePageHandler} /> : <Projects changePage={this.updatePageHandler} />
    let display = <About />
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;

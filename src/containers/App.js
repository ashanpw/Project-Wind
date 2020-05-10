import React, { Component } from 'react';
import './App.css';
import PreHome from '../components/PreHome/PreHome';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';


class App extends Component {
  state = {
    page: "PreHome",
  }
  updatePageHandler = (page) => {
    this.setState({ page: page });
    console.log(this.state)
  }

  render() {

    let display;
    if (this.state.page === "PreHome")
      display = (<PreHome changePage={this.updatePageHandler} />)
    else if (this.state.page === "Home")
      display = <Home changePage={this.updatePageHandler} isReturning={false} />
    else if (this.state.page === "HomeReturn")
      display = <Home changePage={this.updatePageHandler} isReturning={true} />
    else if (this.state.page === "About")
      display = <About changePage={this.updatePageHandler} />
    else if (this.state.page === "Experience")
      display = <Experience changePage={this.updatePageHandler} />
    else if (this.state.page === "Contact")
      display = <Contact changePage={this.updatePageHandler} />
    else
      display = <Projects changePage={this.updatePageHandler} />

    return (
      <div className="App">
        {display}
      </div >
    );
  }
}

export default App;

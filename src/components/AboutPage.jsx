import React from "react";
import UserClass, { UserfunctionComp } from "../classComponents/UserClass";

class AboutPage extends React.Component {
  // Loads => Renders => API call => Re-Render => Updates DOM

  constructor(props) {
    super(props);

    this.state = {
      name: "Dummy",
      location: "Dummy"
    }

    console.log("Parent Constructor - Parent initialization started")
  }

  // Github user API - https://api.github.com/users/octocat


  // We can make componentDidMount() to be an async function when making API call
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/octocat");
    // const json = await data.json();

    // // Update the state
    // this.setState({
    //   name: json.name,
    //   location: json.location,
    //   image: json.avatar_url
    // })
    // console.log("Parent Component MOUNTED");
  }

  componentDidUpdate() {
    console.log("Component re-rendered and update complete")
  }

  render() {
    const {name, location} = this.state;
    console.log("Parent render")
    return (
      <div>
        <UserClass name={name} location={location} />
      </div>
    );
  }
}
export default AboutPage;


/*
  Parent Constructor - Parent initialization started
  Parent render

    Dummy Child Constructor - Child initialization started
    Dummy Child render started
  
  Dummy Child component MOUNTED
  Parent Component MOUNTED

  //....re-render....//
  Parent render
  The Octocat Child render started (updated state)
  Component re-rendered and update complete (componentDidUpdate() called)
*/

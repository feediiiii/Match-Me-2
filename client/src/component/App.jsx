import React from 'react'
import AllPosts from './AllPosts';
import CreateAccount from './CreateAccount';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            view:"AllPosts",
            data:""
        }
    }


renderView() {
    if (this.state.view === "AllPosts") {
      return <AllPosts />;
    }
    if (this.state.view === "CreateAccount") {
        return <CreateAccount />;
      }
}

  render() {
    return (
    <div> 
         <nav className=" nav">
          <div
            className={
              this.state.view !== "createPost"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              this.setState({view:"CreateAccount"});
            }}
          >
            Create account
          </div>
          
          <div
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.setState({view:"AllPosts"})}
          >
            All Posts
          </div>
        </nav>
            {this.renderView()}
    </div>
    )
  }
}

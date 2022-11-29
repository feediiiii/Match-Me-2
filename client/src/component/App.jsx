import React from 'react'
import AllPosts from './AllPosts';
import CreateAccount from './CreateAccount';
import Axios from "axios"
import AllUsers from './AllUsers';
import CreatePost from './CreatePost';
import UpdateUser from './UpdateUser';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            idUser:0,
            nameUser:"",
            view:"AllPosts",
            allPosts:[],
            allUsers:[],
            hobbies:""
        }
        this.changeView=this.changeView.bind(this)
        this.changeViewFromPost=this.changeViewFromPost.bind(this)
        this.changeFilteredPosts=this.changeFilteredPosts.bind(this)
        this.changeViewFromUpdate=this.changeViewFromUpdate.bind(this)
    }

    componentDidMount(){
        Axios.get("http://localhost:5000/allPosts")
        .then((response)=>{
            this.setState({
                allPosts: response.data
            })
        })

        Axios.get("http://localhost:5000/allUsers")
        .then((response)=>{
          this.setState({
            allUsers:response.data
          })
        })
        var nameUser = this.state.nameUser;
        Axios.get(`http://localhost:5000/getIdUser/${nameUser}`)
        .then((response)=>{
          this.setState({
            idUser:response.data
          })
          console.log(this.state.idUser)
        })
    }

    changeView=(name,hobbies)=>{
        this.setState({
            view:"AllPosts",
            nameUser:name,
            hobbies:hobbies
        })
        console.log(this.state.nameUser,this.state.hobbies)
    }

    changeViewFromPost=()=>{
      this.setState({
        view:"AllPosts",
    })
    window.location.reload();
    }

    changeViewFromUpdate=()=>{
      this.setState({
        view:"AllUsers",
    })
    window.location.reload();
    }

    changeFilteredPosts=()=>{
      console.log("--------->",this.state.hobbies)
      var hobbies= this.state.hobbies;
      Axios.get(`http://localhost:5000/getPostFilter/${hobbies}`)
        .then((response)=>{
          this.setState({
            allPosts:response.data,
            view:"AllPosts"
          })
          console.log(this.state.allPosts)
          // window.location.reload()
        }).catch(err=>console.log(err))
    }

renderView() {
    if (this.state.view === "AllPosts") {
      return (<>
      {this.state.nameUser.length?<h1> WELCOME {this.state.nameUser}</h1>:null}
      <AllPosts data={this.state.allPosts}/>
      </>
      )
    }
    if (this.state.view === "CreateAccount") {
        return <CreateAccount fun1={this.changeView} />;
      }
    if (this.state.view === "AllUsers") {
        return <AllUsers data={this.state.allUsers}/>;
      }
      if (this.state.view === "CreatePost") {
        return <CreatePost fun2={this.changeViewFromPost}/>;
      }
      if (this.state.view === "UpdateUser") {
        return <UpdateUser fun3={this.changeViewFromUpdate}/>;
      }

}

  render() {
    return (
    <div> 
        <center><img src="favicon2.ico" alt=""/></center>
        <button id="matchme" onClick={this.changeFilteredPosts}> People how match me </button>
         <nav id="nav">
          <div id="navtest">
          <center><div class="navComp" 
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
          </div></center>

          <center><div class="navComp" 
            className={
              this.state.view !== "createPost"
                ? "nav-unselected"
                : "nav-selected"
            }
            onClick={() => {
              this.setState({view:"UpdateUser"});
            }}
          >
           Update hobbies
          </div></center>
          
          <center><div class="navComp"
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.setState({view:"AllPosts"})}
          >
            All Posts
          </div></center>


          <center><div class="navComp"
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.setState({view:"CreatePost"})}
          >
            Create a post
          </div></center>

          <center><div class="navComp"
            className={
              this.state.view === "allPosts" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.setState({view:"AllUsers"})}
          >
            AllUsers
          </div></center>
          </div>
        </nav>
            {this.renderView()}
    </div>
    )
  }
}

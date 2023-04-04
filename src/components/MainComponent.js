import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { actions } from 'react-redux-form';
import Header from "./Mainpages/HeaderComponent";
import Home from "./Mainpages/HomeComponent";
import Footer from "./Mainpages/FooterComponent";
import Contact from "./Mainpages/ContactComponent";
import Announcement from "./Mainpages/AnnouncementComponent";
import Post from "./Mainpages/PostComponent";
import SignUp from "./Login/SignUpComponent";
import Prayaana from "./Prayaana/PrayaanaComponent";
import { connect } from "react-redux";
import LoginMain from "./Login/LoginMainComponent";
import Pizada from "./Pizada/PizadaComponent";
import { fetchToppers, fetchPlacements, fetchPosts, fetchAnnouncements, fetchPrayaana, fetchFeedback, fetchPizada, postAnnouncement, postFeedback, postPrayaana, postPost, postPizada, loginUser, logoutUser, } from "../redux/ActionCreators";
import Admin from "./Admin/AdminRouteComponent"
import NewPost from "./NewPost/NewPostComponent";
import Feedback from "./Feedback/FeedbackComponent";
import PrayaanaReg from "./Prayaana/PrayaanaRegComponent";
import PizadaReg from "./Pizada/PizadaRegComponent";
import MyPosts from "./NewPost/MyPostComponent";


const mapStateToProps = state =>{
  return{
    toppers : state.toppers,
    placements: state.placements,
    announcements : state.announcements,
    posts: state.posts,
    feedbacks: state.feedbacks,
    prayaanas: state.prayaanas,
    pizadas: state.pizadas,
    auth: state.auth

  }
}

const mapDispatchToProps = (dispatch) =>({
  postAnnouncement: (title, message) =>
  dispatch(postAnnouncement(title, message)),
  postPost: (message, ) => dispatch(postPost(message,)),
  postPizada: (topic, ) => dispatch(postPizada(topic,)),
  fetchToppers: () => {dispatch(fetchToppers())},
  fetchPlacements: () => {dispatch(fetchPlacements())},
  fetchPosts:() => {dispatch(fetchPosts())},
  fetchAnnouncements: () => {dispatch(fetchAnnouncements())},
  fetchPrayaana: () => { dispatch(fetchPrayaana())},
  fetchFeedback: () => { dispatch(fetchFeedback())},
  fetchPizada: () => { dispatch(fetchPizada())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  resetPrayaanaForm: () => { dispatch(actions.reset('prayaana')) },
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
  postPrayaana: (firstname, lastname, course, registerNumber, batch, collegeName, coding, quiz, gaming, treasure, email, phoneNumber) => dispatch(postPrayaana(firstname, lastname, course, registerNumber, batch, collegeName, coding, quiz, gaming, treasure, email, phoneNumber)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
});


class Main extends Component{

    componentDidMount(){
      this.props.fetchToppers();
      this.props.fetchPlacements();
      this.props.fetchAnnouncements();
      this.props.fetchPosts();
      this.props.fetchFeedback();
      this.props.fetchPrayaana();
      this.props.fetchPizada();
    }

  render(){
    
    const Homepage = () =>{
      return(
        <Home 
        topper={this.props.toppers}
        toppersLoading={this.props.toppers.isLoading}
        toppersErrMess={this.props.toppers.errMess}
        placement={this.props.placements} 
        placementsLoading={this.props.placements.isLoading}
        placementsErrMess={this.props.placements.errMess}
        />
      )
    }


    return (
      <div>
          <Header auth={this.props.auth}
          logoutUser={this.props.logoutUser} />
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route exact path="/announcements" component={() => 
            <Announcement 
              announcement={this.props.announcements} 
              announceLoading={this.props.announcements.isLoading}
              announceFailed={this.props.announcements.errMess}
              />} />
            <Route exact path="/posts" component={() => 
              <Post 
                post={this.props.posts}
                postsLoading={this.props.posts.isLoading}
                postsFailed={this.props.posts.errMess}
              />} />
            <Route exact path="/contactus" component={() => 
              <Contact 
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />} />
            <Route exact path="/login" component={() => <LoginMain 
            loginUser={this.props.loginUser} />} />
            <Route exact path="/signup" component={() => <SignUp />} />
            <Route exact path="/prayaana" component={() => <Prayaana
              resetPrayaanaForm={this.props.resetPrayaanaForm}
              postPrayaana={this.props.postPrayaana}
            />} />
            <Route exact path="/pizada" component={() => <Pizada 
                  postPizada={this.props.postPizada}/>} />
            <Route exact path="/newpost" component={() => <NewPost postPost={this.props.postPost}/>} />
            <Route path="/admin" component={() => 
              <Admin 
                postAnnouncement={this.props.postAnnouncement}
                prayaana={this.props.prayaana}
                />} />
            <Route exact path='/feed' component={()=><Feedback 
                feedback = {this.props.feedbacks}/>} />
            <Route exact path='/prayaanareg' component={()=><PrayaanaReg 
                prayaana = {this.props.prayaanas}/>} />
            <Route exact path='/pizadareg' component={()=><PizadaReg 
                pizada = {this.props.pizadas}/>} />
            <Route exact path='/myposts' component={()=><MyPosts/>} />
            {/* <Route exact path='/myposts' component={()=><MyPosts/>} /> */}
            <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

import React, { Component } from "react";
import { Nav, NavItem, NavLink, TabPane, TabContent } from "reactstrap";
import NewAnnouncement from "./NewAnnouncementComponent";
import AccountApproval from "./AccountApprovalComponent";
import ManageAccounts from "./ManageAccountsComponent";
import AdminResetPassword from "./AdminResetPAsswordComponent";
import Feedback from "../Feedback/FeedbackComponent";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-3">
            <Nav className="nav-pills nav-fill " id="dashboard" vertical>
              <NavItem>
                <NavLink
                  className={{ active: this.state.activeTab === "1" }}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  New Announcement
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={{ active: this.state.activeTab === "2" }}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Account Approval
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={{ active: this.state.activeTab === "3" }}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Manage Accounts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={{ active: this.state.activeTab === "4" }}
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  Reset Password
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={{ active: this.state.activeTab === "5" }}
                  onClick={() => {
                    this.toggle("5");
                  }}
                >
                  Prayaana Registrations
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div className="col-9">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                {this.state.activeTab == 1 ? (
                  <NewAnnouncement
                    postAnnouncement={this.props.postAnnouncement}
                  />
                ) : null}
              </TabPane>
              <TabPane tabId="2">
                {this.state.activeTab == 2 ? <AccountApproval /> : null}
              </TabPane>
              <TabPane tabId="3">
                {this.state.activeTab == 3 ? <ManageAccounts /> : null}
              </TabPane>
              <TabPane tabId="4">
                {this.state.activeTab == 4 ? <AdminResetPassword /> : null}
              </TabPane>
              <TabPane tabId="5">
                {this.state.activeTab == 5 ? <AdminResetPassword /> : null}
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;

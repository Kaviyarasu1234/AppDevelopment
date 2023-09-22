import React, { Component } from 'react';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        username: 'example_user',
        email: 'example@example.com',
        firstName: 'John',
        lastName: 'Doe',
      },
      isEditing: false,
    };
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  handleSaveClick = () => {
    // Save user's updated information (e.g., send data to a backend)
    // Update the user state with the new information
    this.setState({ isEditing: false });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
    }));
  };

  render() {
    const { user, isEditing } = this.state;

    return (
      <div className="profile-container">
        <h2>User Profile</h2>
        <div className="profile-details">
          {isEditing ? (
            <div>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={this.handleInputChange}
                />
              </div>
              <button onClick={this.handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>First Name:</strong> {user.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {user.lastName}
              </p>
              <button onClick={this.handleEditClick}>Edit</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;

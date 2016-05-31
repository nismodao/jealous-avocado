import {Link} from 'react-router';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        currentUser: null
      }

    };
  }

  render() {

    return (
      <div>
        <div> HELLO THIS IS THE MAIN APP PAGE </div>
        <br></br>

        <Link to="/signin"> Sign in </Link>
        {this.props.children}
        <pre> current user : {this.state.user.currentuser} </pre>
      </div>
    );
  }

}

export default App;
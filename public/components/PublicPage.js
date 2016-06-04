import { connect } from 'react-redux';
import actions from '../redux/actions';

class PublicPage extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: ["Nam", "John", "Prateek"],
      articles: ['article1','article2','article3','article4','article5'],
      currentVideo: null
    }
  }
  updateVideo(video) {
    this.setState({currentVideo: video})
  }
  updateArticle(article) {
    this.setState({articles: articles})
  }
  genFrame(w, h, streamName) {
    var port = 3000;
    var url = "http://localhost:" + port + "/" + streamName;
    var frame = document.createElement('iframe');
    var list = document.createElement('LI');
    frame.src    = url;
    frame.width  = w;
    frame.height = h;
    frame.setAttribute("frameBorder", 0);
    list.appendChild(frame);
    document.getElementById("video").appendChild(list);
  }
  
  componentDidMount () {
    {this.state.videos.map((video) =>
     {this.genFrame(200, 90, video)}
    )}

  }

  render() {
    return (
      <div className='hey'>
        <div className='row'>
          <div className="col-md-6"> Current Video 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dd7FixvoKBw" frameBorder="0" allowFullScreen></iframe>            <div id="articles"> Trending Articles
              {this.state.articles.map((article) => 
              <li> {article} </li>
              )}  
            </div>
          </div>
          <div className="col-md-6"> Trending Videos
            <ul id='video'>
            </ul>
          </div>
        </div>
      </div>
    );

  }
}

function mapStatetoProps(state) {
  return state;
}

export default connect(mapStatetoProps)(PublicPage);
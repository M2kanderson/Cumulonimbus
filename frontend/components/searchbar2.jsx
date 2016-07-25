var Select = require('react-select');
var React = require('react');
let TracksStore = require('../stores/tracks_store');
let TrackActions = require('../actions/track_actions');
var PropTypes = React.PropTypes;

var options = function(){
  let opts = TracksStore.allTracks().map((track => {
    return {value: track.id, label: track.title};
  }));
  return opts;
};

var getOptions = function(input, callback) {
  TrackActions.fetchAllTracks();
    setTimeout(function() {
        callback(null, {
            options: options(),
            // CAREFUL! Only set this to true when there are no more options,
            // or more specific queries will not be sent to the server.
            // complete: true
        });
    }, 0);
};


var Searchbar = React.createClass({
  getInitialState: function() {
    return {
      options: TracksStore.allTracks()
    };
  },
  componentDidMount(){
    this.trackListener = TracksStore.addListener(this._updateOptions);
  },
  _handleChange(val){
    console.log(val);
    console.log("changes be comin");
    TrackActions.fetchAllTracks();
  },
  _updateOptions(){
    this.setState({options: TracksStore.allTracks()});
  },
  render: function() {
    return (
      <Select.Async
          name="form-field-name"
          onChange={this._handleChange}
          loadOptions={getOptions}
      />
    );
  }

});

module.exports = Searchbar;

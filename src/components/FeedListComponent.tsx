import React from "react";
import { connect } from "react-redux";
import { bindActionCreators ,Dispatch} from "redux";
import{fetchFeed} from "../actions/FeedActions"

const mapStateToProps = (state:any) => {
    return state.feed;
  };
  
  /********
   * Connect to action
   * *********/
  const mapDispatchToProps = (dispatch:Dispatch) =>
    bindActionCreators(
      {
        fetchFeed
      },
      dispatch
    );
  

  
type Props  = ReturnType<typeof mapStateToProps>  & typeof mapDispatchToProps;

class FeedListComponent extends React.Component<Props>{

    /********
   * Handle configuration, before starting initial render
   * *********/
  componentWillMount() {
    this.props.fetchFeed();
  }


    render(){
        if (this.props.error) {
            return <div>Error! {this.props.error}</div>;
          }
          if (this.props.loading) {
            return <div>Loading...</div>;
          }
          /********
           * TO DO : extract the props and render them as cards
           * *********/
          return (
            <div>
              <h1> Offers </h1>
              {JSON.stringify(this.props)}
            </div>
          );
    }
}

/********
 * Connect to reducer
 * return state.REDUCERNAME (from store.combined(reducers))
 * *********/

  /********
   * Connect (bind) states from reducer and action with this component
   * *********/
  export default connect(mapStateToProps, mapDispatchToProps)(FeedListComponent);
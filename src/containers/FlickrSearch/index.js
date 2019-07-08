import React from 'react';
import { isImmutable } from 'immutable';
import { connect } from 'react-redux';
import { Loader, Message } from 'semantic-ui-react';
import _ from 'lodash';
import './style.css';
import { searchRequest } from './actions';

import SearchForm from './../../components/SearchForm';
import ListPhotos from './../../components/ListPhotos';

class FlickrSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch = _.debounce(text => {
    this.props.searchRequest(text);
  }, 500);

  componentDidMount() {
    this.props.searchRequest();
  }

  render() {
    const { loading, data, error } = this.props;
    const items = data.items || [];
    const err = isImmutable(error) ? error.toJS() : error;

    return (
      <React.Fragment>
        <div className="horizontal-menu">
          <nav className="navbar top-navbar col-lg-12 col-12 p-0">
            <div className="container-fluid">
              <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
                <ul className="navbar-nav col-xs-12" style={{ width: '100%' }}>
                  <li className="nav-item ml-0 mr-5 d-lg-flex d-none">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                      <a className="navbar-brand brand-logo" href="/">
                        <h3>Flickr</h3>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item nav-search d-none d-lg-block ml-3 col-md-3">
                    <SearchForm onSearch={this.onSearch} />
                  </li>
                  <li>{loading && <Loader active inline />}</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <ListPhotos items={items} />
              {err && (
                <Message negative>
                  <Message.Header>Something went wrong...</Message.Header>
                </Message>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.flickrReducer.get('data').toJS(),
    error: state.flickrReducer.get('error'),
    loading: state.flickrReducer.get('loading')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: keyword => dispatch(searchRequest(keyword))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlickrSearchContainer);

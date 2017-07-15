import React from 'react';

export default class Template extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <div className="row">
            <div className="col-xs-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';

export default class Template extends React.Component{
  render(){
    return (
      <div className="row">
        <div className="col-xs-12 form-group">
          <div className={'alert alert-' + this.props.message.type}>
            {this.props.message.text}
          </div>
        </div>
      </div>
    );
  }
}

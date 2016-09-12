import React from 'react';
import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

const ListElement = ({username, mentions}) => (
  <li> @{username}: {mentions}</li>
  );

const StaticModal = React.createClass({
  getInitialState() {
    return {show: false};
  },

  showModal() {
    this.setState({show: true});
  },

  hideModal() {
    this.setState({show: false});
  },

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.showModal}>
          Show Statistics
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Statistics</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Sum of Likes: { this.props.sumOfLikes }</h4>
            <h4>Average of Likes: { this.props.averageOfLikes }</h4>
            <h4>Mentions</h4>
            <ul>
              { Object.keys(this.props.mentionList).map((key) => {
                return (<ListElement key={key} username={key} mentions={ this.props.mentionList[key] } />);                  
              }, this)}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
});

export default StaticModal;
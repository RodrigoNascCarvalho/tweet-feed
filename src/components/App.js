import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { Grid, Row, Col, Image } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Row>
            <Col xs={12} md={6} mdOffset={3}>
                <h2> Tweet Feed </h2>
                <form>
                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" placeholder="Enter Twitter username..." />
                      <InputGroup.Button>
                        <Button>Get Tweets</Button>
                      </InputGroup.Button>
                    </InputGroup>
                  </FormGroup>
                </form>
            </Col>
          </Row>
        </div>
        <div className="App-tweets">
          <Grid>
            <Row>
              <Col xs={12} md={8} mdOffset={2}>
                <div className="tweet-list">
                  
                  <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>
                
                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                   <section className="tweet-container">
                    <div className="tweet-image">
                      <Image src="http://pbs.twimg.com/profile_images/719699602644058113/v1PZjNNr_normal.jpg" responsive/>
                    </div>
                    <div className="tweet-content">
                      <div className="tweet-user">
                        <span>Aberração Cromática</span>
                        <a href="http://google.com" target="_blank">@Otherspacing</a>
                        <div className="tweet-info">
                          <span><i className="glyphicon glyphicon-heart"></i> 1</span>
                          <span>- May 1</span>
                        </div>
                      </div>
                      <p className="tweet">
                        Trocando de avatar depois de uns meses. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. É isso aí galera. Hahahahah.
                      </p>
                    </div>
                  </section>

                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;

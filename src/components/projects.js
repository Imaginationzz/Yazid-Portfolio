import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from "react-router-dom"

class Projects extends Component {
  state = { activeTab: 0 };


  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <React.Fragment>
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>


              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.w3schools.com/w3css/img_lights.jpg) bottom right 15% no-repeat #46B6AC' }} >React Project #1</CardTitle>

              <CardText>
                a market place for used furnitures with many cool features.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://homeusedfurn-fe.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg) center / cover' }} >React Project #2</CardTitle>
              <CardText>
                lightweight Netflix clone with nice user experience!
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz/netflix-clone-updated" target="_blank">
                  <Button colored>GitHub</Button>
                </a >
                <a href="https://yazflix.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://image.freepik.com/free-photo/double-exposure-image-business-profit-growth_31965-3022.jpg) center / cover' }} >React Project #3</CardTitle>
              <CardText>
                whatsApp Clone with nice features!
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz/" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://whatsapp-front-end.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

          </div>

          <div className="projects-grid " style={{ marginTop: "2rem" }}>
            {/* Project 4 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg) center / cover' }} >React Project 4</CardTitle>
              <CardText>
                LinkedIn Clone
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz" target="_blank">
                  <Button colored>GitHub</Button>
                </a>

                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 5 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg) center / cover' }} >React Project #5</CardTitle>
              <CardText>
                a Blog for anyone who wants to write and share..
              </CardText>
              <CardActions border>
                <a href="https://yazid-blog-fe.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>
                <a href="https://github.com/Imaginationzz/blog-fe" target="_blank">
                  <Button colored>GitHub</Button>
                </a>


              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 6 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://wallpaperaccess.com/full/806272.jpg) center / cover' }} >React Project #6</CardTitle>
              <CardText>
                web App that provides daily general advices.
              </CardText>
              <CardActions border>
                <a href="https://yaz-generaladvice.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>
                <a href="https://github.com/Imaginationzz/generaladvise" target="_blank">
                  <Button colored>GitHub</Button>
                </a>


              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <div className="projects-grid " style={{ marginTop: "2rem" }}>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.w3schools.com/w3css/img_lights.jpg) bottom right 15% no-repeat #46B6AC' }} >React Project #7</CardTitle>
              <CardText>
                portfolio for an IT company.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz/mtsysinfo2" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://mtsysinfov2.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>


              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg) center / cover' }} >React Project #8</CardTitle>
              <CardText>
                portfolio for an IT company.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz/mtsysinfo/" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://mtsysinfo.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>


              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg) center / cover' }} >React Project #9</CardTitle>
              <CardText>
                E-commerce portal for dairy products.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz/farm-fe/" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://yazfarm.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>


              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg) center / cover' }} >React Project #10</CardTitle>
              <CardText>
                a quiz game.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz/quiz/" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://prophet-quiz.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>


              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg) center / cover' }} >React Project #10</CardTitle>
              <CardText>
                Personal Portfolio 2
              </CardText>
              <CardActions border>
                <a href="https://github.com/Imaginationzz/secondportfolio/" target="_blank">
                  <Button colored>GitHub</Button>
                </a>
                <a href="https://yezidrahmouni.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>


              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>

        </React.Fragment>

      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;

import React, {Component} from 'react';
import {Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <Container>
                        <NavbarBrand href="/"><img src={"david_lloyd.jpg"} alt={"David Lloyd"} width={90}
                                                   height={90}/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="mailto:lloy0076 [at] adam.com.au">E-Mail Me</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Container>
                    <Row className={"justify-content-center"}>
                        <Col className={"col-12"}>
                            <img src={"jumbotron.JPG"} width={"100%"} alt={"David Lloyd (Country Side) Banner"}/>
                        </Col>
                    </Row>

                    <Row className={"justify-content-center"}>
                        <Col className={"col-12 justify-content-center"}>
                            <h1 style={{"text-align": "center"}}>About David</h1>
                        </Col>
                    </Row>

                    <Row className={"justify-content-center"}>
                        <Col className={"col-12 col-md-5"} style={{"text-align": "justify"}}>
                            <h3>Personal</h3>

                            <p>
                                David Lloyd lives with his wife, five cats and the cat "that is not ours but we've fed
                                for the past four years" in Canton, New York. He dreams of building a straw bale house
                                with his own hands. He'd like some chickens for freshly laid eggs each morning.
                            </p>

                            <p>
                                He emigrated to the USA in 2016 and attends <a
                                href={"https://www.gracechurchcanton.org/"} target={"_blank"}>Grace Episcopal
                                Church</a> in Canton where he is the current webmaster and often helps at community
                                suppers as well as during weekly services. David is a strong believer in the good in
                                all and the use of truth to overcome all obstacles.
                            </p>
                        </Col>

                        <Col className={"col-12 col-md-2"} style={{"text-align": "center"}}>
                            <img src={"coa-white.jpg"} alt={"Per Veritatem Vis"} width={"100%"}
                                 className={"center-block"}/>
                        </Col>

                        <Col className={"col-12 col-md-5"} style={{"text-align": "justify"}}>
                            <h3>Professional</h3>

                            <p>
                                David is a remote backend API and web-developer located in Canton, New York. He has
                                experience developing custom APIs in PHP, Java, C#, JavaScript and other modern
                                languages as well as integrating with many third party APIs.
                            </p>

                            <p>
                                In addition, David is an experienced system administrator, specialising in GNU/Linux,
                                having experience with tools such as Ansible, Puppet and Vagrant. In his spare time, he
                                likes to learn about the latest programming and web-development libraries and practices.
                            </p>

                            <p>
                                His Github profile is <a href={"https://github.com/lloy0076"} target={"_blank"}>here</a>.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useMatch,
    useResolvedPath
  } from "react-router-dom";
  
  import logo from './assets/logo.svg';
  import right  from './assets/right.svg';
  import { Card } from "./compound";
  import { Cardv2 } from "./compoundv2";
  import { Cardv3 } from "./compoundv3";
  import { Cardv4, Img, Btn, Heading } from "./compoundv4";
  import { CardInitial } from "./initial";


  const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link 
            className={ match ? "nav-active" : "" } 
            to={to}
            {...props} 
        >
            {children}
        </Link>
    );
  }

  export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <h1>PATTERNS</h1>
                    <ul>
                        <li>
                            <img src={ right } alt="" />
                            <CustomLink to="/">Initial</CustomLink>
                        </li>
                        <li>
                            <img src={ right } alt="" />
                            <CustomLink to="/compound">Compound</CustomLink>
                        </li>
                        <li>
                            <img src={ right } alt="" />
                            <CustomLink to="/compoundv2">Compound V2</CustomLink>
                        </li>
                        <li>
                            <img src={ right } alt="" />
                            <CustomLink to="/compoundv3">Compound V3</CustomLink>
                        </li>
                        <li>
                            <img src={ right } alt="" />
                            <CustomLink to="/compoundv4">Compound V4</CustomLink>
                        </li>
                        <li>
                            <img src={ right } alt="" />
                            <CustomLink to="/control-props">Control Props</CustomLink>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Routes>
                        
                        <Route path="/" element={
                            <>
                                <h1>Initial Components</h1>
                                {/* <span>Componente</span> */}
                                <CardInitial 
                                    heading='Avatar Card '
                                    textButton='Go '
                                    type="avatar"
                                    src='https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg'
                                    alt='La llama que llama'
                                 />
                                <br />
                                <CardInitial 
                                    heading='Full Card '
                                    textButton='Go '
                                    src='https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg'
                                    alt='La llama que llama'
                                 />
                                <br />
                                  <CardInitial 
                                    heading='Background image Card '
                                    textButton='Go '
                                    type="background"
                                    src='https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg'
                                    alt='La llama que llama'
                                 />
                            </>
                        }/>

                        <Route path="/compound" element={
                            <>
                                <h1>Pattern Compound</h1>
                                <span>Refactor add pattern Compound</span>
                                <Card>
                                    <Card.Heading>Avatar Card </Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                        type="avatar"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Card> 
                                <br />
                                <Card>
                                    <Card.Heading>Standard image</Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Card> 
                                <br />
                                <Card>
                                    <Card.Heading>Background image Card</Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                        type="background"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Card> 
                                <br />
                            </>
                        } />

                        <Route path="/compoundv2" element={
                            <>
                                <h1>Pattern Compound V2</h1>
                                <span>Refactor separating the logic in different files</span>
                                <Cardv2>
                                    <Card.Heading>Avatar Card </Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                        type="avatar"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Cardv2> 
                                <br />
                                <Cardv2>
                                    <Card.Heading>Standard image</Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Cardv2> 
                                <br />
                                <Cardv2>
                                    <Card.Heading>Background image Card</Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                        type="background"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Cardv2> 
                                <br />
                            </>
                        } />

                        <Route path="/compoundv3" element={
                            <>
                                <h1>Pattern Compound V3</h1>
                                <span>Refactor adding different style behavior</span>
                                <Cardv3>
                                    <Card.Heading>Avatar Card </Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                        type="avatar"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Cardv3> 
                                <br />
                                <Cardv3 type='solid-pink'>
                                    <Card.Heading>Avatar Card </Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                        type="avatar"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Cardv3> 
                                <br />
                                <Cardv3 type='outline-blue'>
                                    <Card.Heading>Standard image</Card.Heading>
                                    <Card.Image
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                    />
                                    <Card.Button>Go </Card.Button>
                                </Cardv3> 
                                <br />
                               
                            </>
                        } />

                        <Route path="/compoundv4" element={
                            <>
                                <h1>Pattern Compound V4</h1>
                                <span>Refactor adding different style behavior</span>
                                <Cardv4 type='solid-pink'>
                                    <Heading>Avatar Card </Heading>
                                    <Img
                                        src="https://assets.change.org/photos/7/ye/nu/szyenunXZFAIMum-800x450-noPad.jpg"
                                        alt="La llama que llama"
                                        type="avatar"
                                    />
                                    <Btn>Go </Btn>
                                </Cardv4> 
                            </>
                        } />
                        <Route path="/control-props" element={
                            <>
                                <h1>Pattern Control Props</h1>
                                <span>It controls when the properties and state of our component change. It is used in forms</span>
                            </>
                        } />
                    </Routes>
                    
                    
                </main>

            </div>
        </BrowserRouter>
    );
  }
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useMatch,
    useResolvedPath
  } from "react-router-dom";
  import Gist from "react-gist";

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
                    <img src={ logo } alt="Logo"  style={{maxWidth:'80%', marginBottom: '30px'}}/>
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
                            <img src={ right } alt="" />
                            <CustomLink to="/compoundv2">Refactor V2</CustomLink>
                        </li>
                        <li>
                            <img src={ right } alt="" />
                            <img src={ right } alt="" />
                            <CustomLink to="/compoundv3">Refactor V3</CustomLink>
                        </li>
                        <li>
                            <img src={ right } alt="" />
                            <img src={ right } alt="" />
                            <CustomLink to="/compoundv4">Refactor V4</CustomLink>
                        </li>
                        <li></li>
                        <li>Other Patterns</li>
                        <li><img src={ right } alt="" /><CustomLink to="/control-props" style={{color:'gray'}}>Control Props</CustomLink></li>
                        <li><img src={ right } alt="" /><CustomLink to="/context" style={{color:'gray'}}>Context Module</CustomLink></li>
                        <li><img src={ right } alt="" /><CustomLink to="/flexible-compound" style={{color:'gray'}}>Flexible Compound</CustomLink></li>
                        <li><img src={ right } alt="" /><CustomLink to="/props-collections" style={{color:'gray'}}>Prop Collections</CustomLink></li>
                        <li><img src={ right } alt="" /><CustomLink to="/state-reducer" style={{color:'gray'}}>State Reducer</CustomLink></li>
                    
                     

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
            
                                <span><a href="https://advanced-react-patterns.netlify.app/6" >Recommended reading</a></span>
                                {/* <Gist id='b132e39e54bf077b86043356c4f13066' file='states.js' /> */}
                                
                            </>
                        } />
                        <Route path="/context" element={
                            <>
                                <h1>Context Module Functions</h1>
                                <span><a href="https://advanced-react-patterns.netlify.app/1" >Recommended reading</a></span>
                                <span>EXAMPLE</span>
                                <span>1.- Create Context</span>
                                <span style={{width: '800px'}}><Gist id='29ddb298aff1efcf29c88f2418ba3e9e' file='context1.js' /></span>

                                <span>2.- Create provider to Context</span>
                                <span style={{width: '800px'}}><Gist id='0d613087f8814849467bd4921016ea54' file='context2.js' /></span>

                                <span>3.- Create custom Hooks </span>
                                <span style={{width: '800px'}}><Gist id='d6d8f6f1f304da8e8eb8658706f5d042' file='context3.js' /></span>


                                <span>4.- Create Helper </span>
                                <span style={{width: '800px'}}><Gist id='471a09b5f1ee24a2a474e159a828e2ac' file='helpers.js' /></span>

            
                                <span>5.- Hook Implementation </span>
                                <span style={{width: '800px'}}><Gist id='893725e4ab2319cc6a86334264508ef3' file='App.js' /></span>
                                
                                <span><a href="https://vtechguys.medium.com/context-module-pattern-in-react-dd3e89d56f2d" >Recommended reading</a></span>

                            </>
                        } />
                        <Route path="/flexible-compound" element={
                            <>
                                <h1>Flexible Compound components</h1>
                                <span><a href="https://advanced-react-patterns.netlify.app/3" >Recommended reading</a></span>
                            </>
                        } />
                        <Route path="/props-collections" element={
                            <>
                                <h1>Props collections and Getters</h1>
                                <span><a href="https://advanced-react-patterns.netlify.app/4" >Recommended reading</a></span>
                            </>
                        } />

                        <Route path="/state-reducer" element={
                            <>
                                <h1>State Reducer</h1>
                                <span><a href="https://advanced-react-patterns.netlify.app/5" >Recommended reading</a></span>
                                
                            </>
                        } />


                    </Routes>
                    
                    
                </main>

            </div>
        </BrowserRouter>
    );
  }
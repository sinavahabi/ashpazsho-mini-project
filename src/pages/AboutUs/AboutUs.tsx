import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { NavLink } from "react-router-dom"
import "./AboutUs.scss"
import profileImg from "../../assets/images/profile.png"
import previewImg1 from "../../assets/images/project-preview (1).png"
import previewImg2 from "../../assets/images/project-preview (2).png"
import previewImg3 from "../../assets/images/project-preview (3).png"
import previewImg4 from "../../assets/images/project-preview (4).png"
import previewImg5 from "../../assets/images/project-preview (5).png"
import previewImg6 from "../../assets/images/project-preview (6).png"
import previewImg7 from "../../assets/images/project-preview (7).png"
import previewImg8 from "../../assets/images/project-preview (8).png"
import previewImg9 from "../../assets/images/project-preview (9).png"
import previewImg10 from "../../assets/images/project-preview (10).png"
import previewImg11 from "../../assets/images/project-preview (11).png"
import previewImg12 from "../../assets/images/project-preview (12).png"
import previewImg13 from "../../assets/images/project-preview (13).png"
import previewImg14 from "../../assets/images/project-preview (14).png"
import previewImg15 from "../../assets/images/project-preview (15).png"
import previewImg16 from "../../assets/images/project-preview (16).png"
import previewImg17 from "../../assets/images/project-preview (17).png"
import previewImg18 from "../../assets/images/project-preview (18).png"
import previewImg19 from "../../assets/images/project-preview (19).png"
import previewImg20 from "../../assets/images/project-preview (20).png"
import previewImg21 from "../../assets/images/project-preview (21).png"
import previewImg22 from "../../assets/images/project-preview (22).png"
import previewImg23 from "../../assets/images/project-preview (23).png"
import previewImg24 from "../../assets/images/project-preview (24).png"


export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="about-us">
        <div className="container mt-3">
          <div className="row mb-3" id="first-row">
            <div id="carouselExampleDark"
              className="col-xxl-8 col-xl-8 col-lg-8 col-md-7 col-sm-12 carousel carousel-dark slide"
              data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                  aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
                  aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6"
                  aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7"
                  aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8"
                  aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9"
                  aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10"
                  aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="11"
                  aria-label="Slide 12"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="12"
                  aria-label="Slide 13"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="13"
                  aria-label="Slide 14"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="14"
                  aria-label="Slide 15"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="15"
                  aria-label="Slide 16"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="16"
                  aria-label="Slide 17"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="17"
                  aria-label="Slide 18"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="18"
                  aria-label="Slide 19"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="19"
                  aria-label="Slide 20"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="20"
                  aria-label="Slide 21"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="21"
                  aria-label="Slide 22"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="22"
                  aria-label="Slide 23"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="23"
                  aria-label="Slide 24"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="24"
                  aria-label="Slide 25"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="25"
                  aria-label="Slide 26"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="26"
                  aria-label="Slide 27"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="27"
                  aria-label="Slide 28"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img src={previewImg1} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>1</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg2} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>2</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg3} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>3</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={previewImg4} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>4</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg5} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>5</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg6} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>6</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg7} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>7</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={previewImg8} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>8</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg9} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>9</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg10} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>10</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg11} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>11</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={previewImg12} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>12</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg13} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>13</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg14} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>14</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg15} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>15</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={previewImg16} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>16</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg17} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>17</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg18} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>18</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg19} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>19</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={previewImg20} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>20</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg21} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>21</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg22} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>22</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={previewImg23} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>23</h5>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={previewImg24} className="d-block w-100" alt="pic" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>24</h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-12">
              <ul className="list-group">
                <li className="list-group-item  bg-dark list-head">
                  <div className="profile-holder">
                    <NavLink to="https://github.com/sinavahabi" className="header d-inline-block mt-2"
                      title="github.com/sinavahabi">Github projects</NavLink>
                    <img src={profileImg} alt="pic" id="profile"
                      className="d-inline-block float-start" title="github.com/sinavahabi" />
                  </div>
                </li>
                <li className="list-group-item" aria-current="true" title="calculator-mini-project">
                  <NavLink to="https://github.com/sinavahabi/calculator-mini-project"
                    className="about-us-link text-muted">Calculator
                    Web Application</NavLink>
                  <span className="badge rounded-pill bg-warning javascript">JavaScript</span>
                </li>
                <li className="list-group-item" title="staff-info-mini-project">
                  <NavLink to="https://github.com/sinavahabi/staff-info-mini-project" className="about-us-link text-muted">Staff
                    Information Management</NavLink>
                  <span className="badge rounded-pill bg-warning javascript">JavaScript</span>
                </li>
                <li className="list-group-item" title="average-mini-project">
                  <NavLink to="https://github.com/sinavahabi/average-mini-project" className="about-us-link text-muted">
                    Average Mark Calculation Website</NavLink>
                  <span className="badge rounded-pill bg-warning javascript">JavaScript</span>
                </li>
                <li className="list-group-item active" title="ashpazsho-mini-project">
                  <NavLink to="https://github.com/sinavahabi/ashpazsho-mini-project" className="active about-us-link">
                    Ashpazsho Application Website</NavLink>
                  <span className="badge rounded-pill bg-danger javascript">React-TS</span>
                  <span className="position-absolute top-0 current-pr translate-middle badge rounded-pill bg-info"
                    title="index.html">
                    <NavLink to="/" className="text-light about-us-link" target="_blank">Current Project</NavLink>
                  </span>
                </li>
                <li className="list-group-item" title="AverageMiniProject">
                  <NavLink to="https://github.com/sinavahabi/AverageMiniProject" className="text-muted about-us-link">Average Mark
                    Calculation</NavLink>
                  <span className="badge rounded-pill python">Python</span>
                </li>
                <li className="list-group-item" title="CalculatorMiniProject">
                  <NavLink to="https://github.com/sinavahabi/CalculatorMiniProject" className="text-muted about-us-link">Calculator
                    Application</NavLink>
                  <span className="badge rounded-pill python">Python</span>
                </li>
                <li className="list-group-item" title="RPGMiniProject">
                  <NavLink to="https://github.com/sinavahabi/RPGMiniProject" className="text-muted about-us-link">Role Playing
                    Game</NavLink>
                  <span className="badge rounded-pill python">Python</span>
                </li>
                <li className="list-group-item" title="MarketsMiniProject">
                  <NavLink to="https://github.com/sinavahabi/MarketsMiniProject" className="text-muted about-us-link">Market
                    Status</NavLink>
                  <span className="badge rounded-pill python">Python</span>
                </li>
                <li className="list-group-item" title="AdvanceMarketsMiniProject">
                  <NavLink to="https://github.com/sinavahabi/AdvanceMarketsMiniProject" className="text-muted about-us-link">Advance
                    Market Status</NavLink>
                  <span className="badge rounded-pill python">Python</span>
                </li>
                <li className="list-group-item" title="MachineVisionMiniProject">
                  <NavLink to="https://github.com/sinavahabi/MachineVisionMiniProject" className="text-muted about-us-link">Image
                    Classification</NavLink>
                  <span className="badge rounded-pill python">Python</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mb-2" id="second-row">
            <div className="paragraph p-3">
              <header>
                <h1 className="text-center text-danger p-2 bg-dark" id="text-header">
                  Ashpazsho Application Website
                </h1>
                <hr />
              </header>
              <main>
                <article>
                  <h2 className="mb-3" id="head2">
                    <span className="text-info">Technologies:</span>
                    <span className="technology text-light m-1 p-1 JS">React JS</span>
                    <span className="technology text-light m-1 p-1 TS">TypeScript</span>
                    <span className="technology text-light m-1 p-1 HTML">HTML5</span>
                    <span className="technology text-light m-1 p-1 CSS">CSS3</span>
                    <span className="technology text-light m-1 p-1 BOOTSTRAP">Bootstrap5</span>
                    <span className="technology text-light m-1 p-1 SASS">Sass</span>
                  </h2>
                  <h3 className="mb-3" id="head3">
                    <span className="text-danger">Topics:</span> react-components/ json-server/ react-hooks/ react-router-dom/ Font Awesome5/ Web API/ JSON/ Error handling/ User interaction/ User management/ Form validation/ Responsive website/ Responsive design/ Flexbox/ Bootstrap5/ Git
                  </h3>
                  <hr />
                  <p className="h5 text-muted">
                    This mini project is about different foods, desserts, salads and all the delicious comestible recipes from people all around the world. This web application contains few parts such as "Home", "Profile", "About Us", "Registration Part" which includes "Login" and "Sign Up" routes. Also there is a "search bar" that will search for recipes title to find what your looking for.
                    In Home page all users recipes will be available with their user first name and last name that is shown on top of each recipe related to a specific user. When user clicks on "Cook This Food" button they'll be redirected to that specific recipe information with more detailed about it.
                    <br /> The Profile page has 2 main parts: "My Recipes" and "Create a New Recipe" <br />
                    These two are declared with buttons that will show each one at a time when user clicks on them. <br />
                    "My Recipes" will show each users personal added recipes for them and the "Create a New Recipe" will show a form to user in order to add another new recipe. After new recipe is added, users will be able to see it in their personal profile page and also in the home page with their info at the top of their recipe. These forms comes with a normal validation on each parts. The noticeable section is users login and logout process which is handled as good as possible in order to manage users information. for adding new recipes and watching personal recipes users need to be logged in with their accounts.
                    Also page routes are handled with react-router-dom package in order to help react manages everything in a more standard way, with this being said, now we can make sure users won't be able to access "login", "sign-up" and "forgot-password" pages when they are logged in.
                    If users try to access irrelevant paths in browser rout, they will be redirected to a 404 "not-found" page designed to help them go back to the main page "home". <br />
                    Login and Sign Up pages form's are handled perfectly with great form validations to prevent users wrong behavior when they are filling the forms and inserting their personal data.
                    All the data in this project is validated with "TypeScript" data type features to avoid bugs by controlling everything more carefully. With "Bootstrap" technology and "Flexbox" concept whole website design is fully responsive within all different devices. This project also contains "Sass" technology that will help writing less codes with more efficient performance.
                    Web API used for this mini project is managed with json-server library. Two main API endpoints are configured for the sake of this application. <br />
                    <br />
                    Note: All pages follow the responsive design concept. <br />
                    Note: This mini project was completely handled by git. <br />
                    Note: Codes documentation and descriptions are more obvious in comments among the codes on each file. <br />
                  </p>
                </article>
              </main>
              <hr />
              <footer className="text-center bg-dark text-primary p-1" id="text-footer">
                Author: sina vahabi
              </footer>
            </div>
          </div>
          <footer className="text-center text-success bg-light mb-3">
            Copyright: 2023/12
          </footer>
        </div>
      </main>
      <Footer />
    </>
  )
}

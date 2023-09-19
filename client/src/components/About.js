import React from 'react'
// import profilepic from "../images/noAvatar.png";
import aboutpic from "../images/noAvatar.png";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={aboutpic} alt="not found" />
                {/* <img src={userData.name === "Vinod Bahadur Thapa" ? thapapic : aboutpic} alt="thapa" /> */}
              </div>

            </div>

            <div className="col-md-6">
              <div className="profile-head">
                {/* <h5>{ userData.name}</h5> */}
                <h5>Yash</h5>
                <h6>Software Developer</h6>
                {/* <h6>{ userData.work}</h6> */}
                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>


                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>

          </div>



          <div className="row">
            {/* left side url  */}
            <div className="col-md-4">
              <div className="profile-work">
                <p> WORK LINK</p>
                <a href="https://www.youtube.com" target="_thapa">Youtube</a> <br />
                <a href="https://www.instagram.com" target="_thapa">Instagram</a> <br />
                <a href="https://www.yashpatil.netlify.com" target="_thapa">Web Developer</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Figma</a> <br />
                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target="_thapa">Software Engineer</a> <br />
              </div>
            </div>

            {/* right side data toogle  */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div class="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <p id='about-labels'>User Id</p>
                    </div>
                    <div class="col-md-6">
                      <p>787865454546</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p id='about-labels'>Name</p>
                    </div>
                    <div className="col-md-6 ">
                      {/* <p>{ userData.name}</p> */}
                      <p>Yash Patil</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p id='about-labels'>Email</p>
                    </div>
                    <div className="col-md-6">
                      {/* <p>{ userData.email}</p> */}
                      <p>yashpatil822003@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p id='about-labels'>Phone</p>
                    </div>
                    <div className="col-md-6">
                      {/* <p>{ userData.phone}</p> */}
                      <p>70982302738</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p id='about-labels'>Profession</p>
                    </div>
                    <div className="col-md-6">
                      <p>Web Devloper</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Experience</p>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Hourly Rate</p>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Total Projects</p>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>English Level</p>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <p>Availability</p>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default About

import React from 'react'
import './notification.css'
const Notification = () => {
    return (
        <div className=' Notification'>
            <div className="notifications">
                <div className="container">
                    <ul className="cards">
                        <li>
                            <a href="#" className="card">
                                <img src={require('../../src/images/message-icon-png-14937.png')} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 
                                        <img className="card__thumb" src={require('../../src/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png')} alt="" /> 
                                        <div className="card__header-text">
                                            <h3 className="card__title">Chryso prase</h3>
                                            <span className="card__status">1 hour ago</span>
                                        </div>
                                    </div>
                                    <p className="card__description"> It includes aspects such as web design, web publishing, web programming, and database management.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="card">
                                <img src={require('../../src/images/message-icon-png-14937.png')} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <img className="card__thumb" src={require('../../src/images/pngaaa.com-6256702.png')} alt="" />
                                        <div className="card__header-text">
                                            <h3 className="card__title">Rohit Bidhuri</h3>
                                            <span className="card__status">3 hours ago</span>
                                        </div>
                                    </div>
                                    <p className="card__description">major tech companies like Microsoft, Uber, Google, Netflix, and Meta use JavaScript in their projects.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="card">
                                <img src={require('../../src/images/message-icon-png-14937.png')} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <img className="card__thumb" src={require('../../src/images/pngaaa.com-6256702.png')} alt="" />
                                        <div className="card__header-text">
                                            <h3 className="card__title">Rohit Bidhuri</h3>
                                            <span className="card__status">3 hours ago</span>
                                        </div>
                                    </div>
                                    <p className="card__description">It includes aspects such as web design, web publishing, web programming, and database management.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="card">
                                <img src={require('../../src/images/message-icon-png-14937.png')} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <img className="card__thumb" src={require("../../src/images/pngaaa.com-6256702.png")} alt="" />
                                        <div className="card__header-text">
                                            <h3 className="card__title">Varun Chauhan</h3>
                                            <span className="card__status">3 hours ago</span>
                                        </div>
                                    </div>
                                    <p className="card__description">major tech companies like Microsoft, Uber, Google, Netflix, and Meta use JavaScript in their projects.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="card">
                                <img src={require('../../src/images/message-icon-png-14937.png')} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <img className="card__thumb" src={require('../../src/images/pngaaa.com-6256702.png')} alt="" />
                                        <div className="card__header-text">
                                            <h3 className="card__title">Rohit Bidhuri</h3>
                                            <span className="card__status">3 hours ago</span>
                                        </div>
                                    </div>
                                    <p className="card__description">Web development refers to the creating, building, and maintaining of websites.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="card">
                                <img src={require('../../src/images/message-icon-png-14937.png')} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <img className="card__thumb" src={require('../../src/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png')} alt="" /> 
                                        <div className="card__header-text">
                                            <h3 className="card__title">Chryso prase</h3>
                                            <span className="card__status">1 hour ago</span>
                                        </div>
                                    </div>
                                    <p className="card__description">major tech companies like Microsoft, Uber, Google, Netflix, and Meta use JavaScript in their projects.</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>


        </div>
    )
}

export default Notification
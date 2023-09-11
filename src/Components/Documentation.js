import React from 'react'
import './documentation.css'
const Documentation = () => {
    return (
        <div className=' Documentation'>
            {/* <h1 className='doc-title'>Documentation</h1> */}
            
 
                <div class="accordion" id="accordionExample">
 
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Web Development
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <img src={require("../../src/images/70007-web-development-design.gif")}/><br/>
                                <strong>Web development </strong>refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.avaScript is used by many developers (65% of the total development community), and the number is increasing day by day. JavaScript is one such programming language that has more than 1444231 libraries and increasing rapidly. It is preferred over any other programming language by most developers. Also, major tech companies like Microsoft, Uber, Google, Netflix, and Meta use JavaScript in their projects.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Digital marketing
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <img src={require('../../src/images/81450-team.gif')}/><br/>
                                <strong>Digital marketing,</strong> also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.Digital marketing and inbound marketing are easily confused, and for good reason. Digital marketing uses many of the same tools as inbound marketing—email and online content, to name a few. Both exist to capture the attention of prospects through the buyer’s journey and turn them into customers. But the 2 approaches take different views of the relationship between the tool and the goal.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Artificial Intelligence
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <img src={require('../../src/images/84824-vs-artificial-intelligence.gif')}/><br/>
                                <strong>Artificial intelligence </strong>is a branch of computer science that makes computers simulate human intelligence to perform various tasks. Computers use machine learning and natural language processing to achieve this. This technology is so advanced that sometimes it is difficult to distinguish between human and AI interactions. Artificial intelligence systems are built to learn and adapt to human inputs to solve problems. With machine learning, AI systems can improve their performance without receiving new instructions from the developer. Instead, the machine will learn new behaviors from all the data it receives and its interactions with them. Web developers use AI on websites to improve user experience. That is how social media sites personalize user feeds according to the accounts and posts they interact with. Additionally, AI helps web developers behind the scenes to build websites. Some software applications allow them to review page elements, find errors, troubleshoot problems, and optimize page performance. One of such applications is the Safari Web Inspector tool that iOS developers use with Corellium to debug web pages to be accessed via the Safari browser.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    )
}

export default Documentation
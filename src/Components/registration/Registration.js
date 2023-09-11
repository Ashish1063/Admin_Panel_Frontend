import React from 'react'
import { Link } from 'react-router-dom'
import './css/registration.css'
const Registration = () => {
	return (
		<div className=' Registration'>
			<div class="container">
				<div class="signup-content">
					<form method="POST" id="signup-form" class="signup-form">
						<h2>Edit </h2>
						{/* <p class="desc">to get discount 10% when pre - order <span>“Batman Beyond”</span></p> */}
						<div class="form-group">
							<input  type="text" class="form-input" name="name" id="name" placeholder="Your Name" />
						</div>
						<div class="form-group">
							<input type="text" class="form-input" name="name" id="name" placeholder="Contact" />
						</div>
						<div class="form-group">
							<input type="email" class="form-input" name="email" id="email" placeholder="Email" />
						</div>
						<div class="form-group">
							<input type="text" class="form-input" name="name" id="name" placeholder="Position" />
						</div>
						<div class="form-group">
							<input type="text" class="form-input" name="password" id="password" placeholder="Password" />
							<span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
						</div>
						{/* <div class="form-group">
							<input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
							<label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
						</div> */}
						<div class="form-group">
							{/* <input type="submit" name="submit" id="submit" class="form-submit submit" value="Sign up" /> */}
						 	<button  class="submit-link submit">Edit</button>
						</div>
					</form>
				</div>
			</div>



{/* 
			<script src="vendor/jquery/jquery.min.js"></script>
			<script src="js/main.js"></script> */}
		</div >
	)
}

export default Registration
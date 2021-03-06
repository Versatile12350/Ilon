import React from 'react'
import './Footer.css'
import logo from '../../logo.svg'

const Footer = () =>(
<footer class="footer">
		<img src = {logo} alt ="logo Space X" class ="logo"/>
		<nav class="footer-nav">
			<ul class="list">
				<li class="item"><a href="/" class="item-link">Elon Musk Twitter</a></li>
				<li class="item"><a href="/" class="item-link">Twitter</a></li>
				<li class="item"><a href="/" class="item-link">Flickr</a></li>
				<li class="item"><a href="/" class="item-link">website</a></li>
			</ul>
		</nav>
		<p class="footer-text">
			For additional questions, contact
			<a class="footer-link" href="mailto:rideshare@spacex.com"
			>rideshare@spacex.com</a
			>
		</p>

	</footer>
);

export default Footer;
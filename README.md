<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Business Name</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Professional Business Website">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar">
  <div class="logo">YourBusiness</div>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<section id="home" class="hero">
  <h1>Grow Your Business With Confidence</h1>
  <p>Professional • Trusted • Result-Driven</p>
  <button onclick="scrollToContact()">Get in Touch</button>
</section>

<!-- ABOUT -->
<section id="about" class="section">
  <h2>About Us</h2>
  <p>
    We are a professional business dedicated to delivering high-quality services
    with honesty, expertise, and commitment. Our focus is on long-term relationships
    and real results for our clients.
  </p>
</section>

<!-- SERVICES -->
<section id="services" class="section gray">
  <h2>Our Services</h2>
  <div class="cards">
    <div class="card">✔ Quality Service</div>
    <div class="card">✔ On-Time Delivery</div>
    <div class="card">✔ Customer Support</div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="section">
  <h2>Contact Us</h2>
  <form onsubmit="sendMessage(event)">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<!-- FOOTER -->
<footer>
  <p>© 2026 YourBusiness. All Rights Reserved.</p>
</footer>

<script src="script.js"></script>
</body>
</html>

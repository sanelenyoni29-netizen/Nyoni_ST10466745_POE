# Sweet Crust Bakery Website

## Project Overview

Sweet Crust Bakery is a responsive, interactive website created to provide customers with information about the bakery, its products, pricing, location, and contact details. The website allows customers to view the bakery menu, view prices on the order page, submit an enquiry, and send a direct message. 

The website represents Sweet Crust Bakery, a family-owned artisan bakery based in Pretoria, South Africa.

## Student Information
*   **Name:** Sanele Mandlenkosi Nyoni (ST10466745)
*   **Course:** Web Development (WEDE5020) - POE
*   **Institution:** IIE Rosebank College

## Website Pages

The website consists of six main pages:

- **Home (index.html)** – Introduces Sweet Crust Bakery and displays daily specials.
- **About Us (about.html)** – Provides information about the bakery's story, mission, vision, and team.
- **Products (products.html)** – Displays different bakery products, including breads, pastries, cakes, and pies.
- **Order Online (order.html)** – Displays a full price list (table) of items with images.
- **Enquiry (enquiry.html)** – Contains a form for custom orders, catering, or volunteer enquiries with JS validation.
- **Contact Us (contact.html)** – Provides the bakery's Pretoria locations, an interactive Google Map, and a contact form.

## Technologies Used

The project was developed using:

- HTML5
- CSS3
- JavaScript (Vanilla)
- Visual Studio Code
- Git & GitHub
- Netlify (Deployment)

## CSS Concepts Used

An external CSS stylesheet is used to provide consistent styling across the website.

The CSS includes concepts such as:

- Tag, class, ID, compound and grouping selectors
- Block and inline elements
- CSS box model
- Width and height
- Margins and padding
- Display properties (Flexbox and CSS Grid)
- Borders, border radius, and box-shadows
- Background colours and CSS Variables (`:root`)
- Typography (relative units, line-height, letter-spacing)
- Link and form pseudo-classes (`:hover`, `:focus`, `:active`)
- Responsive images (`max-width: 100%`)
- Media queries and breakpoints
- Responsive Web Design and Mobile-friendly layouts
- Animated Hamburger Menu (CSS transitions)

## JavaScript Functionality (Part 3 Enhancements)

To enhance the user experience and meet the final POE requirements, the following JavaScript features were implemented:

- **Mobile Hamburger Menu:** A fully functional hamburger menu that toggles the navigation visibility on smaller screens and animates into an 'X'.
- **Form Validation:** Custom client-side validation for the Enquiry and Contact forms. 
    *   The name field requires a minimum of 12 characters.
    *   The email field validates standard email formats (using Regex).
    *   The contact phone field validates a 10-digit South African number.
- **Processing State:** When forms are submitted, the button changes to a "Processing..." state with a CSS spinner to simulate a network request.
- **Simulated AJAX Submission:** Both forms prevent the default page reload. After a 1.5-second simulated delay, the form hides and a dynamic success message appears without refreshing the page.
- **Interactive Google Map:** Embedded on the contact page to show the Pretoria location.

## Project Structure

```text
Sweet-Crust-Bakery/
│
├── index.html
├── about.html
├── products.html
├── order.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
│
├── css/
│   └── style.css
│
├── images/
│   ├── Hero.jpg
│   ├── bakery-interior.jpg
│   ├── sourdough.jpg
│   ├── croissant.jpg
│   ├── apple-pie.jpg
│   └── (other bakery images)
│
└── js/
    └── script.js
Responsive Design
The website uses Responsive Web Design techniques to improve its appearance on different screen sizes.

CSS Grid and Flexbox are used to organise website content. Media queries are also used to adjust the layout for mobile phones (max-width: 768px), tablets (769px - 1024px), and desktop screens. The navigation menu transforms into a hamburger menu on smaller devices. Images are responsive using max-width: 100% and the order table uses fixed sizes so it doesn't break the layout.

SEO and Deployment
To meet modern web standards, the following SEO best practices were applied:

Descriptive alt tags on all images.

Semantic HTML tags (<header>, <nav>, <main>, <section>, <footer>).

Unique <title> and <meta name="description"> tags on all pages.

Inclusion of robots.txt and sitemap.xml files in the root directory.

Live Website: [Paste your Netlify URL here, e.g., https://sweet-crust-bakery-st10466745.netlify.app]
Changelog
v1.0.0 (Part 1 - Structure & HTML):

Initial project setup.

Developed HTML skeleton and semantic navigation for all pages.

Integrated provided bakery images with descriptive alt tags.

Created an order.html page with a pricing table.

v2.0.0 (Part 2 - CSS & Responsive Design):

Created and linked external style.css.

Implemented CSS Grid for products and footer layout.

Added hover and focus pseudo-classes for interactive elements.

Implemented media queries for mobile and desktop layouts.

Added a multi-column footer with Quick Links.

v3.0.0 (Part 3 - JavaScript, SEO & Deployment):

Implemented JavaScript for the mobile hamburger menu toggle.

Added strict client-side form validation (12-character names, email Regex, phone number checks, consent checkbox).

Added a CSS processing spinner to form submit buttons.

Implemented simulated AJAX submission for forms, displaying dynamic success messages.

Added an interactive Google Map centered on Pretoria.

Added Meta descriptions and SEO tags to all pages.

Created robots.txt and sitemap.xml.

Deployed the final website to Netlify.

Author
Sanele Mandlenkosi Nyoni
Diploma in Information Technology
IIE Rosebank College

Project Status
The website is fully complete (Parts 1, 2, and 3). It includes the main HTML structure, external CSS styling, JavaScript interactivity, strict form validation, SEO optimization, and an interactive map. The design is fully responsive and deployed live.

References
Mozilla Developer Network. (2026) HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 27 October 2026).

Mozilla Developer Network. (2026) CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 27 October 2026).

Mozilla Developer Network. (2026) JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 27 October 2026).

W3Schools. (2026) HTML Tutorial. Available at: https://www.w3schools.com/html/ (Accessed: 27 October 2026).

W3Schools. (2026) CSS Tutorial. Available at: https://www.w3schools.com/css/ (Accessed: 27 October 2026).

W3Schools. (2026) JavaScript Tutorial. Available at: https://www.w3schools.com/js/ (Accessed: 27 October 2026).

W3Schools. (2026) Responsive Web Design - Media Queries. Available at: https://www.w3schools.com/css/css_rwd_mediaqueries.asp (Accessed: 27 October 2026).

W3Schools. (2026) CSS Grid Layout. Available at: https://www.w3schools.com/css/css_grid.asp (Accessed: 27 October 2026).

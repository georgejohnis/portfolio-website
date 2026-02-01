# Implementation Plan: Personal Portfolio Website

## Overview

This implementation plan breaks down the portfolio website development into discrete coding tasks. Each task builds incrementally, starting with project structure, then implementing core sections, adding interactivity, and finally testing. The approach prioritizes getting a working MVP quickly, with optional testing tasks that can be completed for comprehensive validation.

## Tasks

- [x] 1. Set up project structure and core HTML skeleton
  - Create directory structure (css/, js/, assets/images/)
  - Create index.html with semantic HTML5 structure
  - Include Bootstrap 5 via CDN
  - Set up basic meta tags for responsiveness and SEO
  - Add placeholder sections for Hero, About, Experience, Skills, Contact
  - _Requirements: 12.1, 12.4_

- [ ] 2. Implement navigation component
  - [x] 2.1 Create fixed navigation bar with Bootstrap navbar
    - Add navbar with brand logo/initials
    - Add navigation links to all sections (About, Experience, Skills, Contact)
    - Implement responsive hamburger menu for mobile
    - _Requirements: 8.1, 8.3_
  
  - [x] 2.2 Add smooth scrolling functionality
    - Write JavaScript function to handle smooth scroll on nav link clicks
    - Prevent default anchor behavior
    - _Requirements: 8.2_
  
  - [x] 2.3 Implement active section highlighting
    - Write JavaScript to detect current scroll position
    - Update active class on navigation links based on visible section
    - _Requirements: 8.2_
  
  - [ ]* 2.4 Write property test for smooth scroll navigation
    - **Property 3: Smooth Scroll Navigation**
    - **Validates: Requirements 8.2**

- [ ] 3. Build hero section
  - [x] 3.1 Create hero section HTML structure
    - Add container with name, title, tagline, and CTA button
    - Add placeholder image element
    - Use Bootstrap grid for responsive layout (text + image)
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  
  - [x] 3.2 Style hero section with custom CSS
    - Set full viewport height or near-full
    - Style typography (large name, prominent title)
    - Add subtle animations (fade-in on load)
    - Make responsive (stack on mobile, side-by-side on desktop)
    - _Requirements: 1.1, 1.2, 9.4_
  
  - [ ]* 3.3 Write unit tests for hero section structure
    - Verify hero section contains name "George John"
    - Verify title "Senior Product Manager - Technical at AWS"
    - Verify placeholder image exists
    - Verify hero is first section
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 4. Create About Me section
  - [x] 4.1 Write About Me content
    - Draft 2-3 paragraphs highlighting experience, expertise, and impact
    - Balance technical depth (AWS/EKS/Kubernetes) with business outcomes
    - _Requirements: 2.1, 2.2_
  
  - [x] 4.2 Implement About Me section HTML and styling
    - Add section with heading and content
    - Style with appropriate spacing and typography
    - Ensure section appears after hero
    - _Requirements: 2.1, 2.3_
  
  - [ ]* 4.3 Write unit test for About Me section
    - Verify section exists and is positioned after hero
    - _Requirements: 2.1, 2.3_

- [ ] 5. Implement experience section with data structure
  - [x] 5.1 Create experience data structure in JavaScript
    - Define experienceItems array with all 23 items
    - Include id, title, date, description, artifacts, tags, priority
    - Prioritize items: Titan (1), GenAI MCP (2), Provisioned Control Plane (3), etc.
    - _Requirements: 3.1, 3.2, 4.1, 4.2, 4.3, 4.4_
  
  - [x] 5.2 Write experience item rendering function
    - Create function to generate HTML for single experience item
    - Include title, date, description, artifact links, tags
    - _Requirements: 3.3, 3.4_
  
  - [x] 5.3 Render all experience items to DOM
    - Loop through experienceItems array
    - Call rendering function for each item
    - Append to experience section container
    - _Requirements: 3.1, 3.2_
  
  - [x] 5.4 Style experience section
    - Create card-like design for each experience item
    - Style artifact links and tags
    - Add hover effects
    - Make responsive
    - _Requirements: 3.3, 9.4_
  
  - [ ]* 5.5 Write unit tests for experience section
    - Verify 23 experience items are rendered
    - Verify top 3 items are Titan, GenAI MCP, Provisioned Control Plane
    - Verify items appear in correct priority order
    - _Requirements: 3.1, 4.1, 4.2, 4.3, 4.4_
  
  - [ ]* 5.6 Write property test for artifact links
    - **Property 1: Artifact Links Rendered**
    - **Validates: Requirements 3.4**
  
  - [ ]* 5.7 Write property test for financial information exclusion
    - **Property 5: Financial Information Exclusion**
    - **Validates: Requirements 13.1**
  
  - [ ]* 5.8 Write property test for public URL validation
    - **Property 6: Public URL Validation**
    - **Validates: Requirements 13.3, 13.4**

- [ ] 6. Checkpoint - Verify core sections render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Build Skills/Expertise section
  - [x] 7.1 Create skills section HTML structure
    - Add section heading
    - Create skill categories: Cloud & Infrastructure, Product Management, Technical Skills
    - List skills under each category
    - Highlight AWS, Kubernetes, EKS
    - _Requirements: 5.1, 5.2_
  
  - [x] 7.2 Style skills section
    - Use CSS Grid for multi-column layout (2-3 columns on desktop)
    - Make responsive (single column on mobile)
    - Style category headings and skill lists
    - _Requirements: 5.1, 9.4_
  
  - [x] 7.3 Verify skills section positioning
    - Ensure section appears after experience section
    - _Requirements: 5.3_
  
  - [ ]* 7.4 Write unit test for skills section
    - Verify section exists
    - Verify AWS, Kubernetes, EKS are included
    - Verify positioning after experience
    - _Requirements: 5.1, 5.2, 5.3_

- [ ] 8. Create contact section
  - [x] 8.1 Implement contact section HTML
    - Add section heading "Get In Touch"
    - Add description text
    - Add prominent LinkedIn button linking to linkedin.com/in/find-george-john
    - _Requirements: 6.1, 6.2_
  
  - [x] 8.2 Style contact section
    - Center content
    - Style LinkedIn button (large, prominent)
    - Use contrasting background color
    - _Requirements: 6.1, 9.4_
  
  - [x] 8.3 Verify contact section is final section
    - Ensure contact appears last on page
    - _Requirements: 6.3_
  
  - [ ]* 8.4 Write unit test for contact section
    - Verify section exists
    - Verify LinkedIn link with correct URL
    - Verify section is last
    - _Requirements: 6.1, 6.2, 6.3_

- [ ] 9. Implement responsive design and mobile optimization
  - [x] 9.1 Add responsive breakpoints and media queries
    - Define breakpoints for mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
    - Adjust layouts for each breakpoint
    - _Requirements: 7.1_
  
  - [x] 9.2 Test and refine mobile layout
    - Verify all sections stack properly on mobile
    - Adjust spacing and typography for small screens
    - Test hamburger menu functionality
    - _Requirements: 7.1, 7.3_
  
  - [ ]* 9.3 Write property test for responsive layout adaptation
    - **Property 2: Responsive Layout Adaptation**
    - **Validates: Requirements 7.1**

- [ ] 10. Add scroll animations and interactivity
  - [x] 10.1 Implement Intersection Observer for scroll animations
    - Create observer to detect when elements enter viewport
    - Add 'animate-in' class to trigger CSS animations
    - Apply to experience items and skill categories
    - _Requirements: 9.4_
  
  - [x] 10.2 Add CSS animations
    - Create fade-in and slide-up animations
    - Add hover effects for links and buttons
    - Ensure animations are subtle and performant
    - _Requirements: 9.4_
  
  - [x] 10.3 Implement mobile menu toggle
    - Add click handler for hamburger menu
    - Toggle menu visibility
    - Close menu when clicking nav links
    - _Requirements: 8.1_

- [ ] 11. Implement accessibility features
  - [x] 11.1 Add semantic HTML and ARIA labels
    - Use proper heading hierarchy (h1 → h2 → h3)
    - Add alt text to images
    - Add ARIA labels to icon buttons
    - Add skip-to-main-content link
    - _Requirements: 11.3_
  
  - [x] 11.2 Ensure keyboard navigation works
    - Test Tab navigation through all interactive elements
    - Add visible focus indicators
    - Ensure Enter/Space activates buttons and links
    - _Requirements: 11.2_
  
  - [x] 11.3 Verify color contrast ratios
    - Check all text meets WCAG AA standards (4.5:1)
    - Adjust colors if needed
    - _Requirements: 11.4_
  
  - [ ]* 11.4 Run automated accessibility tests
    - Use axe-core to verify WCAG 2.1 Level AA compliance
    - Fix any issues found
    - _Requirements: 11.1_
  
  - [ ]* 11.5 Write property test for keyboard accessibility
    - **Property 4: Keyboard Accessibility**
    - **Validates: Requirements 11.2**

- [ ] 12. Optimize performance
  - [x] 12.1 Optimize images
    - Compress placeholder image
    - Add lazy loading for below-the-fold images
    - _Requirements: 10.1, 10.2_
  
  - [x] 12.2 Minify CSS and JavaScript
    - Create minified versions of custom CSS and JS
    - Update HTML to reference minified files
    - _Requirements: 10.1, 10.2_
  
  - [ ]* 12.3 Run Lighthouse performance test
    - Verify page load time is under 3 seconds
    - Check performance score
    - Address any issues
    - _Requirements: 10.1_

- [ ] 13. Final integration and polish
  - [x] 13.1 Verify static site requirements
    - Test opening index.html directly in browser
    - Ensure no server-side code is present
    - Verify Bootstrap is properly included
    - _Requirements: 12.1, 12.2, 12.3, 12.4_
  
  - [ ] 13.2 Cross-browser testing
    - Test in Chrome, Firefox, Safari, Edge
    - Fix any browser-specific issues
    - _Requirements: 7.1_
  
  - [ ] 13.3 Final visual polish
    - Review all sections for visual consistency
    - Adjust spacing, colors, typography as needed
    - Ensure design matches brittanychiang.com aesthetic
    - _Requirements: 9.1, 9.3, 9.4_

- [ ] 14. Final checkpoint - Complete testing and validation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Property tests should run minimum 100 iterations each
- The 23 experience items will need actual content based on George's work history
- Focus on getting a working static site that can be viewed locally first
- Future phases (Docker, EKS deployment, etc.) are explicitly out of scope

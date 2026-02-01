# Design Document: Personal Portfolio Website

## Overview

This design describes a static personal portfolio website for George John, built using HTML, CSS, and JavaScript with Bootstrap for responsive layout. The website follows a single-page application (SPA) pattern with smooth scrolling navigation between sections. The design emphasizes clean, minimal aesthetics inspired by brittanychiang.com, with a focus on showcasing professional accomplishments to recruiters and potential employers.

The website consists of five main sections: Hero, About Me, Experience, Skills/Expertise, and Contact. All content is static and embedded directly in the HTML, with no backend or data fetching required. The site prioritizes mobile-first responsive design, fast loading times, and accessibility compliance.

## Architecture

### High-Level Structure

```
portfolio-website/
├── index.html          # Main HTML file with all content
├── css/
│   ├── styles.css      # Custom styles
│   └── bootstrap.min.css (optional if not using CDN)
├── js/
│   ├── main.js         # Custom JavaScript for interactions
│   └── bootstrap.bundle.min.js (optional if not using CDN)
└── assets/
    └── images/
        └── placeholder-photo.jpg
```

### Technology Stack

- **HTML5**: Semantic markup for content structure
- **CSS3**: Custom styling with CSS Grid and Flexbox for layouts
- **Bootstrap 5**: Responsive grid system and utility classes
- **Vanilla JavaScript**: Smooth scrolling, navigation highlighting, and interactions
- **No build tools**: Direct file serving for simplicity

### Page Flow

The website follows a vertical single-page layout:

1. **Navigation Bar** (fixed/sticky) - Always visible with links to sections
2. **Hero Section** - Full viewport height with name, title, and photo
3. **About Me Section** - Brief professional summary
4. **Experience Section** - Scrollable list of 23 work items, prioritized by impact
5. **Skills/Expertise Section** - Grid or list of technical and business skills
6. **Contact Section** - LinkedIn link and call-to-action
7. **Footer** - Copyright and additional links (optional)

## Components and Interfaces

### 1. Navigation Component

**Purpose**: Provides quick access to all sections with smooth scrolling.

**Structure**:
```html
<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#home">GJ</a>
    <button class="navbar-toggler">...</button>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

**Behavior**:
- Fixed position at top of viewport
- Highlights current section as user scrolls
- Collapses to hamburger menu on mobile
- Smooth scroll animation when clicking links

**JavaScript Interface**:
```javascript
function initNavigation() {
  // Add smooth scroll behavior to nav links
  // Highlight active section based on scroll position
  // Handle mobile menu toggle
}
```

### 2. Hero Section Component

**Purpose**: Creates strong first impression with name, title, and photo.

**Structure**:
```html
<section id="home" class="hero-section">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-8">
        <h1 class="hero-name">George John</h1>
        <h2 class="hero-title">Senior Product Manager - Technical at AWS</h2>
        <p class="hero-tagline">Building scalable cloud infrastructure and developer experiences</p>
        <a href="#contact" class="btn btn-primary">Get in Touch</a>
      </div>
      <div class="col-md-4">
        <img src="assets/images/placeholder-photo.jpg" alt="George John" class="hero-photo">
      </div>
    </div>
  </div>
</section>
```

**Styling Considerations**:
- Full viewport height (100vh) or near-full
- Large, bold typography for name
- Subtle animations on load (fade-in, slide-up)
- Responsive layout: stacked on mobile, side-by-side on desktop

### 3. About Me Section Component

**Purpose**: Provides concise professional summary balancing technical and business aspects.

**Structure**:
```html
<section id="about" class="about-section">
  <div class="container">
    <h2 class="section-title">About Me</h2>
    <div class="about-content">
      <p>Professional summary highlighting:</p>
      <ul>
        <li>Years of experience in product management</li>
        <li>AWS/EKS expertise</li>
        <li>Technical depth (Kubernetes, cloud infrastructure)</li>
        <li>Business impact (scaling, customer outcomes)</li>
      </ul>
    </div>
  </div>
</section>
```

**Content Guidelines**:
- 2-3 paragraphs maximum
- Lead with impact and expertise
- Mention key technologies (AWS, EKS, Kubernetes)
- Highlight business outcomes

### 4. Experience Section Component

**Purpose**: Showcases 23 work accomplishments in prioritized order with public links.

**Structure**:
```html
<section id="experience" class="experience-section">
  <div class="container">
    <h2 class="section-title">Experience</h2>
    <div class="experience-list">
      <!-- Experience Item Template -->
      <div class="experience-item">
        <div class="experience-header">
          <h3 class="experience-title">Project Name</h3>
          <span class="experience-date">Year</span>
        </div>
        <p class="experience-description">
          Description highlighting technical depth and business impact
        </p>
        <div class="experience-artifacts">
          <a href="url" target="_blank" class="artifact-link">Blog Post</a>
          <a href="url" target="_blank" class="artifact-link">Documentation</a>
        </div>
        <div class="experience-tags">
          <span class="tag">AWS</span>
          <span class="tag">EKS</span>
          <span class="tag">Kubernetes</span>
        </div>
      </div>
      <!-- Repeat for all 23 items -->
    </div>
  </div>
</section>
```

**Prioritization Order** (Top 10):
1. EKS 100K node cluster (Project Titan)
2. EKS GenAI MCP server
3. EKS Provisioned Control Plane
4. Control Plane Insights
5. Eventing Service
6. Project Obelisk
7. AWS CodeArtifact launch
8. EKS Observability Strategy
9. EKS Performance and Scale Strategy
10. Pod Identity

**Data Structure** (JavaScript):
```javascript
const experienceItems = [
  {
    id: 1,
    title: "EKS 100K Node Cluster (Project Titan)",
    date: "2024",
    description: "Led the development of...",
    artifacts: [
      { type: "blog", url: "https://..." },
      { type: "docs", url: "https://..." }
    ],
    tags: ["AWS", "EKS", "Kubernetes", "Scale"]
  },
  // ... 22 more items
];
```

**Rendering Logic**:
```javascript
function renderExperience(items) {
  const container = document.querySelector('.experience-list');
  items.forEach(item => {
    const html = createExperienceItemHTML(item);
    container.insertAdjacentHTML('beforeend', html);
  });
}
```

### 5. Skills/Expertise Section Component

**Purpose**: Displays technical and business skills in organized categories.

**Structure**:
```html
<section id="skills" class="skills-section">
  <div class="container">
    <h2 class="section-title">Skills & Expertise</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h3>Cloud & Infrastructure</h3>
        <ul>
          <li>Amazon Web Services (AWS)</li>
          <li>Elastic Kubernetes Service (EKS)</li>
          <li>Kubernetes</li>
          <li>Container Orchestration</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Product Management</h3>
        <ul>
          <li>Technical Product Strategy</li>
          <li>Roadmap Planning</li>
          <li>Stakeholder Management</li>
          <li>Customer Discovery</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Technical Skills</h3>
        <ul>
          <li>System Architecture</li>
          <li>Performance Optimization</li>
          <li>Developer Experience</li>
          <li>GenAI/ML Integration</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

**Layout**:
- CSS Grid with 2-3 columns on desktop
- Single column on mobile
- Visual hierarchy with category headings

### 6. Contact Section Component

**Purpose**: Provides clear call-to-action for recruiters to connect.

**Structure**:
```html
<section id="contact" class="contact-section">
  <div class="container text-center">
    <h2 class="section-title">Get In Touch</h2>
    <p class="contact-description">
      I'm currently open to new opportunities. Let's connect!
    </p>
    <a href="https://linkedin.com/in/find-george-john" 
       target="_blank" 
       class="btn btn-primary btn-lg">
      Connect on LinkedIn
    </a>
  </div>
</section>
```

**Styling**:
- Centered layout
- Large, prominent LinkedIn button
- Contrasting background color
- Ample whitespace

## Data Models

### Experience Item Model

```javascript
interface ExperienceItem {
  id: number;
  title: string;
  date: string;
  description: string;
  artifacts: Artifact[];
  tags: string[];
  priority: number; // 1-23, lower is higher priority
}

interface Artifact {
  type: 'blog' | 'docs' | 'announcement' | 'video';
  url: string;
  title?: string;
}
```

### Skills Category Model

```javascript
interface SkillCategory {
  name: string;
  skills: string[];
}
```

### Navigation Item Model

```javascript
interface NavItem {
  label: string;
  href: string;
  section: string;
}
```

## Styling and Design System

### Color Palette

Inspired by brittanychiang.com:
- **Background**: Dark navy (#0a192f) or light (#f8f9fa) depending on preference
- **Primary Text**: Light gray (#ccd6f6) or dark gray (#333)
- **Accent**: Teal/cyan (#64ffda) for links and highlights
- **Secondary**: Slate gray (#8892b0) for secondary text

### Typography

- **Headings**: Sans-serif font (Inter, SF Pro, or similar)
  - H1 (Name): 48-72px, bold
  - H2 (Section titles): 32-40px, semi-bold
  - H3 (Experience titles): 20-24px, medium
- **Body**: Sans-serif, 16-18px, regular weight
- **Line height**: 1.6-1.8 for readability

### Spacing System

- **Section padding**: 80-120px vertical
- **Container max-width**: 1200px
- **Grid gaps**: 24-32px
- **Element margins**: 16px, 24px, 32px (consistent scale)

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Animations

- **Scroll animations**: Fade-in and slide-up on scroll (using Intersection Observer)
- **Hover effects**: Subtle scale or color transitions on links and buttons
- **Smooth scroll**: CSS `scroll-behavior: smooth` or JavaScript implementation
- **Page load**: Staggered fade-in for hero elements

## JavaScript Functionality

### Core Functions

```javascript
// Smooth scrolling for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// Active navigation highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.experience-item, .skill-category').forEach(el => {
    observer.observe(el);
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const toggler = document.querySelector('.navbar-toggler');
  const menu = document.querySelector('.navbar-collapse');
  
  toggler.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initScrollAnimations();
  initMobileMenu();
  window.addEventListener('scroll', updateActiveNav);
});
```



## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Artifact Links Rendered

*For any* experience item that has associated artifacts, the rendered HTML should contain clickable links to all those artifacts.

**Validates: Requirements 3.4**

### Property 2: Responsive Layout Adaptation

*For any* viewport width (from 320px to 2560px), the website layout should adapt appropriately without horizontal scrolling or broken layouts.

**Validates: Requirements 7.1**

### Property 3: Smooth Scroll Navigation

*For any* navigation link in the navbar, clicking that link should trigger smooth scrolling to the corresponding section.

**Validates: Requirements 8.2**

### Property 4: Keyboard Accessibility

*For any* interactive element (links, buttons, form inputs), that element should be accessible and operable using only keyboard navigation (Tab, Enter, Space).

**Validates: Requirements 11.2**

### Property 5: Financial Information Exclusion

*For any* experience item description, the text should not contain dollar signs ($), currency symbols, or financial figures.

**Validates: Requirements 13.1**

### Property 6: Public URL Validation

*For any* artifact link in the experience section, the URL should be a public domain (not internal AWS domains like internal.amazon.com, corp.amazon.com, or similar).

**Validates: Requirements 13.3, 13.4**

## Error Handling

### Missing Content

- **Missing photo**: Display placeholder image with alt text
- **Missing artifact links**: Render experience item without artifact section
- **Empty descriptions**: Show "Description coming soon" or hide item

### Browser Compatibility

- **Older browsers**: Provide fallback for CSS Grid (use Flexbox)
- **JavaScript disabled**: Ensure basic navigation still works with anchor links
- **Unsupported CSS**: Use progressive enhancement approach

### Accessibility Errors

- **Missing alt text**: Provide default alt text for images
- **Low contrast**: Ensure all text meets WCAG AA standards (4.5:1 for normal text)
- **Missing ARIA labels**: Add appropriate labels to all interactive elements

### Performance Issues

- **Slow loading**: Lazy load images below the fold
- **Large assets**: Compress images and minify CSS/JS
- **Render blocking**: Load CSS in head, JS at end of body

### Responsive Design Edge Cases

- **Very small screens** (< 320px): Ensure minimum usable layout
- **Very large screens** (> 2560px): Cap max-width to prevent excessive stretching
- **Landscape mobile**: Adjust hero section height to prevent excessive scrolling

## Testing Strategy

### Dual Testing Approach

This project will use both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Property tests**: Verify universal properties across all inputs

Together, these approaches provide comprehensive coverage where unit tests catch concrete bugs and property tests verify general correctness.

### Unit Testing

Unit tests will focus on:

1. **DOM Structure Tests**
   - Verify hero section contains name and title
   - Verify all 5 main sections exist (Hero, About, Experience, Skills, Contact)
   - Verify navigation links point to correct sections
   - Verify 23 experience items are rendered
   - Verify experience items appear in correct priority order

2. **Content Tests**
   - Verify specific text content (name, title, LinkedIn URL)
   - Verify top 3 experience items are correct (Titan, GenAI MCP, Provisioned Control Plane)
   - Verify skills section includes AWS, Kubernetes, EKS

3. **Accessibility Tests**
   - Verify WCAG 2.1 Level AA compliance using automated tools (axe-core)
   - Verify semantic HTML elements are used correctly
   - Verify ARIA labels are present where needed
   - Verify color contrast ratios meet standards

4. **Performance Tests**
   - Verify page load time is under 3 seconds
   - Verify images are optimized
   - Verify CSS and JS are minified

5. **Static Site Tests**
   - Verify no server-side code is present
   - Verify site works when opened as local file
   - Verify Bootstrap is included (CDN or local)

### Property-Based Testing

Property-based tests will use a JavaScript PBT library (fast-check or jsverify) and will run a minimum of 100 iterations per test.

Each property test will be tagged with a comment referencing the design document property:

```javascript
// Feature: portfolio-website, Property 1: Artifact Links Rendered
test('experience items with artifacts render links', () => {
  fc.assert(
    fc.property(
      experienceItemWithArtifactsGenerator(),
      (item) => {
        const html = renderExperienceItem(item);
        const links = extractLinks(html);
        return links.length === item.artifacts.length &&
               links.every((link, i) => link.href === item.artifacts[i].url);
      }
    ),
    { numRuns: 100 }
  );
});
```

**Property Tests to Implement:**

1. **Property 1: Artifact Links Rendered**
   - Generate random experience items with varying numbers of artifacts
   - Verify all artifact URLs appear as links in rendered HTML
   - Tag: `Feature: portfolio-website, Property 1: Artifact Links Rendered`

2. **Property 2: Responsive Layout Adaptation**
   - Generate random viewport widths (320px - 2560px)
   - Verify no horizontal scrolling occurs
   - Verify all content is visible and properly laid out
   - Tag: `Feature: portfolio-website, Property 2: Responsive Layout Adaptation`

3. **Property 3: Smooth Scroll Navigation**
   - Generate random navigation link selections
   - Verify clicking triggers scroll to correct section
   - Verify scroll behavior is smooth (not instant jump)
   - Tag: `Feature: portfolio-website, Property 3: Smooth Scroll Navigation`

4. **Property 4: Keyboard Accessibility**
   - Generate random sequences of Tab key presses
   - Verify all interactive elements can be reached
   - Verify Enter/Space activates elements
   - Tag: `Feature: portfolio-website, Property 4: Keyboard Accessibility`

5. **Property 5: Financial Information Exclusion**
   - Generate random experience item descriptions
   - Verify no dollar signs, currency symbols, or financial figures appear
   - Tag: `Feature: portfolio-website, Property 5: Financial Information Exclusion`

6. **Property 6: Public URL Validation**
   - Generate random artifact URLs
   - Verify all URLs are public domains (not internal AWS)
   - Tag: `Feature: portfolio-website, Property 6: Public URL Validation`

### Testing Tools

- **Unit Testing**: Jest or Vitest
- **Property-Based Testing**: fast-check
- **DOM Testing**: jsdom or Testing Library
- **Accessibility Testing**: axe-core
- **Visual Regression**: Percy or Chromatic (optional)
- **Performance Testing**: Lighthouse CI

### Test Execution

Tests should be run:
- Before committing code changes
- In CI/CD pipeline (if implemented in future phases)
- Before deploying to any environment

### Coverage Goals

- **Code coverage**: 80%+ for JavaScript functions
- **Property tests**: Minimum 100 iterations per property
- **Accessibility**: 100% WCAG 2.1 Level AA compliance
- **Browser testing**: Chrome, Firefox, Safari, Edge (latest versions)
- **Device testing**: Mobile (iOS/Android), Tablet, Desktop

## Implementation Notes

### Content Population

The 23 experience items will need to be manually authored based on George's work history. Each item should:
- Have a clear, impactful title
- Include 2-3 sentences describing technical depth and business outcomes
- Link to public artifacts (blog posts, documentation, announcements)
- Use appropriate tags (AWS, EKS, Kubernetes, etc.)
- Exclude any internal/confidential information

### Bootstrap Integration

Bootstrap can be included via CDN for simplicity:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

Or downloaded locally for offline viewing.

### Image Optimization

- Use WebP format for photos with JPEG fallback
- Provide multiple sizes for responsive images (srcset)
- Compress images to < 200KB each
- Use lazy loading for below-the-fold images

### Performance Optimization

- Minify CSS and JavaScript
- Use CSS containment for sections
- Implement critical CSS inline
- Defer non-critical JavaScript
- Use font-display: swap for web fonts

### Accessibility Checklist

- [ ] Semantic HTML5 elements (header, nav, main, section, footer)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text for all images
- [ ] ARIA labels for icon buttons
- [ ] Focus indicators for interactive elements
- [ ] Skip to main content link
- [ ] Color contrast ratios meet WCAG AA
- [ ] Keyboard navigation works throughout
- [ ] Screen reader testing completed

### Future Enhancements (Out of Scope)

These items are explicitly out of scope for this phase but documented for future reference:
- Dockerization
- EKS deployment with AutoMode
- ECR for container images
- GitOps with managed ArgoCD
- Terraform for infrastructure
- ACK for AWS resources
- Route53 for custom domain (georgejohn.net)
- Contact form with backend
- Blog section
- Dark/light mode toggle
- Analytics integration

// Main JavaScript for Portfolio Website

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavHighlight();
    renderExperience(); // Render experience items
});

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
}

// Active navigation highlighting based on scroll position
function initActiveNavHighlight() {
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Call once on load
}

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
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe experience items and skill categories
    document.querySelectorAll('.experience-item, .skill-category').forEach(el => {
        observer.observe(el);
    });
}

// Experience data - 13 items prioritized by impact
const experienceItems = [
    {
        id: 1,
        title: "EKS Ultra Scale Clusters",
        date: "2024",
        description: "Led product execution and strategic launch for Amazon EKS clusters capable of supporting up to 100,000 nodes, enabling frontier AI model builders to efficiently train and run large-scale models.",
        artifacts: [
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/amazon-eks-enables-ultra-scale-ai-ml-workloads-with-support-for-100k-nodes-per-cluster/", title: "Launch Blog" },
            { type: "What's New", url: "https://aws.amazon.com/about-aws/whats-new/2025/07/amazon-eks-100000-worker-nodes-per-cluster/", title: "What's New Post" }
        ],
        tags: ["AWS", "EKS", "Kubernetes", "Scale", "AI/ML", "Product Launch"]
    },
    {
        id: 2,
        title: "EKS GenAI Experience for Developers (MCP Server)",
        date: "2024",
        description: "Launched Model Context Protocol (MCP) server with EKS and Kubernetes-specific context, integrated with AWS Next Gen DevX experiences and industry tools. This has enabled customers to focus on building differentiated applications rather than wrestling with infrastructure complexity.",
        artifacts: [
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/introducing-the-fully-managed-amazon-eks-mcp-server-preview", title: "EKS MCP Server Launch Blog" }
        ],
        tags: ["AWS", "EKS", "GenAI", "Developer Experience", "Innovation", "MCP"]
    },
    {
        id: 3,
        title: "EKS Provisioned Control Plane",
        date: "2024",
        description: "Enabled customers to set a higher baseline of performance for EKS clusters and scale beyond traditional limits. This feature provides predictable performance for large-scale clusters, addressing the needs of customers with bursty traffic or ultra scale AI training/inference, high performance computing, or large-scale data processing.",
        artifacts: [
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/amazon-eks-introduces-provisioned-control-plane/", title: "AWS Launch Blog" },
            { type: "What's New", url: "https://aws.amazon.com/about-aws/whats-new/2025/11/amazon-eks-provisioned-control-plane/", title: "What's New Post" }
        ],
        tags: ["AWS", "EKS", "Performance", "Scalability", "Control Plane"]
    },
    {
        id: 4,
        title: "EKS Control Plane Insights",
        date: "2024",
        description: "Delivered control plane insights to enable customers to more effectively run their workloads on EKS. This initiative helps customers get needed insights to quickly root cause and remediate issues",
        artifacts: [
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/amazon-eks-enhances-kubernetes-control-plane-observability/", title: "Control Plane Observability Blog" }
        ],
        tags: ["AWS", "EKS", "Observability", "Customer Experience", "Operations"]
    },
    {
        id: 5,
        title: "AI-Powered Troubleshooting in EKS Console",
        date: "2024",
        description: "Launched AI-powered troubleshooting experiences in the EKS Console through Amazon Q Developer integration. This feature enables customers to investigate cluster health, control plane issues, and workload problems with contextual AI assistance. By clicking 'Inspect with Amazon Q' directly from the observability dashboard, customers can automatically analyze issues, gather relevant logs and metrics, understand root causes, and receive mitigation recommendations—accelerating problem resolution and reducing operational overhead.",
        artifacts: [
            { type: "What's New", url: "https://aws.amazon.com/about-aws/whats-new/2025/11/amazon-ecs-eks-ai-powered-troubleshooting-console/", title: "AI-Powered Troubleshooting Launch" }
        ],
        tags: ["AWS", "EKS", "GenAI", "Amazon Q", "Troubleshooting", "Developer Experience"]
    },
    {
        id: 6,
        title: "Next generation data store",
        date: "2024",
        description: "Delivered architectural transformation of EKS's core storage layer (etcd) that enables customers to run ultra scale Kubernetes clusters with predictable performance and higher reliability. This foundational innovation abstracts away the complexity of managing distributed consensus systems, allowing customers to focus on their applications rather than infrastructure operations.",
        artifacts: [],
        tags: ["AWS", "EKS", "Architecture", "etcd", "Innovation"]
    },
    {
        id: 7,
        title: "AWS CodeArtifact Launch",
        date: "2020",
        description: "As the lead Product Manager, defined requirements, designed user experience, and oversaw launch of AWS CodeArtifact — a fully managed artifact repository service that makes it easy for organizations to securely store, publish, and share packages. CodeArtifact eliminates the need to set up, operate, and scale infrastructure for artifact management.",
        artifacts: [],
        tags: ["AWS", "CodeArtifact", "Product Launch", "DevOps", "Service Launch"]
    },
    {
        id: 8,
        title: "EKS Pod Identity",
        date: "2023",
        description: "Launched Pod Identity to simplify how Kubernetes applications securely access AWS services, eliminating complex configuration and improving security posture. This feature streamlines IAM credential management for customers, reducing operational overhead and potential security risks.",
        artifacts: [
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/amazon-eks-pod-identity-a-new-way-for-applications-on-eks-to-obtain-iam-credentials/", title: "Pod Identity Launch Blog" },
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/amazon-eks-pod-identity-streamlines-cross-account-access/", title: "Cross-Account Support Blog" }
        ],
        tags: ["AWS", "EKS", "Security", "IAM", "Kubernetes"]
    },
    {
        id: 9,
        title: "Technical Thought Leadership and Enablement",
        date: "2022-2024",
        description: "Created technical content and communications that positioned EKS as the industry leader in managed Kubernetes. Published deep-dive articles on cluster scalability and distributed systems management that helped customers understand EKS's technical advantages and best practices. Delivered training sessions and developed enablement materials on deployment strategies that equipped AWS field teams to drive customer success.",
        artifacts: [
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/deep-dive-into-amazon-eks-scalability-testing/", title: "Scalability Testing Deep Dive" },
            { type: "Blog", url: "https://aws.amazon.com/blogs/containers/managing-etcd-database-size-on-amazon-eks-clusters/", title: "Managing etcd at Scale" }
        ],
        tags: ["AWS", "EKS", "Thought Leadership", "Technical Writing", "Enablement"]
    },
    {
        id: 10,
        title: "EKS Dual Stack Support",
        date: "2023",
        description: "Launched Dual stack (IPv4 and IPv6) support for EKS management API endpoint and Kubernetes endpoint in cluster, enabling customers to run modern networking architectures and meet compliance requirements.",
        artifacts: [],
        tags: ["AWS", "EKS", "Networking", "IPv6", "Dual stack"]
    },
    {
        id: 11,
        title: "Compliance Initiative",
        date: "2022-2024",
        description: "Led compliance initiatives to ensure EKS met industry security and regulatory standards, enabling customers in regulated industries to adopt Kubernetes. Coordinated across teams to achieve new compliance certifications that expanded EKS's addressable market.",
        artifacts: [],
        tags: ["AWS", "EKS", "Compliance", "Security", "Governance"]
    },
    {
        id: 11,
        title: "EKS Cost Visibility",
        date: "2023",
        description: "Enabled granular cost allocation for Kubernetes workloads by integrating EKS with AWS Cost and Usage Reports. This allows customers to accurately track, optimize, and chargeback costs for their containerized applications, improving financial governance and FinOps practices.",
        artifacts: [
            { type: "Blog", url: "https://aws.amazon.com/blogs/aws-cloud-financial-management/improve-cost-visibility-of-amazon-eks-with-aws-split-cost-allocation-data/", title: "Split cost allocation blog" }
        ],
        tags: ["AWS", "EKS", "FinOps", "Cost Management", "CUR"]
    },
    {
        id: 12,
        title: "AWS Lambda@Edge",
        date: "2017-2019",
        description: "Led product management for Lambda@Edge, enabling customers to run serverless functions at CloudFront edge locations for low-latency content customization. Drove go-to-market strategy and evangelization that helped customers build faster, more responsive web applications.",
        artifacts: [],
        tags: ["AWS", "Lambda", "Edge Computing", "CDN"]
    }
];

// Function to render experience items (will be populated in next task)
function renderExperience() {
    const container = document.getElementById('experienceList');
    if (!container || experienceItems.length === 0) return;
    
    experienceItems.forEach(item => {
        const html = createExperienceItemHTML(item);
        container.insertAdjacentHTML('beforeend', html);
    });
    
    // Re-initialize observer for new items
    initScrollAnimations();
}

// Create HTML for a single experience item
function createExperienceItemHTML(item) {
    const artifactsHTML = item.artifacts && item.artifacts.length > 0
        ? `<div class="experience-artifacts">
            ${item.artifacts.map(artifact => 
                `<a href="${artifact.url}" target="_blank" rel="noopener noreferrer" class="artifact-link">
                    ${artifact.title || artifact.type}
                </a>`
            ).join('')}
           </div>`
        : '';
    
    const tagsHTML = item.tags && item.tags.length > 0
        ? `<div class="experience-tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
           </div>`
        : '';
    
    return `
        <div class="experience-item">
            <div class="experience-header">
                <h3 class="experience-title">${item.title}</h3>
                <span class="experience-date">${item.date}</span>
            </div>
            <p class="experience-description">${item.description}</p>
            ${artifactsHTML}
            ${tagsHTML}
        </div>
    `;
}

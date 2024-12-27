import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  blogList: any = [
    {
      title: "Hello",
      content: "This is a sample blog content for the first blog. It discusses basic concepts of web development and its importance in modern technologies.",
      authorname: "John Doe",
      createdAt: "2024-12-01",
      tags: ["Web Development", "HTML", "CSS", "JavaScript"],
      category: "Technology"
    },
    {
      title: "The Power of AI",
      content: "AI is transforming industries around the world. In this blog, we explore how artificial intelligence is shaping the future of technology and business.",
      authorname: "Jane Smith",
      createdAt: "2024-12-02",
      tags: ["Artificial Intelligence", "Tech Trends", "Innovation"],
      category: "Technology"
    },
    {
      title: "Understanding JavaScript",
      content: "JavaScript is one of the most important languages for web development. This post explains the basics of JavaScript and how it is used to create dynamic websites.",
      authorname: "Alice Johnson",
      createdAt: "2024-12-03",
      tags: ["JavaScript", "Programming", "Web Development"],
      category: "Education"
    },
    {
      title: "The Future of Cloud Computing",
      content: "Cloud computing is revolutionizing the way businesses operate. This blog explores the future of cloud services and how companies can benefit from them.",
      authorname: "Bob Martin",
      createdAt: "2024-12-04",
      tags: ["Cloud Computing", "Business Technology", "Future Trends"],
      category: "Business"
    },
    {
      title: "Web Design Trends in 2024",
      content: "Web design is constantly evolving. This blog covers the latest trends in web design for 2024 and how businesses can stay ahead of the curve.",
      authorname: "Mary Williams",
      createdAt: "2024-12-05",
      tags: ["Web Design", "UI/UX", "2024 Trends"],
      category: "Design"
    },
    {
      title: "SEO Best Practices",
      content: "SEO is crucial for driving traffic to your website. Learn the best practices for SEO and how to optimize your website for better search engine rankings.",
      authorname: "Chris Brown",
      createdAt: "2024-12-06",
      tags: ["SEO", "Digital Marketing", "Search Engine Optimization"],
      category: "Marketing"
    },
    {
      title: "Mobile App Development",
      content: "Mobile app development has gained immense popularity in recent years. This blog discusses the key considerations and steps for developing successful mobile apps.",
      authorname: "Sarah Davis",
      createdAt: "2024-12-07",
      tags: ["Mobile Development", "Apps", "Technology"],
      category: "Technology"
    },
    {
      title: "The Importance of Cybersecurity",
      content: "As cyber threats grow, so does the need for robust cybersecurity measures. This blog explains the importance of cybersecurity for businesses and individuals.",
      authorname: "Michael Taylor",
      createdAt: "2024-12-08",
      tags: ["Cybersecurity", "Data Protection", "Tech Safety"],
      category: "Technology"
    },
    {
      title: "Introduction to Data Science",
      content: "Data science is an interdisciplinary field that uses scientific methods to extract knowledge from data. This blog introduces the concepts and tools used in data science.",
      authorname: "Jessica Lee",
      createdAt: "2024-12-09",
      tags: ["Data Science", "Analytics", "Big Data"],
      category: "Education"
    },
    {
      title: "Machine Learning Basics",
      content: "Machine learning is a branch of AI that allows computers to learn from data. In this blog, we explain the basics of machine learning and its applications.",
      authorname: "David Harris",
      createdAt: "2024-12-10",
      tags: ["Machine Learning", "AI", "Data Science"],
      category: "Technology"
    },
    {
      title: "Building a Personal Brand Online",
      content: "In today's digital age, building a personal brand online is crucial for career success. This blog provides tips on how to create and grow your personal brand.",
      authorname: "Rachel Adams",
      createdAt: "2024-12-11",
      tags: ["Personal Branding", "Social Media", "Career Development"],
      category: "Lifestyle"
    },
    {
      title: "Top Social Media Strategies for 2024",
      content: "Social media marketing is evolving rapidly. This blog highlights the top strategies for businesses to succeed on social media in 2024.",
      authorname: "Thomas Clark",
      createdAt: "2024-12-12",
      tags: ["Social Media", "Marketing", "Digital Strategies"],
      category: "Marketing"
    },
    {
      title: "Creating Engaging Content",
      content: "Content is king, and creating engaging content is the key to attracting and retaining your audience. This blog shares tips for creating compelling content.",
      authorname: "Emily Moore",
      createdAt: "2024-12-13",
      tags: ["Content Creation", "Engagement", "Marketing"],
      category: "Marketing"
    },
    {
      title: "The Evolution of E-commerce",
      content: "E-commerce has drastically evolved over the past few years. This blog explores the trends and technologies shaping the future of online shopping.",
      authorname: "Kevin Scott",
      createdAt: "2024-12-14",
      tags: ["E-commerce", "Online Shopping", "Business Trends"],
      category: "Business"
    },
    {
      title: "The Rise of Remote Work",
      content: "Remote work is becoming increasingly popular. This blog discusses the rise of remote work and how businesses can adapt to this new way of working.",
      authorname: "Laura King",
      createdAt: "2024-12-15",
      tags: ["Remote Work", "Work from Home", "Career Development"],
      category: "Lifestyle"
    },
    {
      title: "Best Tools for Web Developers",
      content: "Web developers rely on a variety of tools to build websites. This blog highlights some of the best tools for web development in 2024.",
      authorname: "Daniel Wright",
      createdAt: "2024-12-16",
      tags: ["Web Development", "Tools", "Tech Resources"],
      category: "Technology"
    },
    {
      title: "Exploring Blockchain Technology",
      content: "Blockchain technology is revolutionizing industries like finance and supply chain management. This blog explores how blockchain works and its potential applications.",
      authorname: "Olivia Harris",
      createdAt: "2024-12-17",
      tags: ["Blockchain", "Cryptocurrency", "Technology"],
      category: "Technology"
    },
    {
      title: "Sustainable Tech in 2024",
      content: "As the world focuses on sustainability, tech companies are adopting greener practices. This blog discusses sustainable technologies and innovations.",
      authorname: "Samuel Turner",
      createdAt: "2024-12-18",
      tags: ["Sustainability", "Tech Innovation", "Green Technologies"],
      category: "Environment"
    },
    {
      title: "Digital Transformation in Healthcare",
      content: "The healthcare industry is undergoing digital transformation. This blog explains how technology is improving patient care and operational efficiency in healthcare.",
      authorname: "Catherine Walker",
      createdAt: "2024-12-19",
      tags: ["Healthcare", "Digital Transformation", "Tech in Medicine"],
      category: "Health"
    },
    {
      title: "How to Build a Successful Startup",
      content: "Starting a business is no easy task. This blog provides key insights and strategies for building a successful startup from the ground up.",
      authorname: "Ethan White",
      createdAt: "2024-12-20",
      tags: ["Startups", "Entrepreneurship", "Business Tips"],
      category: "Business"
    }
  ];

}

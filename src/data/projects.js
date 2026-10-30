// Your featured projects. Edit text, links and lists here.
// Keep every feature true to what the project really does.

import dailydropImage from '../assets/projects/dailydrop.png'
import spendlensImage from '../assets/projects/spendlens.png'
import ecommerceImage from '../assets/projects/ecommerce.png'
import quizImage from '../assets/projects/quiz.png'

export const projects = [
  {
    id: 'dailydrop',
    name: 'DailyDrop',
    type: 'Full-stack application',
    description:
      'A delivery management app for tracking daily milk and water deliveries, managing customers and calculating monthly bills automatically.',
    features: [
      'Spring Boot REST APIs for customers, deliveries, billing and sales analytics',
      'JWT authentication with role-based access for vendors and customers',
      'Ownership checks so customers see only their own bills',
      'PostgreSQL data model built with Spring Data JPA',
      'React dashboards with Chart.js for sales trends and customer-wise revenue',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Spring Data JPA',
      'PostgreSQL',
      'React.js',
      'Chart.js',
    ],
    image: dailydropImage,
    liveUrl: 'https://milk-delivery-tracker-three.vercel.app/',
    githubUrl: 'https://github.com/Dhanraj166/milk-delivery-tracker',
  },
  {
    id: 'spendlens',
    name: 'SpendLens',
    type: 'Full-stack application',
    description:
      'A personal expense tracker to record daily expenses and see where the money goes. A React frontend talks to a Spring Boot REST API backed by PostgreSQL.',
    features: [
      'Add and delete expenses with a date, category and amount',
      'Filter by month, with the filtering done in the database',
      'Summary of amount spent, amount remaining and top category',
      'Category-wise spending breakdown shown in a pie chart',
      'Budget alert, summary cards and charts update for the selected month',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'PostgreSQL',
      'React.js',
      'Vite',
      'Axios',
      'Chart.js',
    ],
    image: spendlensImage,
    liveUrl: 'https://spendlens-orpin.vercel.app/',
    githubUrl: 'https://github.com/Dhanraj166/spend_lens',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Application',
    type: 'Frontend application',
    description:
      'A shopping application built with React where visitors browse products, search, add items to a cart and check out with the total price calculated automatically.',
    features: [
      'Product listing page',
      'Search for products',
      'Shopping cart with add to cart',
      'Checkout',
      'Automatic price calculation',
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Context API',
      'React Router', 'API'],
    image: ecommerceImage,
    liveUrl: 'https://e-commerce-application-beige-pi.vercel.app/',
    githubUrl: 'https://github.com/Dhanraj166/E-Commerce-Application',
  },
  {
    id: 'quiz',
    name: 'Quiz Application',
    type: 'Frontend application',
    description:
      'A React quiz app where users enter their name, answer multiple-choice questions and see a detailed results summary at the end.',
    features: [
      'Multiple quiz categories',
      'Real-time score calculation',
      'Progress bar that updates as you answer',
      'Instant feedback on every answer',
      'Detailed results summary with a restart option',
      'Responsive on mobile and desktop',
    ],
    technologies: [
      'React 18',
      'JavaScript (ES6+)',
      'Vite',
      'CSS',
      'Context API',
      'React Router',
    ],
    image: quizImage,
    liveUrl: 'https://quiz-application-tawny-zeta.vercel.app/',
    githubUrl: 'https://github.com/Dhanraj166/Quiz-Application',
  },
]
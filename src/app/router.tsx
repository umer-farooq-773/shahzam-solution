import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'

// Route-level code splitting: each page is its own chunk.
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'))
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'))
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const TechnologiesPage = lazy(() => import('@/pages/TechnologiesPage'))
const ProcessPage = lazy(() => import('@/pages/ProcessPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogDetailPage = lazy(() => import('@/pages/BlogDetailPage'))
const FAQPage = lazy(() => import('@/pages/FAQPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/services/:slug', element: <ServiceDetailPage /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/portfolio/:slug', element: <ProjectDetailPage /> },
      { path: '/technologies', element: <TechnologiesPage /> },
      { path: '/process', element: <ProcessPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/blog/:slug', element: <BlogDetailPage /> },
      { path: '/faq', element: <FAQPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Layout from './Layout'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import { AnimatePresence } from 'framer-motion'
import Contacts from './Contacts'


const NavRouter = () => {

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path=""
          element={<Layout href='/' name='Home' pageBack={false}><Home /></Layout>}
        />
        <Route
          path="/about"
          element={<Layout name='Sobre' href='#/about' pageBack={true}><About /></Layout>}
        />
        <Route
          path="/skills"
          element={<Layout name='Skills' href='#/skills' pageBack={true}><Skills /></Layout>}
        />
        <Route
          path="/projects"
          element={<Layout name='Portfólio' href='#/projects' pageBack={true}><Projects /></Layout>}
        />
        <Route
          path="/contacts"
          element={<Layout name='Contatos' href='#/contacts' pageBack={true}><Contacts /></Layout>}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default NavRouter
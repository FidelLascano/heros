import React from 'react'
import { AppRouter } from './router/AppRouter'
import {AuthProvider} from "./auth/context/AuthProvider.jsx";

export const HeroesApp = () => {
  return (
      <AuthProvider>
          <AppRouter/>
      </AuthProvider>
)
}

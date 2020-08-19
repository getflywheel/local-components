import '../src/global.sass';
import React from 'react';
import { MemoryRouter } from 'react-router';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: [
    { name: 'Light Mode', class: 'Theme__Light', color: '#51bb7b', default: true },
    { name: 'Dark Mode', class: 'Theme__Dark', color: '#363637' },
  ],
}

/**
 * Some of our stories depend on react-router in which case we need a basic React Router
 * booted up.
 * 
 * @param {*} Story 
 * @param {*} context 
 */
const withMemoryRouter=(Story, context)=>{
  return (
    <MemoryRouter>
      <Story {...context} />
    </MemoryRouter>
  )
}

export const decorators = [withMemoryRouter];
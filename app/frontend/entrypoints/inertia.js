import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "~/pages/layout/Layout.jsx";

createInertiaApp({
  // Set default page title
  // see https://inertia-rails.netlify.app/guide/title-and-meta
  //
  // title: title => title ? `${title} - App` : 'App',

  // Disable progress bar
  //
  // see https://inertia-rails.netlify.app/guide/progress-indicators
  // progress: false,

  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })

    // Find the page component by its name
    const page = pages[`../pages/${name}.jsx`]

    // Check if the page has an existing layout; if not, apply the default layout
    page.default.layout ||= (page) => createElement(Layout, null, page)

    return page
  },

  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(createElement(App, props))
  },
})

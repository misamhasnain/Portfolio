export const siteConfig = {
  // Section visibility: set to false to hide a section completely
  sections: {
    about: true,
    skills: true,
    projects: true,
    education: true,
    experience: false, // no experience in the CV yet, so hidden (nothing is invented)
    contact: true,
  },
  features: {
    darkModeToggle: true,
    // Turn this on after you add your PDF at public/resume.pdf
    resumeDownload: false,
    smoothScroll: true, // Lenis
    scrollProgress: true,
    backToTop: true,
  },
  // Formspree endpoint comes from .env (VITE_FORMSPREE_ENDPOINT)
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',
  // Put your own avatar at public/models/avatar.glb and it is used automatically.
  // While null/missing, the abstract placeholder is shown.
  avatarModelPath: '/models/avatar.glb',
}

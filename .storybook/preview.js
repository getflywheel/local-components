import '../src/global.sass';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: [
    { name: 'Light Mode', class: 'Theme__Light', color: '#51bb7b', default: true },
    { name: 'Dark Mode', class: 'Theme__Dark', color: '#363637' },
  ],
}

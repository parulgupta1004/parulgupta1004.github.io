import { act } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => root.render(<App />));
  expect(div.querySelector('h1').textContent).toBe('Parul Gupta');
  act(() => root.unmount());
});

it('hydrates the pre-rendered page and makes navigation interactive', () => {
  const div = document.createElement('div');
  div.innerHTML = renderToString(<App />);
  document.body.appendChild(div);
  const heading = div.querySelector('h1');
  const errors = [];
  let root;
  try {
    act(() => {
      root = hydrateRoot(div, <App />, {
        onRecoverableError: (error) => errors.push(error),
      });
    });
    expect(div.querySelector('h1')).toBe(heading);
    const toggle = div.querySelector('.menu-toggle');
    act(() => toggle.click());
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(errors).toEqual([]);
  } finally {
    if (root) act(() => root.unmount());
    div.remove();
  }
});

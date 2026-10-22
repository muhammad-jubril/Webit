import { BrandLogo } from './components/BrandLogo';

/** Minimal shell only: the full website structure is intentionally out of scope. */
export default function App() {
  return (
    <main className="app-shell" aria-label="WebIt application shell">
      <BrandLogo className="app-shell__logo" />
    </main>
  );
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />
    <main class="main-content">
      <router-outlet />
    </main>
    <footer class="site-footer">
      <p>Alfons Eriksson Sveiven - Programmering i Typescript</p>
    </footer>
  `,
  styles: [`
    .main-content { min-height: calc(100vh - 64px - 60px); }
    .site-footer {
      text-align: center;
      padding: 1rem;
      background: var(--color-surface);
      color: var(--color-text-muted);
      font-size: 0.85rem;
      border-top: 1px solid var(--color-border);
    }
  `]
})

export class App {
  protected readonly title = signal('labb3');
}

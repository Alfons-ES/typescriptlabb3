import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Converter } from './pages/converter/converter';
import { About } from './pages/about/about';
import { Gallery } from './pages/gallery/gallery';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'converter', component: Converter },
    { path: 'gallery', component: Gallery },
    { path: 'about', component: About },
    { path: '**', redirectTo: '' }
];
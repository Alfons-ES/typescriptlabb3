import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UnitCard } from '../../components/unit-card/unit-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UnitCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  features = [
    { icon: '📏', title: 'Längd', description: 'Konvertera mellan meter och fot.' },
    { icon: '🌡️', title: 'Temperatur', description: 'Växla mellan Celsius och Fahrenheit.' },
  ];
}
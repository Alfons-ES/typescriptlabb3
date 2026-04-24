import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.scss'
})
export class Converter {
  meters: number | null = null;
  feet: number | null = null;
  celsius: number | null = null;
  fahrenheit: number | null = null;

  onMetersChange() {
    this.feet = this.meters !== null
      ? Math.round(this.meters * 3.28084 * 1000) / 1000
      : null;
  }

  onFeetChange() {
    this.meters = this.feet !== null
      ? Math.round(this.feet / 3.28084 * 1000) / 1000
      : null;
  }

  onCelsiusChange() {
    this.fahrenheit = this.celsius !== null
      ? Math.round((this.celsius * 9 / 5 + 32) * 100) / 100
      : null;
  }

  onFahrenheitChange() {
    this.celsius = this.fahrenheit !== null
      ? Math.round(((this.fahrenheit - 32) * 5 / 9) * 100) / 100
      : null;
  }

}
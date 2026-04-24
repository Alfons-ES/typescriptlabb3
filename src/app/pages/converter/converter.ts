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
    if (this.meters !== null) {
      let result = this.meters * 3.28084;
      this.feet = Math.round(result * 1000) / 1000;
    } else {
      this.feet = null;
    }
  }

  onFeetChange() {
    if (this.feet !== null) {
      let result = this.feet / 3.28084;
      this.meters = Math.round(result * 1000) / 1000;
    } else {
      this.meters = null;
    }
  }

  onCelsiusChange() {
    if (this.celsius !== null) {
      let result = (this.celsius * 9 / 5) + 32;
      this.fahrenheit = Math.round(result * 100) / 100;
    } else {
      this.fahrenheit = null;
    }
  }

  onFahrenheitChange() {
    if (this.fahrenheit !== null) {
      let result = (this.fahrenheit - 32) * 5 / 9;
      this.celsius = Math.round(result * 100) / 100;
    } else {
      this.celsius = null;
    }
  }

}
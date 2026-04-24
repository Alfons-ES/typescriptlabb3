import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unit-card',
  standalone: true,
  templateUrl: './unit-card.html',
  styleUrl: './unit-card.scss'
})
export class UnitCard {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
}
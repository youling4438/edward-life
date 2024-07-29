import { Component } from '@angular/core';
import Data from './data';
@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css'
})
export class TimeLineComponent {
  timeLineData = Data;
}

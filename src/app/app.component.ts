import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeLineComponent } from './time-line/time-line.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimeLineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Edward's Life";
}

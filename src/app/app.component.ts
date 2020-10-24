import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-setup';
  showSecret= false;
  logs=[];

  onToggle(){
    this.showSecret=!this.showSecret;
    this.logs.push(new Date());

  }
}

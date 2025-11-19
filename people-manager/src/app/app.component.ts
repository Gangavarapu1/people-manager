import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container"><h1>People Manager</h1><router-outlet></router-outlet></div>`,
  styles: [`.container{max-width:900px;margin:20px auto;padding:10px;font-family: Arial, sans-serif}`]
})
export class AppComponent {}

import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-to-do',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
	public config: PerfectScrollbarConfigInterface = {};
  constructor() {}
}

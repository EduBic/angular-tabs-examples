import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dyn-tab',
  templateUrl: './dyn-tab.component.html',
  styleUrls: ['./dyn-tab.component.css']
})
export class DynTabComponent implements OnInit {

  @Input() tabTitle: string;
  @Input() active = false;

  @Input() templateInjected;

  constructor() { }

  ngOnInit() {
  }

}

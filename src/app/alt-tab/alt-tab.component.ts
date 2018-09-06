import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alt-tab',
  templateUrl: './alt-tab.component.html',
  styleUrls: ['./alt-tab.component.css']
})
export class AltTabComponent implements OnInit {
  @Input() tabTitle: string;

  active = false;

  constructor() { }

  ngOnInit() {
  }

}

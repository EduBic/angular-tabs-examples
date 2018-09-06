import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AltTabComponent } from '../alt-tab/alt-tab.component';

@Component({
  selector: 'app-alt-tabs',
  templateUrl: './alt-tabs.component.html',
  styleUrls: ['./alt-tabs.component.css']
})
export class AltTabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(AltTabComponent) tabs: QueryList<AltTabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // After projection in alt-tabs (this component)
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: AltTabComponent) {
    this.tabs.forEach(t => {
      t.active = false;
    });

    tab.active = true;
  }

}

import { Component, ViewChild } from '@angular/core';
import { AltTabsComponent } from './alt-tabs/alt-tabs.component';
import { TabsComponent } from './tabs/tabs.component';
import { DynTabsComponent } from './dyn-tabs/dyn-tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // TODO: try to not use string in ()
  @ViewChild('tabsComp') tabsComp: DynTabsComponent;
  @ViewChild('emptyTab') emptyTabTemplate;

  addTab() {
    this.tabsComp.openTab('new', this.emptyTabTemplate);
  }


}

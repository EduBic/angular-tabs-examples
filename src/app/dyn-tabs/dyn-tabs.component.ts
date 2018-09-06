import {
  Component,
  OnInit,
  QueryList,
  ContentChildren,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  Output,
  EventEmitter
} from '@angular/core';

import { DynTabComponent } from '../dyn-tab/dyn-tab.component';
import { DynTabsDirective } from '../dyn-tabs.directive';

@Component({
  selector: 'app-dyn-tabs',
  templateUrl: './dyn-tabs.component.html',
  styleUrls: ['./dyn-tabs.component.css']
})
export class DynTabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(DynTabComponent)
  private tabs: QueryList<DynTabComponent>;

  dynamicTabs: DynTabComponent[] = [];

  // Using a template variable as anchor => get the viewcontainer
  @ViewChild('container', { read: ViewContainerRef }) dynamicTabPlaceholder: ViewContainerRef;

  // Using a directive as anchor
  @ViewChild(DynTabsDirective) dynamicTabPlaceholderDir;


  @Output()
  addClicked: EventEmitter<any> = new EventEmitter();

  constructor(private compFactoryResolver: ComponentFactoryResolver) { }

  openTab(title, template) {
    const newTab: DynTabComponent = this.createTab();

    // set input (porperties) of the component
    newTab.tabTitle = 'Dynamic Tab ' + (this.dynamicTabs.length + 1);
    newTab.templateInjected = template;

    this.dynamicTabs.push(newTab);

    this.selectTab(newTab);
  }

  private createTab(): DynTabComponent {
    // get component factory
    const factory = this.compFactoryResolver.resolveComponentFactory(DynTabComponent);

    // create the component and get ref
    const newComponentRef = this.dynamicTabPlaceholder.createComponent(factory);

    return newComponentRef.instance;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // After projection in alt-tabs (this component)
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: DynTabComponent) {
    this.dynamicTabs.forEach(t => {
      t.active = false;
    });

    if (tab) {
      tab.active = true;
    }
  }

}

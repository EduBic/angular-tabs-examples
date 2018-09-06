import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynTabs]'
})
export class DynTabsDirective {

  constructor(public viewContainer: ViewContainerRef) { }

}

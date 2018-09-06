import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { AltTabsComponent } from './alt-tabs/alt-tabs.component';
import { AltTabComponent } from './alt-tab/alt-tab.component';
import { DynTabsComponent } from './dyn-tabs/dyn-tabs.component';
import { DynTabsDirective } from './dyn-tabs.directive';
import { DynTabComponent } from './dyn-tab/dyn-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    AltTabsComponent,
    AltTabComponent,
    DynTabsComponent,
    DynTabsDirective,
    DynTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynTabComponent]
})
export class AppModule { }

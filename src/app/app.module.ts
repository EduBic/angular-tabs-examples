import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { AltTabsComponent } from './alt-tabs/alt-tabs.component';
import { AltTabComponent } from './alt-tab/alt-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    AltTabsComponent,
    AltTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

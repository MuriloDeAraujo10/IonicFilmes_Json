import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesalvoPage } from './filme';

@NgModule({
  declarations: [
    FilmesalvoPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesalvoPage),
  ],
})
export class FilmesalvoPageModule {}

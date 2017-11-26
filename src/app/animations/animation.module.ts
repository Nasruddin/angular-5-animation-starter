import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AnimationComponent } from './animation.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [AnimationComponent],
    declarations: [AnimationComponent],
    providers: [],
})
export class AnimationModule { }

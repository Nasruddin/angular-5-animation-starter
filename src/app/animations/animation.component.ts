import { Component, OnInit } from '@angular/core';

import { ROTATE_TEXT_ANIMATION } from './ROTATE_TEXT_ANIMATION';


@Component({
    selector: 'app-animation',
    templateUrl: 'animation.component.html',
    styleUrls: ['animation.component.scss'],
    animations: [ROTATE_TEXT_ANIMATION]
})

export class AnimationComponent implements OnInit {

    state: String = 'zero';

    constructor() { }

    ngOnInit() { }

    rotateMe() {
        this.state = (this.state === 'zero' ? 'rotated' : 'zero');
    }
}

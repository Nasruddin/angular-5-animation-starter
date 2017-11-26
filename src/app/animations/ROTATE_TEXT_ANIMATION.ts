import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const ROTATE_TEXT_ANIMATION =
    trigger('rotateText', [
        state('zero', style({
            transform: 'rotate(0deg)',
        })),
        state('rotated', style({
            transform: 'rotate(-180deg)',
        })),
        transition('zero <=> rotated',
            animate('500ms ease-in-out')),
    ]);

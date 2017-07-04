import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
    return slideToLeft();
}

function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({ visibility: 'hidden' })),
        state('*', style({ visibility: 'visible' })),
        transition(':enter', [
            animate('1s ease-in',  style({ visibility: 'visible' }))
        ]),
        transition(':leave', [
            animate('.3s',  style({ visibility: 'hidden' }),)
        ])
    ]);
}
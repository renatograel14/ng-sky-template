import { NgModule } from '@angular/core';

import { LoginRoutingModule, routedComponents } from './login.routing';

@NgModule({
    imports: [LoginRoutingModule],
    exports: [],
    declarations: [...routedComponents],
    providers: [],
})
export class LoginModule { }

import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoaderComponent, LoaderService } from './components/loader'

@NgModule({
    imports: [],
    exports: [LoaderComponent],
    declarations: [LoaderComponent],
    providers: [],
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: ThemeModule,
            providers: [
                LoaderService
            ]
        }
    }

}

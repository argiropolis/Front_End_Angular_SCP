import { NgModule} from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';


@NgModule ({
    imports: [
        PublicRoutingModule,
        SharedModule
    ],
    declarations: [],
    exports: [],
    providers: [],
})
export class PublicModule {
    constructor () {}
}
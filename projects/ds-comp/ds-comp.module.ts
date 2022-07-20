import { ModuleWithProviders, NgModule } from '@angular/core';
import { AlertModule } from './alert';
import { ButtonModule } from './button';
export * from './alert';


@NgModule({
  imports: [],
  exports: [AlertModule,ButtonModule],
  declarations: [],
})
export class DsCompModule {
  static forRoot(): ModuleWithProviders<DsCompModule> {
    return {
      ngModule: DsCompModule,
    };
  }
}

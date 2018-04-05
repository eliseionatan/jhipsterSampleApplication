import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterSampleApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterSampleApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterSampleApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleApplicationLocationMySuffixModule,
        JhipsterSampleApplicationDepartmentMySuffixModule,
        JhipsterSampleApplicationEmployeeMySuffixModule,
        JhipsterSampleApplicationJobMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}

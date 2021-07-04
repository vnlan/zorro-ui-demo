import { NgModule } from '@angular/core';
import {ManageCategoryComponent} from "./manage-category.component";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  imports: [
    NzGridModule,
    NzDividerModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    CommonModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzSpaceModule,
    NzPaginationModule,
    NzBadgeModule,
    NzAvatarModule,
    NzModalModule
  ],
  declarations: [ManageCategoryComponent],
  exports: [ManageCategoryComponent],

})
export class ManageCategoryModule { }

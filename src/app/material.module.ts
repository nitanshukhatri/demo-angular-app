import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ]
})
export class MaterialModule { }

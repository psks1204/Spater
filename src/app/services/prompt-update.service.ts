import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class PromptUpdateService {

  constructor(updates: SwUpdate, private snackbar: MatSnackBar) {
    updates.available.subscribe(event => {
      const snack = this.snackbar.open('Update Available', 'Reload');

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });

     // snack.dismissWithAction();

      //snack.setTimeout(() => {
     //   snack.dismiss();
     // }, 6000);


    });
  }
}
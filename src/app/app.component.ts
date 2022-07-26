import { Component } from '@angular/core';
// import { Firestore, collection, collectionData } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { Item } from '@data/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // items$: Observable<Item[]>;
  // constructor(firestore: Firestore) {
  //   const colec = collection(firestore, 'items');
  //   this.items$ = collectionData<any>(colec);
  // }

  // addItem(item: Item) {
  //   this.items$.add(item);
  // }
}

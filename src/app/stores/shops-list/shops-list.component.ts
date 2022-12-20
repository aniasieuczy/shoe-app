import { Component, OnInit } from '@angular/core';
import { Store } from '../new-store/store.model';
import { StoreService } from '../new-store/store.service';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss']
})
export class ShopsListComponent implements OnInit {

  stores: Store[] = [] ;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getStores();
    this.storeService.storesChanged
    .subscribe(
      (stores: Store[]) =>
      this.stores = stores
    )
  }

}

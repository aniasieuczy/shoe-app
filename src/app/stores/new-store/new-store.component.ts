import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "./store.model";
import {StoreService} from "./store.service";

@Component({
  selector: 'app-new-store',
  templateUrl: 'new-store.component.html',
  styleUrls: ['./new-store.component.scss']
})
export class NewStoreComponent implements OnInit {
  stores: Store [];
  newStoreForm: FormGroup;
  Data: Array<any> = [
    {name: 'Kazar', value: 'Kazar'},
    {name: 'Gino Rossi', value: 'Gino Rossi'},
    {name: 'Ecco', value: 'Ecco'},
    {name: 'Geox', value: 'Geox'},
    {name: 'Nike', value: 'Nike'},
    {name: 'Wojas', value: 'Wojas'},
    {name: 'Ryłko', value: 'Ryłko'},
    {name: '4F', value: '4F'},
    {name: 'Adidas', value: 'Adidas'}
  ];

  constructor(private storeService: StoreService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.newStoreForm = new FormGroup({
    //   'location': new FormControl(null, Validators.required),
    //   'address': new FormControl(null, Validators.required),
    //   'all': new FormControl(null),
    //   'brands': new FormArray([
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl(''),
    //     new FormControl('')
    //   ])
    // })
    // this.brands.setValue(['Kazar', 'Gino Rossi', 'Ecco', 'Geox', 'Nike', 'Wojas','Ryłko', '4F', 'Adidas']);

    this.newStoreForm = this.fb.group({
      location: [null],
      address: [null],
      all:[null],
      brands: this.addBrandControls()
      })

    this.storeService.storesChanged.subscribe(
      (stores: Store[]) => {
        this.stores = stores;
      }
    )
    console.log(this.storeService.getStores());
  }

  get brands() {
    return this.newStoreForm.get('brands') as FormArray;
  }

  addBrandControls () {
    const arr = this.Data.map(element => {
      return this.fb.control(false)
    })
  return this.fb.array(arr);
  }

  onSubmit() {
    const newStore = new Store(this.newStoreForm.value['location'], this.newStoreForm.value['address'], this.newStoreForm.value['brands']);
    console.log('new Store ' + newStore.location);
    console.log(newStore.brands);
    console.log(this.newStoreForm.get('brands')?.value);

    this.storeService.addStore(newStore);
    this.newStoreForm.reset();
  }

  checkUncheckAll(event: any) {
    // this.Data.forEach((check) => check.checked = event.target.checked);
    // const s = this.Data.map(el => el.name);
    // const brands: FormArray = this.newStoreForm.get('brands') as FormArray;
    // brands.push(new FormControl(s));
  }

  onCheckboxChange(event: any, i: number) {
    const brands: FormArray = this.newStoreForm.get('brands') as FormArray;
    console.log(brands.at(i));
    if (event.target.checked) {
      console.log('checked', i)
      brands.push(new FormControl(event.target.value));
    } else if (event.target == null) {
      console.log('unchecked', i)
      // brands.removeAt(i);
        brands.controls.forEach(item => {
          if(item.value == event.target.value) {
            brands.removeAt(i);
            return;
          }
          i++;
        })
    }
    console.log(brands);


    // const newControls = this.brands.controls.forEach(control => {
    //   control.value
    //     .map((value) => value.checked ? value.value : null)
    //     .filter(value => value !== null);
    // })

  }

  onSelectAll() {
    // if (this.brands.controls.some(control => control.value)) {
    // this.brands.controls.forEach(control => control.patchValue(this.brands.value));
    // } else {
    // this.brands.controls.forEach(control => control.patchValue(this.brands.value));
    //   }
    // }
  }









}









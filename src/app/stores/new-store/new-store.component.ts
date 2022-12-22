import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "./store.model";
import {StoreService} from "./store.service";

export interface IBrands {
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-new-store',
  templateUrl: 'new-store.component.html',
  styleUrls: ['./new-store.component.scss']
})
export class NewStoreComponent implements OnInit, AfterViewInit {
  stores: Store [];
  newStoreForm: FormGroup;
  skillsForm: FormGroup;
  Data = [
    {id: 1, name: 'Kazar', value: 'Kazar'},
    {id: 2, name: 'Gino Rossi', value: 'Gino Rossi'},
    {name: 'Ecco', value: 'Ecco'},
    {name: 'Geox', value: 'Geox'},
    {name: 'Nike', value: 'Nike'},
    {name: 'Wojas', value: 'Wojas'},
    {name: 'Ryłko', value: 'Ryłko'},
    {name: '4F', value: '4F'},
    {name: 'Adidas', value: 'Adidas'}
  ];

  constructor(private storeService: StoreService,
              private cd: ChangeDetectorRef,
              private fb: FormBuilder) {

    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.newStoreForm = new FormGroup({
      'location': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'all': new FormControl(null),
      'brands': new FormArray([
        new FormControl('kazar'),

      ])
    });
    this.setPreset();
    this.storeService.storesChanged.subscribe(
      (stores: Store[]) => {
        this.stores = stores;
      }
    )
    console.log(this.storeService.getStores());
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  get brands() {
    return this.newStoreForm.get('brands') as FormArray;
  }

  setPreset() {
    // this.brands.patchValue(["kazar", "Gino Rossi", "ecco", "Geox", "Nike", "Wojas", "Ryłko", "4F", "Adidas"]);
  }

  onSubmit() {
    const newStore = new Store(this.newStoreForm.value['location'], this.newStoreForm.value['address'], this.newStoreForm.value['brands']);
    console.log('new Store ' + newStore.location);
    console.log('new Store ' + this.brands.value);
    console.log(this.newStoreForm.get('brands')?.value);

    this.newStoreForm.value['brands']
    // .map((checked) => checked ? this.Data.values() : null)
    // .filter((value) => value !== null);
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
    if (event.target.checked) {
      brands.push(new FormControl(event.target.value));
    }
    // this.brands.controls.forEach(control => control.value)
    //   .map((checked) => checked.checked ? checked.value : null)
    //   .filter(value => value !== null);

    // if (event.target.checked) {
    //  this.brands.patchValue(event.target.value);
    // }



  }

  onSelectAll() {
    if (this.brands.controls.some(control => control.value)) {
      this.brands.controls.forEach(control => control.patchValue(this.brands.value));
    } else {
      this.brands.controls.forEach(control => control.patchValue(this.brands.value));
    }
  }


}









import {Component, OnInit, ViewChild} from '@angular/core';
import {MatOption, ThemePalette} from '@angular/material/core';
import {Store} from "../stores/new-store/store.model";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StoreService} from "../stores/new-store/store.service";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCheckboxChange } from "@angular/material/checkbox";
import {MatSelect} from "@angular/material/select";


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-material-checkboxes',
  templateUrl: './material-checkboxes.component.html',
  styleUrls: ['./material-checkboxes.component.scss']
})
export class MaterialCheckboxesComponent implements OnInit {
  newStoreForm: FormGroup;
  brands: any;
  selected: any;
  allSelected = false;
  @ViewChild('select') select: MatSelect;

 // checkbox = {
 //    name: 'All',
 //    completed: false,
 //    brands: [
 //      { name: 'Kazar', value: 'Kazar' },
 //      { name: 'Gino Rossi', value: 'Gino Rossi' },
 //      { name: 'Ecco', value: 'Ecco' },
 //      { name: 'Geox', value: 'Geox'},
 //      { name: 'Nike', value: 'Nike' },
 //      { name: 'Wojas', value: 'Wojas' },
 //      { name: 'Ryłko', value: 'Ryłko' },
 //      { name: '4F', value: '4F' },
 //      { name: 'Adidas', value: 'Adidas' },
 //    ],
 //  };

  constructor(private formBuilder: FormBuilder,
              private storeService: StoreService) {}

  ngOnInit() {
    this.newStoreForm = this.formBuilder.group({
      location: null,
      address: null,
      brands: this.formBuilder.array([])
    });

    setTimeout(res => {
      this.brands = [
        { name: 'Kazar', value: 'Kazar' },
        { name: 'Gino Rossi', value: 'Gino Rossi' },
        { name: 'Ecco', value: 'Ecco' },
        { name: 'Geox', value: 'Geox'},
        { name: 'Nike', value: 'Nike' },
        { name: 'Wojas', value: 'Wojas' },
        { name: 'Ryłko', value: 'Ryłko' },
        { name: '4F', value: '4F' },
        { name: 'Adidas', value: 'Adidas' },
      ];
    });
  }

  onChange(selectedOption: MatCheckboxChange) {
    const brands = (<FormArray>(this.newStoreForm.get("brands"))) as FormArray;

    if (selectedOption.checked) {
      brands.push(new FormControl(selectedOption.source.value));
    } else {
      const i = brands.controls.findIndex(
        x => x.value === selectedOption.source.value
      );
      brands.removeAt(i);
    }
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }

  optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  onSubmit() {
    const newStore = new Store(this.newStoreForm.value['location'], this.newStoreForm.value['address'], this.newStoreForm.value['brands']);
    this.storeService.addStore(newStore);
    console.log(this.newStoreForm.value);
    this.newStoreForm.reset();
  }



}

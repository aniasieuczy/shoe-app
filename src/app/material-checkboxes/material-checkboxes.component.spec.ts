import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCheckboxesComponent } from './material-checkboxes.component';

describe('MaterialCheckboxesComponent', () => {
  let component: MaterialCheckboxesComponent;
  let fixture: ComponentFixture<MaterialCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCheckboxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

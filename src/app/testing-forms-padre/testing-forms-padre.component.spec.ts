import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingFormsPadreComponent } from './testing-forms-padre.component';

describe('TestingFormsPadreComponent', () => {
  let component: TestingFormsPadreComponent;
  let fixture: ComponentFixture<TestingFormsPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingFormsPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingFormsPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

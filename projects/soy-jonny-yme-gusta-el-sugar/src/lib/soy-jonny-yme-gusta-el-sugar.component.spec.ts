import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyJonnyYMeGustaElSugarComponent } from './soy-jonny-yme-gusta-el-sugar.component';

describe('SoyJonnyYMeGustaElSugarComponent', () => {
  let component: SoyJonnyYMeGustaElSugarComponent;
  let fixture: ComponentFixture<SoyJonnyYMeGustaElSugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoyJonnyYMeGustaElSugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyJonnyYMeGustaElSugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

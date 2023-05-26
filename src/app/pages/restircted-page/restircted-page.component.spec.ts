import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestirctedPageComponent } from './restircted-page.component';

describe('RestirctedPageComponent', () => {
  let component: RestirctedPageComponent;
  let fixture: ComponentFixture<RestirctedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestirctedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestirctedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

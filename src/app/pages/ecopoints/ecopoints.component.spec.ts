import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopointsComponent } from './ecopoints.component';

describe('EcopointsComponent', () => {
  let component: EcopointsComponent;
  let fixture: ComponentFixture<EcopointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcopointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcopointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

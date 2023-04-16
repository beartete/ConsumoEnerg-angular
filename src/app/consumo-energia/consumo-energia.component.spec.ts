import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoEnergiaComponent } from './consumo-energia.component';

describe('ConsumoEnergiaComponent', () => {
  let component: ConsumoEnergiaComponent;
  let fixture: ComponentFixture<ConsumoEnergiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoEnergiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoEnergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiConverterComponent } from './ascii-converter.component';

describe('AsciiConverterComponent', () => {
  let component: AsciiConverterComponent;
  let fixture: ComponentFixture<AsciiConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsciiConverterComponent]
    });
    fixture = TestBed.createComponent(AsciiConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

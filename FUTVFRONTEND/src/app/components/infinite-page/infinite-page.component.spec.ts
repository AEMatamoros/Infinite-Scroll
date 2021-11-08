import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitePageComponent } from './infinite-page.component';

describe('InfinitePageComponent', () => {
  let component: InfinitePageComponent;
  let fixture: ComponentFixture<InfinitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinitePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

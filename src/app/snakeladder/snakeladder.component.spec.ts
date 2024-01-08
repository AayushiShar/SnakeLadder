import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeladderComponent } from './snakeladder.component';

describe('SnakeladderComponent', () => {
  let component: SnakeladderComponent;
  let fixture: ComponentFixture<SnakeladderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnakeladderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnakeladderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedReposComponent } from './liked-repos.component';

describe('LikedReposComponent', () => {
  let component: LikedReposComponent;
  let fixture: ComponentFixture<LikedReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildEditorComponent } from './build-editor.component';

describe('BuildEditorComponent', () => {
  let component: BuildEditorComponent;
  let fixture: ComponentFixture<BuildEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

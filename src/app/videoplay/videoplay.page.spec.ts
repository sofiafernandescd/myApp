import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { VideoplayPage } from './videoplay.page';

describe('VideoplayPage', () => {
  let component: VideoplayPage;
  let fixture: ComponentFixture<VideoplayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

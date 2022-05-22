import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-grid',
  templateUrl: './music-grid.component.html',
  styleUrls: ['./music-grid.component.css'],
})
export class MusicGridComponent implements OnInit {
  @Input() songName = '';
  @Input() artist = '';
  @Input() albumArt = '';

  constructor() {}

  ngOnInit(): void {}
}

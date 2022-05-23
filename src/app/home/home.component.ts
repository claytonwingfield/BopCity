import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'BopCity';

  musicInfo = [
    {
      songName: 'WAIT FOR YOU',
      artist: 'Future feat. Drake & Tems',
      albumArt: 'assets/future.jpg',
    },
    {
      songName: 'The Heart Part 5',
      artist: 'Kendrick Lamar',
      albumArt: 'assets/the-heart.jpg',
    },
    {
      songName: 'Churchill Downs',
      artist: 'Jack Harlow',
      albumArt: 'assets/jack-harlow.jpg',
    },
    {
      songName: 'PUFFIN ON ZOOTIES',
      artist: 'Future',
      albumArt: 'assets/future.jpg',
    },
    {
      songName: 'What Happened To Virgil',
      artist: 'Lil Durk',
      albumArt: 'assets/lil-durk.jpg',
    },
    {
      songName: 'Dua Lipa',
      artist: 'Jack Harlow',
      albumArt: 'assets/jack-harlow.jpg',
    },
    {
      songName: 'First Class',
      artist: 'Jack Harlow',
      albumArt: 'assets/jack-harlow.jpg',
    },
    {
      songName: 'In A Minute',
      artist: 'Lil Baby',
      albumArt: 'assets/lil-baby.jpg',
    },
    {
      songName: 'Certified',
      artist: 'Pooh Shiesty feat. Gunna',
      albumArt: 'assets/pooh.jpg',
    },
    {
      songName: 'N95',
      artist: 'Kendrick Lamar',
      albumArt: 'assets/kendrick.jpg',
    },
    {
      songName: 'The Evil That Men Do',
      artist: '$UICIDEBOY$',
      albumArt: 'assets/suicide-boys.jpg',
    },
    {
      songName: 'Internet Money',
      artist: 'Internet Money Records',
      albumArt: 'assets/internet.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

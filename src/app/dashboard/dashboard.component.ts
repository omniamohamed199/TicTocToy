import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  squares: any[]
  winner: string
  IsNext: boolean
  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }
  newGame() {
    this.squares = Array(9).fill(null)
    this.winner = null
    this.IsNext = true
  }
  get player() {
    return this.IsNext ? 'X' : 'O'
  }
  makeMove(idx) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player)
      this.IsNext = !this.IsNext
    }
    this.winner = this.calculateWinner()
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 7],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}

import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  })

  //  It (game) shoud create an instance
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  test('gutter game', () => {
    //const game = new Game();
    rollMany(20, 0);
    /*
    for (let i = 0; i < 20; i++) {
      game.roll(0)
    }
    */
    expect(game.score).toBe(0)
  });
  test('all one', () => {
    //const game = new Game();
    rollMany(20, 1);
    /*
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    */
    expect(game.score).toBe(20);
  });

  test('test on one spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0);

    expect(game.score).toBe(16);
  })

  function rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i ++){
      game.roll(pins);
    }
  }
});

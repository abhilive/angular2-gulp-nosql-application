import { Injectable } from '@angular/core';
export class Crisis {
  constructor(public id: number, public name: string) { }
}
let CRISISES = [
  new Crisis(21, 'Crisis Center 21'),
  new Crisis(22, 'Crisis Center 22'),
  new Crisis(23, 'Crisis Center 23'),
  new Crisis(24, 'Crisis Center 24'),
  new Crisis(25, 'Crisis Center 25'),
  new Crisis(26, 'Crisis Center 26')
];
let crisisesPromise = Promise.resolve(CRISISES);
@Injectable()
export class CrisisService {
  getCrisises() { return crisisesPromise; }
  getCrisis(id: number | string) {
    return crisisesPromise
      .then(crisises => crisises.find(crisis => crisis.id === +id));
  }
}


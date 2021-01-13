export class Initialize {
  static readonly type = '[Counter] Initialize';
  
  constructor(public payload: number) {}
}

export class Increment {
  static readonly type = '[Counter] Increment';

  constructor(public payload: number) {}
}

export class Decrement {
  static readonly type = '[Counter] Decrement';

  constructor(public payload: number) {}
}

export class Override {
  static readonly type = '[Counter] Override';

  constructor(public payload: number) {}
}
import params from './params';

const pathpoints = [
// journey for "wanna be ..."
  {
    type: 'line',
    color: params.colors[0],
    start: {
      x: 1,
      y: 1.6
    },
    end: {
      x: 1,
      y: 3
    },
    shiftX: -10
  },
  {
    type: 'line',
    color: params.colors[1],
    start: {
      x: 1,
      y: 3
    },
    end: {
      x: 1,
      y: 6
    },
    shiftX: -10
  },
  {
    type: 'path',
    color: params.colors[1],
    start: {
      x: 1,
      y: 6
    },
    end: {
      x: 2,
      y: 7
    },
    shiftX: -10
  },
  {
    type: 'line',
    color: params.colors[2],
    start: {
      x: 2,
      y: 7
    },
    end: {
      x: 2,
      y: 8.6
    },
    shiftX: -10
  },
  {
    type: 'line',
    color: params.colors[3],
    start: {
      x: 2,
      y: 8.6
    },
    end: {
      x: 2,
      y: 9.27
    },
    shiftX: -10
  },
// journey for years
  {
    type: 'line',
    color: 'white',
    start: {
      x: 1,
      y: 0
    },
    end: {
      x: 1,
      y: 6
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 1,
      y: 6
    },
    end: {
      x: 0,
      y: 7
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 1,
      y: 6
    },
    end: {
      x: 2,
      y: 7
    }
  },
  {
    type: 'line',
    color: 'white',
    start: {
      x: 2,
      y: 7
    },
    end: {
      x: 2,
      y: 9.2
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 2,
      y: 9.2
    },
    end: {
      x: 0,
      y: 9.8
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 2,
      y: 9.2
    },
    end: {
      x: 1,
      y: 9.8
    }
  },
  {
    type: 'line',
    color: 'white',
    start: {
      x: 2,
      y: 9.2
    },
    end: {
      x: 2,
      y: 9.8
    }
  },
  {
    type: 'line',
    color: 'white',
    start: {
      x: 1,
      y: 9.8
    },
    end: {
      x: 1,
      y: 20
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 1,
      y: 20
    },
    end: {
      x: 0,
      y: 21
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 1,
      y: 20
    },
    end: {
      x: 2,
      y: 21
    }
  },
  {
    type: 'line',
    color: 'white',
    start: {
      x: 0,
      y: 21
    },
    end: {
      x: 0,
      y: 21.8
    }
  },
  {
    type: 'line',
    color: 'white',
    start: {
      x: 2,
      y: 21
    },
    end: {
      x: 2,
      y: 21.8
    }
  },
  {
    type: 'line',
    color: 'white',
    start: {
      x: 1,
      y: 22.5
    },
    end: {
      x: 1,
      y: 25
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 0,
      y: 21.8
    },
    end: {
      x: 1,
      y: 22.5
    }
  },
  {
    type: 'path',
    color: 'white',
    start: {
      x: 2,
      y: 21.8
    },
    end: {
      x: 1,
      y: 22.5
    }
  }
];

export default pathpoints;

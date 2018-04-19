/**
 * @flow
 */
function foo(x: ?number): string {
  switch (x) {
    default: {
      if (x) {
        break;
      }

      throw new Error('hmmm');
    }
  }

  return 'yup'
}

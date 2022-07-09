


describe('Example Component', () => {
  test( 'Debe de ser mayor a 10', () => {
    let value = 9

    value = value + 2

    if( value > 10 ) {
      // TODO: todo bien!
    } else {
      throw `${ value } no es mayor a 10`
    }
  })
})
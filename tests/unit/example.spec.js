


describe('Example Component', () => {
  test( 'Debe de ser mayor a 10', () => {
    let value =9

    value = value + 2

    expect( value  ).toBeGreaterThan( 10 )

  })
})
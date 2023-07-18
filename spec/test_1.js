// we can import other functions as per below code 
describe('Get your results for addition', function () {
  it('should be match addition results', function () {
    let add = add_two_num();
    expect(add).toEqual(30);
  });

  it('should be match multiplication results', function () {
    let mul = mul_two_num(9, 9);
    expect(mul).toEqual(81);
  });
});

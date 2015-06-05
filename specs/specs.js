describe('Pizza', function(){
  it('returns the price for a small size pizza', function() {
    var testPizza = new Pizza();
    expect(testPizza.smallSizePrice()).to.equal(10);
  });

  it('returns the price for a medium size pizza', function() {
    var testPizza = new Pizza();
    expect(testPizza.mediumSizePrice()).to.equal(15);
  });

  it('returns the price for a large size pizza', function() {
    var testPizza = new Pizza();
    expect(testPizza.largeSizePrice()).to.equal(20);
  });

  it('returns the toppings for a pizza', function() {
    var testPizza = new Pizza("meat");
    expect(testPizza.toppings).to.eql(["meat"]);
  });

  it('returns the price for a pizza with toppings', function() {
    var testPizza = new Pizza(["meat"]);
    expect(testPizza.addTopping()).to.equal(1);
  });
});

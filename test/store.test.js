var expect = require('chai').expect;

var store = require ('../src/store').store;
var book = require('../src/product').Book;
var dvd = require('../src/product').Dvd;
var videoGame = require('../src/product').VideoGame;

describe('Store', function() {

  it('with toString() should return a string', function() {
    expect(store.toString()).to.be.a('string');
  });

  it('should return all these products', function() {
    expect(store.products).to.have.lengthOf(14);
  });

  it('with belowCost criteria should return right products', function() {
    expect(store.findProducts(20)).to.have.lengthOf(9);
  });

  it('with asket should return right price', function() {
    expect(store.calculateTotalprice([
      store.products[3],
      store.products[5],
      store.products[6],
      store.products[10]])).to.be.equal(99.22);
  });

  it('book duration should return average duration calculated from minDuration and maxDuration', function() {
    expect(store.products[0].getDuration()).to.be.equal(140);
  });

  it('dvd duration should return duration', function() {
    expect(store.products[4].getDuration()).to.be.equal(178);
  });

  it('video game duration should return average duration calculated from minDuration and maxDuration', function() {
    expect(store.products[11].getDuration()).to.be.equal(1000);
  });


});

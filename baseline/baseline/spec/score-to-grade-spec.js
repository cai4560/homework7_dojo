describe('score_to_grade_spec',function(){
var score = [59,69,79,89,99];


/* Common datas*/
it("contains spec with an expectation of D", function() {
  var result = scoreToGrade(30);
  expect(result).toEqual('D');
});
it("contains spec with an expectation of C", function() {
  var result = scoreToGrade(65);
  expect(result).toEqual('C');
});
it("contains spec with an expectation of B", function() {
  var result = scoreToGrade(75);
  expect(result).toEqual('B');
});
it("contains spec with an expectation of A", function() {
  var result = scoreToGrade(85);
  expect(result).toEqual('A');
});
 it("contains spec with an expectation of S", function() {
  var result = scoreToGrade(95);
  expect(result).toEqual('S');
});

/* Top border*/
it("contains spec with an expectation of D", function() {
    var result = scoreToGrade(59);
    expect(result).toEqual('D');
  });
it("contains spec with an expectation of C", function() {
    var result = scoreToGrade(69);
    expect(result).toEqual('C');
  });
it("contains spec with an expectation of B", function() {
    var result = scoreToGrade(79);
    expect(result).toEqual('B');
  });
it("contains spec with an expectation of A", function() {
    var result = scoreToGrade(89);
    expect(result).toEqual('A');
  });
it("contains spec with an expectation of S", function() {
    var result = scoreToGrade(99);
    expect(result).toEqual('S');
  });

  /* Bottom border*/
it("contains spec with an expectation of D", function() {
    var result = scoreToGrade(0);
    expect(result).toEqual('D');
  });
  it("contains spec with an expectation of C", function() {
    var result = scoreToGrade(60);
    expect(result).toEqual('C');
  });
it("contains spec with an expectation of B", function() {
    var result = scoreToGrade(70);
    expect(result).toEqual('B');
  });
  it("contains spec with an expectation of A", function() {
    var result = scoreToGrade(80);
    expect(result).toEqual('A');
  });
  it("contains spec with an expectation of S", function() {
    var result = scoreToGrade(90);
    expect(result).toEqual('S');
  });
  
    /* Bottom border*/
  it("contains spec with an expectation of out of range", function() {
    var result = scoreToGrade(100);
    expect(result).toEqual("Out of input range");
  });

  it("contains spec with an expectation of error input type", function() {
    var result = scoreToGrade(null);
    expect(result).toEqual("Error input type");
  });

  it("contains spec with an expectation of error input type", function() {
    var result = scoreToGrade('A');
    expect(result).toEqual("Error input type");
  });
});

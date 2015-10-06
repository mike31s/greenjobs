/*globals greenjobs, listIndustries  */

var testdata = greenjobs.slice(0, 9);

describe("listIndustries", function () {

  it("Should return Construction Agriculture, Forestry, Fishing and Hunting ", function () {
    expect(listIndustries(testdata)).toEqual(["Construction", "Agriculture, Forestry, Fishing and Hunting "]);

  });
  var noIndustryField = testdata.concat({foo: "bar"});

  it("Should throw an error when a record doesn't have an industry field", function () {
    expect(function () {
      listIndustries(noIndustryField);
    }).toThrowError("No industry field.");
  });

  var emptyIndustry = testdata.concat({"Industry": ""});

  it("Should throw an error when a record doesn't has an empty string for the industry", function () {
    expect(function () {
      listIndustries(emptyIndustry);
    }).toThrowError("Industry field is empty.");
  });
});

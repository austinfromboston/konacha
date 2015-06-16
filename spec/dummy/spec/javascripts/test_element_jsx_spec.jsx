//= require react

describe("TestElement (jsx)", function(){
  beforeEach(function() {
    window.TestElement = React.createClass({
      render: function() {
        return 'test';
      }
    });
  })
  it("compiles JSX as needed", function(){
    var x = <TestElement location="here"/>;
    x.props.location.should.equal("here")
  });

});

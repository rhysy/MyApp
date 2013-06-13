(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['matchUp']=template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<script type=\"text/x-handlebars\" data-template-name=\"matchUp\">\n    <li class=\"matchUpItem\">\n        <span>";
  stack1 = depth0.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.matchUp;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.visitingTeam;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n        <span>AT</span>\n        <span>";
  stack1 = depth0.view;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.matchUp;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.homeTeam;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
  buffer += escapeExpression(stack1) + "</span>\n    </li>\n\n</script>";
  return buffer;});
})();

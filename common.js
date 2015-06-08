FlowRouter.route("/", {
  action: function() {
    FlowLayout.render("template1");
  }
});


FlowRouter.route("/template2", {
  action: function() {
    FlowLayout.render("template2");
  }
});


FlowRouter.route("/template3", {
  action: function() {
    FlowLayout.render("template3");
  }
});

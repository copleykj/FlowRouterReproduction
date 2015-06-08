Template.template1.events({
  "click .go2": function(event) {
    event.preventDefault();
    FlowRouter.go("/template2");
  }
});

Template.template2.events({
  "click .go3": function(event) {
    event.preventDefault();
    FlowRouter.go("/template3");
  }
});

Template.template3.events({
    "click .go1": function(event) {
        event.preventDefault();
        FlowRouter.go("/");
    }
});

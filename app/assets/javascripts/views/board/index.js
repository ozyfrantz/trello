TrelloClone.Views.boardIndex = Backbone.CompositeView.extend({
  template: JST['board/index'],

  initialize: function () {
    this.collection.each(this.addItem.bind(this));
    var boardNew = new TrelloClone.Views.boardNew();
    this.addSubview(".board-new", boardNew.render());
    this.listenTo(this.collection, "add", this.addAndRender);
  },

  render: function() {
    var view = this;
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addItem: function(item){
    var indexItem = new TrelloClone.Views.boardIndexItem({model: item});
    this.addSubview(".index", indexItem.render());
  },

  addAndRender: function(item){
    this.addItem(item);
    this.render();
  },

});

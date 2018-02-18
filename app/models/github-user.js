import DS from 'ember-data';

export default DS.Model.extend({
  login:DS.attr(),
  avatar_url:DS.attr(),
  type:DS.attr(),
  name:DS.attr(),
  blog:DS.attr(),
  location:DS.attr(),
  public_repos:DS.attr(),
  created_at:DS.attr()
});

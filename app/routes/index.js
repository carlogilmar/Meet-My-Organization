import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    meetCommunity:function(username){
      if(username){
        this.get('controller').set('username', "");
        this.toast.info('Finding your community: '+username);
        this.transitionTo('community', username);
      }
      else{
        this.toast.warning('Community Empty');
      }
    }
  }
});

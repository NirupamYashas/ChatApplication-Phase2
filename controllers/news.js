module.exports = function(){
    return {
        SetRouting: function(router){
            router.get('/latest-football-news', this.footbalNews);
        },

        footbalNews: function(req, res){
            res.render('news/footballnews', {title: 'ChatApplication - Latest News', user: req.user});
        }
    }
}

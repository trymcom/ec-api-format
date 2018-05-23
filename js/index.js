$(function(){

  var $markup = $('#markup');
  var $source = $('#source');
  var $result = $('#result');
  var regex   = /([\S\s]+)[\|\s](\w{6}\d{4}|\w{2}\d\w{2}\d{5}|\d{9})[\|\s]([¥¥\\]?\d+,\d+(?:\+tax|\+税)?)/;

  $markup.on('input propertychange', function(){
    replace();
  });

  $source.on('input propertychange', function(){
    replace();
  });

  function replace() {
    var markup = $.parseHTML( $markup.val().replace(/^/,' ') );
    var source = $source.val().split(/\n/);
    var html   = new Array();
    var result = '';

    $(source).each(function(i){
      if ( this.match(/\S/) ) {
        html.push(markup);
        var name  = this.replace(regex, '$1');
        var pcode = this.replace(regex, '$2');
        var price = this.replace(regex, '$3');
        var $elem = $(html[i]);

        $elem.attr('data-api', pcode);
        $elem.find('[class$="api-name"]').text(name);
        $elem.find('[class$="api-pcode"]').text(pcode);
        $elem.find('[class$="api-price"]').text(price);

        if ( html[i][1] ) {
          result += html[i][1].outerHTML + '\n';
        }
      }

    });

    $result.val(result);

  }

});
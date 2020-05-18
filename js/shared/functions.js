


//-------------------------------------added Wolodia
/*$(window).on('load', function() {
    
    $('input[type=file]').on("change", function() { 
        var path = this.value;
        if (path) {
            var filename = path.match(/.*\\(.*)/)[1];
            $('#file_name').html(filename);
        }
    });
  
    
    imgLazyLoad();
    
});*/
    /*
     *  var type = $('.menu-toggle-link').eq(0).addClass('active').attr('data-type');
    $("div[data-type='"+type+"']").show();

    var category = $('.menu__main a.active').attr('data-category');
    setSub(category);

    $('.menu-toggle-link').click(function(){
        if ($(this).hasClass('active')) {
            return false;
        }

        var type = $(this).attr('data-type');
        $('.menu-toggle-link').toggleClass('active');
        $('.menu__body').hide();

        var category = $("div[data-type='"+type+"']").show().find('.menu__main a.active').attr('data-category');
        setSub(category);
    });

    $('a.menu__title').click(function(){

        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');

        var category = $(this).attr('data-category');
        if (typeof category !== 'undefined') {
            setSub(category);
        } else {
            var category = $(this).attr('data-subcategory');
            setSubMenu(category);
        }
    });
     * 
     * function showCalendarEvent(event_id) {
    $('.calendar-inside, .calendar-slider-small').show();
    
    $(".calendar-inside__container[data-event="+event_id+"]").show();  
    
    imgLazyLoad();
}

function showCalendarBlock(event_id) {
    $('.calendar-inside__container').hide();
    $(".calendar-inside__container[data-event="+event_id+"]").show(); 
    imgLazyLoad();
}
    $('[data-fancybox]').fancybox({
        fullScreen : true,
        closeBtn   : true,
        image : {
            preload : true
        },
        thumbs : {
            showOnStart : true
        },
          
        afterLoad : function(instance, current) {
            if (current.$slide.attr('class') == 'fancybox-slide fancybox-slide--current fancybox-slide--image') {
                current.$slide.find('img').attr('src', $(current.opts.$orig[0]).attr('data-origin'));
            }
        },
        
        beforeMove : function(instance, current, e) {
            is_no_first = false;
            $('.fancybox-image').each(function(){
                var thumb = $(this).attr('thumb');
                if (typeof thumb == 'undefined' || current.src != thumb) {
                    $(this).css('opacity', '0');
                }
            });
            current.$slide.find('img').attr('thumb', $(current.opts.$orig[0]).attr('href'))
                   .attr('src', $(current.opts.$orig[0]).attr('data-origin')).css('opacity', '1');
           
            
        },
        
        onComplete : function ( instance, current, e ) { 
            
             $('.fancybox-slide').each(function(){
                var thumb = $(this).find('img').attr('thumb');
                if (!$(this).hasClass('fancybox-slide--complete')) {
                    console.log($(this).attr('class'));
                    $(this).find('img').attr('src', thumb).animate({
                        left : 'auto',
                        opacity: '1'
                });
                }
            });
            
            $('.fancybox-slide--complete, .fancybox-slide--current').each(function(){
                var img_width = parseInt($(this).find('img').width());
                var wind_width = parseInt(current.$slide.find('.fancybox-placeholder').width());
                
                $(this).find('img').attr('src', $(current.opts.$orig[0]).attr('data-origin'));
                 
                 //console.log(current.$slide);
                if (wind_width - img_width > 80) {
                    var poleft =  parseInt((wind_width - img_width) / 2);
                    $(this).find('img').animate({
                            left : poleft+ 'px'
                    }, 200);
                }
           });
       
        }
    });
     * 
     * 
     * 
     * 
function setSub(category) {

    $('.menu__sub').hide();

    var elem = '';
    var type = $('.menu-toggle-link.active').attr('data-type');
    if (typeof type !== 'undefined') {
        elem = "div[data-type='"+type+"'] ";
    }
    $(elem + " div[data-category='"+category+"'] .active").removeClass('active');
    $(elem + " div[data-category='"+category+"']").show().find('a').eq(0).addClass('active');

    var sub = $(elem + " div[data-category='"+category+"']  .active").attr('data-subcategory');
    setSubMenu(sub);
}

function setSubMenu(category) {
    $('.menu__full').hide();

    var elem = '';
    var type = $('.menu-toggle-link.active').attr('data-type');
    if (typeof type !== 'undefined') {
        elem = "div[data-type='"+type+"'] ";
    }
    
    $(elem + " div[data-subcategory='"+category+"']").show();
    
} */
 

function readmore12(){
	var dots = document.getElementById("dots");
		var more12 = document.getElementById("more12");
			var btn12 = document.getElementById("btn12");
			if (dots.style.display === "none")
			{
				dots.style.display("inline");
				btn12.innerHTML("Изменить логин");
				more12.style.display("none");
			} else {
				dots.style.display("none");
				btn12.innerHTML("Скрыть");
				more12.style.display("inline");
			}
}
function loadGalleryItem() {
    var start = $('.masonry__item').length; 
    AjaxRequest.send('', '/'+langURL+'action/gallery/load/', '', true, {'start' : start, 'group_id' : 0});
}

function loadGalleryPhoto(group_id) {   
    AjaxRequest.send('', '/'+langURL+'action/gallery/load/', '', true, {'start' : 0, 'group_id' : group_id});
}

function autoScroll(selector) {    
    if ($(window).width() > 1200 && $(selector).length ) {        
        $('html, body').animate({ scrollTop: $(selector).offset().top }, 500);
    }
}
function ajaxCart() {
   // AjaxRequest.send(null, '/'+langURL+'action/shoporder/ajax_cart/', '', true);	
    return false;
}

function reloadPage(href) {
    //console.log(href);
    window.location = href;
}

function changeSortSearch(sort_uniq) {
    var link = window.location.href;
    var re = /\&sortp=(.+)/;
    var page = /page-(.+)\//;

    link = link.replace(page, ""); 
    var sortlink = link.replace(re, ""); 

    if (/\?(.+)/.test(sortlink)) {
        sortlink = sortlink+"&sortp="+sort_uniq;                    
    } else {
        sortlink = sortlink+"?sortp="+sort_uniq;        
    }    
	window.location=sortlink;
}
        
function changeSort(sort_uniq) {
    var link = window.location.href;

    var re = /\?sort=(.+)/;
    var page = /page-(.+)\//;

    link = link.replace(page, ""); 
    var sortlink = link.replace(re, ""); 

    if (/\?(.+)/.test(sortlink)) {
        sortlink = sortlink+"&sort="+sort_uniq;                    
    } else {
        sortlink = sortlink+"?sort="+sort_uniq;        
    }    
	window.location=sortlink;	
}

function changeCount(count, href) {
	setSiteCookie('product_per_page', count);
    if (href.length > 0) {
        window.location=href;
    } else {
        location.reload();
    }    
}

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function setSiteCookie(name, value) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + 5);
	document.cookie= name+"="+escape(value)+"; expires="+exdate.toGMTString()+"; path=/;";	
}

window.onscroll = function() {
    imgLazyLoad();  
};

function imgLazyLoad(a) {
    var b = $("img[data-original]:visible");
    if (a) {
        b = $("img[data-original]:visible", a)
    }
    b.each(function() {
        var d = $(this),
            c = $(window).height(),
            e = $(window).scrollTop(),
            i = $(this).height(),
            g = $(this).offset().top;
        if ((e < (g + i)) && (g < (e + c))) {
            var f = $(new Image()),
                h = d.attr("data-original");
            f.attr("src", h);
            
            f.on('load', function() {
            
                d.css({
                    opacity: 0
                }).attr("src", h).removeAttr("data-original").animate({
                    opacity: 1
                }, 500);
            });
        }
    });
}


function imgLazyLoadAll() {
    var a = $("img[data-original]");
    a.each(function() {
        var b = $(this);
        b.attr("src", b.attr("data-original")).removeAttr("data-original")
    });
}

function loadMoreCatalog(page, link, group_id, shopuniq) {
    preloaderCatalog(true);
    AjaxRequest.send('', '/'+langURL+'action/shop/load_more/', '', true, {'page' : page, 'link' : link, 'group_id' : group_id, 'shopuniq' : shopuniq});
	return false;
}

function preloaderCatalog(show) {
    if (show) {
        $('.catalog_loader_bg, .catalog_loader').show();
    } else {
        $('.catalog_loader_bg, .catalog_loader').hide();
    }
}
function loadMoreCatalogResult(page) {
    var page = parseInt(page);
    var html = $('#modal_form').html();
    $(".catalog .product__item:last").after(html);
    $('#modal_form').html('');
    
    if ($('.pgl_'+page).length > 0) {
        $('#btn-more').attr('data-page', page).removeClass('disable'); 
    } else {
        $('#btn-more').remove();
    }
    var prev = parseInt(page) - 1; 
    $('.pgl_' + prev).addClass('active').removeAttr('href');
    
    setEqualHeight( '.product__box' );
    
    imgLazyLoad();
    
    preloaderCatalog(false);
}

function banner_click(banner_id) {
    AjaxRequest.send('', '/'+langURL+'action/banner/click/', '', true, {'id' :banner_id});
	return false;
}

function loadForm(name)
{
    AjaxRequest.send('', '/'+langURL+'action/form/load_form/', '', true, {'form_name':name});
	return false;
}
function loadNews(type_id)
{
    $('.labels .label.active').removeClass('active');
    $('.label-news-'+type_id).addClass('active');
    AjaxRequest.send('', '/'+langURL+'action/news/load/', '#aj-news', true, {'type_id':type_id});
	return false;
}
function reloadPage(link)
{
    window.location.href=link;
}

function checkRequired(form_name)
{
    var check = true;

    if ( $('#'+form_name).find('.sendButton').hasClass('disabled') ){
        return false;
    }

    $('#'+form_name).find('.required.failed').removeClass('failed');

    $('#'+form_name).find('.required').each(function(){
        if ($(this).val() === '' ){    
            $(this).addClass('failed');                
            $('.error').html(' ');
            check = false;
        }
    });  
    if (form_name == 'quickorder') {
        var price = $('#buy_price').val();
        var id = $('#buy_version_id').val();
        if ( typeof fbq !== 'undefined' && typeof price !== 'undefined') {               
            fbq('track', 'AddToCart', {content_ids: [id], content_type: 'product', value: price, currency: 'UAH' });
        }
    }
    if (check) {
        $('#' + form_name).submit();
    }      
    return check;
}


function formUpdate()
{   
    
    phoneHolder();
    
    $('form').submit(function(){  
        if ( $(this).attr('delta-ajax')=='on'  || $(this).attr('data-deltaajax')==="on" ){ AjaxRequest.send( $(this) ); return false; }
    });
}

function sendEvent(category, label, value) 
{
    var debug = false;

    if (typeof ga === 'undefined') {
        debug = true;
    } else {
        ga('send', 'event', category, label, value);
    }
    
    if (debug) {
        console.log("ga('send', 'event', '"+category+"', '"+label+"', '"+value+"')");
    }
}

/*
$(window).load(function(){
 * $( ".date").datepicker({
            onSelect: function (dateText, inst) {
                if ( $('#'+inst.id).val() != '' ) {
                    $('#'+inst.id).parent().addClass('input--filled');
                }
            }
    });
    $("a[rel=gallery_group]").fancybox({
        afterLoad: function() {
            var titleauthor = this.element.find('img').attr('titleauthor');
            var titledate = this.element.find('img').attr('titledate');

            this.title = '<div>' + this.title + ' <b>'  + titleauthor + "</b></div><b>" + titledate + "</b>" ;                   
            this.inner.prepend( '<img src="/design/img/logo.svg">' );
        },
        helpers : {
            title: {
                type: 'outside'
            }
        } 
    }); 
});
            loadScript("/js/jquery/icheck.js", function(){	 
                $('.icheck').iCheck({
                    checkboxClass: 'icheckbox_futurico',
                    radioClass: 'iradio_futurico',
                    increaseArea: '20%'
                });
            });
        }
    }*/
    
$(function () {
    $('#main-menu').each(function () {
        var _0x9624x2 = $(this).find('.LinkList ul > li').children('a'),
            _0x9624x3 = _0x9624x2.length,
            _0x9624x9, 
            _0x9624xe; 

        for (var _0x9624x4 = 0; _0x9624x4 < _0x9624x3; _0x9624x4++) {
            var _0x9624x5 = _0x9624x2.eq(_0x9624x4),
                _0x9624x6 = _0x9624x5.text();

            if (_0x9624x6.charAt(0) !== '_') {
                var _0x9624x7 = _0x9624x2.eq(_0x9624x4 + 1),
                    _0x9624x8 = _0x9624x7.text();
                if (_0x9624x8.charAt(0) === '_') {
                    _0x9624x9 = _0x9624x5.parent(); // এখন এটি স্কোপের বাইরে থাকবে না
                    _0x9624x9.append('<ul class="sub-menu m-sub"/>');
                }
            }
            if (_0x9624x6.charAt(0) === '_') {
                _0x9624x5.text(_0x9624x6.replace('_', ''));
                _0x9624x5.parent().appendTo(_0x9624x9.children('.sub-menu'));
            }
        }

        for (var _0x9624x10 = 0; _0x9624x10 < _0x9624x3; _0x9624x10++) {
            var _0x9624xa = _0x9624x2.eq(_0x9624x10),
                _0x9624xb = _0x9624xa.text();

            if (_0x9624xb.charAt(0) !== '_') {
                var _0x9624xc = _0x9624x2.eq(_0x9624x10 + 1),
                    _0x9624xd = _0x9624xc.text();
                if (_0x9624xd.charAt(0) === '_') {
                    _0x9624xe = _0x9624xa.parent(); 
                    _0x9624xe.append('<ul class="sub-menu2 m-sub"/>');
                }
            }
            if (_0x9624xb.charAt(0) === '_') {
                _0x9624xa.text(_0x9624xb.replace('_', ''));
                _0x9624xa.parent().appendTo(_0x9624xe.children('.sub-menu2'));
            }
        }
   
        $('#main-menu ul li ul').parent('li').addClass('has-sub');
        $('#main-menu .widget').addClass('show-menu');
    });
    $('#main-menu-nav').clone().appendTo('.mobile-menu');
    $('.mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
    $('.mobile-menu ul > li a').each(function () {
        var _0x9624xf = $(this),
            _0x9624x10 = _0x9624xf.attr('href').trim(),
            _0x9624x11 = _0x9624x10.toLowerCase(),
            _0x9624x12 = _0x9624x10.split('/'),
            _0x9624x13 = _0x9624x12[0];
        if (_0x9624x11.match('mega-menu')) {
            _0x9624xf.attr('href', '/search/label/' + _0x9624x13 + '?&max-results=' + postPerPage);
        }
    });
    $('.slide-menu-toggle').on('click', function () {
        $('body').toggleClass('nav-active');
    });
    $('.mobile-menu ul li .submenu-toggle').on('click', function (_0x9624xf) {
        if ($(this).parent().hasClass('has-sub')) {
            _0x9624xf.preventDefault();
            if (!$(this).parent().hasClass('show')) {
                $(this).parent().addClass('show').children('.m-sub').slideToggle(170);
            } else {
                $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170);
            }
        }
    });
    $('.Label a, a.b-label').attr('href', function (_0x9624xf, _0x9624x14) {
        return _0x9624x14.replace(_0x9624x14, _0x9624x14 + '?&max-results=' + postPerPage);
    });
    
    $('.avatar-image-container img').attr('src', function (_0x9624xf, _0x9624x4) {
        _0x9624x4 = _0x9624x4.replace('/s35-c/', '/s45-c/');
        _0x9624x4 = _0x9624x4.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png');
        return _0x9624x4;
    });
    $('.author-description a').each(function () {
        $(this).attr('target', '_blank');
    });
    $('.post-nav').each(function () {
        var _0x9624x15 = $('a.prev-post-link').attr('href'),
            _0x9624x16 = $('a.next-post-link').attr('href');
        $.ajax({
            url: _0x9624x15,
            type: 'get',
            success: function (_0x9624x17) {
                var _0x9624x18 = $(_0x9624x17).find('.blog-post h1.post-title').text();
                $('.post-prev a .post-nav-inner p').text(_0x9624x18);
            }
        });
        $.ajax({
            url: _0x9624x16,
            type: 'get',
            success: function (_0x9624x19) {
                var _0x9624x18 = $(_0x9624x19).find('.blog-post h1.post-title').text();
                $('.post-next a .post-nav-inner p').text(_0x9624x18);
            }
        });
    });
    $('.post-body strike').each(function () {
        var _0x9624xf = $(this),
            _0x9624x11 = _0x9624xf.text();
        if (_0x9624x11.match('left-sidebar')) {
            _0x9624xf.replaceWith('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>');
        }
        if (_0x9624x11.match('right-sidebar')) {
            _0x9624xf.replaceWith('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>');
        }
        if (_0x9624x11.match('full-width')) {
            _0x9624xf.replaceWith('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>');
        }
    });
    $('.post-body strike').each(function () {
        var _0x9624xf = $(this),
            _0x9624x10 = _0x9624xf.text().trim(),
            _0x9624x1a = _0x9624x10.split('/'),
            _0x9624x1b = _0x9624x1a[0].replace('[getcode]', ''),
            _0x9624x18 = _0x9624x1a[1];
        if (_0x9624x10.match('getcode')) {
            _0x9624xf.replaceWith('<div class="get-code"><span class="code-show">' + _0x9624x18 + '</span><span class="code-code">##########</span></div>');
            $('.get-code').each(function () {
                var _0x9624x1c = $(this),
                    _0x9624x1d = _0x9624x1c.find('.code-show');
                _0x9624x1d.on('click', function () {
                    _0x9624x1c.find('.code-code').text(_0x9624x1b);
                });
            });
        }
    });
    $('.post-body a').each(function () {
        var _0x9624xf = $(this),
            _0x9624x11 = _0x9624xf.text(),
            _0x9624x1e = _0x9624x11.split('/'),
            _0x9624x10 = _0x9624x1e[0];
        if (_0x9624x11.match('download-btn')) {
            _0x9624xf.text(_0x9624x10).addClass('post-btn');
        }
    });
    $('#main-wrapper, #sidebar-wrapper').each(function () {
        if (fixedSidebar == true) {
            $(this).theiaStickySidebar({
                additionalMarginTop: 30,
                additionalMarginBottom: 30
            });
        }
    });
    $('.back-top').each(function () {
    var _0x9624xf = $(this);

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 100) {
            _0x9624xf.fadeIn(250);
        } else {
            _0x9624xf.fadeOut(250);
        }
    });

    _0x9624xf.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});
    
    $('#main-menu #main-menu-nav li').each(function () {
        var _0x9624x1f = $(this),
            _0x9624x10 = _0x9624x1f.find('a').attr('href').trim(),
            _0x9624xf = _0x9624x1f,
            _0x9624x11 = _0x9624x10.toLowerCase(),
            _0x9624x12 = _0x9624x10.split('/'),
            _0x9624x13 = _0x9624x12[0];
        _0x9624x34(_0x9624xf, _0x9624x11, 4, _0x9624x13);
    });
    $('#hot-section .widget-content').each(function () {
        var _0x9624xf = $(this),
            _0x9624x10 = _0x9624xf.text().trim(),
            _0x9624x11 = _0x9624x10.toLowerCase(),
            _0x9624x12 = _0x9624x10.split('/'),
            _0x9624x13 = _0x9624x12[0];
        _0x9624x34(_0x9624xf, _0x9624x11, 4, _0x9624x13);
    });
    $('.common-widget .widget-content').each(function () {
        var _0x9624xf = $(this),
            _0x9624x10 = _0x9624xf.text().trim(),
            _0x9624x11 = _0x9624x10.toLowerCase(),
            _0x9624x12 = _0x9624x10.split('/'),
            _0x9624x20 = _0x9624x12[0],
            _0x9624x13 = _0x9624x12[1];
        _0x9624x34(_0x9624xf, _0x9624x11, _0x9624x20, _0x9624x13);
    });
    $('.related-ready').each(function () {
        var _0x9624xf = $(this),
            _0x9624x13 = _0x9624xf.find('.related-tag').data('label');
        _0x9624x34(_0x9624xf, 'related', 3, _0x9624x13);
    });

function _0x9624x21(_0x9624x22, _0x9624x4) {
    var _0x9624x24 = ''; 
    for (var _0x9624x23 = 0; _0x9624x23 < _0x9624x22[_0x9624x4].link.length; _0x9624x23++) {
        if (_0x9624x22[_0x9624x4].link[_0x9624x23].rel == 'alternate') {
            _0x9624x24 = _0x9624x22[_0x9624x4].link[_0x9624x23].href;
            break;
        }
    }
    return _0x9624x24;
}

function _0x9624x25(_0x9624x22, _0x9624x4, _0x9624x24) {
    var _0x9624x26 = _0x9624x22[_0x9624x4].title.$t;
    var _0x9624x1b = '<a href="' + _0x9624x24 + '">' + _0x9624x26 + '</a>';
    return _0x9624x1b;
}

function _0x9624x27(_0x9624x22, _0x9624x4) {
    var _0x9624x28 = _0x9624x22[_0x9624x4].published.$t,
        _0x9624x29 = _0x9624x28.substring(0, 4),
        _0x9624x2a = _0x9624x28.substring(5, 7),
        _0x9624x2b = _0x9624x28.substring(8, 10),
        _0x9624x2c = monthFormat[parseInt(_0x9624x2a, 10) - 1] + ' ' + _0x9624x2b + ', ' + _0x9624x29;
    var _0x9624x1b = '<span class="post-date">' + _0x9624x2c + '</span>';
    return _0x9624x1b;
}

function _0x9624x2d(_0x9624x22, _0x9624x4) {
    var _0x9624x26 = _0x9624x22[_0x9624x4].title.$t,
        _0x9624x2e = _0x9624x22[_0x9624x4].content.$t,
        _0x9624x2f = $('<div>').html(_0x9624x2e);
    
    var _0x9624x31 = ''; 

    if ('media$thumbnail' in _0x9624x22[_0x9624x4]) {
        var _0x9624x30 = _0x9624x22[_0x9624x4].media$thumbnail.url;
        _0x9624x31 = _0x9624x30.replace('/s72-c', '/w680');

        if (_0x9624x30.match('img.youtube.com')) {
            _0x9624x31 = _0x9624x30.replace('/default.', '/hqdefault.');
        }
    } else {
        if (_0x9624x2e.indexOf('<img') > -1) {
            _0x9624x31 = _0x9624x2f.find('img:first').attr('src');
        } else {
            _0x9624x31 = noThumbnail;
        }
    }

    var _0x9624x1b = '<img class="post-thumb" alt="' + _0x9624x26 + '" src="' + _0x9624x31 + '"/>';
    return _0x9624x1b;
}

function _0x9624x32(_0x9624x22, _0x9624x4) {
    var _0x9624x1b = ''; 

    if (_0x9624x22[_0x9624x4].category != undefined) {
        var _0x9624x33 = _0x9624x22[_0x9624x4].category[0].term;
        _0x9624x1b = '<span class="post-tag">' + _0x9624x33 + '</span>';
    }
    
    return _0x9624x1b;
}
    function _0x9624x34(_0x9624xf, _0x9624x11, _0x9624x20, _0x9624x13) {
        if (_0x9624x11.match('mega-menu') || _0x9624x11.match('hot-posts') || _0x9624x11.match('post-list') || _0x9624x11.match('related')) {
            var _0x9624x35 = '';
            if (_0x9624x13 == 'recent') {
                _0x9624x35 = '/feeds/posts/default?alt=json-in-script&max-results=' + _0x9624x20;
            } else {
                if (_0x9624x13 == 'random') {
                    var _0x9624x36 = Math.floor(Math.random() * _0x9624x20) + 1;
                    _0x9624x35 = '/feeds/posts/default?max-results=' + _0x9624x20 + '&start-index=' + _0x9624x36 + '&alt=json-in-script';
                } else {
                    _0x9624x35 = '/feeds/posts/default/-/' + _0x9624x13 + '?alt=json-in-script&max-results=' + _0x9624x20;
                }
            }
            $.ajax({
                url: _0x9624x35,
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function () {
                    if (_0x9624x11.match('hot-posts')) {
                        _0x9624xf.html('<div class="hot-loader"/>').parent().addClass('show-hot').parent().parent().addClass('show-hot-wrap');
                    }
                },
                
                success: function (_0x9624x37) {
    var _0x9624x38 = ''; 

    if (_0x9624x11.match('mega-menu')) {
        _0x9624x38 = '<ul class="mega-menu-inner">';
    } else if (_0x9624x11.match('hot-posts')) {
        _0x9624x38 = '<ul class="hot-posts">';
    } else if (_0x9624x11.match('post-list')) {
        _0x9624x38 = '<ul class="custom-widget">';
    } else if (_0x9624x11.match('related')) {
        _0x9624x38 = '<ul class="related-posts">';
    }

    var _0x9624x39 = _0x9624x37.feed.entry;
    if (_0x9624x39 != undefined) {
        for (var _0x9624x4 = 0, _0x9624x22 = _0x9624x39; _0x9624x4 < _0x9624x22.length; _0x9624x4++) {
            var _0x9624x24 = _0x9624x21(_0x9624x22, _0x9624x4),
                _0x9624x18 = _0x9624x25(_0x9624x22, _0x9624x4, _0x9624x24),
                _0x9624x3a = _0x9624x2d(_0x9624x22, _0x9624x4),
                _0x9624x33 = _0x9624x32(_0x9624x22, _0x9624x4),
                _0x9624x3b = _0x9624x27(_0x9624x22, _0x9624x4);

            var _0x9624x3c = '';
            if (_0x9624x11.match('mega-menu')) {
                _0x9624x3c += '<div class="mega-item item-' + _0x9624x4 + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + _0x9624x24 + '">' + _0x9624x3a + '</a></div><h2 class="post-title">' + _0x9624x18 + '</h2><div class="post-meta">' + _0x9624x33 + '<i>-</i>' + _0x9624x3b + '</div></div></div>';
            } else if (_0x9624x11.match('hot-posts')) {
                _0x9624x3c += '<li class="hot-item item-' + _0x9624x4 + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0x9624x24 + '">' + _0x9624x3a + '</a><div class="post-info"><h2 class="post-title">' + _0x9624x18 + '</h2><div class="post-meta">' + _0x9624x33 + '<i>-</i>' + _0x9624x3b + '</div></div></div></li>';
            } else if (_0x9624x11.match('post-list')) {
                _0x9624x3c += '<li class="item-' + _0x9624x4 + '"><a class="post-image-link" href="' + _0x9624x24 + '">' + _0x9624x3a + '</a><div class="post-info"><h2 class="post-title">' + _0x9624x18 + '</h2></div></div></li>';
            } else if (_0x9624x11.match('related')) {
                _0x9624x3c += '<li class="related-item item-' + _0x9624x4 + '"><div class="post-image-wrap"><a class="post-image-link" href="' + _0x9624x24 + '">' + _0x9624x3a + '</a></div><h2 class="post-title">' + _0x9624x18 + '</h2><div class="post-meta">' + _0x9624x33 + '<i>-</i>' + _0x9624x3b + '</div></li>';
            }

            _0x9624x38 += _0x9624x3c;
        }
        _0x9624x38 += '</ul>';
    } else {
        _0x9624x38 = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>';
    }

    if (_0x9624x11.match('mega-menu')) {
        _0x9624xf.addClass('has-sub mega-menu').append(_0x9624x38);
        _0x9624xf.find('a:first').attr('href', function (_0x9624xf, _0x9624x14) {
            if (_0x9624x13 == 'recent' || _0x9624x13 == 'random') {
                _0x9624x14 = _0x9624x14.replace(_0x9624x14, '/search/?&max-results=' + postPerPage);
            } else {
                _0x9624x14 = _0x9624x14.replace(_0x9624x14, '/search/label/' + _0x9624x13 + '?&max-results=' + postPerPage);
            }
            return _0x9624x14;
        });
    } else if (_0x9624x11.match('hot-posts')) {
        _0x9624xf.html(_0x9624x38).parent().addClass('show-hot');
    } else {
        _0x9624xf.html(_0x9624x38);
   
                        }
                    }
                });         
        }
    }
    $('.blog-post-comments').each(function () {
        var _0x9624x3d = commentsSystem,
            _0x9624x3f = '<div id="disqus_thread"/>',
            _0x9624x40 = $(location).attr('href'),
            _0x9624x41 = '<div class="fb-comments" data-width="100%" data-href="' + _0x9624x40 + '" data-numposts="5"></div>',
            _0x9624x42 = 'comments-system-' + _0x9624x3d;
        if (_0x9624x3d == 'blogger') {
            $(this).addClass(_0x9624x42).show();
        } else {
            if (_0x9624x3d == 'disqus') {
                (function () {
                    var _0x9624x43 = document.createElement('script');
                    _0x9624x43.type = 'text/javascript';
                    _0x9624x43.async = true;
                    _0x9624x43.src = '//' + disqusShortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_0x9624x43);
                })();
                $('#comments, #gpluscomments').remove();
                $(this).append(_0x9624x3f).addClass(_0x9624x42).show();
            } else {
                if (_0x9624x3d == 'facebook') {
                    $('#comments, #gpluscomments').remove();
                    $(this).append(_0x9624x41).addClass(_0x9624x42).show();
                } else {
                    if (_0x9624x3d == 'hide') {
                        $(this).hide();
                    } else {
                        $(this).addClass('comments-system-default').show();
                    }
                }
            }
        }
    });
});
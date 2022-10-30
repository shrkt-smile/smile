var getFontawesome=document.createElement("link");getFontawesome.rel="stylesheet",getFontawesome.type="text/css",getFontawesome.href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css",document.querySelector("body").appendChild(getFontawesome);var getFont=document.createElement("link");getFont.rel="stylesheet",getFont.type="text/css",getFont.href="https://fonts.googleapis.com/css2?family="+fontGoogle+":wght@400;500;700&display=swap",document.querySelector("body").appendChild(getFont);
document.documentElement.style.setProperty('--body-font', fontGoogle);
document.querySelector("body").classList.add("block");
(function (_0xc836x1) {
    _0xc836x1['fn']['theiaStickySidebar'] = function (_0xc836x2) {
        var _0xc836x3 = {
            'containerSelector': '',
            'additionalMarginTop': 0,
            'additionalMarginBottom': 0,
            'updateSidebarHeight': true,
            'minWidth': 0,
            'disableOnResponsiveLayouts': true,
            'sidebarBehavior': 'modern',
            'defaultPosition': 'relative',
            'namespace': 'TSS'
        };
        _0xc836x2 = _0xc836x1['extend'](_0xc836x3, _0xc836x2);
        _0xc836x2['additionalMarginTop'] = parseInt(_0xc836x2['additionalMarginTop']) || 0;
        _0xc836x2['additionalMarginBottom'] = parseInt(_0xc836x2['additionalMarginBottom']) || 0;
        _0xc836x4(_0xc836x2, this);

        function _0xc836x4(_0xc836x2, _0xc836x5) {
            var _0xc836x6 = _0xc836x8(_0xc836x2, _0xc836x5);
            if (!_0xc836x6) {
                console['log']('TSS: Body width smaller than options.minWidth. Init is delayed.');
                _0xc836x1(document)['on']('scroll.' + _0xc836x2['namespace'], function (_0xc836x2, _0xc836x5) {
                    return function (_0xc836x7) {
                        var _0xc836x6 = _0xc836x8(_0xc836x2, _0xc836x5);
                        if (_0xc836x6) {
                            _0xc836x1(this)['unbind'](_0xc836x7)
                        }
                    }
                }(_0xc836x2, _0xc836x5));
                _0xc836x1(window)['on']('resize.' + _0xc836x2['namespace'], function (_0xc836x2, _0xc836x5) {
                    return function (_0xc836x7) {
                        var _0xc836x6 = _0xc836x8(_0xc836x2, _0xc836x5);
                        if (_0xc836x6) {
                            _0xc836x1(this)['unbind'](_0xc836x7)
                        }
                    }
                }(_0xc836x2, _0xc836x5))
            }
        }

        function _0xc836x8(_0xc836x2, _0xc836x5) {
            if (_0xc836x2['initialized'] === true) {
                return true
            };
            if (_0xc836x1('body')['width']() < _0xc836x2['minWidth']) {
                return false
            };
            _0xc836x9(_0xc836x2, _0xc836x5);
            return true
        }

        function _0xc836x9(_0xc836x2, _0xc836x5) {
            _0xc836x2['initialized'] = true;
            var _0xc836xa = _0xc836x1('#theia-sticky-sidebar-stylesheet-' + _0xc836x2['namespace']);
            if (_0xc836xa['length'] === 0) {
                _0xc836x1('head')['append'](_0xc836x1('<style id="theia-sticky-sidebar-stylesheet-' + _0xc836x2['namespace'] + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'))
            };
            _0xc836x5['each'](function () {
                var _0xc836xb = {};
                _0xc836xb['sidebar'] = _0xc836x1(this);
                _0xc836xb['options'] = _0xc836x2 || {};
                _0xc836xb['container'] = _0xc836x1(_0xc836xb['options']['containerSelector']);
                if (_0xc836xb['container']['length'] == 0) {
                    _0xc836xb['container'] = _0xc836xb['sidebar']['parent']()
                };
                _0xc836xb['sidebar']['parents']()['css']('-webkit-transform', 'none');
                _0xc836xb['sidebar']['css']({
                    'position': _0xc836xb['options']['defaultPosition'],
                    'overflow': 'visible',
                    '-webkit-box-sizing': 'border-box',
                    '-moz-box-sizing': 'border-box',
                    'box-sizing': 'border-box'
                });
                _0xc836xb['stickySidebar'] = _0xc836xb['sidebar']['find']('.theiaStickySidebar');
                if (_0xc836xb['stickySidebar']['length'] == 0) {
                    var _0xc836xc = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    _0xc836xb['sidebar']['find']('script')['filter'](function (_0xc836xd, _0xc836xe) {
                        return _0xc836xe['type']['length'] === 0 || _0xc836xe['type']['match'](_0xc836xc)
                    })['remove']();
                    _0xc836xb['stickySidebar'] = _0xc836x1('<div>')['addClass']('theiaStickySidebar')['append'](_0xc836xb['sidebar']['children']());
                    _0xc836xb['sidebar']['append'](_0xc836xb['stickySidebar'])
                };
                _0xc836xb['marginBottom'] = parseInt(_0xc836xb['sidebar']['css']('margin-bottom'));
                _0xc836xb['paddingTop'] = parseInt(_0xc836xb['sidebar']['css']('padding-top'));
                _0xc836xb['paddingBottom'] = parseInt(_0xc836xb['sidebar']['css']('padding-bottom'));
                var _0xc836xf = _0xc836xb['stickySidebar']['offset']()['top'];
                var _0xc836x10 = _0xc836xb['stickySidebar']['outerHeight']();
                _0xc836xb['stickySidebar']['css']('padding-top', 1);
                _0xc836xb['stickySidebar']['css']('padding-bottom', 1);
                _0xc836xf -= _0xc836xb['stickySidebar']['offset']()['top'];
                _0xc836x10 = _0xc836xb['stickySidebar']['outerHeight']() - _0xc836x10 - _0xc836xf;
                if (_0xc836xf == 0) {
                    _0xc836xb['stickySidebar']['css']('padding-top', 0);
                    _0xc836xb['stickySidebarPaddingTop'] = 0
                } else {
                    _0xc836xb['stickySidebarPaddingTop'] = 1
                };
                if (_0xc836x10 == 0) {
                    _0xc836xb['stickySidebar']['css']('padding-bottom', 0);
                    _0xc836xb['stickySidebarPaddingBottom'] = 0
                } else {
                    _0xc836xb['stickySidebarPaddingBottom'] = 1
                };
                _0xc836xb['previousScrollTop'] = null;
                _0xc836xb['fixedScrollTop'] = 0;
                _0xc836x22();
                _0xc836xb['onScroll'] = function (_0xc836xb) {
                    if (!_0xc836xb['stickySidebar']['is'](':visible')) {
                        return
                    };
                    if (_0xc836x1('body')['width']() < _0xc836xb['options']['minWidth']) {
                        _0xc836x22();
                        return
                    };
                    if (_0xc836xb['options']['disableOnResponsiveLayouts']) {
                        var _0xc836x11 = _0xc836xb['sidebar']['outerWidth'](_0xc836xb['sidebar']['css']('float') == 'none');
                        if (_0xc836x11 + 50 > _0xc836xb['container']['width']()) {
                            _0xc836x22();
                            return
                        }
                    };
                    var _0xc836x12 = _0xc836x1(document)['scrollTop']();
                    var _0xc836x13 = 'static';
                    if (_0xc836x12 >= _0xc836xb['sidebar']['offset']()['top'] + (_0xc836xb['paddingTop'] - _0xc836xb['options']['additionalMarginTop'])) {
                        var _0xc836x14 = _0xc836xb['paddingTop'] + _0xc836x2['additionalMarginTop'];
                        var _0xc836x15 = _0xc836xb['paddingBottom'] + _0xc836xb['marginBottom'] + _0xc836x2['additionalMarginBottom'];
                        var _0xc836x16 = _0xc836xb['sidebar']['offset']()['top'];
                        var _0xc836x17 = _0xc836xb['sidebar']['offset']()['top'] + _0xc836x23(_0xc836xb['container']);
                        var _0xc836x18 = 0 + _0xc836x2['additionalMarginTop'];
                        var _0xc836x19;
                        var _0xc836x1a = (_0xc836xb['stickySidebar']['outerHeight']() + _0xc836x14 + _0xc836x15) < _0xc836x1(window)['height']();
                        if (_0xc836x1a) {
                            _0xc836x19 = _0xc836x18 + _0xc836xb['stickySidebar']['outerHeight']()
                        } else {
                            _0xc836x19 = _0xc836x1(window)['height']() - _0xc836xb['marginBottom'] - _0xc836xb['paddingBottom'] - _0xc836x2['additionalMarginBottom']
                        };
                        var _0xc836x1b = _0xc836x16 - _0xc836x12 + _0xc836xb['paddingTop'];
                        var _0xc836x1c = _0xc836x17 - _0xc836x12 - _0xc836xb['paddingBottom'] - _0xc836xb['marginBottom'];
                        var _0xc836x1d = _0xc836xb['stickySidebar']['offset']()['top'] - _0xc836x12;
                        var _0xc836x1e = _0xc836xb['previousScrollTop'] - _0xc836x12;
                        if (_0xc836xb['stickySidebar']['css']('position') == 'fixed') {
                            if (_0xc836xb['options']['sidebarBehavior'] == 'modern') {
                                _0xc836x1d += _0xc836x1e
                            }
                        };
                        if (_0xc836xb['options']['sidebarBehavior'] == 'stick-to-top') {
                            _0xc836x1d = _0xc836x2['additionalMarginTop']
                        };
                        if (_0xc836xb['options']['sidebarBehavior'] == 'stick-to-bottom') {
                            _0xc836x1d = _0xc836x19 - _0xc836xb['stickySidebar']['outerHeight']()
                        };
                        if (_0xc836x1e > 0) {
                            _0xc836x1d = Math['min'](_0xc836x1d, _0xc836x18)
                        } else {
                            _0xc836x1d = Math['max'](_0xc836x1d, _0xc836x19 - _0xc836xb['stickySidebar']['outerHeight']())
                        };
                        _0xc836x1d = Math['max'](_0xc836x1d, _0xc836x1b);
                        _0xc836x1d = Math['min'](_0xc836x1d, _0xc836x1c - _0xc836xb['stickySidebar']['outerHeight']());
                        var _0xc836x1f = _0xc836xb['container']['height']() == _0xc836xb['stickySidebar']['outerHeight']();
                        if (!_0xc836x1f && _0xc836x1d == _0xc836x18) {
                            _0xc836x13 = 'fixed'
                        } else {
                            if (!_0xc836x1f && _0xc836x1d == _0xc836x19 - _0xc836xb['stickySidebar']['outerHeight']()) {
                                _0xc836x13 = 'fixed'
                            } else {
                                if (_0xc836x12 + _0xc836x1d - _0xc836xb['sidebar']['offset']()['top'] - _0xc836xb['paddingTop'] <= _0xc836x2['additionalMarginTop']) {
                                    _0xc836x13 = 'static'
                                } else {
                                    _0xc836x13 = 'absolute'
                                }
                            }
                        }
                    };
                    if (_0xc836x13 == 'fixed') {
                        var _0xc836x20 = _0xc836x1(document)['scrollLeft']();
                        _0xc836xb['stickySidebar']['css']({
                            'position': 'fixed',
                            'width': _0xc836x26(_0xc836xb['stickySidebar']) + 'px',
                            'transform': 'translateY(' + _0xc836x1d + 'px)',
                            'left': (_0xc836xb['sidebar']['offset']()['left'] + parseInt(_0xc836xb['sidebar']['css']('padding-left')) - _0xc836x20) + 'px',
                            'top': '0px'
                        })
                    } else {
                        if (_0xc836x13 == 'absolute') {
                            var _0xc836x21 = {};
                            if (_0xc836xb['stickySidebar']['css']('position') != 'absolute') {
                                _0xc836x21['position'] = 'absolute';
                                _0xc836x21['transform'] = 'translateY(' + (_0xc836x12 + _0xc836x1d - _0xc836xb['sidebar']['offset']()['top'] - _0xc836xb['stickySidebarPaddingTop'] - _0xc836xb['stickySidebarPaddingBottom']) + 'px)';
                                _0xc836x21['top'] = '0px'
                            };
                            _0xc836x21['width'] = _0xc836x26(_0xc836xb['stickySidebar']) + 'px';
                            _0xc836x21['left'] = '';
                            _0xc836xb['stickySidebar']['css'](_0xc836x21)
                        } else {
                            if (_0xc836x13 == 'static') {
                                _0xc836x22()
                            }
                        }
                    };
                    if (_0xc836x13 != 'static') {
                        if (_0xc836xb['options']['updateSidebarHeight'] == true) {
                            _0xc836xb['sidebar']['css']({
                                'min-height': _0xc836xb['stickySidebar']['outerHeight']() + _0xc836xb['stickySidebar']['offset']()['top'] - _0xc836xb['sidebar']['offset']()['top'] + _0xc836xb['paddingBottom']
                            })
                        }
                    };
                    _0xc836xb['previousScrollTop'] = _0xc836x12
                };
                _0xc836xb['onScroll'](_0xc836xb);
                _0xc836x1(document)['on']('scroll.' + _0xc836xb['options']['namespace'], function (_0xc836xb) {
                    return function () {
                        _0xc836xb['onScroll'](_0xc836xb)
                    }
                }(_0xc836xb));
                _0xc836x1(window)['on']('resize.' + _0xc836xb['options']['namespace'], function (_0xc836xb) {
                    return function () {
                        _0xc836xb['stickySidebar']['css']({
                            'position': 'static'
                        });
                        _0xc836xb['onScroll'](_0xc836xb)
                    }
                }(_0xc836xb));
                if (typeof ResizeSensor !== 'undefined') {
                    new ResizeSensor(_0xc836xb['stickySidebar'][0], function (_0xc836xb) {
                        return function () {
                            _0xc836xb['onScroll'](_0xc836xb)
                        }
                    }(_0xc836xb))
                };

                function _0xc836x22() {
                    _0xc836xb['fixedScrollTop'] = 0;
                    _0xc836xb['sidebar']['css']({
                        'min-height': '1px'
                    });
                    _0xc836xb['stickySidebar']['css']({
                        'position': 'static',
                        'width': '',
                        'transform': 'none'
                    })
                }

                function _0xc836x23(_0xc836x24) {
                    var _0xc836x25 = _0xc836x24['height']();
                    _0xc836x24['children']()['each'](function () {
                        _0xc836x25 = Math['max'](_0xc836x25, _0xc836x1(this)['height']())
                    });
                    return _0xc836x25
                }
            })
        }

        function _0xc836x26(_0xc836x27) {
            var _0xc836x28;
            try {
                _0xc836x28 = _0xc836x27[0]['getBoundingClientRect']()['width']
            } catch (err) {};
            if (typeof _0xc836x28 === 'undefined') {
                _0xc836x28 = _0xc836x27['width']()
            };
            return _0xc836x28
        }
        return this
    }
})(jQuery);
! function (_0xc836x29) {
    _0xc836x29['fn']['menu'] = function () {
        return this['each'](function () {
            var _0xc836x2a = _0xc836x29(this),
                _0xc836x2b = _0xc836x2a['find']('.LinkList ul > li')['children']('a'),
                _0xc836x2c = _0xc836x2b['length'];
            for (var _0xc836x2d = 0; _0xc836x2d < _0xc836x2c; _0xc836x2d++) {
                var _0xc836x2e = _0xc836x2b['eq'](_0xc836x2d),
                    _0xc836x2f = _0xc836x2e['text']();
                if (_0xc836x2f['charAt'](0) !== '_') {
                    var _0xc836x24 = _0xc836x2b['eq'](_0xc836x2d + 1),
                        _0xc836x30 = _0xc836x24['text']();
                    if (_0xc836x30['charAt'](0) === '_') {
                        var _0xc836x31 = _0xc836x2e['parent']();
                        _0xc836x31['append']('<ul class="sub-menu m-sub"/>')
                    }
                };
                if (_0xc836x2f['charAt'](0) === '_') {
                    _0xc836x2e['text'](_0xc836x2f['replace']('_', ''));
                    _0xc836x2e['parent']()['appendTo'](_0xc836x31['children']('.sub-menu'))
                }
            };
            for (var _0xc836x2d = 0; _0xc836x2d < _0xc836x2c; _0xc836x2d++) {
                var _0xc836x32 = _0xc836x2b['eq'](_0xc836x2d),
                    _0xc836x33 = _0xc836x32['text']();
                if (_0xc836x33['charAt'](0) !== '_') {
                    var _0xc836x34 = _0xc836x2b['eq'](_0xc836x2d + 1),
                        _0xc836x35 = _0xc836x34['text']();
                    if (_0xc836x35['charAt'](0) === '_') {
                        var _0xc836x36 = _0xc836x32['parent']();
                        _0xc836x36['append']('<ul class="sub-menu2 m-sub"/>')
                    }
                };
                if (_0xc836x33['charAt'](0) === '_') {
                    _0xc836x32['text'](_0xc836x33['replace']('_', ''));
                    _0xc836x32['parent']()['appendTo'](_0xc836x36['children']('.sub-menu2'))
                }
            };
            _0xc836x2a['find']('.LinkList ul li ul')['parent']('li')['addClass']('has-sub')
        })
    }
}(jQuery);
! function (_0xc836x29) {
    _0xc836x29['fn']['lazy'] = function () {
        return this['each'](function () {
            var _0xc836x37 = _0xc836x29(this),
                _0xc836x38 = _0xc836x37['attr']('data-image'),
                _0xc836x39 = Math['round'](_0xc836x37['width']()),
                _0xc836x3a = Math['round'](_0xc836x37['height']()),
                _0xc836x3b = 'w' + _0xc836x39 + '-h' + _0xc836x3a + '-p-k-no-nu',
                _0xc836x3c = '';
            if (_0xc836x38['match']('/s72-c')) {
                _0xc836x3c = _0xc836x38['replace']('/s72-c', '/' + _0xc836x3b)
            } else {
                if (_0xc836x38['match']('/w72-h')) {
                    _0xc836x3c = _0xc836x38['replace']('/w72-h72-p-k-no-nu', '/' + _0xc836x3b)
                } else {
                    if (_0xc836x38['match']('=w72-h')) {
                        _0xc836x3c = _0xc836x38['replace']('=w72-h72-p-k-no-nu', '=' + _0xc836x3b)
                    } else {
                        _0xc836x3c = _0xc836x38
                    }
                }
            };
            _0xc836x29(window)['on']('load resize scroll', _0xc836x3d);

            function _0xc836x3d() {
                var _0xc836x3e = _0xc836x29(window)['height'](),
                    _0xc836x3f = _0xc836x29(window)['scrollTop'](),
                    _0xc836x40 = _0xc836x37['offset']()['top'];
                if (_0xc836x3f + _0xc836x3e > _0xc836x40) {
                    var _0xc836x36 = new Image();
                    _0xc836x36['onload'] = function () {
                        _0xc836x37['attr']('style', 'background-image:url(' + this['src'] + ')')['addClass']('lazy')
                    }, _0xc836x36['src'] = _0xc836x3c
                }
            }
            _0xc836x3d()
        })
    }
}(jQuery);
(function (_0xc836x1) {
    _0xc836x1['fn']['replaceText'] = function (_0xc836x2b, _0xc836x29, _0xc836x2c) {
        return this['each'](function () {
            var _0xc836x32 = this['firstChild'],
                _0xc836x34, _0xc836x24, _0xc836x2e = [];
            if (_0xc836x32) {
                do {
                    if (_0xc836x32['nodeType'] === 3) {
                        _0xc836x34 = _0xc836x32['nodeValue'];
                        _0xc836x24 = _0xc836x34['replace'](_0xc836x2b, _0xc836x29);
                        if (_0xc836x24 !== _0xc836x34) {
                            if (!_0xc836x2c && /</ ['test'](_0xc836x24)) {
                                _0xc836x1(_0xc836x32)['before'](_0xc836x24);
                                _0xc836x2e['push'](_0xc836x32)
                            } else {
                                _0xc836x32['nodeValue'] = _0xc836x24
                            }
                        }
                    }
                } while (_0xc836x32 = _0xc836x32['nextSibling']);
            };
            _0xc836x2e['length'] && _0xc836x1(_0xc836x2e)['remove']()
        })
    }
})(jQuery);
! function (_0xc836x37) {
    'use strict';
    var _0xc836x36 = function (_0xc836x36) {
            return this['each'](function () {
                var _0xc836x24, _0xc836x2d, _0xc836x29 = _0xc836x37(this),
                    _0xc836xb = _0xc836x29['data'](),
                    _0xc836x2c = [_0xc836x29],
                    _0xc836x41 = this['tagName'],
                    _0xc836x2e = 0;
                _0xc836x24 = _0xc836x37['extend']({
                    content: 'body',
                    headings: 'h1,h2,h3'
                }, {
                    content: _0xc836xb['toc'] || void(0),
                    headings: _0xc836xb['tocHeadings'] || void(0)
                }, _0xc836x36), _0xc836x2d = _0xc836x24['headings']['split'](','), _0xc836x37(_0xc836x24['content'])['find'](_0xc836x24['headings'])['attr']('id', function (_0xc836x36, _0xc836x24) {
                    return _0xc836x24 || function (_0xc836x37) {
                        0 === _0xc836x37['length'] && (_0xc836x37 = '?');
                        for (var _0xc836x36 = _0xc836x37['replace'](/[^a-zA-Z ]/g, '')['replace'](/\s+/g, '_'), _0xc836x24 = '', _0xc836x2d = 1; null !== document['getElementById'](_0xc836x36 + _0xc836x24);) {
                            _0xc836x24 = '_' + _0xc836x2d++
                        };
                        return _0xc836x36 + _0xc836x24
                    }(_0xc836x37(this)['text']())
                })['each'](function () {
                    var _0xc836x36 = _0xc836x37(this),
                        _0xc836x24 = _0xc836x37['map'](_0xc836x2d, function (_0xc836x37, _0xc836x24) {
                            return _0xc836x36['is'](_0xc836x37) ? _0xc836x24 : void(0)
                        })[0];
                    if (_0xc836x24 > _0xc836x2e) {
                        var _0xc836x29 = _0xc836x2c[0]['children']('li:last')[0];
                        _0xc836x29 && _0xc836x2c['unshift'](_0xc836x37('<' + _0xc836x41 + '/>')['appendTo'](_0xc836x29))
                    } else {
                        _0xc836x2c['splice'](0, Math['min'](_0xc836x2e - _0xc836x24, Math['max'](_0xc836x2c['length'] - 1, 0)))
                    };
                    _0xc836x37('<li/>')['appendTo'](_0xc836x2c[0])['append'](_0xc836x37('<a/>')['text'](_0xc836x36['text']())['attr']('href', '#' + _0xc836x36['attr']('id'))), _0xc836x2e = _0xc836x24
                })
            })
        },
        _0xc836x24 = _0xc836x37['fn']['toc'];
    _0xc836x37['fn']['toc'] = _0xc836x36, _0xc836x37['fn']['toc']['noConflict'] = function () {
        return _0xc836x37['fn']['toc'] = _0xc836x24, this
    }, _0xc836x37(function () {
        _0xc836x36['call'](_0xc836x37('[data-toc]'))
    })
}(window['jQuery']);
document['querySelector']('.toggle-setting .fa-cog')['onclick'] = function () {
    document['querySelector']('.close-settings .fa-cog')['classList']['toggle']('fa-spin');
    document['querySelector']('.settings-box')['classList']['toggle']('open')
};
document['querySelector']('.toggle-settings .fa-cog')['onclick'] = function () {
    document['querySelector']('.close-settings .fa-cog')['classList']['toggle']('fa-spin');
    document['querySelector']('.settings-box')['classList']['toggle']('open')
};
document['querySelector']('.close-settings .fa-cog')['onclick'] = function () {
    document['querySelector']('.close-settings .fa-cog')['classList']['toggle']('fa-spin');
    document['querySelector']('.settings-box')['classList']['toggle']('open')
};
let mainColors = localStorage['getItem']('color_option');
if (mainColors !== null) {
    document['documentElement']['style']['setProperty']('--bg', localStorage['getItem']('color_option'));
    document['querySelectorAll']('.colors-list li')['forEach']((_0xc836x43) => {
        _0xc836x43['classList']['remove']('active');
        if (_0xc836x43['dataset']['color'] === mainColors) {
            _0xc836x43['classList']['add']('active')
        }
    })
};
const colorsLi = document['querySelectorAll']('.colors-list li');
colorsLi['forEach']((_0xc836x45) => {
    _0xc836x45['addEventListener']('click', (_0xc836x24) => {
        document['documentElement']['style']['setProperty']('--bg', _0xc836x24['target']['dataset']['color']);
        localStorage['setItem']('color_option', _0xc836x24['target']['dataset']['color']);
        _0xc836x24['target']['parentElement']['querySelectorAll']('.active')['forEach']((_0xc836x43) => {
            _0xc836x43['classList']['remove']('active')
        });
        _0xc836x24['target']['classList']['add']('active');
        document['querySelector']('html')['classList']['add']('active-color')
    })
});
let mainColor = localStorage['getItem']('color');
null !== mainColor && (document['documentElement']['style']['setProperty']('--color', localStorage['getItem']('color')));
const colorLi = document['querySelectorAll']('.colors-list li');
colorLi['forEach']((_0xc836x24) => {
    _0xc836x24['addEventListener']('click', (_0xc836x24) => {
        document['documentElement']['style']['setProperty']('--color', _0xc836x24['target']['dataset']['colors']), localStorage['setItem']('color', _0xc836x24['target']['dataset']['colors'])
    })
});
document['querySelector']('.reset-options')['onclick'] = function () {
    localStorage['clear']();
    window['location']['reload']()
};

function rtn() {
    $('html')['html']('<div style="font: 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;position: fixed;overflow-x: hidden;background:#f8f8f8;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="position: relative;padding: 2em;width: 80%;max-width: 600px;min-width: 200px;margin: 5em auto;background: white;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);"><div><div style="color: #fff; position: absolute; margin: 0 auto; left: 0; right: 0; top: -25px; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; -webkit-border-radius: 50%; z-index: 9; background: #0033a9; padding: 0; text-align: center; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); font-size: 2em; font-family: arial; text-decoration: none;"><span>©</span></div><h4 style="text-align: center; font-size: 26px; margin: 30px 0 15px;line-height: normal;">عفواً..!!</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>لا يمكنك إستخدام هذا القالب .. هذا التوقف يحدث تلقائياً بسبب مايلي ..</p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">1</span>-العبث بحقوق ملكية التصميم!..كإخفاء توقيع المصمم</p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">2</span>-لا تملك رخصة؟ .. للحصول على تفعيل القالب يرجى<a style="color: #0033a9;font-size: 14px; font-weight: 400;" href="https://www.facebook.com/shrktsmile"> طلب رخصة </a></p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">3</span>-تملك رخصة ومع ذلك لا تستطيع إستخدام هذا القالب .. يرجى التواصل بـ  <a style="color: #0033a9;font-size: 14px; font-weight: 400;" href="https://www.facebook.com/shrktsmile"> فريق الدعم </a></p></div><div style="text-align: center; overflow: hidden;"><a style="color: #fff;background:#0033a9;text-decoration: none;display: block;max-width: 180px;padding: 10px 12px;margin: 5px auto;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);" href="https://smile-template.blogspot.com/">الصفحة الرسمية</a></div></div></div>');
    setTimeout(function () {
        window['location']['assign']('https://smile-template.blogspot.com/')
    }, 15000)
}
$(function () {
    function _0xc836x49() {
        let _0xc836x4a = false,
            _0xc836x4b = window['location']['href']['toLowerCase'](),
            _0xc836x4c = $('#license-key')['text']();
        $['ajax']({
            dataType: 'json',
            url: '/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1',
            async: false,
            method: 'GET',
            dataType: 'jsonp',
            success: function (_0xc836x4d) {
                _0xc836x4a = /blog-(.*)/gm ['exec'](_0xc836x4d['feed']['id'].$t)[1]
            }
        });
        if (_0xc836x4b['indexOf']('www.blogger') == -1 && _0xc836x4b['indexOf']('draft.blogger') == -1 && _0xc836x4b['indexOf']('template-editor') == -1 && _0xc836x4b['indexOf']('post-preview') == -1 && _0xc836x4b['indexOf']('b/layout-preview') == -1 && _0xc836x4b['indexOf']('b/blog-preview') == -1 && _0xc836x4b['indexOf']('b/preview') == -1 && _0xc836x4b['indexOf']('b/html-preview') == -1 && _0xc836x4b['indexOf']('b/app-preview') == -1 && _0xc836x4b['indexOf']('translate.google') == -1 && _0xc836x4b['indexOf']('webcache.googleusercontent') == -1) {
            $['ajax']({
                dataType: 'json',
                url: 'https://www.blogger.com/feeds/3229452297229825460/pages/default/7663737568230617928?alt=json-in-script&orderby=published',
                method: 'GET',
                dataType: 'jsonp',
                success: function (_0xc836x4e) {
                    var _0xc836x4f = false,
                        _0xc836x50 = false;
                    if (_0xc836x4a == false) {
                        rtn()
                    } else {
                        $('<div>' + _0xc836x4e['entry']['content']['$t'] + '</div>')['find']('js_script')['each'](function () {
                            var _0xc836x4d = $(this)['text'](),
                                _0xc836x51 = JSON['parse'](_0xc836x4d);
                            for (var _0xc836xb = 0; _0xc836xb < _0xc836x51['length']; _0xc836xb++) {
                                for (var _0xc836x52 = 0; _0xc836x52 < _0xc836x51[_0xc836xb]['Blog_id']['split'](',')['length']; _0xc836x52++) {
                                    var _0xc836x53 = _0xc836x51[_0xc836xb]['Blog_id']['split'](','),
                                        _0xc836x54 = _0xc836x51[_0xc836xb]['Blog_id'],
                                        _0xc836x55 = _0xc836x51[_0xc836xb]['create'],
                                        _0xc836x56 = _0xc836x51[_0xc836xb]['key'];
                                    if (_0xc836x4a == _0xc836x54 || _0xc836x4a == _0xc836x53[_0xc836x52] && _0xc836x4c == _0xc836x56) {
                                        _0xc836x50 = true
                                    };
                                    if (_0xc836x4a == _0xc836x54 && _0xc836x55 == true) {
                                        _0xc836x4f = true
                                    } else {
                                        if (_0xc836x4a == _0xc836x53[_0xc836x52] && _0xc836x55 == true) {
                                            _0xc836x4f = true
                                        }
                                    }
                                }
                            }
                        })
                    };
                    if (_0xc836x4f) {
                        var _0xc836x57 = {
                                team1: 'Smile',
                                link1: 'https://smile-template.blogspot.com/'
                            },
                            _0xc836x58 = '<a  href="' + _0xc836x57['link1'] + '" target="_blank" tooltip="' + _0xc836x57['team1'] + '" style="width: 30px;height: 30px;background-size: 30px 60px;-webkit-transition: all 0.15s ease-in-out;transition: all 0.15s ease-in-out;position: relative;display: inline-block!important;vertical-align: middle;visibility: visible!important; opacity: 1!important; z-index: 0 !important;" /><style>#smile-right a{background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRc-vgikfGqLuuBuTNvFRaZDS-IW9FyadUzNIcsDAb-Y8AMXolGY1LAWNWLUo5sU2gf1A-QzI6dVK-qXSuThB_5gSRBSEFlaidil9aN-UQZYttjCi_ZpAoR4p6XTG5fzmC5LKosrA5VVK9A_r2UW9nbtSEgXYc9kZ7ri6NjxgF53uWuITedCqTb4yE/s1600/Copy.png) top no-repeat;}#smile-right a:hover{background-position:bottom}#smile-right a:after{font-size: 0.6rem;padding: 3px 10px;position: absolute;top:2px;right: 25px;z-index:100;content:attr(tooltip);background:var(--bg);color:#ffffff;opacity:0;visibility:hidden;-webkit-transition:all 0.1s ease-in-out 0.1s;transition:all 0.1s ease-in-out 0.1s;border-radius:100px;line-height:1rem;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}</style>';
                        if ($('#smile-right')['length'] !== 0) {
                            $('#smile-right')['addClass']('impo')['append'](_0xc836x58);
                            setInterval(function () {
                                $('.impo')['each'](function () {
                                    if ($(this)['css']('opacity') < 1 || $(this)['css']('visibility') == 'hidden' || $(this)['is'](':hidden')) {
                                        rtn()
                                    }
                                })
                            }, 10)
                        } else {
                            rtn()
                        }
                    };
                    if (!_0xc836x50) {
                        rtn()
                    }
                },
                error: function (_0xc836x24) {
                    rtn()
                }
            })
        }
    }
    _0xc836x49()
});

function msgError() {
    return '<span class="error-msg">' + error + '</span>'
}

function beforeLoader() {
    return '<div class="loader"/>'
}

function getFeedUrl(_0xc836x24, _0xc836x29, _0xc836x37) {
    var _0xc836x52 = '';
    switch (_0xc836x37) {
    case 'recent':
        _0xc836x52 = '/feeds/posts/default?alt=json&max-results=' + _0xc836x29;
        break;
    case 'comments':
        _0xc836x52 = 'list1' == _0xc836x24 ? '/feeds/comments/default?alt=json&max-results=' + _0xc836x29 : '/feeds/posts/default/-/' + _0xc836x37 + '?alt=json&max-results=' + _0xc836x29;
        break;
    default:
        _0xc836x52 = '/feeds/posts/default/-/' + _0xc836x37 + '?alt=json&max-results=' + _0xc836x29
    };
    return _0xc836x52
}

function getPostLink(_0xc836x24, _0xc836x29) {
    for (var _0xc836x37 = 0; _0xc836x37 < _0xc836x24[_0xc836x29]['link']['length']; _0xc836x37++) {
        if ('alternate' == _0xc836x24[_0xc836x29]['link'][_0xc836x37]['rel']) {
            var _0xc836x52 = _0xc836x24[_0xc836x29]['link'][_0xc836x37]['href'];
            break
        }
    };
    return _0xc836x52
}

function getPostTitle(_0xc836x24, _0xc836x29) {
    return _0xc836x24[_0xc836x29]['title']['$t']
}

function getFirstImage(_0xc836x24, _0xc836x29) {
    var _0xc836x37 = $('<div>')['html'](_0xc836x24)['find']('img:first')['attr']('src'),
        _0xc836x52 = _0xc836x37['lastIndexOf']('/') || 0,
        _0xc836x41 = _0xc836x37['lastIndexOf']('/', _0xc836x52 - 1) || 0,
        _0xc836x2d = _0xc836x37['substring'](0, _0xc836x41),
        _0xc836xb = _0xc836x37['substring'](_0xc836x41, _0xc836x52),
        _0xc836x36 = _0xc836x37['substring'](_0xc836x52);
    return (_0xc836xb['match'](/\/s[0-9]+/g) || _0xc836xb['match'](/\/w[0-9]+/g) || '/d' == _0xc836xb) && (_0xc836xb = '/w72-h72-p-k-no-nu'), _0xc836x2d + _0xc836xb + _0xc836x36
}

function getPostImage(_0xc836x24, _0xc836x29, _0xc836x37) {
    var _0xc836x52 = _0xc836x24[_0xc836x29]['content']['$t'];
    if (_0xc836x24[_0xc836x29]['media$thumbnail']) {
        var _0xc836x41 = _0xc836x24[_0xc836x29]['media$thumbnail']['url']
    } else {
        _0xc836x41 = noThumbnail
    };
    return _0xc836x52['indexOf'](_0xc836x52['match'](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0xc836x52['indexOf']('<img') > -1 ? _0xc836x52['indexOf'](_0xc836x52['match'](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0xc836x52['indexOf']('<img') ? _0xc836x41['replace']('/default.', '/0.') : getFirstImage(_0xc836x52) : _0xc836x41['replace']('/default.', '/0.') : _0xc836x52['indexOf']('<img') > -1 ? getFirstImage(_0xc836x52) : noThumbnail
}

function getPostAuthor(_0xc836x24, _0xc836x29) {
    var _0xc836x37 = _0xc836x24[_0xc836x29]['author'][0]['name']['$t'];
    if ('true' == messages['postAuthor']) {
        var _0xc836x52 = '<span class="entry-author"><span class="author">' + _0xc836x37 + "</span><span class='spp'>-</span></span>"
    } else {
        _0xc836x52 = ''
    };
    return _0xc836x52
}

function getPostDate(_0xc836x24, _0xc836x29) {
    var _0xc836x37 = _0xc836x24[_0xc836x29]['published']['$t'],
        _0xc836x52 = _0xc836x37['substring'](0, 4),
        _0xc836x41 = _0xc836x37['substring'](5, 7),
        _0xc836x2d = _0xc836x37['substring'](8, 10),
        _0xc836xb = monthFormat[parseInt(_0xc836x41, 10) - 1] + ' ' + _0xc836x2d + ', ' + _0xc836x52;
    if ('true' == messages['postDate']) {
        var _0xc836x36 = '<span class="entry-time"><time class="published" datetime="' + _0xc836x37 + '">' + _0xc836xb + '</time></span>'
    } else {
        _0xc836x36 = ''
    };
    return _0xc836x36
}

function getPostMeta(_0xc836x24, _0xc836x29) {
    if ('true' == messages['postAuthor'] && 'true' == messages['postDate']) {
        var _0xc836x37 = '<div class="entry-meta">' + _0xc836x24 + _0xc836x29 + '</div>'
    } else {
        _0xc836x37 = 'true' == messages['postAuthor'] ? '<div class="entry-meta">' + _0xc836x24 + '</div>' : 'true' == messages['postDate'] ? '<div class="entry-meta">' + _0xc836x29 + '</div>' : ''
    };
    if ('true' == messages['postDate']) {
        var _0xc836x52 = '<div class="entry-meta">' + _0xc836x29 + '</div>'
    } else {
        _0xc836x52 = ''
    };
    return [_0xc836x37, _0xc836x52]
}

function gofeatureds(_0xc836x24, _0xc836x29, _0xc836x37) {
    var _0xc836x52;
    switch (_0xc836x24) {
    case 'featured1':
        ;
    case 'featured2':
        ;
    case 'featured3':
        switch (_0xc836x29) {
        case 0:
            _0xc836x52 = _0xc836x37[0];
            break;
        default:
            _0xc836x52 = _0xc836x37[1]
        };
        break;
    default:
        _0xc836x52 = _0xc836x37[0]
    };
    return _0xc836x52
}

function getPostTag(_0xc836x24, _0xc836x29) {
    if (null != _0xc836x24[_0xc836x29]['category']) {
        var _0xc836x37 = '<span class="entry-category">' + _0xc836x24[_0xc836x29]['category'][0]['term'] + '</span>'
    } else {
        _0xc836x37 = ''
    };
    return _0xc836x37
}

function getPostSummary(_0xc836x24, _0xc836x29, _0xc836x37) {
    if (_0xc836x24[_0xc836x29]['content']['$t']) {
        var _0xc836x52 = _0xc836x24[_0xc836x29]['content']['$t'],
            _0xc836x41 = '<span class="entry-excerpt excerpt">' + $('<div>')['html'](_0xc836x52)['text']()['trim']()['substr'](0, _0xc836x37) + '…</span>'
    } else {
        _0xc836x41 = ''
    };
    return _0xc836x41
}

function getPostComments(_0xc836x24, _0xc836x29, _0xc836x37) {
    if (_0x54b335 = _0xc836x24[_0xc836x29]['author'][0]['name']['$t'], _0x4a40ac = _0xc836x24[_0xc836x29]['author'][0]['gd$image']['src']['replace']('/s220', '/w55-h55-p-k-no-nu'), _0x43e2d4 = _0xc836x24[_0xc836x29]['title']['$t'], _0x4a40ac['match']('//img1.blogblog.com/img/blank.gif') || _0x4a40ac['match']('//img1.blogblog.com/img/b16-rounded.gif')) {
        var _0xc836x52 = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg'
    } else {
        _0xc836x52 = _0x4a40ac
    };
    return '<article class="list1-item item-' + _0xc836x29 + '"><a class="entry-image-link cmm-avatar" href="' + _0xc836x37 + '"><span class="entry-thumb" data-image="' + _0xc836x52 + '"/></a><h2 class="entry-title"><a href="' + _0xc836x37 + '">' + _0x54b335 + '</a></h2><p class="cmm-snippet excerpt">' + _0x43e2d4 + '</p></article>'
}

function mainfeatured(_0xc836x24, _0xc836x29, _0xc836x37) {
    if (0 != _0xc836x37) {
        if ('featured' == _0xc836x29) {
            var _0xc836x52 = '.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .entry-category{background-color:' + _0xc836x37 + ';color:#fff}.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .loader:after{border-color:' + _0xc836x37 + ';border-right-color:rgba(155,155,155,0.2)}'
        } else {
            _0xc836x52 = '.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .title-wrap{border-bottom-color:' + _0xc836x37 + '}.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .title-wrap > h3,.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .entry-category{background-color:' + _0xc836x37 + ';color:#fff}.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .title-wrap > h3{color:#fff}.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .title-wrap > a.more:hover,.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .entry-header:not(.entry-info) .entry-title a:hover{color:' + _0xc836x37 + '}.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .title-wrap > h3:after{border-left-color:' + _0xc836x37 + '}.rtl .id-' + _0xc836x24 + '-' + _0xc836x29 + ' .title-wrap > h3:after{border-right-color:' + _0xc836x37 + '}.id-' + _0xc836x24 + '-' + _0xc836x29 + ' .loader:after{border-color:' + _0xc836x37 + ';border-right-color:rgba(155,155,155,0.2)}'
        }
    } else {
        _0xc836x52 = ''
    };
    return _0xc836x52
}

function getAjax(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x41) {
    switch (_0xc836x29) {
    case 'msimple':
        ;
    case 'featured1':
        ;
    case 'featured2':
        ;
    case 'featured3':
        ;
    case 'featured4':
        ;
    case 'featured5':
        ;
    case 'block1':
        ;
    case 'block2':
        ;
    case 'col-left':
        ;
    case 'col-right':
        ;
    case 'grid1':
        ;
    case 'grid2':
        ;
    case 'videos':
        ;
    case 'side1':
        ;
    case 'list1':
        ;
    case 'list2':
        ;
    case 'related':
        0 == _0xc836x52 && (_0xc836x52 = 'geterror404');
        var _0xc836x2d = getFeedUrl(_0xc836x29, _0xc836x37, _0xc836x52);
        $['ajax']({
            url: _0xc836x2d,
            type: 'GET',
            dataType: 'json',
            cache: !0,
            beforeSend: function (_0xc836x37) {
                var _0xc836x52 = _0xc836x24['parent']()['attr']('id'),
                    _0xc836x2d = mainfeatured(_0xc836x52, _0xc836x29, _0xc836x41);
                switch (_0xc836x29) {
                case 'featured1':
                    ;
                case 'featured2':
                    ;
                case 'featured3':
                    ;
                case 'featured4':
                    ;
                case 'featured5':
                    $('#page-skin-2')['prepend'](_0xc836x2d), _0xc836x24['html'](beforeLoader())['parent']()['addClass']('type-' + _0xc836x29 + ' id-' + _0xc836x52 + '-' + _0xc836x29 + ' show');
                    break;
                case 'block1':
                    ;
                case 'block2':
                    ;
                case 'grid1':
                    ;
                case 'grid2':
                    ;
                case 'videos':
                    $('#page-skin-2')['prepend'](_0xc836x2d), _0xc836x24['html'](beforeLoader())['parent']()['addClass']('type-' + _0xc836x29 + ' id-' + _0xc836x52 + '-' + _0xc836x29 + ' show');
                    break;
                case 'col-left':
                    ;
                case 'col-right':
                    $('#page-skin-2')['prepend'](_0xc836x2d), _0xc836x24['html'](beforeLoader())['parent']()['addClass']('type-' + _0xc836x29 + ' column-widget id-' + _0xc836x52 + '-' + _0xc836x29 + ' show');
                    break;
                case 'side1':
                    ;
                case 'list1':
                    ;
                case 'list2':
                    _0xc836x24['html'](beforeLoader());
                    break;
                case 'related':
                    _0xc836x24['html'](beforeLoader())['parent']()['addClass']('show')
                }
            },
            success: function (_0xc836x41) {
                var _0xc836x2d = '';
                switch (_0xc836x29) {
                case 'msimple':
                    _0xc836x2d = '<ul class="mega-items">';
                    break;
                case 'featured1':
                    ;
                case 'featured2':
                    ;
                case 'featured3':
                    ;
                case 'featured4':
                    ;
                case 'featured5':
                    _0xc836x2d = '<div class="featured-items ' + _0xc836x29 + '">';
                    break;
                case 'block1':
                    _0xc836x2d = '<div class="block1-items">';
                    break;
                case 'block2':
                    _0xc836x2d = '<div class="block2-items">';
                    break;
                case 'col-left':
                    ;
                case 'col-right':
                    _0xc836x2d = '<div class="column-items">';
                    break;
                case 'grid1':
                    _0xc836x2d = '<div class="grid1-items total-' + _0xc836x37 + '">';
                    break;
                case 'grid2':
                    _0xc836x2d = '<div class="grid2-items">';
                    break;
                case 'videos':
                    _0xc836x2d = '<div class="videos-items total-' + _0xc836x37 + '">';
                    break;
                case 'side1':
                    _0xc836x2d = '<div class="side1-items">';
                    break;
                case 'list1':
                    _0xc836x2d = '<div class="list1-items">';
                    break;
                case 'list2':
                    _0xc836x2d = '<div class="list2-items">';
                    break;
                case 'related':
                    _0xc836x2d = '<div class="related-posts total-' + _0xc836x37 + '">'
                };
                var _0xc836xb = _0xc836x41['feed']['entry'];
                if (null != _0xc836xb) {
                    for (var _0xc836x36 = 0, _0xc836x35 = _0xc836xb; _0xc836x36 < _0xc836x35['length']; _0xc836x36++) {
                        var _0xc836x2c = getPostLink(_0xc836x35, _0xc836x36),
                            _0xc836x2e = getPostTitle(_0xc836x35, _0xc836x36, _0xc836x2c),
                            _0xc836x31 = getPostImage(_0xc836x35, _0xc836x36, _0xc836x2c),
                            _0xc836x32 = getPostMeta(getPostAuthor(_0xc836x35, _0xc836x36), getPostDate(_0xc836x35, _0xc836x36)),
                            _0xc836x2f = gofeatureds(_0xc836x29, _0xc836x36, _0xc836x32),
                            _0xc836x69 = getPostTag(_0xc836x35, _0xc836x36),
                            _0xc836x34 = (_0xc836x35['length'], '');
                        switch (_0xc836x29) {
                        case 'msimple':
                            _0xc836x34 += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>';
                            break;
                        case 'featured1':
                            ;
                        case 'featured2':
                            ;
                        case 'featured3':
                            ;
                        case 'featured4':
                            switch (_0xc836x36) {
                            case 0:
                                _0xc836x34 += '<article class="featured-item item-' + _0xc836x36 + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a>' + _0xc836x69 + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x2f + '</div></div></article><div class="featured-scroll">';
                                break;
                            default:
                                _0xc836x34 += '<article class="featured-item item-' + _0xc836x36 + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a>' + _0xc836x69 + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x2f + '</div></div></article>'
                            };
                            break;
                        case 'featured5':
                            switch (_0xc836x36) {
                            default:
                                _0xc836x34 += '<article class="featured-item item-' + _0xc836x36 + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a>' + _0xc836x69 + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x2f + '</div></div></article>'
                            };
                            break;
                        case 'block1':
                            switch (_0xc836x36) {
                            case 0:
                                _0xc836x34 += '<article class="block-item item-' + _0xc836x36 + '"><div class="block-inner">' + _0xc836x69 + '<a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[0] + '</div></div></article>';
                                break;
                            default:
                                _0xc836x34 += '<article class="block-item item-' + _0xc836x36 + '"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>'
                            };
                            break;
                        case 'block2':
                            switch (_0xc836x36) {
                            case 0:
                                _0xc836x34 += '<article class="block-item item-' + _0xc836x36 + '"><div class="block-inner">' + _0xc836x69 + '<a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[0] + getPostSummary(_0xc836x35, _0xc836x36, 150) + '</div></div></article>';
                                break;
                            default:
                                _0xc836x34 += '<article class="block-item item-' + _0xc836x36 + '"><div class="entry-image"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>'
                            };
                            break;
                        case 'col-left':
                            ;
                        case 'col-right':
                            switch (_0xc836x36) {
                            case 0:
                                _0xc836x34 += '<article class="column-item item-' + _0xc836x36 + '"><div class="column-inner">' + _0xc836x69 + '<a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[0] + '</div></div></article>';
                                break;
                            default:
                                _0xc836x34 += '<article class="column-item item-' + _0xc836x36 + '"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>'
                            };
                            break;
                        case 'grid1':
                            _0xc836x34 += '<article class="grid-item item-' + _0xc836x36 + '"><div class="entry-image"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>';
                            break;
                        case 'grid2':
                            _0xc836x34 += '<article class="grid-item item-' + _0xc836x36 + '"><div class="entry-image">' + _0xc836x69 + '<a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2></div></article>';
                            break;
                        case 'videos':
                            _0xc836x34 += '<article class="videos-item item-' + _0xc836x36 + '"><div class="videos-inner">' + _0xc836x69 + '<a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[0] + '</div></div></article>';
                            break;
                        case 'side1':
                            switch (_0xc836x36) {
                            case 0:
                                _0xc836x34 += '<article class="side1-item item-' + _0xc836x36 + '"><div class="side1-inner">' + _0xc836x69 + '<a class="entry-image-link before-mask" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[0] + '</div></div></article>';
                                break;
                            default:
                                _0xc836x34 += '<article class="side1-item item-' + _0xc836x36 + '"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>'
                            };
                            break;
                        case 'list1':
                            switch (_0xc836x52) {
                            case 'comments':
                                _0xc836x34 += getPostComments(_0xc836x35, _0xc836x36, _0xc836x2c);
                                break;
                            default:
                                _0xc836x34 += '<article class="list1-item item-' + _0xc836x36 + '"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>'
                            };
                            break;
                        case 'list2':
                            _0xc836x34 += '<article class="list2-item item-' + _0xc836x36 + '"><div class="entry-header">' + _0xc836x32[1] + '<h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2></div></article>';
                            break;
                        case 'related':
                            _0xc836x34 += '<article class="related-item post item-' + _0xc836x36 + '"><div class="entry-image"><a class="entry-image-link" href="' + _0xc836x2c + '"><span class="entry-thumb" data-image="' + _0xc836x31 + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + _0xc836x2c + '">' + _0xc836x2e + '</a></h2>' + _0xc836x32[1] + '</div></article>'
                        };
                        _0xc836x2d += _0xc836x34
                    }
                } else {
                    switch (_0xc836x29) {
                    case 'msimple':
                        _0xc836x2d = '<ul class="mega-items">' + msgError() + '</ul>';
                        break;
                    default:
                        _0xc836x2d = msgError()
                    }
                };
                switch (_0xc836x29) {
                case 'msimple':
                    _0xc836x2d += '</ul>', _0xc836x24['append'](_0xc836x2d)['addClass']('msimple'), _0xc836x24['find']('a:first')['attr']('href', function (_0xc836x24, _0xc836x29) {
                        switch (_0xc836x52) {
                        case 'recent':
                            _0xc836x29 = _0xc836x29['replace'](_0xc836x29, '/search');
                            break;
                        default:
                            _0xc836x29 = _0xc836x29['replace'](_0xc836x29, '/search/label/' + _0xc836x52)
                        };
                        return _0xc836x29
                    });
                    break;
                case 'featured1':
                    ;
                case 'featured2':
                    ;
                case 'featured3':
                    ;
                case 'featured4':
                    ;
                case 'featured5':
                    _0xc836x2d += '</div></div>', _0xc836x24['html'](_0xc836x2d);
                    break;
                default:
                    _0xc836x2d += '</div>', _0xc836x24['html'](_0xc836x2d)
                };
                _0xc836x24['find']('span.entry-thumb')['lazy']()
            },
            error: function () {
                switch (_0xc836x29) {
                case 'msimple':
                    _0xc836x24['append']('<ul>' + msgError() + '</ul>');
                    break;
                default:
                    _0xc836x24['html'](msgError())
                }
            }
        })
    }
}

function ajaxMega(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x41) {
    if (_0xc836x41['match']('getmega')) {
        if ('msimple' == _0xc836x29) {
            return getAjax(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52)
        };
        _0xc836x24['append']('<ul class="mega-items">' + msgError() + '</ul>')
    }
}

function ajaxFeatured(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x41, _0xc836x2d) {
    if (_0xc836x41['match']('getfeatured')) {
        if ('featured1' == _0xc836x29 || 'featured2' == _0xc836x29 || 'featured3' == _0xc836x29 || 'featured4' == _0xc836x29 || 'featured5' == _0xc836x29) {
            return getAjax(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x2d)
        };
        _0xc836x24['html'](beforeLoader())['parent']()['addClass']('show'), setTimeout(function () {
            _0xc836x24['html'](msgError())
        }, 500)
    }
}

function ajaxBlock(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x41, _0xc836x2d) {
    if (_0xc836x41['match']('getblock')) {
        if ('block1' == _0xc836x29 || 'block2' == _0xc836x29 || 'col-left' == _0xc836x29 || 'col-right' == _0xc836x29 || 'grid1' == _0xc836x29 || 'grid2' == _0xc836x29 || 'videos' == _0xc836x29) {
            var _0xc836xb, _0xc836x36 = viewAllText;
            return _0xc836xb = '' != _0xc836x36 ? _0xc836x36 : messages['viewAll'], _0xc836x24['parent']()['find']('.widget-title')['append']('<a class="more" href="/search/label/' + _0xc836x52 + '"><span>' + _0xc836xb + '</span></a>'), getAjax(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x2d)
        };
        _0xc836x24['html'](msgError())['parent']()['addClass']('show')
    }
}

function sidelist(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x41) {
    if (_0xc836x41['match']('getwidget')) {
        if ('side1' == _0xc836x29 || 'list1' == _0xc836x29 || 'list2' == _0xc836x29) {
            return getAjax(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52)
        };
        _0xc836x24['html'](msgError())
    }
}

function ajaxRelated(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52, _0xc836x41) {
    if (_0xc836x41['match']('getrelated')) {
        return getAjax(_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52)
    }
}

function shortCode(_0xc836x24, _0xc836x29, _0xc836x37) {
    for (var _0xc836x52 = _0xc836x24['split']('$'), _0xc836x41 = /[^{\}]+(?=})/g, _0xc836x2d = 0; _0xc836x2d < _0xc836x52['length']; _0xc836x2d++) {
        var _0xc836xb = _0xc836x52[_0xc836x2d]['split']('=');
        if (_0xc836xb[0]['trim']() == _0xc836x29) {
            return null != (_0xc836x37 = _0xc836xb[1])['match'](_0xc836x41) && String(_0xc836x37['match'](_0xc836x41))['trim']()
        }
    };
    return !1
}

function beautiAvatar(_0xc836x24) {
    $(_0xc836x24)['attr']('src', function (_0xc836x24, _0xc836x29) {
        return (_0xc836x29 = _0xc836x29['replace']('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg'))['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg')
    })
}

function shortCode(_0xc836x24, _0xc836x29, _0xc836x37) {
    for (var _0xc836x52 = _0xc836x24['split']('$'), _0xc836x41 = /[^{\}]+(?=})/g, _0xc836x2d = 0; _0xc836x2d < _0xc836x52['length']; _0xc836x2d++) {
        var _0xc836xb = _0xc836x52[_0xc836x2d]['split']('=');
        if (_0xc836xb[0]['trim']() == _0xc836x29) {
            return null != (_0xc836x37 = _0xc836xb[1])['match'](_0xc836x41) && String(_0xc836x37['match'](_0xc836x41))['trim']()
        }
    };
    return !1
}
$('#smile-main-menu')['menu'](), $('#smile-main-menu-nav > li > a')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = _0xc836x24['attr']('href')['toLowerCase']()['trim']();
    'home-icon' == _0xc836x29 ? _0xc836x24['addClass']('homepage home-icon')['attr']('href', '/')['text']('') : 'home-text' == _0xc836x29 && _0xc836x24['addClass']('homepage')['attr']('href', '/')
}), $('#smile-main-menu .widget')['addClass']('show-menu'), $('#featured-wrapper')['addClass']('show'), $('.search-toggle')['on']('click', function () {
    $('body')['toggleClass']('search-active')
}), $('.blog-posts-title a.more span,.related-title a.more span')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = viewAllText;
    '' != _0xc836x29 && _0xc836x24['text'](_0xc836x29)
}), $('.post-body b')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = _0xc836x24['text']()['trim']();
    '$ads={1}' == _0xc836x29 && _0xc836x24['replaceWith']('<div id="smile-new-before-adds"/>'), '$ads={2}' == _0xc836x29 && _0xc836x24['replaceWith']('<div id="smile-new-after-adds"/>')
}), $('#smile-new-before-adds')['each'](function () {
    var _0xc836x24 = $(this);
    _0xc836x24['length'] && $('#before-adds')['appendTo'](_0xc836x24)
}), $('#smile-new-after-adds')['each'](function () {
    var _0xc836x24 = $(this);
    _0xc836x24['length'] && $('#after-adds')['appendTo'](_0xc836x24)
}), $('#smile-main-before-adds .widget')['each'](function () {
    var _0xc836x24 = $(this);
    _0xc836x24['length'] && _0xc836x24['appendTo']($('#before-adds'))
}), $('#smile-main-after-adds .widget')['each'](function () {
    var _0xc836x24 = $(this);
    _0xc836x24['length'] && _0xc836x24['appendTo']($('#after-adds'))
}), $('.post-body b')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = _0xc836x24['text']()['trim']();
    _0xc836x24['html'](), _0xc836x29['match']('left-sidebar') && _0xc836x24['replaceWith']('<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>'), _0xc836x29['match']('right-sidebar') && _0xc836x24['replaceWith']('<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>'), _0xc836x29['match']('full-width') && _0xc836x24['replaceWith']('<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>')
}), $('.smile-share-links .window')['on']('click', function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = _0xc836x24['data']('url'),
        _0xc836x37 = _0xc836x24['data']('width'),
        _0xc836x52 = _0xc836x24['data']('height'),
        _0xc836x41 = window['screen']['width'],
        _0xc836x2d = window['screen']['height'],
        _0xc836xb = Math['round'](_0xc836x41 / 2 - _0xc836x37 / 2),
        _0xc836x36 = Math['round'](_0xc836x2d / 2 - _0xc836x52 / 2);
    window['open'](_0xc836x29, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + _0xc836x37 + ',height=' + _0xc836x52 + ',left=' + _0xc836xb + ',top=' + _0xc836x36)['focus']()
}), $('.smile-share-links')['each'](function () {
    var _0xc836x24 = $(this);
    _0xc836x24['find']('.show-hid a')['on']('click', function () {
        _0xc836x24['toggleClass']('show-hidden')
    })
}), $('.about-author .author-description span a')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = _0xc836x24['text']()['trim'](),
        _0xc836x37 = _0xc836x24['attr']('href');
    _0xc836x24['replaceWith']('<li class="' + _0xc836x29 + '"><a href="' + _0xc836x37 + '" title="' + _0xc836x29 + '" target="_blank"/></li>'), $('.description-links')['append']($('.author-description span li')), $('.description-links')['addClass']('show')
}), $('#smile-main-menu li')['each'](function (_0xc836x24, _0xc836x29) {
    var _0xc836x37 = $(this),
        _0xc836x52 = _0xc836x37,
        _0xc836x41 = _0xc836x37['find']('a')['attr']('href')['trim'](),
        _0xc836x2d = _0xc836x41['toLowerCase']();
    _0xc836x24 = shortCode(_0xc836x41, 'type'), _0xc836x29 = shortCode(_0xc836x41, 'label'), _0xc836x2d['match']('getmega') && _0xc836x52['addClass']('has-sub mega-menu'), ajaxMega(_0xc836x52, _0xc836x24, 5, _0xc836x29, _0xc836x2d)
}), $('#featured .HTML .widget-content')['each'](function (_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52) {
    var _0xc836x41 = $(this),
        _0xc836x2d = _0xc836x41['text']()['trim'](),
        _0xc836xb = _0xc836x2d['toLowerCase']();
    switch (_0xc836x24 = shortCode(_0xc836x2d, 'type'), _0xc836x37 = shortCode(_0xc836x2d, 'label'), _0xc836x52 = shortCode(_0xc836x2d, 'color'), _0xc836x24) {
    case 'featured2':
        _0xc836x29 = 4;
        break;
    case 'featured3':
        _0xc836x29 = 5;
        break;
    case 'featured5':
        _0xc836x29 = 6;
        break;
    default:
        _0xc836x29 = 3
    };
    ajaxFeatured(_0xc836x41, _0xc836x24, _0xc836x29, _0xc836x37, _0xc836xb, _0xc836x52)
}), $('.smile-content-blocks .HTML .widget-content')['each'](function (_0xc836x24, _0xc836x29, _0xc836x37, _0xc836x52) {
    var _0xc836x41 = $(this),
        _0xc836x2d = _0xc836x41['text']()['trim'](),
        _0xc836xb = _0xc836x2d['toLowerCase']();
    ajaxBlock(_0xc836x41, shortCode(_0xc836x2d, 'type'), shortCode(_0xc836x2d, 'results'), shortCode(_0xc836x2d, 'label'), _0xc836xb, shortCode(_0xc836x2d, 'color'))
}), $('.smile-widget-ready .HTML .widget-content')['each'](function (_0xc836x24, _0xc836x29, _0xc836x37) {
    var _0xc836x52 = $(this),
        _0xc836x41 = _0xc836x52['text']()['trim'](),
        _0xc836x2d = _0xc836x41['toLowerCase']();
    sidelist(_0xc836x52, shortCode(_0xc836x41, 'type'), shortCode(_0xc836x41, 'results'), shortCode(_0xc836x41, 'label'), _0xc836x2d)
}), $('.smile-related-content')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = _0xc836x24['find']('.related-tag')['attr']('data-label');
    ajaxRelated(_0xc836x24, 'related', relatedPostsNum, _0xc836x29, 'getrelated')
}), $('.smile-blog-post-comments')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = commentsSystem,
        _0xc836x37 = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5"></div>',
        _0xc836x52 = 'comments-system-' + _0xc836x29;
    switch (_0xc836x29) {
    case 'blogger':
        _0xc836x24['addClass'](_0xc836x52)['show'](), $('.entry-meta .entry-comments-link')['addClass']('show'), beautiAvatar('.avatar-image-container img');
        break;
    case 'disqus':
        _0xc836x24['addClass'](_0xc836x52)['show']();
        break;
    case 'facebook':
        _0xc836x24['addClass'](_0xc836x52)['find']('#comments')['html'](_0xc836x37), _0xc836x24['show']();
        break;
    case 'hide':
        _0xc836x24['hide']();
        break;
    default:
        _0xc836x24['addClass']('comments-system-blogger')['show'](), $('.entry-meta .entry-comments-link')['addClass']('show'), beautiAvatar('.avatar-image-container img')
    };
    var _0xc836x41 = _0xc836x24['find']('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'),
        _0xc836x2d = _0xc836x24['find']('.comments .toplevel-thread > #top-continue');
    _0xc836x41['on']('click', function () {
        _0xc836x2d['show']()
    }), _0xc836x2d['on']('click', function () {
        _0xc836x2d['hide']()
    })
}), $(function () {
    $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar')['lazy'](), $('#smile-mobile-menu')['each'](function () {
        var _0xc836x24 = $(this),
            _0xc836x29 = $('#smile-main-menu-nav')['clone']();
        _0xc836x29['attr']('id', 'main-mobile-nav'), _0xc836x29['find']('.mega-items')['remove'](), _0xc836x29['find']('a.home-icon')['each'](function () {
            var _0xc836x24 = $(this),
                _0xc836x29 = _0xc836x24['attr']('data-text')['trim']();
            _0xc836x24['text'](_0xc836x29)
        }), _0xc836x29['find']('.mega-menu > a')['each'](function (_0xc836x24, _0xc836x29) {
            var _0xc836x37 = $(this),
                _0xc836x52 = _0xc836x37['attr']('href')['trim']();
            _0xc836x52['toLowerCase']()['match']('getmega') && (_0xc836x29 = 'recent' == (_0xc836x24 = shortCode(_0xc836x52, 'label')) ? '/search' : '/search/label/' + _0xc836x24, _0xc836x37['attr']('href', _0xc836x29))
        }), _0xc836x29['appendTo'](_0xc836x24), $('.mobile-menu-toggle, .hide-smile-mobile-menu, .overlay')['on']('click', function () {
            $('body')['toggleClass']('nav-active')
        }), $('.smile-mobile-menu .has-sub')['append']('<div class="submenu-toggle"/>'), $('.smile-mobile-menu .mega-menu')['find']('.submenu-toggle')['remove'](), $('.smile-mobile-menu ul li .submenu-toggle')['on']('click', function (_0xc836x24) {
            $(this)['parent']()['hasClass']('has-sub') && (_0xc836x24['preventDefault'](), $(this)['parent']()['hasClass']('show') ? $(this)['parent']()['removeClass']('show')['find']('> .m-sub')['slideToggle'](170) : $(this)['parent']()['addClass']('show')['children']('.m-sub')['slideToggle'](170))
        })
    }), $('.mobile-navbar-menu')['each'](function () {
        var _0xc836x24 = $(this);
        $('#main-navbar-menu ul.menu')['clone']()['appendTo'](_0xc836x24)
    }), $('.mobile-navbar-social')['each'](function () {
        var _0xc836x24 = $(this);
        $('#main-navbar-social ul.social')['clone']()['appendTo'](_0xc836x24)
    }), $('.main-menu-wrap .main-menu')['each'](function () {
        var _0xc836x24 = $(this);
        if (1 == fixedMenu && _0xc836x24['length'] > 0) {
            var _0xc836x29 = $(document)['scrollTop'](),
                _0xc836x37 = _0xc836x24['offset']()['top'],
                _0xc836x52 = _0xc836x24['height'](),
                _0xc836x41 = _0xc836x37 + _0xc836x52 + 50;
            $(window)['scroll'](function () {
                var _0xc836x2d = $(document)['scrollTop']();
                _0xc836x2d < $('#footer-wrapper')['offset']()['top'] - _0xc836x52 && (_0xc836x2d > _0xc836x41 ? _0xc836x24['addClass']('is-fixed') : _0xc836x2d < _0xc836x37 && _0xc836x24['removeClass']('is-fixed'), _0xc836x2d > _0xc836x29 ? _0xc836x24['removeClass']('show') : _0xc836x24['addClass']('show'), _0xc836x29 = $(document)['scrollTop']())
            })
        }
    }), $('.nav-outer')['each'](function () {
        var _0xc836x24 = $(this);
        if (1 == fixedMenu && _0xc836x24['length'] > 0) {
            var _0xc836x29 = $(document)['scrollTop'](),
                _0xc836x37 = _0xc836x24['offset']()['top'],
                _0xc836x52 = _0xc836x24['height'](),
                _0xc836x41 = _0xc836x37 + _0xc836x52;
            $(window)['scroll'](function () {
                var _0xc836x37 = $(document)['scrollTop']();
                _0xc836x37 < $('#footer-wrapper')['offset']()['top'] - _0xc836x52 && (_0xc836x37 > _0xc836x41 ? _0xc836x24['addClass']('is-fixed') : _0xc836x37 <= 0 && _0xc836x24['removeClass']('is-fixed'), _0xc836x37 > _0xc836x29 ? _0xc836x24['removeClass']('show') : _0xc836x24['addClass']('show'), _0xc836x29 = $(document)['scrollTop']())
            })
        }
    }), $('#main-wrapper,#sidebar-wrapper')['each'](function (_0xc836x24) {
        if (1 == fixedSidebar) {
            _0xc836x24 = 1 == fixedMenu ? 75 : 25;
            var _0xc836x29 = {};
            _0xc836x29['additionalMarginTop'] = _0xc836x24, _0xc836x29['additionalMarginBottom'] = 25, $(this)['theiaStickySidebar'](_0xc836x29)
        }
    }), $('p.comment-content')['each'](function () {
        var _0xc836x24 = $(this);
        _0xc836x24['replaceText'](/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0xc836x24['replaceText'](/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('.back-top')['each'](function () {
        var _0xc836x24 = $(this);
        $(window)['on']('scroll', function () {
            $(this)['scrollTop']() >= 100 ? _0xc836x24['fadeIn'](250) : _0xc836x24['fadeOut'](250), _0xc836x24['offset']()['top'] >= $('#footer-wrapper')['offset']()['top'] - 32 ? _0xc836x24['addClass']('on-footer') : _0xc836x24['removeClass']('on-footer')
        }), _0xc836x24['on']('click', function () {
            $('html, body')['animate']({
                scrollTop: 0
            }, 500)
        })
    })
}), $('.blog-post b')['each'](function () {
    var _0xc836x24 = $(this),
        _0xc836x29 = _0xc836x24['text'](),
        _0xc836x37 = _0xc836x29['toLowerCase']()['trim']();
    _0xc836x37['match']('{toc}') && (_0xc836x29 = 0 != shortCode(_0xc836x29, 'title') ? shortCode(_0xc836x29, 'title') : 'Table of Contents', _0xc836x24['replaceWith']('<div class="toc-wrap"><div class="toc-inner"><a href="javascript:;" class="toc-title" role="button" title="' + _0xc836x29 + '"><span class="toc-title-text">' + _0xc836x29 + '</span></a><ol id="toc"></ol></div></div>'), $('.toc-title')['each'](function (_0xc836x24) {
        (_0xc836x24 = $(this))['on']('click', function () {
            _0xc836x24['toggleClass']('is-expanded'), $('#toc')['slideToggle'](170)
        })
    }), $('#toc')['toc']({
        content: '.blog-post',
        headings: 'h2,h3,h4'
    }), $('#toc li a')['each'](function (_0xc836x24) {
        (_0xc836x24 = $(this))['click'](function () {
            return $('html,body')['animate']({
                scrollTop: $(_0xc836x24['attr']('href'))['offset']()['top'] - 20
            }, 500), !1
        })
    })), _0xc836x37['match']('{contactform}') && (_0xc836x24['replaceWith']('<div class="contact-form"/>'), $('.contact-form')['append']($('#ContactForm1')))
}), $('#post-body iframe')['each'](function () {
    var _0xc836x24 = $(this);
    _0xc836x24['attr']('src')['match']('www.youtube.com') && _0xc836x24['wrap']('<div class="responsive-video-wrap"/>')
});

function getSize() {
    size = $('#post-body')['css']('font-size');
    size = parseInt(size, 10);
    $('#font-size')['text'](size)
}
getSize();
$('#up-font')['on']('click', function () {
    if ((size + 2) <= 50) {
        $('#post-body')['css']('font-size', '+=2');
        $('#font-size')['text'](size += 2)
    }
});
$('#down-font')['on']('click', function () {
    if ((size - 2) >= 12) {
        $('#post-body')['css']('font-size', '-=2');
        $('#font-size')['text'](size -= 2)
    }
});
$('html')['each'](function () {
    var _0xc836x29 = $(this);
    let _0xc836x72 = document['querySelectorAll']('.darkmode-toggle span');
    let _0xc836x73 = localStorage['getItem']('darkTheme');
    if (_0xc836x73 !== null) {
        if (_0xc836x73 === 'yes') {
            document['querySelector']('html')['classList']['add']('dark');
            document['querySelector']('.darkmode-toggle .no')['classList']['remove']('active');
            document['querySelector']('.darkmode-toggle .yes')['classList']['add']('active')
        } else {
            document['querySelector']('html')['classList']['remove']('dark');
            document['querySelector']('.darkmode-toggle .no')['classList']['add']('active');
            document['querySelector']('.darkmode-toggle .yes')['classList']['remove']('active')
        }
    };
    _0xc836x72['forEach']((_0xc836x74) => {
        _0xc836x74['addEventListener']('click', (_0xc836x24) => {
            if (_0xc836x74['dataset']['darkmode'] === 'yes') {
                localStorage['setItem']('darkTheme', 'yes');
                document['querySelector']('html')['classList']['add']('dark');
                document['querySelector']('.darkmode-toggle .no')['classList']['remove']('active');
                document['querySelector']('.darkmode-toggle .yes')['classList']['add']('active');
                localStorage['setItem']('darkTheme', 'yes')
            } else {
                document['querySelector']('html')['classList']['remove']('dark');
                document['querySelector']('.darkmode-toggle .no')['classList']['add']('active');
                document['querySelector']('.darkmode-toggle .yes')['classList']['remove']('active');
                localStorage['setItem']('darkTheme', 'no')
            }
        })
    })
});
$('html')['each'](function () {
    var _0xc836x29 = $(this);
    let _0xc836x75 = document['querySelectorAll']('.read-option span');
    let _0xc836x76 = localStorage['getItem']('rdTheme');
    if (_0xc836x76 !== null) {
        if (_0xc836x76 === 'yes') {
            document['querySelector']('html')['classList']['add']('readingmode');
            document['querySelector']('.read-option .no')['classList']['remove']('active');
            document['querySelector']('.read-option .yes')['classList']['add']('active')
        } else {
            document['querySelector']('html')['classList']['remove']('readingmode');
            document['querySelector']('.read-option .no')['classList']['add']('active');
            document['querySelector']('.read-option .yes')['classList']['remove']('active')
        }
    };
    _0xc836x75['forEach']((_0xc836x74) => {
        _0xc836x74['addEventListener']('click', (_0xc836x24) => {
            if (_0xc836x74['dataset']['read'] === 'yes') {
                localStorage['setItem']('rdTheme', 'yes');
                document['querySelector']('html')['classList']['add']('readingmode');
                document['querySelector']('.read-option .no')['classList']['remove']('active');
                document['querySelector']('.read-option .yes')['classList']['add']('active');
                localStorage['setItem']('rdTheme', 'yes')
            } else {
                document['querySelector']('html')['classList']['remove']('readingmode');
                document['querySelector']('.read-option .no')['classList']['add']('active');
                document['querySelector']('.read-option .yes')['classList']['remove']('active');
                localStorage['setItem']('rdTheme', 'no')
            }
        })
    })
});
$('body')['each'](function () {
    var _0xc836x29 = $(this);
    let _0xc836x77 = document['querySelectorAll']('.box-option span');
    let _0xc836x78 = localStorage['getItem']('boxTheme');
    if (_0xc836x78 !== null) {
        if (_0xc836x78 === 'yes') {
            document['querySelector']('body')['classList']['add']('noboxed');
            document['querySelector']('.box-option .no')['classList']['remove']('active');
            document['querySelector']('.box-option .yes')['classList']['add']('active')
        } else {
            document['querySelector']('body')['classList']['remove']('noboxed');
            document['querySelector']('.box-option .no')['classList']['add']('active');
            document['querySelector']('.box-option .yes')['classList']['remove']('active')
        }
    };
    _0xc836x77['forEach']((_0xc836x74) => {
        _0xc836x74['addEventListener']('click', (_0xc836x24) => {
            if (_0xc836x74['dataset']['box'] === 'yes') {
                localStorage['setItem']('boxTheme', 'yes');
                document['querySelector']('body')['classList']['add']('noboxed');
                document['querySelector']('.box-option .no')['classList']['remove']('active');
                document['querySelector']('.box-option .yes')['classList']['add']('active');
                localStorage['setItem']('boxTheme', 'yes')
            } else {
                document['querySelector']('body')['classList']['remove']('noboxed');
                document['querySelector']('.box-option .no')['classList']['add']('active');
                document['querySelector']('.box-option .yes')['classList']['remove']('active');
                localStorage['setItem']('boxTheme', 'no')
            }
        })
    })
});
$(document)['ready'](function () {
    for (let _0xc836x79 of document['querySelectorAll']('body')) {
        if (_0xc836x79['getAttribute']('name') == 'item') {
            $('.post-nav')['each'](function () {
                var _0xc836x37 = $('a.prev-post')['attr']('href'),
                    _0xc836x36 = $('a.next-post')['attr']('href');
                $['ajax']({
                    url: _0xc836x37,
                    type: 'get',
                    success: function (_0xc836x37) {
                        var _0xc836x36 = $(_0xc836x37)['find']('h1.entry-title')['text'](),
                            _0xc836x29 = postnavPrevText,
                            _0xc836x24 = '';
                        _0xc836x24 += "<div class='nav-content'><span>" + _0xc836x29 + "</span><p class='truncate'>" + _0xc836x36 + '</p></div>', $('a.prev-post')['html'](_0xc836x24)
                    }
                }), $['ajax']({
                    url: _0xc836x36,
                    type: 'get',
                    success: function (_0xc836x37) {
                        var _0xc836x36 = $(_0xc836x37)['find']('h1.entry-title')['text'](),
                            _0xc836x29 = postnavNextText,
                            _0xc836x24 = '';
                        _0xc836x24 += "<div class='nav-content'><span>" + _0xc836x29 + "</span><p class='truncate'>" + _0xc836x36 + '</p></div>', $('a.next-post')['html'](_0xc836x24)
                    }
                })
            })
        }
    }
});
$(document)['ready'](function () {
    for (let _0xc836x79 of document['querySelectorAll']('div')) {
        if (_0xc836x79['getAttribute']('id') == 'archivepage') {
            fetch('/feeds/posts/summary?alt=json&max-results=0', {
                method: 'get',
                headers: {
                    "Content-Type": 'application/json'
                }
            })['then']((_0xc836x24) => {
                return _0xc836x24['json']()
            })['then']((_0xc836x24) => {
                _0xc836x24['feed']['category']['forEach'](function (_0xc836x24) {
                    var _0xc836x41 = '<div class="caregory-div"><h3 class="Category-archivepage">' + _0xc836x24['term'] + '</h3></div><ol class="clear">';
                    fetch('/feeds/posts/summary/-/' + _0xc836x24['term'] + '?alt=json&max-results=1000', {
                        method: 'get',
                        headers: {
                            "Content-Type": 'application/json'
                        }
                    })['then']((_0xc836x24) => {
                        return _0xc836x24['json']()
                    })['then']((_0xc836x24) => {
                        for (var _0xc836x37 = 0; _0xc836x37 < _0xc836x24['feed']['entry']['length']; _0xc836x37 += 1) {
                            var _0xc836x52 = _0xc836x24['feed']['entry'][_0xc836x37]['link']['map'](function (_0xc836x24) {
                                    return _0xc836x24['rel']
                                })['indexOf']('alternate'),
                                _0xc836x29 = _0xc836x24['feed']['entry'][_0xc836x37]['link'][_0xc836x52]['href'],
                                _0xc836x52 = _0xc836x24['feed']['entry'][_0xc836x37]['title']['$t']; - 1 !== _0xc836x29['indexOf']('.blogspot.') && (_0xc836x29 = _0xc836x29['replace']('http://', 'https://')), _0xc836x41 += "<li><a class='rico-archivepage-posts' title='" + _0xc836x52 + "' href='" + _0xc836x29 + "'>" + _0xc836x52 + '</a></li>'
                        };
                        document['querySelector']('#archivepage')['innerHTML'] += '</ol>' + _0xc836x41
                    })
                })
            })
        }
    }
});
$(document)['ready'](function () {
    for (let _0xc836x79 of document['querySelectorAll']('div')) {
        if (_0xc836x79['getAttribute']('id') == 'post-body') {
            $('#SmileRandom')['each'](function () {
                var _0xc836x36 = Math['floor'](Math['random']() * 5 + 1);
                var _0xc836x52 = '/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=' + _0xc836x36 + '&max-results=5';
                $['ajax']({
                    url: _0xc836x52,
                    type: 'get',
                    dataType: 'jsonp',
                    success: function (_0xc836x37) {
                        for (var _0xc836x24 = '', _0xc836x29 = '<ol>', _0xc836x36 = 0; _0xc836x36 < _0xc836x37['feed']['entry']['length']; _0xc836x36++) {
                            for (var _0xc836x52 = 0; _0xc836x52 < _0xc836x37['feed']['entry'][_0xc836x36]['link']['length']; _0xc836x52++) {
                                if ('alternate' == _0xc836x37['feed']['entry'][_0xc836x36]['link'][_0xc836x52]['rel']) {
                                    _0xc836x24 = _0xc836x37['feed']['entry'][_0xc836x36]['link'][_0xc836x52]['href'];
                                    break
                                }
                            };
                            var _0xc836x2c = _0xc836x37['feed']['entry'][_0xc836x36]['title']['$t'],
                                _0xc836x35 = ' ';
                            try {
                                _0xc836x35 = _0xc836x37['feed']['entry'][_0xc836x36]['category'][0]['term']
                            } catch (_0xc836x29) {
                                _0xc836x35 = ''
                            };
                            _0xc836x29 += '<li><a href="' + _0xc836x24 + '" title="' + _0xc836x2c + '" target="_blank">' + _0xc836x2c + '</a></li>'
                        };
                        (_0xc836x29 += '</ol>'), $('#SmileRandom')['each'](function () {
                            $(this)['html'](_0xc836x29)
                        })
                    }
                })
            });

            function _0xc836x7a() {
                var _0xc836x24 = this;
                this['seconds'] = 0, this['count'] = 0, this['degrees'] = 0, this['timerHTML'] = "<div class='clom radialtimer'><div class='n'></div><div class='slice'><div class='q'></div><div class='pie r'></div><div class='pie l'></div></div></div><div class='clom radialbtn'><a class='areload' data-href='false' id='btn_reload'>" + _0xc836x7c + '</a></div>', this['interval'] = null, this['timerContainer'] = null, this['number'] = null, this['slice'] = null, this['pie'] = null, this['pieRight'] = null, this['pieLeft'] = null, this['quarter'] = null, this['reload'] = null, this['history'] = '/p/' + _0xc836x7b + '.html', this['ranQuerydata'] = function () {
                    var _0xc836x37 = _0xc836x24['getQueryVariable']('url');
                    _0xc836x24['reload']['attr']('data-href', _0xc836x37)
                }, this['ranQuerybtn'] = function () {
                    'false' == _0xc836x24['reload']['attr']('data-href') ? (_0xc836x24['reload']['attr']('href', 'javascript:void(0)'), _0xc836x24['reload']['html'](_0xc836x7e), _0xc836x24['reload']['addClass']('disabled')) : (_0xc836x24['reload']['attr']('href', _0xc836x24['reload']['attr']('data-href')), _0xc836x24['reload']['html'](_0xc836x7d), _0xc836x24['reload']['addClass']('active')), _0xc836x81 && 'false' !== _0xc836x24['reload']['attr']('data-href') && window['location']['replace'](_0xc836x24['reload']['attr']('data-href'))
                }, this['getQueryVariable'] = function (_0xc836x24) {
                    for (var _0xc836x37 = window['location']['search']['substring'](1)['split']('&'), _0xc836x2d = 0; _0xc836x2d < _0xc836x37['length']; _0xc836x2d++) {
                        var _0xc836x41 = _0xc836x37[_0xc836x2d]['split']('=');
                        if (_0xc836x41[0] == _0xc836x24) {
                            return _0xc836x41[1]
                        }
                    };
                    return !1
                }, this['init'] = function (_0xc836x37, _0xc836x2d) {
                    _0xc836x24['timerContainer'] = $('#' + _0xc836x37), _0xc836x24['timerContainer']['html'](_0xc836x24['timerHTML']), _0xc836x24['number'] = _0xc836x24['timerContainer']['find']('.n'), _0xc836x24['slice'] = _0xc836x24['timerContainer']['find']('.slice'), _0xc836x24['pie'] = _0xc836x24['timerContainer']['find']('.pie'), _0xc836x24['pieRight'] = _0xc836x24['timerContainer']['find']('.pie.r'), _0xc836x24['pieLeft'] = _0xc836x24['timerContainer']['find']('.pie.l'), _0xc836x24['quarter'] = _0xc836x24['timerContainer']['find']('.q'), _0xc836x24['reload'] = _0xc836x24['timerContainer']['find']('.areload'), _0xc836x24['start'](_0xc836x2d), _0xc836x24['ranQuerydata'](), _0xc836x24['timerContainer']['length'] && history['pushState'](null, '', _0xc836x24['history'])
                }, this['start'] = function (_0xc836x37) {
                    _0xc836x24['seconds'] = _0xc836x37, _0xc836x24['interval'] = window['setInterval'](function () {
                        _0xc836x24['number']['html'](_0xc836x24['seconds'] - 1 - _0xc836x24['count']), _0xc836x24['count']++, _0xc836x24['count'] > _0xc836x24['seconds'] - 1 && clearInterval(_0xc836x24['interval']), _0xc836x24['degrees'] += 360 / _0xc836x24['seconds'], _0xc836x24['count'] >= _0xc836x24['seconds'] / 2 ? (_0xc836x24['slice']['addClass']('nc'), _0xc836x24['slice']['hasClass']('mth') || _0xc836x24['pieRight']['css']({
                            transform: 'rotate(180deg)'
                        }), _0xc836x24['pieLeft']['css']({
                            transform: 'rotate(' + _0xc836x24['degrees'] + 'deg)'
                        }), _0xc836x24['slice']['addClass']('mth'), _0xc836x24['count'] >= 0.75 * _0xc836x24['seconds'] - 1 && _0xc836x24['quarter']['remove'](), _0xc836x24['seconds'] - 1 == _0xc836x24['count'] && _0xc836x24['ranQuerybtn']()) : _0xc836x24['pie']['css']({
                            transform: 'rotate(' + _0xc836x24['degrees'] + 'deg)'
                        })
                    }, 1e3)
                }
            }
            var _0xc836x7b = void(0) !== Settingsredirect['pageName'] ? Settingsredirect['pageName'] : 'redirect',
                _0xc836x7c = void(0) !== Settingsredirect['waitingMessage'] ? Settingsredirect['waitingMessage'] : '‏جاري تهيئة الرابط',
                _0xc836x7d = void(0) !== Settingsredirect['linkReady'] ? Settingsredirect['linkReady'] : 'الرابط جاهز',
                _0xc836x7e = void(0) !== Settingsredirect['linkError'] ? Settingsredirect['linkError'] : 'رابط معطل',
                _0xc836x7f = void(0) !== Settingsredirect['waitingTimer'] ? Settingsredirect['waitingTimer'] : '10',
                _0xc836x80 = void(0) !== Settingsredirect['autoRedirectSites'] ? Settingsredirect['autoRedirectSites'] : '#',
                _0xc836x81 = void(0) !== Settingsredirect['nobuttonn'] && Settingsredirect['nobuttonn'];
            $(document)['ready'](function () {
                (new _0xc836x7a)['init']('Redirect', _0xc836x7f)
            }), $('.post-body a')['each'](function () {
                var _0xc836x24 = window['location']['origin'],
                    _0xc836x37 = window['location']['hostname'],
                    _0xc836x2d = new RegExp('(' + _0xc836x80 + '|' + _0xc836x37 + '|blogger.com|bp.blogspot.com|whatsapp:)');
                0 <= this['href']['match'](_0xc836x2d) && 0 <= this['name']['match']('more') && ($(this)['attr']('href', _0xc836x24 + '/p/' + _0xc836x7b + '.html?&url=' + $(this)['attr']('href')), $(this)['attr']('target', '_blank'))
            })
        }
    }
});
$(document)['ready'](function () {
    $('#TransBreakNews')['html']('' + BreakNews + '');
    var _0xc836x24 = window['location']['protocol'] + '//' + window['location']['hostname'];
    $['ajax']({
        url: '' + _0xc836x24 + '/feeds/posts/default?alt=json-in-script&amp;max-results=10',
        type: 'get',
        dataType: 'jsonp',
        success: function (_0xc836x24) {
            function _0xc836x37() {
                $('#recentbreaking li:first')['slideUp'](function () {
                    $(this)['appendTo']($('#recentbreaking ul'))['slideDown']()
                })
            }
            var _0xc836x36, _0xc836x41, _0xc836x29 = '',
                _0xc836x2d = _0xc836x24['feed']['entry'];
            if (void(0) !== _0xc836x2d) {
                _0xc836x29 = '<ul>';
                for (var _0xc836x35 = 0; _0xc836x35 < _0xc836x2d['length']; _0xc836x35++) {
                    for (var _0xc836x52 = 0; _0xc836x52 < _0xc836x2d[_0xc836x35]['link']['length']; _0xc836x52++) {
                        if ('alternate' == _0xc836x2d[_0xc836x35]['link'][_0xc836x52]['rel']) {
                            _0xc836x36 = _0xc836x2d[_0xc836x35]['link'][_0xc836x52]['href'];
                            break
                        }
                    };
                    _0xc836x41 = _0xc836x2d[_0xc836x35]['title']['$t'], _0xc836x29 += '<li><a href="' + _0xc836x36 + '" target="_blank">' + _0xc836x41 + '</a></li>'
                };
                _0xc836x29 += '</ul>', $('#recentbreaking')['html'](_0xc836x29), setInterval(function () {
                    _0xc836x37()
                }, 5e3)
            } else {
                $('#recentbreaking')['html']('<span>< /span>')
            }
        },
        error: function () {
            $('#recentbreaking')['html']('<strong>' + error + '</strong>')
        }
    })
});
'true' == AdBlock && ! function () {
    function _0xc836x24() {
        var _0xc836x24 = document['createElement']('div');
        _0xc836x24['id'] = 'levelmaxblock', _0xc836x24['innerHTML'] = '<div id="AdBlockBlocker"><div class="inner"><img src="' + AdBlockImage + '" alt="adblock" width="800px" height="600px" title="adblock"/></div></div>', document['body']['append'](_0xc836x24), document['body']['style']['overflow'] = 'hidden'
    }
    var _0xc836x37 = document['createElement']('script');
    _0xc836x37['type'] = 'text/javascript', _0xc836x37['async'] = !0, _0xc836x37['src'] = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', _0xc836x37['onerror'] = function () {
        _0xc836x24(), window['adblock'] = !0
    };
    var _0xc836x2d = document['getElementsByTagName']('script')[0];
    _0xc836x2d['parentNode']['insertBefore'](_0xc836x37, _0xc836x2d)
}();
'true' == noCopy && $(document)['ready'](function () {
    function _0xc836x82(_0xc836x24) {
        return false
    }

    function _0xc836x83() {
        return true
    }
    document['onselectstart'] = new Function('return false');
    if (window['sidebar']) {
        document['onmousedown'] = disableselectdocument['onclick'] = _0xc836x83
    }
});
'true' == Toc && $(document)['ready'](function () {
    $('.toc')['css']('display', 'none')
});
'true' == FontSize && $(document)['ready'](function () {
    $('.range_slider')['css']('display', 'none')
});
'true' == settingsBox && $(document)['ready'](function () {
    $('.settings-box')['css']('display', 'none'), $('.toggle-settings')['css']('display', 'none'), $('.toggle-setting')['css']('display', 'none')
});
var perPage = 7;
var numPages = 100;
var urlactivepage = location['href'];
var home_page = '/';
var noPage;
var currentPage;
var currentPageNo;
var postLabel;
pagecurrentg();

function looppagecurrentg(_0xc836x8d) {
    var _0xc836x8e = '';
    pageNumber = parseInt(numPages / 2);
    if (pageNumber == numPages - pageNumber) {
        numPages = pageNumber * 2 + 1
    };
    pageStart = currentPageNo - pageNumber;
    if (pageStart < 1) {
        pageStart = 1
    };
    lastPageNo = parseInt(_0xc836x8d / perPage) + 1;
    if (lastPageNo - 1 == _0xc836x8d / perPage) {
        lastPageNo = lastPageNo - 1
    };
    pageEnd = pageStart + numPages - 1;
    if (pageEnd > lastPageNo) {
        pageEnd = lastPageNo
    };
    if (pageStart > 1) {
        if (currentPage == 'page') {
            _0xc836x8e += '<span><a href="' + home_page + '">1</a></span>'
        } else {
            _0xc836x8e += '<span><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
        }
    };
    if (pageStart > 2) {
        _0xc836x8e += ' ... '
    };
    for (var _0xc836x8f = pageStart; _0xc836x8f <= pageEnd; _0xc836x8f++) {
        if (currentPageNo == _0xc836x8f) {
            _0xc836x8e += '<span class="current">' + _0xc836x8f + '</span>'
        } else {
            if (_0xc836x8f == 1) {
                if (currentPage == 'page') {
                    _0xc836x8e += '<span><a href="' + home_page + '">1</a></span>'
                } else {
                    _0xc836x8e += '<span><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
                }
            } else {
                if (currentPage == 'page') {
                    _0xc836x8e += '<span><a href="#" onclick="redirectpage(' + _0xc836x8f + ');return false">' + _0xc836x8f + '</a></span>'
                } else {
                    _0xc836x8e += '<span><a href="#" onclick="redirectlabel(' + _0xc836x8f + ');return false">' + _0xc836x8f + '</a></span>'
                }
            }
        }
    };
    if (pageEnd < lastPageNo) {
        if (currentPage == 'page') {
            _0xc836x8e += '<span><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
        } else {
            _0xc836x8e += '<span><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
        }
    };
    var _0xc836x90 = document['getElementsByName']('pageArea');
    var _0xc836x91 = document['getElementById']('blog-pager');
    for (var _0xc836x92 = 0; _0xc836x92 < _0xc836x90['length']; _0xc836x92++) {
        _0xc836x90[_0xc836x92]['innerHTML'] = _0xc836x8e
    };
    if (_0xc836x90 && _0xc836x90['length'] > 0) {
        _0xc836x8e = ''
    };
    if (_0xc836x91) {
        _0xc836x91['innerHTML'] = _0xc836x8e
    }
}

function totalcountdata(_0xc836x94) {
    var _0xc836x95 = _0xc836x94['feed'];
    var _0xc836x96 = parseInt(_0xc836x95['openSearch$totalResults'].$t, 10);
    looppagecurrentg(_0xc836x96)
}

function pagecurrentg() {
    var _0xc836x98 = urlactivepage;
    if (_0xc836x98['indexOf']('/search/label/') != -1) {
        if (_0xc836x98['indexOf']('?updated-max') != -1) {
            postLabel = _0xc836x98['substring'](_0xc836x98['indexOf']('/search/label/') + 14, _0xc836x98['indexOf']('?updated-max'))
        } else {
            postLabel = _0xc836x98['substring'](_0xc836x98['indexOf']('/search/label/') + 14, _0xc836x98['indexOf']('?&max'))
        }
    };
    if (_0xc836x98['indexOf']('?q=') == -1 && _0xc836x98['indexOf']('.html') == -1) {
        if (_0xc836x98['indexOf']('/search/label/') == -1) {
            currentPage = 'page';
            if (urlactivepage['indexOf']('#PageNo=') != -1) {
                currentPageNo = urlactivepage['substring'](urlactivepage['indexOf']('#PageNo=') + 8, urlactivepage['length'])
            } else {
                currentPageNo = 1
            };
            var _0xc836x24 = document['createElement']('script');
            _0xc836x24['type'] = 'text/javascript', _0xc836x24['async'] = !0, _0xc836x24['src'] = '' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata';
            var _0xc836x29 = document['getElementsByTagName']('script')[0];
            _0xc836x29['parentNode']['insertBefore'](_0xc836x24, _0xc836x29)
        } else {
            currentPage = 'label';
            if (_0xc836x98['indexOf']('&max-results=') == -1) {
                perPage = 20
            };
            if (urlactivepage['indexOf']('#PageNo=') != -1) {
                currentPageNo = urlactivepage['substring'](urlactivepage['indexOf']('#PageNo=') + 8, urlactivepage['length'])
            } else {
                currentPageNo = 1
            };
            var _0xc836x24 = document['createElement']('script');
            _0xc836x24['type'] = 'text/javascript', _0xc836x24['async'] = !0, _0xc836x24['src'] = "' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1";
            var _0xc836x29 = document['getElementsByTagName']('script')[0];
            _0xc836x29['parentNode']['insertBefore'](_0xc836x24, _0xc836x29)
        }
    }
}

function redirectpage(_0xc836x9a) {
    jsonstart = (_0xc836x9a - 1) * perPage;
    noPage = _0xc836x9a;
    var _0xc836x9b = document['getElementsByTagName']('head')[0];
    var _0xc836x9c = document['createElement']('script');
    _0xc836x9c['type'] = 'text/javascript';
    _0xc836x9c['setAttribute']('src', home_page + 'feeds/posts/summary?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=finddatepost');
    _0xc836x9b['appendChild'](_0xc836x9c)
}

function redirectlabel(_0xc836x9a) {
    jsonstart = (_0xc836x9a - 1) * perPage;
    noPage = _0xc836x9a;
    var _0xc836x9b = document['getElementsByTagName']('head')[0];
    var _0xc836x9c = document['createElement']('script');
    _0xc836x9c['type'] = 'text/javascript';
    _0xc836x9c['setAttribute']('src', home_page + 'feeds/posts/summary/-/' + postLabel + '?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=finddatepost');
    _0xc836x9b['appendChild'](_0xc836x9c)
}

function finddatepost(_0xc836x94) {
    post = _0xc836x94['feed']['entry'][0];
    var _0xc836x9f = post['published']['$t']['substring'](0, 19) + post['published']['$t']['substring'](23, 29);
    var _0xc836xa0 = encodeURIComponent(_0xc836x9f);
    if (currentPage == 'page') {
        var _0xc836xa1 = '/search?updated-max=' + _0xc836xa0 + '&max-results=' + perPage + '#PageNo=' + noPage
    } else {
        var _0xc836xa1 = '/search/label/' + postLabel + '?updated-max=' + _0xc836xa0 + '&max-results=' + perPage + '#PageNo=' + noPage
    };
    location['href'] = _0xc836xa1
}

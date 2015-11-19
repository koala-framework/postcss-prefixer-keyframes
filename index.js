var postcss = require('postcss');

module.exports = postcss.plugin('postcss-web-prefixer', function (opts) {
    opts = opts || {};

    var prefix = opts.prefix || '';

    var usedKeyframes = [];
    var usedFonts = [];

    return function (css, result) {

        /* Keyframes */
        css.walkAtRules(/keyframes/, function (keyframes) {
            usedKeyframes.push(keyframes.params);
            keyframes.params = String(prefix+keyframes.params);
        });

        css.walkDecls(/animation/, function (decl) {
            var animationName = decl.value.split(' ');
            if (usedKeyframes.indexOf(animationName[0]) > -1) {
                animationName[0] = String(prefix + animationName[0]);
                decl.value = animationName.join(' ');
            }
        });

        /* Font Faces */
        css.walkAtRules(/font-face/, function (font) {
            font.walkDecls(/font-family/, function (decl) {
                usedFonts.push(decl.value);
                decl.value = String(prefix+decl.value);
            });
        });

        css.walkDecls(/font-family/, function (decl) {
            if (usedFonts.indexOf(decl.value) > -1) {
                decl.value = String(prefix + decl.value);
            }
        });
    };
});

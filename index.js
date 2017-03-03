var postcss = require('postcss');

module.exports = postcss.plugin('postcss-prefixer-keyframes', function (opts) {
    opts = opts || {};

    var prefix = opts.prefix || '';

    var usedKeyframes = [];

    return function (css, result) {

        /* Keyframes */
        css.walkAtRules(/keyframes$/, function (keyframes) {
            usedKeyframes.push(keyframes.params);
            keyframes.params = String(prefix+keyframes.params);
        });

        css.walkDecls(/animation/, function (decl) {
            var animations = decl.value.split(',');

            for (var i=0; i<animations.length; i++) {
                var animationName = animations[i].trim().split(' ');
                if (usedKeyframes.indexOf(animationName[0]) > -1) {
                    animationName[0] = String(prefix + animationName[0]);
                }
                animations[i] = animationName.join(' ');
            }
            decl.value = animations.join(',');
        });
    };
});

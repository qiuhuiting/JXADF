!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ro",[],function(){return{inputTooLong:function(e){var n=e.input.length-e.maximum,r="Vă rugăm să introduceți mai puțin de "+n;return r+=" caracter",1!==r&&(r+="e"),r},inputTooShort:function(e){var n=e.minimum-e.input.length,r="Vă rugăm să introduceți incă "+n;return r+=" caracter",1!==r&&(r+="e"),r},loadingMore:function(){return"Se încarcă…"},maximumSelected:function(e){var n="Aveți voie să selectați cel mult "+e.maximum;return n+=" element",1!==n&&(n+="e"),n},noResults:function(){return"Nu a fost găsit nimic"},searching:function(){return"Căutare…"}}}),{define:e.define,require:e.require}}();
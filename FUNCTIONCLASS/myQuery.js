
    !function() {
        var jj = function(sel) {
            this.prev = sel; // 최초 선택자를 prev속성에 저장
            var elems = document.querySelectorAll(sel);
            this.length = elems.length;
            for(var i = 0; i <this.length; i++) {
            this[i] = elems[i];
        }
        return this;
    }

    var $ = function(sel) {
        return new jj(sel);
        }

        window.$ = $; 

        $.fn = jj.prototype; 
    }();
    $.fn.eq = function(idx) {
        this[0] = this[idx];
        for(var i = 0; i <this.length; i++) {
            delete this[i];
        }
        return this;
    }

    $.fn.html = function(arg) {
        if(typeof(arg) == "undefined") { 
            return this[0].innerHTML; 
        }
        if(typeof(arg) == "string") { 
            for(var i = 0; i < this.length; i++) {
                this[i].innerHTML = arg;
            }
            return this;
        }
        if(typeof(arg) == "function") {
            for(var i = 0; i < this.length; i++) {
                this[i].innerHTML = arg.call(this[i], i, this[i].innerHTML); 
            }
            return this;
        }
    }

    $.fn.eq = function(idx) {
        this[0] = this[idx];
        for(var i = 0; i <this.length; i++) {
            delete this[i];
        }
        this.length = 1; // 1개
        return this;
    }
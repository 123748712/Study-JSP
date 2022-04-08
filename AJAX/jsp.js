// 추상화
    var request = {};
    request.getParameter = function (p_name) {
        if(location.href.indexOf("?") == -1) { // 찾으면 index값을 return, 없으면 -1 return
            return null;
        }
        var v_queryString = location.href.split("?")[1];
        var v_params = v_queryString.split("&");
        for(var i = 0; i < v_params.length; i++) {
            var v_name = v_params[i].split("=")[0];
            var v_value = v_params[i].split("=")[1];
            if(v_name == p_name) {
                return decodeURIComponent(v_value).replaceAll("+", " "); // replaceAll("변경전문자", "변경할문자")
            }
        }
        return null;
    }
    // alert(request.getParameter("nm_title"));

    // 배열로 담을 때
    request.getParameterValues = function (p_name) {
        if(location.href.indexOf("?") == -1) { // 찾으면 index값을 return, 없으면 -1 return
            return null;
        }
        var v_values = []; // 찾은 값들을 담을 빈 배열
        var v_queryString = location.href.split("?")[1];
        var v_params = v_queryString.split("&");
       
        for(var i = 0; i < v_params.length; i++) {
            var v_name = v_params[i].split("=")[0];
            var v_value = v_params[i].split("=")[1];
            if(v_name == p_name) { // 찾았다면 배열에 담음, return X
                v_values.push(decodeURIComponent(v_value).replaceAll("+", " "));
            }
        }
        if(!v_values.length) {
            return null;
        }
        return v_values;
    }

    var out = {}; // 네임스페이스용 빈 객체
    
    out.print = document.write.bind(document);
    
    out.println = function (p_msg) {
        document.write(p_msg + "<br>");
    }
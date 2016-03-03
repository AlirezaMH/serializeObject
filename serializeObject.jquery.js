$.fn.serializeObject = function() {
    var inputs = this.serializeArray();
    var values = {};
    var rev = function(matches, val, obj){
        if(!matches.length) return val;
        
        var name = matches.shift();
        if(name == ''){
            if(obj == null) obj = [];
            obj.push(rev(matches, val, obj));
        }else{
            if(obj == null) obj = {};
            if(!obj[name]) obj[name] = null;
            obj[name] = rev(matches, val, obj[name]);
        }
        return obj;
    };

    for(var v in inputs){
        if(!inputs[v].name) continue;
        var matches = inputs[v].name.trim().replace(/\[/g, ' ').replace(/\]/g, '').split(' ');
        if(!matches) continue;
        values = rev(matches, inputs[v].value, values);
    }

    return values;
};
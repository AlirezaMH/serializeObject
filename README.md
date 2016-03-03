# jQuery Serialize Object

Encode a set of form elements as an **multi-dimensional object** of names and values.
# Usage
 **HTML:** 
 
     <form>
      <input name="element[a][]" value="a1">
      <input name="element[a][]" value="a2">
      <input name="element[b][]" value="b1">
      <input name="element[b][]" value="b2">
      <input name="element[c]" value="c1">
     </form>

**JS:**
    
    $('form').serializeObject();
    
**Output:**

    {
    	"element": {
    		"a": [
    		    "a1",
    		    "a2"
    		 ],
    		"b": [
    		    "b1",
    		    "b2"
    	    ],
    		"c": "c1"
    	}
    }

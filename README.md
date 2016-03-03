# jQuery Serialize Object

Encode a set of form elements as an **multi-dimensional object** of names and values.
# Usage
 **HTML:** 
 
     <form>
      <div class="input"><input type="hidden" name="element[a][]" value="a1"></div>
      <div class="input"><input type="hidden" name="element[a][]" value="a2"></div>
      <div class="input"><input type="hidden" name="element[b][]" value="b1"></div>
      <div class="input"><input type="hidden" name="element[b][]" value="b2"></div>
      <div class="input"><input type="hidden" name="element[c]" value="c1"></div>
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

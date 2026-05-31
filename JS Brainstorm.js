const QUESTIONS = {
  'js-basics-beginner': `
<h4 class="mb-4 py-4 text-success">JS Basics - Beginner</h4>
            <p><strong>1. Which symbol is used for single-line comments?</strong></p>
            <label><input type="radio" name="q1" value="A"> !! </label><br>
            <label><input type="radio" name="q1" value="B"> //</label><br>
            <label><input type="radio" name="q1" value="C"> /* */</label><br>
            <label><input type="radio" name="q1" value="D"> ##</label><br>



            <p class="mt-3"><strong>2. What will <code> typeof "Hello"</code> return?</strong></p>
            <label><input type="radio" name="q2" value="A"> object</label><br>
            <label><input type="radio" name="q2" value="B"> string</label><br>
            <label><input type="radio" name="q2" value="C"> number</label><br>
            <label><input type="radio" name="q2" value="D"> boolean</label><br><br>



            <p><strong>3. Which symbol is used for assignment?</strong></p>
            <label><input type="radio" name="q3" value="A"> ==</label><br>
            <label><input type="radio" name="q3" value="B"> ===</label><br>
            <label><input type="radio" name="q3" value="C"> =</label><br>
            <label><input type="radio" name="q3" value="D"> !=</label><br>


            <p class="mt-3"><strong>4.What does <code> console.log()</code> do?</strong></p>
            <label><input type="radio" name="q4" value="A"> Shows output in browser</label><br>
            <label><input type="radio" name="q4" value="B"> Logs output to console</label><br>
            <label><input type="radio" name="q4" value="C"> Saves data</label><br>
            <label><input type="radio" name="q4" value="D"> Alerts user</label><br><br>



            <p><strong>5. Which keyword is block-scoped?</strong></p>
            <label><input type="radio" name="q5" value="A"> var</label><br>
            <label><input type="radio" name="q5" value="B"> let</label><br>
            <label><input type="radio" name="q5" value="C"> none</label><br>
            <label><input type="radio" name="q5" value="D"> both</label><br>


            <p class="mt-3"><strong>6. What is the output of 2 + "2"?</strong></p>
            <label><input type="radio" name="q6" value="A"> 4</label><br>
            <label><input type="radio" name="q6" value="B"> 22</label><br>
            <label><input type="radio" name="q6" value="C"> NaN</label><br>
            <label><input type="radio" name="q6" value="D"> Error</label><br><br>


            <p><strong>7. Which operator checks value and type?</strong></p>
            <label><input type="radio" name="q7" value="A"> =</label><br>
            <label><input type="radio" name="q7" value="B"> ==</label><br>
            <label><input type="radio" name="q7" value="C"> ===</label><br>
            <label><input type="radio" name="q7" value="D"> !=</label><br>

            <p class="mt-3"><strong>8.What is the output of <Code> Boolean(0)</Code>?</strong></p>
            <label><input type="radio" name="q8" value="A"> true</label><br>
            <label><input type="radio" name="q8" value="B"> false</label><br>
            <label><input type="radio" name="q8" value="C"> undefined</label><br>
            <label><input type="radio" name="q8" value="D"> null</label><br><br>


            <p><strong>9. Which data type is NOT primitive??</strong></p>
            <label><input type="radio" name="q9" value="A"> string</label><br>
            <label><input type="radio" name="q9" value="B"> number</label><br>
            <label><input type="radio" name="q9" value="C"> object</label><br>
            <label><input type="radio" name="q9" value="D"> boolean</label><br>


            <p class="mt-3"><strong>10. Which method converts string to integer?</strong></p>
            <label><input type="radio" name="q10" value="A"> parseInt()</label><br>
            <label><input type="radio" name="q10" value="B"> toString()</label><br>
            <label><input type="radio" name="q10" value="C"> Number()</label><br>
            <label><input type="radio" name="q10" value="D"> Both A and C</label><br><br>

            <p><strong>11. What is null?</strong></p>
            <label><input type="radio" name="q11" value="A"> Undefined variable</label><br>
            <label><input type="radio" name="q11" value="B"> Empty value</label><br>
            <label><input type="radio" name="q11" value="C"> Zero</label><br>
            <label><input type="radio" name="q11" value="D"> Error</label><br>



            <p class="mt-3"><strong>12. Which keyword defines a function??</strong></p>
            <label><input type="radio" name="q12" value="A"> func</label><br>
            <label><input type="radio" name="q12" value="B"> function</label><br>
            <label><input type="radio" name="q12" value="C"> def</label><br>
            <label><input type="radio" name="q12" value="D"> method</label><br><br>


            <p><strong>13. What does return do?</strong></p>
            <label><input type="radio" name="q13" value="A"> Stops function</label><br>
            <label><input type="radio" name="q13" value="B"> Sends value back</label><br>
            <label><input type="radio" name="q13" value="C"> Prints output</label><br>
            <label><input type="radio" name="q13" value="D"> Loops code</label><br>


            <p class="mt-3"><strong>14. Which symbol defines an array?</strong></p>
            <label><input type="radio" name="q14" value="A"> ()</label><br>
            <label><input type="radio" name="q14" value="B"> {}</label><br>
            <label><input type="radio" name="q14" value="C"> []</label><br>
            <label><input type="radio" name="q14" value="D">
                <>
            </label><br><br>



            <p><strong>15. What is index of first array element?</strong></p>
            <label><input type="radio" name="q15" value="A"> 1</label><br>
            <label><input type="radio" name="q15" value="B"> 0</label><br>
            <label><input type="radio" name="q15" value="C"> -1</label><br>
            <label><input type="radio" name="q15" value="D"> null</label><br>


            <p class="mt-3"><strong>16. Which method adds item to array end?</strong></p>
            <label><input type="radio" name="q16" value="A"> push()</label><br>
            <label><input type="radio" name="q16" value="B"> pop()</label><br>
            <label><input type="radio" name="q16" value="C"> shift()</label><br>
            <label><input type="radio" name="q16" value="D"> unshift()</label><br><br>


            <p><strong>17. What does if statement do?</strong></p>
            <label><input type="radio" name="q17" value="A"> Loops code</label><br>
            <label><input type="radio" name="q17" value="B"> Checks condition</label><br>
            <label><input type="radio" name="q17" value="C"> Declares variable</label><br>
            <label><input type="radio" name="q17" value="D"> Calls function</label><br>


            <p class="mt-3"><strong>18. Which loop repeats code?</strong></p>
            <label><input type="radio" name="q18" value="A"> if</label><br>
            <label><input type="radio" name="q18" value="B"> for</label><br>
            <label><input type="radio" name="q18" value="C"> return</label><br>
            <label><input type="radio" name="q18" value="D"> break</label><br><br>


            <p><strong>19. What does continue do?</strong></p>
            <label><input type="radio" name="q19" value="A"> Stops loop</label><br>
            <label><input type="radio" name="q19" value="B"> Skips current iteration</label><br>
            <label><input type="radio" name="q19" value="C"> Ends function</label><br>
            <label><input type="radio" name="q19" value="D"> Restarts program</label><br><br>


            <p><strong>20.Which event occurs when user clicks?</strong></p>
            <label><input type="radio" name="q20" value="A"> onhover</label><br>
            <label><input type="radio" name="q20" value="B"> onclick</label><br>
            <label><input type="radio" name="q20" value="C"> onchange</label><br>
            <label><input type="radio" name="q20" value="D"> onload</label><br><br>



            <p><strong>21. What will <code> console.log(1 === "1")</code> return?</strong></p>
            <label><input type="radio" name="q21" value="A"> true</label><br>
            <label><input type="radio" name="q21" value="B"> false</label><br>
            <label><input type="radio" name="q21" value="C"> error</label><br>
            <label><input type="radio" name="q21" value="D"> undefined</label><br>



            <p class="mt-3"><strong>22. What is the output of <code> console.log(null == undefined)</code>?</strong></p>
            <label><input type="radio" name="q22" value="A"> true</label><br>
            <label><input type="radio" name="q22" value="B"> false</label><br>
            <label><input type="radio" name="q22" value="C"> error</label><br>
            <label><input type="radio" name="q22" value="D"> NaN</label><br><br>


            <p><strong>23. What will <code> console.log(0 == false)</code> return?</strong></p>
            <label><input type="radio" name="q23" value="A"> true</label><br>
            <label><input type="radio" name="q23" value="B"> false</label><br>
            <label><input type="radio" name="q23" value="C"> error</label><br>
            <label><input type="radio" name="q23" value="D"> undefined</label><br>


            <p class="mt-3"><strong>24. What is the output of <code> console.log("5" - 2)</code>?</strong></p>
            <label><input type="radio" name="q24" value="A"> "52"</label><br>
            <label><input type="radio" name="q24" value="B"> 3</label><br>
            <label><input type="radio" name="q24" value="C"> NaN</label><br>
            <label><input type="radio" name="q24" value="D"> undefined</label><br><br>



            <p><strong>25.What will <code> console.log(true + 1)</code> return?</strong></p>
            <label><input type="radio" name="q25" value="A"> 2</label><br>
            <label><input type="radio" name="q25" value="B"> 1</label><br>
            <label><input type="radio" name="q25" value="C"> true</label><br>
            <label><input type="radio" name="q25" value="D"> NaN</label><br>


            <p class="mt-3"><strong>26. What does <code> typeof NaN</code> return?</strong></p>
            <label><input type="radio" name="q26" value="A"> NaN</label><br>
            <label><input type="radio" name="q26" value="B"> number</label><br>
            <label><input type="radio" name="q26" value="C"> undefined</label><br>
            <label><input type="radio" name="q26" value="D"> object</label><br><br>


            <p><strong>27. What is the output of <code> console.log([] + {})</code>?</strong></p>
            <label><input type="radio" name="q27" value="A"> "[object Object]"</label><br>
            <label><input type="radio" name="q27" value="B"> Error</label><br>
            <label><input type="radio" name="q27" value="C"> NaN</label><br>
            <label><input type="radio" name="q27" value="D"> undefined</label><br>


            <p class="mt-3"><strong>28.What will <code> let x; console.log(x)</code> return?</strong></p>
            <label><input type="radio" name="q28" value="A"> null</label><br>
            <label><input type="radio" name="q28" value="B"> undefined</label><br>
            <label><input type="radio" name="q28" value="C"> 0</label><br>
            <label><input type="radio" name="q28" value="D"> error</label><br><br>


            <p><strong>29. What is the output of <code>console.log(!!"hello")</code> ?</strong></p>
            <label><input type="radio" name="q29" value="A"> false</label><br>
            <label><input type="radio" name="q29" value="B"> true</label><br>
            <label><input type="radio" name="q29" value="C"> undefined</label><br>
            <label><input type="radio" name="q29" value="D"> error</label><br><br>

            <p><strong>30. What does <code> !!value</code> do?</strong></p>
            <label><input type="radio" name="q30" value="A"> Converts to string</label><br>
            <label><input type="radio" name="q30" value="B"> Converts to boolean</label><br>
            <label><input type="radio" name="q30" value="C"> Converts to number</label><br>
            <label><input type="radio" name="q30" value="D"> Negates value twice randomly</label><br><br>


        
            <p><strong>31. What will <code>typeof []</code> return?</strong></p>
            <label><input type="radio" name="q31" value="A"> "array"</label><br>
            <label><input type="radio" name="q31" value="B"> "object"</label><br>
            <label><input type="radio" name="q31" value="C"> "undefined"</label><br>
            <label><input type="radio" name="q31" value="D"> "list"</label><br>
            <p class="mt-3">
                <strong>32. What is the output?</strong><br>
                <code>console.log(2 ** 3);</code>
            </p>
            <label><input type="radio" name="q32" value="A"> 6</label><br>
            <label><input type="radio" name="q32" value="B"> 9</label><br>
            <label><input type="radio" name="q32" value="C"> 8</label><br>
            <label><input type="radio" name="q32" value="D"> Error</label><br><br>
            <p><strong>33. What does <code>isNaN("hello")</code> return?</strong></p>
            <label><input type="radio" name="q33" value="A"> false</label><br>
            <label><input type="radio" name="q33" value="B"> true</label><br>
            <label><input type="radio" name="q33" value="C"> undefined</label><br>
            <label><input type="radio" name="q33" value="D"> NaN</label><br>
            <p class="mt-3"><strong>34. What does <code>"abc".length</code> return?</strong></p>
            <label><input type="radio" name="q34" value="A"> 2</label><br>
            <label><input type="radio" name="q34" value="B"> 4</label><br>
            <label><input type="radio" name="q34" value="C"> 3</label><br>
            <label><input type="radio" name="q34" value="D"> undefined</label><br><br>
            <p><strong>35. Which method converts a number to a string?</strong></p>
            <label><input type="radio" name="q35" value="A"> parseInt()</label><br>
            <label><input type="radio" name="q35" value="B"> Number()</label><br>
            <label><input type="radio" name="q35" value="C"> String()</label><br>
            <label><input type="radio" name="q35" value="D"> parseFloat()</label><br>
            <p class="mt-3">
                <strong>36. What is the output?</strong><br>
                <code>console.log(10 % 3);</code>
            </p>
            <label><input type="radio" name="q36" value="A"> 3</label><br>
            <label><input type="radio" name="q36" value="B"> 2</label><br>
            <label><input type="radio" name="q36" value="C"> 0</label><br>
            <label><input type="radio" name="q36" value="D"> 1</label><br><br>
            <p><strong>37. What does <code>Array.isArray([])</code> return?</strong></p>
            <label><input type="radio" name="q37" value="A"> false</label><br>
            <label><input type="radio" name="q37" value="B"> undefined</label><br>
            <label><input type="radio" name="q37" value="C"> true</label><br>
            <label><input type="radio" name="q37" value="D"> error</label><br>
            <p class="mt-3">
                <strong>38. What is the output?</strong><br>
                <code>console.log("hello".toUpperCase());</code>
            </p>
            <label><input type="radio" name="q38" value="A"> "Hello"</label><br>
            <label><input type="radio" name="q38" value="B"> "HELLO"</label><br>
            <label><input type="radio" name="q38" value="C"> undefined</label><br>
            <label><input type="radio" name="q38" value="D"> error</label><br><br>
            <p><strong>39. Which syntax creates an empty object?</strong></p>
            <label><input type="radio" name="q39" value="A"> []</label><br>
            <label><input type="radio" name="q39" value="B"> ()</label><br>
            <label><input type="radio" name="q39" value="C"> {}</label><br>
            <label><input type="radio" name="q39" value="D"> &lt;&gt;</label><br>
            <p class="mt-3">
                <strong>40. What is the output?</strong><br>
                <code>console.log(5 &gt; 3 ? "yes" : "no");</code>
            </p>
            <label><input type="radio" name="q40" value="A"> "no"</label><br>
            <label><input type="radio" name="q40" value="B"> undefined</label><br>
            <label><input type="radio" name="q40" value="C"> error</label><br>
            <label><input type="radio" name="q40" value="D"> "yes"</label><br><br>
            <p><strong>41. What does <code>Math.max(1, 2, 3)</code> return?</strong></p>
            <label><input type="radio" name="q41" value="A"> 1</label><br>
            <label><input type="radio" name="q41" value="B"> 2</label><br>
            <label><input type="radio" name="q41" value="C"> 6</label><br>
            <label><input type="radio" name="q41" value="D"> 3</label><br>
            <p class="mt-3"><strong>42. What does <code>"hello".charAt(0)</code> return?</strong></p>
            <label><input type="radio" name="q42" value="A"> "e"</label><br>
            <label><input type="radio" name="q42" value="B"> "hello"</label><br>
            <label><input type="radio" name="q42" value="C"> "h"</label><br>
            <label><input type="radio" name="q42" value="D"> undefined</label><br><br>
            <p>
                <strong>43. What is the output?</strong><br>
                <code>console.log(false + false);</code>
            </p>
            <label><input type="radio" name="q43" value="A"> false</label><br>
            <label><input type="radio" name="q43" value="B"> 1</label><br>
            <label><input type="radio" name="q43" value="C"> 0</label><br>
            <label><input type="radio" name="q43" value="D"> "falsefalse"</label><br>
            <p class="mt-3"><strong>44. Which of these is a falsy value?</strong></p>
            <label><input type="radio" name="q44" value="A"> "0"</label><br>
            <label><input type="radio" name="q44" value="B"> []</label><br>
            <label><input type="radio" name="q44" value="C"> 0</label><br>
            <label><input type="radio" name="q44" value="D"> {}</label><br><br>
            <p><strong>45. What does <code>typeof undefined</code> return?</strong></p>
            <label><input type="radio" name="q45" value="A"> "null"</label><br>
            <label><input type="radio" name="q45" value="B"> "object"</label><br>
            <label><input type="radio" name="q45" value="C"> "unknown"</label><br>
            <label><input type="radio" name="q45" value="D"> "undefined"</label><br>
            <p class="mt-3"><strong>46. What does <code>"abc".indexOf("b")</code> return?</strong></p>
            <label><input type="radio" name="q46" value="A"> 0</label><br>
            <label><input type="radio" name="q46" value="B"> 2</label><br>
            <label><input type="radio" name="q46" value="C"> 1</label><br>
            <label><input type="radio" name="q46" value="D"> -1</label><br><br>
            <p>
                <strong>47. What is the output?</strong><br>
                <code>console.log(3 === 3.0);</code>
            </p>
            <label><input type="radio" name="q47" value="A"> false</label><br>
            <label><input type="radio" name="q47" value="B"> undefined</label><br>
            <label><input type="radio" name="q47" value="C"> NaN</label><br>
            <label><input type="radio" name="q47" value="D"> true</label><br>
            <p class="mt-3"><strong>48. Which loop always runs at least once?</strong></p>
            <label><input type="radio" name="q48" value="A"> for</label><br>
            <label><input type="radio" name="q48" value="B"> while</label><br>
            <label><input type="radio" name="q48" value="C"> do...while</label><br>
            <label><input type="radio" name="q48" value="D"> forEach</label><br><br>
            <p><strong>49. What does <code>Number("42")</code> return?</strong></p>
            <label><input type="radio" name="q49" value="A"> "42"</label><br>
            <label><input type="radio" name="q49" value="B"> NaN</label><br>
            <label><input type="radio" name="q49" value="C"> undefined</label><br>
            <label><input type="radio" name="q49" value="D"> 42</label><br>
            <p class="mt-3">
                <strong>50. What is the output?</strong><br>
                <code>console.log(null + 1);</code>
            </p>
            <label><input type="radio" name="q50" value="A"> null</label><br>
            <label><input type="radio" name="q50" value="B"> "null1"</label><br>
            <label><input type="radio" name="q50" value="C"> 1</label><br>
            <label><input type="radio" name="q50" value="D"> NaN</label><br>
`,
  'js-basics-intermediate': `
<h4 class="mb-4 py-4 text-success">JS Basics - Intermediate</h4>
            <p><strong>1. What will this return?</strong><br><code>[1, 2, 3].map(num => num * 2);</code></p>
            <label><input type="radio" name="q1" value="A"> [1, 2, 3]</label><br>
            <label><input type="radio" name="q1" value="B"> [2, 4, 6]</label><br>
            <label><input type="radio" name="q1" value="C"> [1, 4, 9]</label><br>
            <label><input type="radio" name="q1" value="D"> undefined</label><br>



            <p class="mt-3"><strong>2. What does querySelector() return?</strong></p>
            <label><input type="radio" name="q2" value="A"> All matching elements</label><br>
            <label><input type="radio" name="q2" value="B"> First matching element</label><br>
            <label><input type="radio" name="q2" value="C"> Array of elements</label><br>
            <label><input type="radio" name="q2" value="D"> Null always</label><br><br>



            <p><strong>3. Which method adds an element at the beginning of an array?</strong></p>
            <label><input type="radio" name="q3" value="A"> push()</label><br>
            <label><input type="radio" name="q3" value="B"> unshift()</label><br>
            <label><input type="radio" name="q3" value="C"> shift()</label><br>
            <label><input type="radio" name="q3" value="D"> concat()</label><br>


            <p class="mt-3"><strong>4. What does JSON.stringify() do?</strong></p>
            <label><input type="radio" name="q4" value="A"> Converts JSON to object</label><br>
            <label><input type="radio" name="q4" value="B"> Converts object to string</label><br>
            <label><input type="radio" name="q4" value="C"> Parses JSON</label><br>
            <label><input type="radio" name="q4" value="D"> None</label><br><br>



            <p><strong>5. What will this return?</strong><br><code>Boolean("")</code></p>
            <label><input type="radio" name="q5" value="A"> true</label><br>
            <label><input type="radio" name="q5" value="B"> false</label><br>
            <label><input type="radio" name="q5" value="C"> undefined</label><br>
            <label><input type="radio" name="q5" value="D"> Error</label><br>


            <p class="mt-3"><strong>6. What does preventDefault() do??</strong></p>
            <label><input type="radio" name="q6" value="A"> Stops event bubbling</label><br>
            <label><input type="radio" name="q6" value="B"> Prevents default browser behavior</label><br>
            <label><input type="radio" name="q6" value="C"> Deletes element</label><br>
            <label><input type="radio" name="q6" value="D"> Reloads page</label><br><br>


            <p><strong>7. What will this return?</strong><br><code>[1, 2, 3].includes(2)</code></p>
            <label><input type="radio" name="q7" value="A"> true</label><br>
            <label><input type="radio" name="q7" value="B"> false</label><br>
            <label><input type="radio" name="q7" value="C"> undefined</label><br>
            <label><input type="radio" name="q7" value="D"> Database</label><br>

            <p class="mt-3"><strong>8. What does setTimeout() do?</strong></p>
            <label><input type="radio" name="q8" value="A"> Runs function immediately</label><br>
            <label><input type="radio" name="q8" value="B"> Delays execution</label><br>
            <label><input type="radio" name="q8" value="C"> Repeats function</label><br>
            <label><input type="radio" name="q8" value="D"> Stops execution</label><br><br>


            <p><strong>9. What will this return?<br>Math.floor(4.7)</strong></p>
            <label><input type="radio" name="q9" value="A"> 5</label><br>
            <label><input type="radio" name="q9" value="B"> 4</label><br>
            <label><input type="radio" name="q9" value="C"> 4.7</label><br>
            <label><input type="radio" name="q9" value="D"> Error</label><br>


            <p class="mt-3"><strong>10. What will be the output?</strong><br>
                <code>console.log(typeof typeof 1);</code>
            </p>
            <label><input type="radio" name="q10" value="A"> "number"</label><br>
            <label><input type="radio" name="q10" value="B"> "string"</label><br>
            <label><input type="radio" name="q10" value="C"> "undefined"</label><br>
            <label><input type="radio" name="q10" value="D"> "object"</label><br><br>

            <p><strong>11. Which operator checks value and type strictly?</strong></p>
            <label><input type="radio" name="q11" value="A"> ==</label><br>
            <label><input type="radio" name="q11" value="B"> ===</label><br>
            <label><input type="radio" name="q11" value="C"> =</label><br>
            <label><input type="radio" name="q11" value="D"> !=</label><br>

            <p class="mt-3"><strong>12. What will be logged?</strong><br>
                <code>console.log(0 == false);</code>
            </p>
            <label><input type="radio" name="q12" value="A"> true</label><br>
            <label><input type="radio" name="q12" value="B"> false</label><br>
            <label><input type="radio" name="q12" value="C"> undefined</label><br>
            <label><input type="radio" name="q12" value="D"> error</label><br><br>

            <p><strong>13. What will happen here?</strong><br>
                <code>console.log(a);<br>let a = 10;</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 10</label><br>
            <label><input type="radio" name="q13" value="B"> undefined</label><br>
            <label><input type="radio" name="q13" value="C"> ReferenceError</label><br>
            <label><input type="radio" name="q13" value="D"> null</label><br>

            <p class="mt-3"><strong>14. What will be the output?</strong><br>
                <code>console.log([] + []);</code>
            </p>
            <label><input type="radio" name="q14" value="A"> []</label><br>
            <label><input type="radio" name="q14" value="B"> "undefined"</label><br>
            <label><input type="radio" name="q14" value="C"> ""</label><br>
            <label><input type="radio" name="q14" value="D"> 0</label><br><br>

            <p><strong>15. What will be logged?</strong><br>
                <code>console.log(1 + "1" - 1);</code>
            </p>
            <label><input type="radio" name="q15" value="A"> 11</label><br>
            <label><input type="radio" name="q15" value="B"> 1</label><br>
            <label><input type="radio" name="q15" value="C"> 10</label><br>
            <label><input type="radio" name="q15" value="D"> NaN</label><br>

            <p class="mt-3"><strong>16. What is the type of null?</strong></p>
            <label><input type="radio" name="q16" value="A"> null</label><br>
            <label><input type="radio" name="q16" value="B"> object</label><br>
            <label><input type="radio" name="q16" value="C"> undefined</label><br>
            <label><input type="radio" name="q16" value="D"> number</label><br><br>

            <p><strong>17. What will be the output?</strong><br>
                <code>for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }</code>
            </p>
            <label><input type="radio" name="q17" value="A"> 0 1 2</label><br>
            <label><input type="radio" name="q17" value="B"> 3 3 3</label><br>
            <label><input type="radio" name="q17" value="C"> undefined</label><br>
            <label><input type="radio" name="q17" value="D"> error</label><br>

            <p class="mt-3"><strong>18. Which variables are block-scoped?</strong></p>
            <label><input type="radio" name="q18" value="A"> var only</label><br>
            <label><input type="radio" name="q18" value="B"> let and const</label><br>
            <label><input type="radio" name="q18" value="C"> function</label><br>
            <label><input type="radio" name="q18" value="D"> global</label><br><br>

            <p><strong>19. What does parseInt("10.9") return?</strong></p>
            <label><input type="radio" name="q19" value="A"> 10.9</label><br>
            <label><input type="radio" name="q19" value="B"> 11</label><br>
            <label><input type="radio" name="q19" value="C"> 10</label><br>
            <label><input type="radio" name="q19" value="D"> NaN</label><br>

            <p class="mt-3"><strong>20. What does NaN mean?</strong></p>
            <label><input type="radio" name="q20" value="A"> Not a Name</label><br>
            <label><input type="radio" name="q20" value="B"> Not a Number</label><br>
            <label><input type="radio" name="q20" value="C"> Null and Number</label><br>
            <label><input type="radio" name="q20" value="D"> New and Null</label><br><br>

            <p><strong>21. What will be logged?</strong><br>
                <code>console.log([] == ![]);</code>
            </p>
            <label><input type="radio" name="q21" value="A"> true</label><br>
            <label><input type="radio" name="q21" value="B"> false</label><br>
            <label><input type="radio" name="q21" value="C"> undefined</label><br>
            <label><input type="radio" name="q21" value="D"> error</label><br>

            <p class="mt-3"><strong>22. What will be the output?</strong><br>
                <code>console.log([] + 1 + 2);</code>
            </p>
            <label><input type="radio" name="q22" value="A"> 3</label><br>
            <label><input type="radio" name="q22" value="B"> "12"</label><br>
            <label><input type="radio" name="q22" value="C"> "12"</label><br>
            <label><input type="radio" name="q22" value="D"> NaN</label><br><br>

            <p><strong>23. What will happen?</strong><br>
                <code>console.log(3 > 2 > 1);</code>
            </p>
            <label><input type="radio" name="q23" value="A"> true</label><br>
            <label><input type="radio" name="q23" value="B"> false</label><br>
            <label><input type="radio" name="q23" value="C"> 1</label><br>
            <label><input type="radio" name="q23" value="D"> undefined</label><br>

            <p class="mt-3"><strong>24. What does length return?</strong></p>
            <label><input type="radio" name="q24" value="A"> Last index</label><br>
            <label><input type="radio" name="q24" value="B"> Number of elements</label><br>
            <label><input type="radio" name="q24" value="C"> First element</label><br>
            <label><input type="radio" name="q24" value="D"> Memory size</label><br><br>

            <p><strong>25. What is typeof function(){}?</strong></p>
            <label><input type="radio" name="q25" value="A"> object</label><br>
            <label><input type="radio" name="q25" value="B"> function</label><br>
            <label><input type="radio" name="q25" value="C"> undefined</label><br>
            <label><input type="radio" name="q25" value="D"> string</label><br>

            <p class="mt-3"><strong>26. What will be the output?</strong><br>
                <code>console.log("10" == 10 && "10" === 10);</code>
            </p>
            <label><input type="radio" name="q26" value="A"> true</label><br>
            <label><input type="radio" name="q26" value="B"> false</label><br>
            <label><input type="radio" name="q26" value="C"> undefined</label><br>
            <label><input type="radio" name="q26" value="D"> error</label><br><br>

            <p><strong>27. What will this return?</strong><br>
                <code>let x;<br>console.log(x ?? "default");</code>
            </p>
            <label><input type="radio" name="q27" value="A"> null</label><br>
            <label><input type="radio" name="q27" value="B"> undefined</label><br>
            <label><input type="radio" name="q27" value="C"> "default"</label><br>
            <label><input type="radio" name="q27" value="D"> error</label><br>

            <p class="mt-3"><strong>28. What will be the output?</strong><br>
                <code>console.log("5" + 5 - 5);</code>
            </p>
            <label><input type="radio" name="q28" value="A"> 55</label><br>
            <label><input type="radio" name="q28" value="B"> 50</label><br>
            <label><input type="radio" name="q28" value="C"> 5</label><br>
            <label><input type="radio" name="q28" value="D"> NaN</label><br><br>

            <p><strong>29. What will be logged?</strong><br>
                <code>console.log(1 < 2 < 3);</code>
            </p>
            <label><input type="radio" name="q29" value="A"> true</label><br>
            <label><input type="radio" name="q29" value="B"> false</label><br>
            <label><input type="radio" name="q29" value="C"> 3</label><br>
            <label><input type="radio" name="q29" value="D"> undefined</label><br><br>

            <p><strong>30. What will be the output?</strong><br>
                <code>console.log("5" + 5 - 5);</code>
            </p>
            <label><input type="radio" name="q30" value="A"> 50</label><br>
            <label><input type="radio" name="q30" value="B"> 45</label><br>
            <label><input type="radio" name="q30" value="C"> 5</label><br>
            <label><input type="radio" name="q30" value="D"> NaN</label><br><br>
        
            <p>
                <strong>31. What is the output?</strong><br>
                <code>console.log([1,2,3].filter(x =&gt; x &gt; 1));</code>
            </p>
            <label><input type="radio" name="q31" value="A"> [1]</label><br>
            <label><input type="radio" name="q31" value="B"> [2, 3]</label><br>
            <label><input type="radio" name="q31" value="C"> [1, 2, 3]</label><br>
            <label><input type="radio" name="q31" value="D"> []</label><br>
            <p class="mt-3">
                <strong>32. What is the output?</strong><br>
                <code>console.log([1,2,3].reduce((a,b) =&gt; a+b, 0));</code>
            </p>
            <label><input type="radio" name="q32" value="A"> 0</label><br>
            <label><input type="radio" name="q32" value="B"> "123"</label><br>
            <label><input type="radio" name="q32" value="C"> 6</label><br>
            <label><input type="radio" name="q32" value="D"> undefined</label><br><br>
            <p><strong>33. What does <code>Object.keys({a:1, b:2})</code> return?</strong></p>
            <label><input type="radio" name="q33" value="A"> ["a", "b"]</label><br>
            <label><input type="radio" name="q33" value="B"> [1, 2]</label><br>
            <label><input type="radio" name="q33" value="C"> {a:1}</label><br>
            <label><input type="radio" name="q33" value="D"> undefined</label><br>
            <p class="mt-3">
                <strong>34. What is the output?</strong><br>
                <code>const fn = (a=5, b=10) =&gt; a + b;<br>
                console.log(fn());</code>
            </p>
            <label><input type="radio" name="q34" value="A"> 0</label><br>
            <label><input type="radio" name="q34" value="B"> 5</label><br>
            <label><input type="radio" name="q34" value="C"> 10</label><br>
            <label><input type="radio" name="q34" value="D"> 15</label><br><br>
            <p><strong>35. What does <code>Array.from("hello")</code> return?</strong></p>
            <label><input type="radio" name="q35" value="A"> "hello"</label><br>
            <label><input type="radio" name="q35" value="B"> ["hello"]</label><br>
            <label><input type="radio" name="q35" value="C"> ["h","e","l","l","o"]</label><br>
            <label><input type="radio" name="q35" value="D"> undefined</label><br>
            <p class="mt-3">
                <strong>36. What is the output?</strong><br>
                <code>console.log({...{a:1}, ...{b:2}});</code>
            </p>
            <label><input type="radio" name="q36" value="A"> {a:1}</label><br>
            <label><input type="radio" name="q36" value="B"> {b:2}</label><br>
            <label><input type="radio" name="q36" value="C"> {a:1, b:2}</label><br>
            <label><input type="radio" name="q36" value="D"> error</label><br><br>
            <p><strong>37. What does <code>[1,2,3].find(x =&gt; x &gt; 1)</code> return?</strong></p>
            <label><input type="radio" name="q37" value="A"> [2, 3]</label><br>
            <label><input type="radio" name="q37" value="B"> 1</label><br>
            <label><input type="radio" name="q37" value="C"> 2</label><br>
            <label><input type="radio" name="q37" value="D"> undefined</label><br>
            <p class="mt-3">
                <strong>38. What is the output of the unary + operator?</strong><br>
                <code>console.log(+"42");</code>
            </p>
            <label><input type="radio" name="q38" value="A"> "42"</label><br>
            <label><input type="radio" name="q38" value="B"> NaN</label><br>
            <label><input type="radio" name="q38" value="C"> undefined</label><br>
            <label><input type="radio" name="q38" value="D"> 42</label><br><br>
            <p><strong>39. What does <code>typeof Symbol("id")</code> return?</strong></p>
            <label><input type="radio" name="q39" value="A"> "string"</label><br>
            <label><input type="radio" name="q39" value="B"> "symbol"</label><br>
            <label><input type="radio" name="q39" value="C"> "object"</label><br>
            <label><input type="radio" name="q39" value="D"> "undefined"</label><br>
            <p class="mt-3"><strong>40. What does <code>"hello".split("")</code> return?</strong></p>
            <label><input type="radio" name="q40" value="A"> "hello"</label><br>
            <label><input type="radio" name="q40" value="B"> ["hello"]</label><br>
            <label><input type="radio" name="q40" value="C"> ["h","e","l","l","o"]</label><br>
            <label><input type="radio" name="q40" value="D"> error</label><br><br>
            <p>
                <strong>41. What is the output?</strong><br>
                <code>console.log([...[1,2], ...[3,4]]);</code>
            </p>
            <label><input type="radio" name="q41" value="A"> [[1,2],[3,4]]</label><br>
            <label><input type="radio" name="q41" value="B"> [1, 2, 3, 4]</label><br>
            <label><input type="radio" name="q41" value="C"> error</label><br>
            <label><input type="radio" name="q41" value="D"> undefined</label><br>
            <p class="mt-3"><strong>42. What does <code>Object.values({a:1, b:2})</code> return?</strong></p>
            <label><input type="radio" name="q42" value="A"> ["a", "b"]</label><br>
            <label><input type="radio" name="q42" value="B"> {1, 2}</label><br>
            <label><input type="radio" name="q42" value="C"> [1, 2]</label><br>
            <label><input type="radio" name="q42" value="D"> undefined</label><br><br>
            <p>
                <strong>43. What is the output?</strong><br>
                <code>let a = 1;<br>
                const fn = () =&gt; a;<br>
                a = 2;<br>
                console.log(fn());</code>
            </p>
            <label><input type="radio" name="q43" value="A"> 1</label><br>
            <label><input type="radio" name="q43" value="B"> undefined</label><br>
            <label><input type="radio" name="q43" value="C"> 2</label><br>
            <label><input type="radio" name="q43" value="D"> error</label><br>
            <p class="mt-3"><strong>44. What does <code>[1,2,3].every(x =&gt; x &gt; 0)</code> return?</strong></p>
            <label><input type="radio" name="q44" value="A"> false</label><br>
            <label><input type="radio" name="q44" value="B"> undefined</label><br>
            <label><input type="radio" name="q44" value="C"> [1,2,3]</label><br>
            <label><input type="radio" name="q44" value="D"> true</label><br><br>
            <p>
                <strong>45. What is the output?</strong><br>
                <code>console.log(2 ** 10);</code>
            </p>
            <label><input type="radio" name="q45" value="A"> 20</label><br>
            <label><input type="radio" name="q45" value="B"> 1024</label><br>
            <label><input type="radio" name="q45" value="C"> 512</label><br>
            <label><input type="radio" name="q45" value="D"> 100</label><br>
            <p class="mt-3"><strong>46. What does <code>[1,2,3].some(x =&gt; x &gt; 2)</code> return?</strong></p>
            <label><input type="radio" name="q46" value="A"> false</label><br>
            <label><input type="radio" name="q46" value="B"> [3]</label><br>
            <label><input type="radio" name="q46" value="C"> 3</label><br>
            <label><input type="radio" name="q46" value="D"> true</label><br><br>
            <p>
                <strong>47. What is the output?</strong><br>
                <code>console.log(new Set([1,1,2,3]).size);</code>
            </p>
            <label><input type="radio" name="q47" value="A"> 4</label><br>
            <label><input type="radio" name="q47" value="B"> 1</label><br>
            <label><input type="radio" name="q47" value="C"> 3</label><br>
            <label><input type="radio" name="q47" value="D"> undefined</label><br>
            <p class="mt-3">
                <strong>48. What is the output?</strong><br>
                <code>const [a, ...rest] = [1,2,3];<br>
                console.log(rest);</code>
            </p>
            <label><input type="radio" name="q48" value="A"> [1]</label><br>
            <label><input type="radio" name="q48" value="B"> [2, 3]</label><br>
            <label><input type="radio" name="q48" value="C"> [1,2,3]</label><br>
            <label><input type="radio" name="q48" value="D"> undefined</label><br><br>
            <p>
                <strong>49. What is the output?</strong><br>
                <code>console.log(null ?? "default");</code>
            </p>
            <label><input type="radio" name="q49" value="A"> null</label><br>
            <label><input type="radio" name="q49" value="B"> undefined</label><br>
            <label><input type="radio" name="q49" value="C"> false</label><br>
            <label><input type="radio" name="q49" value="D"> "default"</label><br>
            <p class="mt-3"><strong>50. What does <code>[1,2,3].flat()</code> return when the array is already flat?</strong></p>
            <label><input type="radio" name="q50" value="A"> [1, 2, 3]</label><br>
            <label><input type="radio" name="q50" value="B"> []</label><br>
            <label><input type="radio" name="q50" value="C"> [[1,2,3]]</label><br>
            <label><input type="radio" name="q50" value="D"> undefined</label><br>
`,
  'js-basics-advanced': `
<h4 class="mb-4 py-4 text-success">JS Basics - Advanced</h4>
            <p class="mt-3"><strong>1. What will be the output?</strong><br>
                <code>console.log(typeof NaN);</code>
            </p>
            <label><input type="radio" name="q1" value="A"> "number"</label><br>
            <label><input type="radio" name="q1" value="B"> "NaN"</label><br>
            <label><input type="radio" name="q1" value="C"> "undefined"</label><br>
            <label><input type="radio" name="q1" value="D"> "object"</label><br><br>

            <p><strong>2. Which statement about JavaScript hoisting is correct?</strong></p>
            <label><input type="radio" name="q2" value="A"> Only let is hoisted and initialized</label><br>
            <label><input type="radio" name="q2" value="B"> var is hoisted and initialized with undefined</label><br>
            <label><input type="radio" name="q2" value="C"> const is fully hoisted with value</label><br>
            <label><input type="radio" name="q2" value="D"> Functions are not hoisted</label><br>

            <p class="mt-3"><strong>3. What will be logged?</strong><br>
                <code>console.log([] == ![]);</code>
            </p>
            <label><input type="radio" name="q3" value="A"> true</label><br>
            <label><input type="radio" name="q3" value="B"> false</label><br>
            <label><input type="radio" name="q3" value="C"> undefined</label><br>
            <label><input type="radio" name="q3" value="D"> error</label><br><br>

            <p><strong>4. What will happen here?</strong><br>
                <code>console.log(a);<br>var a = 5;</code>
            </p>
            <label><input type="radio" name="q4" value="A"> 5</label><br>
            <label><input type="radio" name="q4" value="B"> undefined</label><br>
            <label><input type="radio" name="q4" value="C"> ReferenceError</label><br>
            <label><input type="radio" name="q4" value="D"> null</label><br>

            <p class="mt-3"><strong>5. What will be the output?</strong><br>
                <code>console.log(0.1 + 0.2 === 0.3);</code>
            </p>
            <label><input type="radio" name="q5" value="A"> true</label><br>
            <label><input type="radio" name="q5" value="B"> false</label><br>
            <label><input type="radio" name="q5" value="C"> undefined</label><br>
            <label><input type="radio" name="q5" value="D"> error</label><br><br>

            <p><strong>6. Which of these is NOT a primitive type?</strong></p>
            <label><input type="radio" name="q6" value="A"> string</label><br>
            <label><input type="radio" name="q6" value="B"> number</label><br>
            <label><input type="radio" name="q6" value="C"> object</label><br>
            <label><input type="radio" name="q6" value="D"> boolean</label><br>

            <p class="mt-3"><strong>7. What will be logged?</strong><br>
                <code>console.log(typeof null);</code>
            </p>
            <label><input type="radio" name="q7" value="A"> null</label><br>
            <label><input type="radio" name="q7" value="B"> object</label><br>
            <label><input type="radio" name="q7" value="C"> undefined</label><br>
            <label><input type="radio" name="q7" value="D"> number</label><br><br>

            <p><strong>8. What is the result?</strong><br>
                <code>console.log("5" - 2);</code>
            </p>
            <label><input type="radio" name="q8" value="A"> "52"</label><br>
            <label><input type="radio" name="q8" value="B"> 3</label><br>
            <label><input type="radio" name="q8" value="C"> "3"</label><br>
            <label><input type="radio" name="q8" value="D"> NaN</label><br>

            <p class="mt-3"><strong>9. What will be the output?</strong><br>
                <code>console.log(1 < 2 < 3);</code>
            </p>
            <label><input type="radio" name="q9" value="A"> true</label><br>
            <label><input type="radio" name="q9" value="B"> false</label><br>
            <label><input type="radio" name="q9" value="C"> 3</label><br>
            <label><input type="radio" name="q9" value="D"> undefined</label><br><br>

            <p><strong>10. What will be logged?</strong><br>
                <code>console.log(typeof typeof 1);</code>
            </p>
            <label><input type="radio" name="q10" value="A"> "number"</label><br>
            <label><input type="radio" name="q10" value="B"> "string"</label><br>
            <label><input type="radio" name="q10" value="C"> "undefined"</label><br>
            <label><input type="radio" name="q10" value="D"> "object"</label><br><br>

            <p><strong>11. Which operator compares value and type strictly?</strong></p>
            <label><input type="radio" name="q11" value="A"> ==</label><br>
            <label><input type="radio" name="q11" value="B"> ===</label><br>
            <label><input type="radio" name="q11" value="C"> =</label><br>
            <label><input type="radio" name="q11" value="D"> !=</label><br>

            <p class="mt-3"><strong>12. What will be logged?</strong><br>
                <code>console.log(false == 0);</code>
            </p>
            <label><input type="radio" name="q12" value="A"> true</label><br>
            <label><input type="radio" name="q12" value="B"> false</label><br>
            <label><input type="radio" name="q12" value="C"> undefined</label><br>
            <label><input type="radio" name="q12" value="D"> error</label><br><br>

            <p><strong>13. What will happen?</strong><br>
                <code>console.log(a);<br>let a = 10;</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 10</label><br>
            <label><input type="radio" name="q13" value="B"> undefined</label><br>
            <label><input type="radio" name="q13" value="C"> ReferenceError</label><br>
            <label><input type="radio" name="q13" value="D"> null</label><br>

            <p class="mt-3"><strong>14. What is the output?</strong><br>
                <code>console.log([] + []);</code>
            </p>
            <label><input type="radio" name="q14" value="A"> []</label><br>
            <label><input type="radio" name="q14" value="B"> "undefined"</label><br>
            <label><input type="radio" name="q14" value="C"> ""</label><br>
            <label><input type="radio" name="q14" value="D"> 0</label><br><br>

            <p><strong>15. What will be logged?</strong><br>
                <code>console.log("1" + 1 - 1);</code>
            </p>
            <label><input type="radio" name="q15" value="A"> 11</label><br>
            <label><input type="radio" name="q15" value="B"> 1</label><br>
            <label><input type="radio" name="q15" value="C"> 10</label><br>
            <label><input type="radio" name="q15" value="D"> NaN</label><br>

            <p class="mt-3"><strong>16. What is the type of NaN?</strong></p>
            <label><input type="radio" name="q16" value="A"> NaN</label><br>
            <label><input type="radio" name="q16" value="B"> number</label><br>
            <label><input type="radio" name="q16" value="C"> undefined</label><br>
            <label><input type="radio" name="q16" value="D"> object</label><br><br>

            <p><strong>17. What will be logged?</strong><br>
                <code>for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }</code>
            </p>
            <label><input type="radio" name="q17" value="A"> 0 1 2</label><br>
            <label><input type="radio" name="q17" value="B"> 3 3 3</label><br>
            <label><input type="radio" name="q17" value="C"> undefined</label><br>
            <label><input type="radio" name="q17" value="D"> error</label><br>

            <p class="mt-3"><strong>18. Which variables are block scoped?</strong></p>
            <label><input type="radio" name="q18" value="A"> var only</label><br>
            <label><input type="radio" name="q18" value="B"> let and const</label><br>
            <label><input type="radio" name="q18" value="C"> function</label><br>
            <label><input type="radio" name="q18" value="D"> global</label><br><br>

            <p><strong>19. What does parseInt("10.9") return?</strong></p>
            <label><input type="radio" name="q19" value="A"> 10.9</label><br>
            <label><input type="radio" name="q19" value="B"> 11</label><br>
            <label><input type="radio" name="q19" value="C"> 10</label><br>
            <label><input type="radio" name="q19" value="D"> NaN</label><br>

            <p class="mt-3"><strong>20. What does NaN stand for?</strong></p>
            <label><input type="radio" name="q20" value="A"> Not a Name</label><br>
            <label><input type="radio" name="q20" value="B"> Not a Number</label><br>
            <label><input type="radio" name="q20" value="C"> Null and Number</label><br>
            <label><input type="radio" name="q20" value="D"> New and Null</label><br><br>

            <p><strong>21. What will be logged?</strong><br>
                <code>console.log([] == false);</code>
            </p>
            <label><input type="radio" name="q21" value="A"> true</label><br>
            <label><input type="radio" name="q21" value="B"> false</label><br>
            <label><input type="radio" name="q21" value="C"> undefined</label><br>
            <label><input type="radio" name="q21" value="D"> error</label><br>

            <p class="mt-3"><strong>22. What is the output?</strong><br>
                <code>console.log([] + 1 + 2);</code>
            </p>
            <label><input type="radio" name="q22" value="A"> 3</label><br>
            <label><input type="radio" name="q22" value="B"> "12"</label><br>
            <label><input type="radio" name="q22" value="C"> "12"</label><br>
            <label><input type="radio" name="q22" value="D"> NaN</label><br><br>

            <p><strong>23. What will happen?</strong><br>
                <code>console.log(3 > 2 > 1);</code>
            </p>
            <label><input type="radio" name="q23" value="A"> true</label><br>
            <label><input type="radio" name="q23" value="B"> false</label><br>
            <label><input type="radio" name="q23" value="C"> 1</label><br>
            <label><input type="radio" name="q23" value="D"> undefined</label><br>

            <p class="mt-3"><strong>24. What does length return for arrays?</strong></p>
            <label><input type="radio" name="q24" value="A"> Last index</label><br>
            <label><input type="radio" name="q24" value="B"> Number of elements</label><br>
            <label><input type="radio" name="q24" value="C"> First element</label><br>
            <label><input type="radio" name="q24" value="D"> Memory size</label><br><br>

            <p><strong>25. What is typeof function(){}?</strong></p>
            <label><input type="radio" name="q25" value="A"> object</label><br>
            <label><input type="radio" name="q25" value="B"> function</label><br>
            <label><input type="radio" name="q25" value="C"> undefined</label><br>
            <label><input type="radio" name="q25" value="D"> string</label><br>

            <p class="mt-3"><strong>26. What will be the output?</strong><br>
                <code>console.log("10" == 10 && "10" === 10);</code>
            </p>
            <label><input type="radio" name="q26" value="A"> true</label><br>
            <label><input type="radio" name="q26" value="B"> false</label><br>
            <label><input type="radio" name="q26" value="C"> undefined</label><br>
            <label><input type="radio" name="q26" value="D"> error</label><br><br>

            <p><strong>27. What will this return?</strong><br>
                <code>let x;<br>console.log(x ?? "default");</code>
            </p>
            <label><input type="radio" name="q27" value="A"> null</label><br>
            <label><input type="radio" name="q27" value="B"> undefined</label><br>
            <label><input type="radio" name="q27" value="C"> "default"</label><br>
            <label><input type="radio" name="q27" value="D"> error</label><br>

            <p class="mt-3"><strong>28. What will be the output?</strong><br>
                <code>console.log("5" + 5 - 5);</code>
            </p>
            <label><input type="radio" name="q28" value="A"> 55</label><br>
            <label><input type="radio" name="q28" value="B"> 50</label><br>
            <label><input type="radio" name="q28" value="C"> 5</label><br>
            <label><input type="radio" name="q28" value="D"> NaN</label><br><br>

            <p><strong>29. What will be logged?</strong><br>
                <code>console.log(1 < 2 < 3);</code>
            </p>
            <label><input type="radio" name="q29" value="A"> true</label><br>
            <label><input type="radio" name="q29" value="B"> false</label><br>
            <label><input type="radio" name="q29" value="C"> 3</label><br>
            <label><input type="radio" name="q29" value="D"> undefined</label><br><br>

            <p><strong>30. What will be the output?</strong><br>
                <code>console.log("5" - "2" + "3");</code>
            </p>
            <label><input type="radio" name="q30" value="A"> "53"</label><br>
            <label><input type="radio" name="q30" value="B"> "33"</label><br>
            <label><input type="radio" name="q30" value="C"> 6</label><br>
            <label><input type="radio" name="q30" value="D"> NaN</label><br><br>
        
            <p><strong>31. What does <code>Object.is(NaN, NaN)</code> return?</strong></p>
            <label><input type="radio" name="q31" value="A"> false</label><br>
            <label><input type="radio" name="q31" value="B"> undefined</label><br>
            <label><input type="radio" name="q31" value="C"> error</label><br>
            <label><input type="radio" name="q31" value="D"> true</label><br>
            <p class="mt-3"><strong>32. A Symbol value is guaranteed to be:</strong></p>
            <label><input type="radio" name="q32" value="A"> A string</label><br>
            <label><input type="radio" name="q32" value="B"> Unique and immutable</label><br>
            <label><input type="radio" name="q32" value="C"> A number</label><br>
            <label><input type="radio" name="q32" value="D"> An object key only</label><br><br>
            <p><strong>33. What does <code>typeof arguments</code> return inside a regular function?</strong></p>
            <label><input type="radio" name="q33" value="A"> "array"</label><br>
            <label><input type="radio" name="q33" value="B"> "undefined"</label><br>
            <label><input type="radio" name="q33" value="C"> "object"</label><br>
            <label><input type="radio" name="q33" value="D"> "arguments"</label><br>
            <p class="mt-3">
                <strong>34. What is the output?</strong><br>
                <code>const obj = {a:1};<br>
                Object.freeze(obj);<br>
                obj.a = 2;<br>
                console.log(obj.a);</code>
            </p>
            <label><input type="radio" name="q34" value="A"> 2</label><br>
            <label><input type="radio" name="q34" value="B"> error</label><br>
            <label><input type="radio" name="q34" value="C"> undefined</label><br>
            <label><input type="radio" name="q34" value="D"> 1</label><br><br>
            <p><strong>35. What does <code>WeakMap</code> accept as keys?</strong></p>
            <label><input type="radio" name="q35" value="A"> Strings</label><br>
            <label><input type="radio" name="q35" value="B"> Numbers</label><br>
            <label><input type="radio" name="q35" value="C"> Objects</label><br>
            <label><input type="radio" name="q35" value="D"> Symbols</label><br>
            <p class="mt-3"><strong>36. What is the actual output of <code>0.1 + 0.2</code>?</strong></p>
            <label><input type="radio" name="q36" value="A"> 0.3</label><br>
            <label><input type="radio" name="q36" value="B"> 0.30000000000000004</label><br>
            <label><input type="radio" name="q36" value="C"> 0.300000001</label><br>
            <label><input type="radio" name="q36" value="D"> NaN</label><br><br>
            <p><strong>37. What is the Temporal Dead Zone (TDZ)?</strong></p>
            <label><input type="radio" name="q37" value="A"> When var is undefined</label><br>
            <label><input type="radio" name="q37" value="B"> The time let/const exists but is not yet initialised</label><br>
            <label><input type="radio" name="q37" value="C"> A deprecated JS feature</label><br>
            <label><input type="radio" name="q37" value="D"> A memory overflow state</label><br>
            <p class="mt-3"><strong>38. What does <code>typeof class {}</code> return?</strong></p>
            <label><input type="radio" name="q38" value="A"> "class"</label><br>
            <label><input type="radio" name="q38" value="B"> "object"</label><br>
            <label><input type="radio" name="q38" value="C"> "function"</label><br>
            <label><input type="radio" name="q38" value="D"> "undefined"</label><br><br>
            <p><strong>39. What does a JavaScript <code>Proxy</code> allow you to do?</strong></p>
            <label><input type="radio" name="q39" value="A"> Run async code</label><br>
            <label><input type="radio" name="q39" value="B"> Intercept and redefine object operations</label><br>
            <label><input type="radio" name="q39" value="C"> Make server requests</label><br>
            <label><input type="radio" name="q39" value="D"> Control loop execution</label><br>
            <p class="mt-3">
                <strong>40. What is the output?</strong><br>
                <code>console.log([1,[2,[3]]].flat(Infinity));</code>
            </p>
            <label><input type="radio" name="q40" value="A"> [1,[2,[3]]]</label><br>
            <label><input type="radio" name="q40" value="B"> [1,2,[3]]</label><br>
            <label><input type="radio" name="q40" value="C"> error</label><br>
            <label><input type="radio" name="q40" value="D"> [1, 2, 3]</label><br><br>
            <p><strong>41. What does <code>structuredClone(obj)</code> produce?</strong></p>
            <label><input type="radio" name="q41" value="A"> A shallow clone</label><br>
            <label><input type="radio" name="q41" value="B"> A JSON string</label><br>
            <label><input type="radio" name="q41" value="C"> A deep clone</label><br>
            <label><input type="radio" name="q41" value="D"> A frozen object</label><br>
            <p class="mt-3">
                <strong>42. What is the output?</strong><br>
                <code>const a = {};<br>
                const b = a;<br>
                b.x = 5;<br>
                console.log(a.x);</code>
            </p>
            <label><input type="radio" name="q42" value="A"> undefined</label><br>
            <label><input type="radio" name="q42" value="B"> error</label><br>
            <label><input type="radio" name="q42" value="C"> null</label><br>
            <label><input type="radio" name="q42" value="D"> 5</label><br><br>
            <p>
                <strong>43. What is the output of the unary + on an empty string?</strong><br>
                <code>console.log(+"");</code>
            </p>
            <label><input type="radio" name="q43" value="A"> NaN</label><br>
            <label><input type="radio" name="q43" value="B"> undefined</label><br>
            <label><input type="radio" name="q43" value="C"> 0</label><br>
            <label><input type="radio" name="q43" value="D"> ""</label><br>
            <p class="mt-3"><strong>44. What does <code>Object.assign({}, a, b)</code> perform?</strong></p>
            <label><input type="radio" name="q44" value="A"> Deep merge</label><br>
            <label><input type="radio" name="q44" value="B"> Shallow merge</label><br>
            <label><input type="radio" name="q44" value="C"> Freeze both objects</label><br>
            <label><input type="radio" name="q44" value="D"> Compare objects</label><br><br>
            <p><strong>45. What does <code>typeof (() =&gt; {})</code> return?</strong></p>
            <label><input type="radio" name="q45" value="A"> "arrow"</label><br>
            <label><input type="radio" name="q45" value="B"> "object"</label><br>
            <label><input type="radio" name="q45" value="C"> "undefined"</label><br>
            <label><input type="radio" name="q45" value="D"> "function"</label><br>
            <p class="mt-3"><strong>46. What is the output of <code>void 0</code>?</strong></p>
            <label><input type="radio" name="q46" value="A"> 0</label><br>
            <label><input type="radio" name="q46" value="B"> false</label><br>
            <label><input type="radio" name="q46" value="C"> null</label><br>
            <label><input type="radio" name="q46" value="D"> undefined</label><br><br>
            <p><strong>47. Which operator checks an object's prototype chain?</strong></p>
            <label><input type="radio" name="q47" value="A"> typeof</label><br>
            <label><input type="radio" name="q47" value="B"> hasOwnProperty()</label><br>
            <label><input type="radio" name="q47" value="C"> instanceof</label><br>
            <label><input type="radio" name="q47" value="D"> Object.keys()</label><br>
            <p class="mt-3"><strong>48. What does <code>[1,2,3].at(-1)</code> return?</strong></p>
            <label><input type="radio" name="q48" value="A"> undefined</label><br>
            <label><input type="radio" name="q48" value="B"> 1</label><br>
            <label><input type="radio" name="q48" value="C"> 3</label><br>
            <label><input type="radio" name="q48" value="D"> -1</label><br><br>
            <p><strong>49. What does <code>Array.from({length:3}, (_,i) =&gt; i)</code> produce?</strong></p>
            <label><input type="radio" name="q49" value="A"> [1, 2, 3]</label><br>
            <label><input type="radio" name="q49" value="B"> [0, 1, 2]</label><br>
            <label><input type="radio" name="q49" value="C"> [undefined × 3]</label><br>
            <label><input type="radio" name="q49" value="D"> error</label><br>
            <p class="mt-3">
                <strong>50. What is the output?</strong><br>
                <code>const x = 10;<br>
                (function(){<br>
                  console.log(x);<br>
                  var x = 20;<br>
                }());</code>
            </p>
            <label><input type="radio" name="q50" value="A"> 10</label><br>
            <label><input type="radio" name="q50" value="B"> 20</label><br>
            <label><input type="radio" name="q50" value="C"> undefined</label><br>
            <label><input type="radio" name="q50" value="D"> ReferenceError</label><br>
`,
  'dom-beginner': `
<h4 class="mb-4 py-4 text-success">DOM - Beginner</h4>
            <p class="mt-3"><strong>1. What does DOM stand for?</strong></p>
            <label><input type="radio" name="q1" value="A"> Document Object Model</label><br>
            <label><input type="radio" name="q1" value="B"> Data Object Model</label><br>
            <label><input type="radio" name="q1" value="C"> Document Output Mode</label><br>
            <label><input type="radio" name="q1" value="D"> Display Object Model</label><br><br>

            <p><strong>2. Which method selects an element by ID?</strong></p>
            <label><input type="radio" name="q2" value="A"> getElementByClassName</label><br>
            <label><input type="radio" name="q2" value="B"> getElementById</label><br>
            <label><input type="radio" name="q2" value="C"> querySelectorAll</label><br>
            <label><input type="radio" name="q2" value="D"> getElementsByTag</label><br>

            <p class="mt-3"><strong>3. What will this do?</strong><br>
                <code>document.getElementById("test").innerHTML = "Hello";</code>
            </p>
            <label><input type="radio" name="q3" value="A"> Change text inside element</label><br>
            <label><input type="radio" name="q3" value="B"> Delete element</label><br>
            <label><input type="radio" name="q3" value="C"> Create new element</label><br>
            <label><input type="radio" name="q3" value="D"> Hide element</label><br><br>

            <p><strong>4. Which method selects elements by class name?</strong></p>
            <label><input type="radio" name="q4" value="A"> getElementById</label><br>
            <label><input type="radio" name="q4" value="B"> getElementsByClassName</label><br>
            <label><input type="radio" name="q4" value="C"> querySelector</label><br>
            <label><input type="radio" name="q4" value="D"> getElementsByName</label><br>

            <p class="mt-3"><strong>5. What does querySelector return?</strong></p>
            <label><input type="radio" name="q5" value="A"> All matching elements</label><br>
            <label><input type="radio" name="q5" value="B"> First matching element</label><br>
            <label><input type="radio" name="q5" value="C"> Array of elements</label><br>
            <label><input type="radio" name="q5" value="D"> Null always</label><br><br>

            <p><strong>6. What will this do?</strong><br>
                <code>document.createElement("p");</code>
            </p>
            <label><input type="radio" name="q6" value="A"> Delete paragraph</label><br>
            <label><input type="radio" name="q6" value="B"> Create paragraph element</label><br>
            <label><input type="radio" name="q6" value="C"> Select paragraph</label><br>
            <label><input type="radio" name="q6" value="D"> Hide paragraph</label><br>

            <p class="mt-3"><strong>7. What is innerText used for?</strong></p>
            <label><input type="radio" name="q7" value="A"> Get/set text content</label><br>
            <label><input type="radio" name="q7" value="B"> Remove element</label><br>
            <label><input type="radio" name="q7" value="C"> Style element</label><br>
            <label><input type="radio" name="q7" value="D"> Create element</label><br><br>

            <p><strong>8. What does appendChild do?</strong></p>
            <label><input type="radio" name="q8" value="A"> Removes element</label><br>
            <label><input type="radio" name="q8" value="B"> Adds child element</label><br>
            <label><input type="radio" name="q8" value="C"> Selects element</label><br>
            <label><input type="radio" name="q8" value="D"> Hides element</label><br>

            <p class="mt-3"><strong>9. What will happen?</strong><br>
                <code>document.body.style.backgroundColor = "red";</code>
            </p>
            <label><input type="radio" name="q9" value="A"> Changes page background</label><br>
            <label><input type="radio" name="q9" value="B"> Deletes body</label><br>
            <label><input type="radio" name="q9" value="C"> Adds new body</label><br>
            <label><input type="radio" name="q9" value="D"> No effect</label><br><br>

            <p><strong>10. Which method removes an element?</strong></p>
            <label><input type="radio" name="q10" value="A"> deleteElement</label><br>
            <label><input type="radio" name="q10" value="B"> removeChild</label><br>
            <label><input type="radio" name="q10" value="C"> removeElementById</label><br>
            <label><input type="radio" name="q10" value="D"> clearElement</label><br>

            <p class="mt-3"><strong>11. What does this return?</strong><br>
                <code>document.querySelectorAll("p")</code>
            </p>
            <label><input type="radio" name="q11" value="A"> One element</label><br>
            <label><input type="radio" name="q11" value="B"> NodeList</label><br>
            <label><input type="radio" name="q11" value="C"> Array</label><br>
            <label><input type="radio" name="q11" value="D"> String</label><br><br>

            <p><strong>12. What is event listener used for?</strong></p>
            <label><input type="radio" name="q12" value="A"> Styling elements</label><br>
            <label><input type="radio" name="q12" value="B"> Handling events</label><br>
            <label><input type="radio" name="q12" value="C"> Creating elements</label><br>
            <label><input type="radio" name="q12" value="D"> Removing DOM</label><br>

            <p class="mt-3"><strong>13. What will this do?</strong><br>
                <code>button.addEventListener("click", function(){ alert("Hi"); });</code>
            </p>
            <label><input type="radio" name="q13" value="A"> Deletes button</label><br>
            <label><input type="radio" name="q13" value="B"> Shows alert on click</label><br>
            <label><input type="radio" name="q13" value="C"> Changes color</label><br>
            <label><input type="radio" name="q13" value="D"> Logs error</label><br><br>

            <p><strong>14. What does classList.add do?</strong></p>
            <label><input type="radio" name="q14" value="A"> Removes class</label><br>
            <label><input type="radio" name="q14" value="B"> Adds class</label><br>
            <label><input type="radio" name="q14" value="C"> Deletes element</label><br>
            <label><input type="radio" name="q14" value="D"> Selects element</label><br>

            <p class="mt-3"><strong>15. What will happen?</strong><br>
                <code>document.getElementById("box").style.display = "none";</code>
            </p>
            <label><input type="radio" name="q15" value="A"> Shows element</label><br>
            <label><input type="radio" name="q15" value="B"> Hides element</label><br>
            <label><input type="radio" name="q15" value="C"> Deletes element</label><br>
            <label><input type="radio" name="q15" value="D"> Moves element</label><br><br>

            <p><strong>16. Which method selects by tag name?</strong></p>
            <label><input type="radio" name="q16" value="A"> getElementsByTagName</label><br>
            <label><input type="radio" name="q16" value="B"> getElementById</label><br>
            <label><input type="radio" name="q16" value="C"> querySelector</label><br>
            <label><input type="radio" name="q16" value="D"> getClass</label><br>

            <p class="mt-3"><strong>17. What is DOM?</strong></p>
            <label><input type="radio" name="q17" value="A"> Programming language</label><br>
            <label><input type="radio" name="q17" value="B"> Browser API</label><br>
            <label><input type="radio" name="q17" value="C"> Database</label><br>
            <label><input type="radio" name="q17" value="D"> Server</label><br><br>

            <p><strong>18. What does this do?</strong><br>
                <code>document.write("Hello");</code>
            </p>
            <label><input type="radio" name="q18" value="A"> Deletes page</label><br>
            <label><input type="radio" name="q18" value="B"> Writes to page</label><br>
            <label><input type="radio" name="q18" value="C"> Logs to console</label><br>
            <label><input type="radio" name="q18" value="D"> Creates alert</label><br>

            <p class="mt-3"><strong>19. What does this return?</strong><br>
                <code>document.getElementById("x")</code>
            </p>
            <label><input type="radio" name="q19" value="A"> Array</label><br>
            <label><input type="radio" name="q19" value="B"> Element or null</label><br>
            <label><input type="radio" name="q19" value="C"> String</label><br>
            <label><input type="radio" name="q19" value="D"> Number</label><br><br>

            <p><strong>20. What is DOM manipulation?</strong></p>
            <label><input type="radio" name="q20" value="A"> Changing HTML structure</label><br>
            <label><input type="radio" name="q20" value="B"> Deleting browser</label><br>
            <label><input type="radio" name="q20" value="C"> Installing JS</label><br>
            <label><input type="radio" name="q20" value="D"> Running server</label><br>

            <p class="mt-3"><strong>21. What will this do?</strong><br>
                <code>document.querySelector(".box").style.color = "blue";</code>
            </p>
            <label><input type="radio" name="q21" value="A"> Changes text color</label><br>
            <label><input type="radio" name="q21" value="B"> Deletes element</label><br>
            <label><input type="radio" name="q21" value="C"> Hides page</label><br>
            <label><input type="radio" name="q21" value="D"> Logs error</label><br><br>

            <p><strong>22. What does remove() do?</strong></p>
            <label><input type="radio" name="q22" value="A"> Adds element</label><br>
            <label><input type="radio" name="q22" value="B"> Removes element</label><br>
            <label><input type="radio" name="q22" value="C"> Selects element</label><br>
            <label><input type="radio" name="q22" value="D"> Styles element</label><br>

            <p class="mt-3"><strong>23. What is innerHTML used for?</strong></p>
            <label><input type="radio" name="q23" value="A"> Get/set HTML inside element</label><br>
            <label><input type="radio" name="q23" value="B"> Remove element</label><br>
            <label><input type="radio" name="q23" value="C"> Create event</label><br>
            <label><input type="radio" name="q23" value="D"> None</label><br><br>

            <p><strong>24. What does this return?</strong><br>
                <code>document.getElementsByClassName("box")</code>
            </p>
            <label><input type="radio" name="q24" value="A"> Single element</label><br>
            <label><input type="radio" name="q24" value="B"> HTMLCollection</label><br>
            <label><input type="radio" name="q24" value="C"> String</label><br>
            <label><input type="radio" name="q24" value="D"> Boolean</label><br>

            <p class="mt-3"><strong>25. What happens when DOM loads?</strong></p>
            <label><input type="radio" name="q25" value="A"> JS stops working</label><br>
            <label><input type="radio" name="q25" value="B"> HTML becomes accessible via JS</label><br>
            <label><input type="radio" name="q25" value="C"> Browser crashes</label><br>
            <label><input type="radio" name="q25" value="D"> Server restarts</label><br><br>

            <p><strong>26. What will this do?</strong><br>
                <code>document.body.appendChild(document.createElement("div"));</code>
            </p>
            <label><input type="radio" name="q26" value="A"> Removes body</label><br>
            <label><input type="radio" name="q26" value="B"> Adds div to body</label><br>
            <label><input type="radio" name="q26" value="C"> Hides page</label><br>
            <label><input type="radio" name="q26" value="D"> Error</label><br>

            <p class="mt-3"><strong>27. What is event bubbling?</strong></p>
            <label><input type="radio" name="q27" value="A"> Event moves downward only</label><br>
            <label><input type="radio" name="q27" value="B"> Event propagates upward</label><br>
            <label><input type="radio" name="q27" value="C"> Event stops immediately</label><br>
            <label><input type="radio" name="q27" value="D"> Event deletes DOM</label><br><br>

            <p><strong>28. What does preventDefault() do?</strong></p>
            <label><input type="radio" name="q28" value="A"> Stops default action</label><br>
            <label><input type="radio" name="q28" value="B"> Deletes element</label><br>
            <label><input type="radio" name="q28" value="C"> Adds style</label><br>
            <label><input type="radio" name="q28" value="D"> Logs error</label><br>

            <p class="mt-3"><strong>29. What will this do?</strong><br>
                <code>document.title = "New Page";</code>
            </p>
            <label><input type="radio" name="q29" value="A"> Changes tab title</label><br>
            <label><input type="radio" name="q29" value="B"> Deletes page</label><br>
            <label><input type="radio" name="q29" value="C"> Hides browser</label><br>
            <label><input type="radio" name="q29" value="D"> Creates alert</label><br><br>

            <p><strong>30. What is DOM tree?</strong></p>
            <label><input type="radio" name="q30" value="A"> CSS structure</label><br>
            <label><input type="radio" name="q30" value="B"> Hierarchy of HTML elements</label><br>
            <label><input type="radio" name="q30" value="C"> Database model</label><br>
            <label><input type="radio" name="q30" value="D"> Server structure</label><br><br>
        
            <p><strong>31. What does <code>element.tagName</code> return for a &lt;div&gt;?</strong></p>
            <label><input type="radio" name="q31" value="A"> "div"</label><br>
            <label><input type="radio" name="q31" value="B"> "DIV"</label><br>
            <label><input type="radio" name="q31" value="C"> "Div"</label><br>
            <label><input type="radio" name="q31" value="D"> undefined</label><br>
            <p class="mt-3"><strong>32. Which event fires when the DOM is fully parsed (before images load)?</strong></p>
            <label><input type="radio" name="q32" value="A"> load</label><br>
            <label><input type="radio" name="q32" value="B"> DOMContentLoaded</label><br>
            <label><input type="radio" name="q32" value="C"> ready</label><br>
            <label><input type="radio" name="q32" value="D"> domloaded</label><br><br>
            <p><strong>33. What does <code>element.setAttribute("class", "active")</code> do?</strong></p>
            <label><input type="radio" name="q33" value="A"> Removes the class</label><br>
            <label><input type="radio" name="q33" value="B"> Toggles the class</label><br>
            <label><input type="radio" name="q33" value="C"> Sets the attribute value</label><br>
            <label><input type="radio" name="q33" value="D"> Gets the attribute</label><br>
            <p class="mt-3"><strong>34. What does <code>element.parentNode</code> return?</strong></p>
            <label><input type="radio" name="q34" value="A"> Child element</label><br>
            <label><input type="radio" name="q34" value="B"> Sibling element</label><br>
            <label><input type="radio" name="q34" value="C"> Parent element</label><br>
            <label><input type="radio" name="q34" value="D"> Document root</label><br><br>
            <p><strong>35. Which method creates a text node?</strong></p>
            <label><input type="radio" name="q35" value="A"> createElement()</label><br>
            <label><input type="radio" name="q35" value="B"> createTextNode()</label><br>
            <label><input type="radio" name="q35" value="C"> createNode()</label><br>
            <label><input type="radio" name="q35" value="D"> addText()</label><br>
            <p class="mt-3"><strong>36. What does <code>element.children.length</code> return?</strong></p>
            <label><input type="radio" name="q36" value="A"> Number of text nodes</label><br>
            <label><input type="radio" name="q36" value="B"> Number of all child nodes</label><br>
            <label><input type="radio" name="q36" value="C"> Number of element children</label><br>
            <label><input type="radio" name="q36" value="D"> undefined</label><br><br>
            <p><strong>37. What does <code>insertBefore(newNode, refNode)</code> do?</strong></p>
            <label><input type="radio" name="q37" value="A"> Adds element after ref</label><br>
            <label><input type="radio" name="q37" value="B"> Removes element</label><br>
            <label><input type="radio" name="q37" value="C"> Inserts newNode before refNode</label><br>
            <label><input type="radio" name="q37" value="D"> Replaces ref with newNode</label><br>
            <p class="mt-3"><strong>38. What does <code>classList.toggle("active")</code> do?</strong></p>
            <label><input type="radio" name="q38" value="A"> Always removes the class</label><br>
            <label><input type="radio" name="q38" value="B"> Always adds the class</label><br>
            <label><input type="radio" name="q38" value="C"> Adds class if absent, removes if present</label><br>
            <label><input type="radio" name="q38" value="D"> Does nothing</label><br><br>
            <p><strong>39. What does <code>document.title</code> return?</strong></p>
            <label><input type="radio" name="q39" value="A"> The page &lt;h1&gt; text</label><br>
            <label><input type="radio" name="q39" value="B"> The browser tab title</label><br>
            <label><input type="radio" name="q39" value="C"> The current URL</label><br>
            <label><input type="radio" name="q39" value="D"> undefined</label><br>
            <p class="mt-3"><strong>40. Which property gets or sets a link's href?</strong></p>
            <label><input type="radio" name="q40" value="A"> element.link</label><br>
            <label><input type="radio" name="q40" value="B"> element.href</label><br>
            <label><input type="radio" name="q40" value="C"> element.url</label><br>
            <label><input type="radio" name="q40" value="D"> element.src</label><br><br>
            <p><strong>41. What does <code>element.nextSibling</code> return?</strong></p>
            <label><input type="radio" name="q41" value="A"> Next element sibling only</label><br>
            <label><input type="radio" name="q41" value="B"> Next child element</label><br>
            <label><input type="radio" name="q41" value="C"> Next node (including text nodes)</label><br>
            <label><input type="radio" name="q41" value="D"> Parent element</label><br>
            <p class="mt-3"><strong>42. What does <code>document.forms</code> return?</strong></p>
            <label><input type="radio" name="q42" value="A"> Array of inputs</label><br>
            <label><input type="radio" name="q42" value="B"> NodeList of forms</label><br>
            <label><input type="radio" name="q42" value="C"> HTMLCollection of forms</label><br>
            <label><input type="radio" name="q42" value="D"> undefined</label><br><br>
            <p><strong>43. Which method stops event propagation up the DOM tree?</strong></p>
            <label><input type="radio" name="q43" value="A"> preventDefault()</label><br>
            <label><input type="radio" name="q43" value="B"> stopDefault()</label><br>
            <label><input type="radio" name="q43" value="C"> stopImmediatePropagation()</label><br>
            <label><input type="radio" name="q43" value="D"> stopPropagation()</label><br>
            <p class="mt-3"><strong>44. What does <code>element.offsetHeight</code> measure?</strong></p>
            <label><input type="radio" name="q44" value="A"> CSS height only</label><br>
            <label><input type="radio" name="q44" value="B"> Height including padding and border</label><br>
            <label><input type="radio" name="q44" value="C"> Content height only</label><br>
            <label><input type="radio" name="q44" value="D"> Margin height</label><br><br>
            <p><strong>45. What does <code>window.innerWidth</code> return?</strong></p>
            <label><input type="radio" name="q45" value="A"> Page content width</label><br>
            <label><input type="radio" name="q45" value="B"> Document width</label><br>
            <label><input type="radio" name="q45" value="C"> Viewport width</label><br>
            <label><input type="radio" name="q45" value="D"> Screen width</label><br>
            <p class="mt-3"><strong>46. Which property lets you read and set an element's HTML content?</strong></p>
            <label><input type="radio" name="q46" value="A"> innerText</label><br>
            <label><input type="radio" name="q46" value="B"> textContent</label><br>
            <label><input type="radio" name="q46" value="C"> outerHTML</label><br>
            <label><input type="radio" name="q46" value="D"> innerHTML</label><br><br>
            <p><strong>47. What does <code>removeEventListener</code> require to correctly remove a listener?</strong></p>
            <label><input type="radio" name="q47" value="A"> Event name only</label><br>
            <label><input type="radio" name="q47" value="B"> A named function reference</label><br>
            <label><input type="radio" name="q47" value="C"> A timer ID</label><br>
            <label><input type="radio" name="q47" value="D"> DOM readiness check</label><br>
            <p class="mt-3"><strong>48. What does <code>element.focus()</code> do?</strong></p>
            <label><input type="radio" name="q48" value="A"> Adds a focus ring style</label><br>
            <label><input type="radio" name="q48" value="B"> Sets keyboard focus to the element</label><br>
            <label><input type="radio" name="q48" value="C"> Triggers a click event</label><br>
            <label><input type="radio" name="q48" value="D"> Adds an event listener</label><br><br>
            <p><strong>49. What does <code>document.activeElement</code> return?</strong></p>
            <label><input type="radio" name="q49" value="A"> The last clicked element</label><br>
            <label><input type="radio" name="q49" value="B"> The currently focused element</label><br>
            <label><input type="radio" name="q49" value="C"> The body element</label><br>
            <label><input type="radio" name="q49" value="D"> The document root</label><br>
            <p class="mt-3"><strong>50. What does <code>element.dataset.myValue</code> access?</strong></p>
            <label><input type="radio" name="q50" value="A"> A CSS variable</label><br>
            <label><input type="radio" name="q50" value="B"> An attribute literally named myValue</label><br>
            <label><input type="radio" name="q50" value="C"> The data-my-value attribute</label><br>
            <label><input type="radio" name="q50" value="D"> Local storage</label><br>
`,
  'dom-intermediate': `
<h4 class="mb-4 py-4 text-success">DOM - Intermediate</h4>
            <p class="mt-3"><strong>1. What will this return?</strong><br>
                <code>document.querySelectorAll("div").length</code>
            </p>
            <label><input type="radio" name="q1" value="A"> Single element</label><br>
            <label><input type="radio" name="q1" value="B"> Number of div elements</label><br>
            <label><input type="radio" name="q1" value="C"> Array of divs</label><br>
            <label><input type="radio" name="q1" value="D"> Undefined</label><br><br>

            <p><strong>2. What is true about event delegation?</strong></p>
            <label><input type="radio" name="q2" value="A"> Events only work on parent elements</label><br>
            <label><input type="radio" name="q2" value="B"> Events are attached to every child manually</label><br>
            <label><input type="radio" name="q2" value="C"> Events are handled at a parent level using
                bubbling</label><br>
            <label><input type="radio" name="q2" value="D"> It disables event bubbling</label><br>

            <p class="mt-3"><strong>3. What will happen here?</strong><br>
                <code>document.getElementById("box").classList.toggle("active");</code>
            </p>
            <label><input type="radio" name="q3" value="A"> Always adds class</label><br>
            <label><input type="radio" name="q3" value="B"> Always removes class</label><br>
            <label><input type="radio" name="q3" value="C"> Adds if missing, removes if present</label><br>
            <label><input type="radio" name="q3" value="D"> Deletes element</label><br><br>

            <p><strong>4. What does event.target represent?</strong></p>
            <label><input type="radio" name="q4" value="A"> The element that triggered the event</label><br>
            <label><input type="radio" name="q4" value="B"> The document object</label><br>
            <label><input type="radio" name="q4" value="C"> The parent node</label><br>
            <label><input type="radio" name="q4" value="D"> The window object</label><br>

            <p class="mt-3"><strong>5. What is the result?</strong><br>
                <code>document.body.innerHTML += "&lt;p&gt;Hi&lt;/p&gt;";</code>
            </p>
            <label><input type="radio" name="q5" value="A"> Replaces entire body</label><br>
            <label><input type="radio" name="q5" value="B"> Adds paragraph to body</label><br>
            <label><input type="radio" name="q5" value="C"> Deletes body content</label><br>
            <label><input type="radio" name="q5" value="D"> Throws error</label><br><br>

            <p><strong>6. What is the difference between innerHTML and textContent?</strong></p>
            <label><input type="radio" name="q6" value="A"> No difference</label><br>
            <label><input type="radio" name="q6" value="B"> innerHTML parses HTML, textContent does not</label><br>
            <label><input type="radio" name="q6" value="C"> textContent is faster always</label><br>
            <label><input type="radio" name="q6" value="D"> innerHTML only works on body</label><br>

            <p class="mt-3"><strong>7. What will this do?</strong><br>
                <code>document.querySelector("ul").children</code>
            </p>
            <label><input type="radio" name="q7" value="A"> Returns all DOM nodes including text</label><br>
            <label><input type="radio" name="q7" value="B"> Returns only element children</label><br>
            <label><input type="radio" name="q7" value="C"> Returns array</label><br>
            <label><input type="radio" name="q7" value="D"> Returns null</label><br><br>

            <p><strong>8. What is the output?</strong><br>
                <code>console.log(typeof document.getElementById("x"));</code>
            </p>
            <label><input type="radio" name="q8" value="A"> string</label><br>
            <label><input type="radio" name="q8" value="B"> object</label><br>
            <label><input type="radio" name="q8" value="C"> function</label><br>
            <label><input type="radio" name="q8" value="D"> undefined</label><br>

            <p class="mt-3"><strong>9. What happens when removeChild is used?</strong></p>
            <label><input type="radio" name="q9" value="A"> Removes element from DOM</label><br>
            <label><input type="radio" name="q9" value="B"> Hides element only</label><br>
            <label><input type="radio" name="q9" value="C"> Deletes JavaScript file</label><br>
            <label><input type="radio" name="q9" value="D"> Reloads page</label><br><br>

            <p><strong>10. What will this return?</strong><br>
                <code>document.querySelectorAll(".item")</code>
            </p>
            <label><input type="radio" name="q10" value="A"> Single element</label><br>
            <label><input type="radio" name="q10" value="B"> NodeList</label><br>
            <label><input type="radio" name="q10" value="C"> Array</label><br>
            <label><input type="radio" name="q10" value="D"> String</label><br>

            <p class="mt-3"><strong>11. What is true about NodeList?</strong></p>
            <label><input type="radio" name="q11" value="A"> It is always a real array</label><br>
            <label><input type="radio" name="q11" value="B"> It behaves like an array but is not one</label><br>
            <label><input type="radio" name="q11" value="C"> It is a string</label><br>
            <label><input type="radio" name="q11" value="D"> It is a number</label><br><br>

            <p><strong>12. What does this do?</strong><br>
                <code>element.setAttribute("data-id", "5");</code>
            </p>
            <label><input type="radio" name="q12" value="A"> Deletes attribute</label><br>
            <label><input type="radio" name="q12" value="B"> Adds custom attribute</label><br>
            <label><input type="radio" name="q12" value="C"> Changes ID only</label><br>
            <label><input type="radio" name="q12" value="D"> Hides element</label><br>

            <p class="mt-3"><strong>13. What will happen?</strong><br>
                <code>document.body.firstChild</code>
            </p>
            <label><input type="radio" name="q13" value="A"> First element node only</label><br>
            <label><input type="radio" name="q13" value="B"> First node including text</label><br>
            <label><input type="radio" name="q13" value="C"> Last element</label><br>
            <label><input type="radio" name="q13" value="D"> Null always</label><br><br>

            <p><strong>14. What is parentNode?</strong></p>
            <label><input type="radio" name="q14" value="A"> Child element</label><br>
            <label><input type="radio" name="q14" value="B"> Parent of a node</label><br>
            <label><input type="radio" name="q14" value="C"> Sibling element</label><br>
            <label><input type="radio" name="q14" value="D"> Root only</label><br>

            <p class="mt-3"><strong>15. What does this do?</strong><br>
                <code>element.replaceChild(newEl, oldEl);</code>
            </p>
            <label><input type="radio" name="q15" value="A"> Swaps elements</label><br>
            <label><input type="radio" name="q15" value="B"> Deletes both elements</label><br>
            <label><input type="radio" name="q15" value="C"> Adds new element only</label><br>
            <label><input type="radio" name="q15" value="D"> Hides old element</label><br><br>

            <p><strong>16. What is querySelector performance compared to getElementById?</strong></p>
            <label><input type="radio" name="q16" value="A"> querySelector is always faster</label><br>
            <label><input type="radio" name="q16" value="B"> getElementById is faster</label><br>
            <label><input type="radio" name="q16" value="C"> Same speed always</label><br>
            <label><input type="radio" name="q16" value="D"> Depends on CSS only</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>console.log(document.body.childNodes.length);</code>
            </p>
            <label><input type="radio" name="q17" value="A"> Only elements</label><br>
            <label><input type="radio" name="q17" value="B"> Elements + text nodes</label><br>
            <label><input type="radio" name="q17" value="C"> Only text</label><br>
            <label><input type="radio" name="q17" value="D"> Always 0</label><br><br>

            <p><strong>18. What does cloneNode(true) do?</strong></p>
            <label><input type="radio" name="q18" value="A"> Clones element only</label><br>
            <label><input type="radio" name="q18" value="B"> Clones element with children</label><br>
            <label><input type="radio" name="q18" value="C"> Deletes element</label><br>
            <label><input type="radio" name="q18" value="D"> Moves element</label><br>

            <p class="mt-3"><strong>19. What will this do?</strong><br>
                <code>document.querySelector("div").style.cssText = "color:red;font-size:20px";</code>
            </p>
            <label><input type="radio" name="q19" value="A"> Removes styles</label><br>
            <label><input type="radio" name="q19" value="B"> Applies multiple styles</label><br>
            <label><input type="radio" name="q19" value="C"> Deletes element</label><br>
            <label><input type="radio" name="q19" value="D"> Throws error</label><br><br>

            <p><strong>20. What is event bubbling?</strong></p>
            <label><input type="radio" name="q20" value="A"> Event goes from parent to child</label><br>
            <label><input type="radio" name="q20" value="B"> Event goes from child to parent</label><br>
            <label><input type="radio" name="q20" value="C"> Event stops immediately</label><br>
            <label><input type="radio" name="q20" value="D"> Event reloads page</label><br>

            <p class="mt-3"><strong>21. What does stopPropagation do?</strong></p>
            <label><input type="radio" name="q21" value="A"> Stops event bubbling</label><br>
            <label><input type="radio" name="q21" value="B"> Deletes element</label><br>
            <label><input type="radio" name="q21" value="C"> Adds event</label><br>
            <label><input type="radio" name="q21" value="D"> Reloads DOM</label><br><br>

            <p><strong>22. What will this return?</strong><br>
                <code>document.documentElement</code>
            </p>
            <label><input type="radio" name="q22" value="A"> body</label><br>
            <label><input type="radio" name="q22" value="B"> html</label><br>
            <label><input type="radio" name="q22" value="C"> head only</label><br>
            <label><input type="radio" name="q22" value="D"> null</label><br>

            <p class="mt-3"><strong>23. What is event capturing?</strong></p>
            <label><input type="radio" name="q23" value="A"> Child → Parent flow</label><br>
            <label><input type="radio" name="q23" value="B"> Parent → Child flow</label><br>
            <label><input type="radio" name="q23" value="C"> No flow</label><br>
            <label><input type="radio" name="q23" value="D"> Random flow</label><br><br>

            <p><strong>24. What does this do?</strong><br>
                <code>element.innerHTML = "";</code>
            </p>
            <label><input type="radio" name="q24" value="A"> Deletes element</label><br>
            <label><input type="radio" name="q24" value="B"> Clears content inside element</label><br>
            <label><input type="radio" name="q24" value="C"> Hides element</label><br>
            <label><input type="radio" name="q24" value="D"> Moves element</label><br>

            <p class="mt-3"><strong>25. What will this return?</strong><br>
                <code>document.querySelector("div#app .box")</code>
            </p>
            <label><input type="radio" name="q25" value="A"> First matching element</label><br>
            <label><input type="radio" name="q25" value="B"> All matching elements</label><br>
            <label><input type="radio" name="q25" value="C"> Array</label><br>
            <label><input type="radio" name="q25" value="D"> Null always</label><br><br>

            <p><strong>26. What is DOM traversal?</strong></p>
            <label><input type="radio" name="q26" value="A"> Writing HTML</label><br>
            <label><input type="radio" name="q26" value="B"> Moving between DOM nodes</label><br>
            <label><input type="radio" name="q26" value="C"> Styling page</label><br>
            <label><input type="radio" name="q26" value="D"> Deleting JS</label><br>

            <p class="mt-3"><strong>27. What does nextElementSibling return?</strong></p>
            <label><input type="radio" name="q27" value="A"> Previous element</label><br>
            <label><input type="radio" name="q27" value="B"> Next element only</label><br>
            <label><input type="radio" name="q27" value="C"> Next node including text</label><br>
            <label><input type="radio" name="q27" value="D"> Parent element</label><br><br>

            <p><strong>28. What will happen?</strong><br>
                <code>element.remove()</code>
            </p>
            <label><input type="radio" name="q28" value="A"> Hides element</label><br>
            <label><input type="radio" name="q28" value="B"> Removes element from DOM</label><br>
            <label><input type="radio" name="q28" value="C"> Moves element</label><br>
            <label><input type="radio" name="q28" value="D"> Resets styles</label><br>

            <p class="mt-3"><strong>29. What does offsetParent refer to?</strong></p>
            <label><input type="radio" name="q29" value="A"> Closest positioned ancestor</label><br>
            <label><input type="radio" name="q29" value="B"> Body always</label><br>
            <label><input type="radio" name="q29" value="C"> Child element</label><br>
            <label><input type="radio" name="q29" value="D"> Null always</label><br><br>

            <p><strong>30. What is the output conceptually?</strong><br>
                <code>console.log(document.readyState);</code>
            </p>
            <label><input type="radio" name="q30" value="A"> Page load status</label><br>
            <label><input type="radio" name="q30" value="B"> Element count</label><br>
            <label><input type="radio" name="q30" value="C"> DOM size</label><br>
            <label><input type="radio" name="q30" value="D"> Error state</label><br><br>
        
            <p><strong>31. What does <code>document.querySelectorAll(".item")</code> return for 3 matches?</strong></p>
            <label><input type="radio" name="q31" value="A"> 1 element</label><br>
            <label><input type="radio" name="q31" value="B"> An empty array</label><br>
            <label><input type="radio" name="q31" value="C"> undefined</label><br>
            <label><input type="radio" name="q31" value="D"> A NodeList of 3 elements</label><br>
            <p class="mt-3"><strong>32. What does <code>element.cloneNode(true)</code> do?</strong></p>
            <label><input type="radio" name="q32" value="A"> Shallow clone only</label><br>
            <label><input type="radio" name="q32" value="B"> Removes the element</label><br>
            <label><input type="radio" name="q32" value="C"> Deep clone including children</label><br>
            <label><input type="radio" name="q32" value="D"> Copies only text content</label><br><br>
            <p><strong>33. What is event delegation?</strong></p>
            <label><input type="radio" name="q33" value="A"> Passing events to CSS</label><br>
            <label><input type="radio" name="q33" value="B"> Attaching one listener to a parent to handle child events</label><br>
            <label><input type="radio" name="q33" value="C"> Creating multiple listeners</label><br>
            <label><input type="radio" name="q33" value="D"> Stopping events from bubbling</label><br>
            <p class="mt-3"><strong>34. What does <code>document.createElement("div").outerHTML</code> return?</strong></p>
            <label><input type="radio" name="q34" value="A"> "&lt;div /&gt;"</label><br>
            <label><input type="radio" name="q34" value="B"> "&lt;div&gt;&lt;/div&gt;"</label><br>
            <label><input type="radio" name="q34" value="C"> undefined</label><br>
            <label><input type="radio" name="q34" value="D"> empty string</label><br><br>
            <p><strong>35. What does <code>element.getBoundingClientRect()</code> return?</strong></p>
            <label><input type="radio" name="q35" value="A"> CSS properties object</label><br>
            <label><input type="radio" name="q35" value="B"> Size and position relative to viewport</label><br>
            <label><input type="radio" name="q35" value="C"> Parent element dimensions</label><br>
            <label><input type="radio" name="q35" value="D"> Computed styles</label><br>
            <p class="mt-3"><strong>36. What does <code>MutationObserver</code> do?</strong></p>
            <label><input type="radio" name="q36" value="A"> Monitors network requests</label><br>
            <label><input type="radio" name="q36" value="B"> Watches for and reacts to DOM changes</label><br>
            <label><input type="radio" name="q36" value="C"> Handles mouse events</label><br>
            <label><input type="radio" name="q36" value="D"> Observes CSS transitions</label><br><br>
            <p><strong>37. What is the type of <code>NodeList.prototype.forEach</code>?</strong></p>
            <label><input type="radio" name="q37" value="A"> "undefined"</label><br>
            <label><input type="radio" name="q37" value="B"> "function"</label><br>
            <label><input type="radio" name="q37" value="C"> "method"</label><br>
            <label><input type="radio" name="q37" value="D"> "object"</label><br>
            <p class="mt-3"><strong>38. What does <code>e.target</code> refer to in an event handler?</strong></p>
            <label><input type="radio" name="q38" value="A"> The element with the listener</label><br>
            <label><input type="radio" name="q38" value="B"> The window object</label><br>
            <label><input type="radio" name="q38" value="C"> The element that triggered the event</label><br>
            <label><input type="radio" name="q38" value="D"> The document</label><br><br>
            <p><strong>39. What is the key difference between <code>innerHTML</code> and <code>textContent</code>?</strong></p>
            <label><input type="radio" name="q39" value="A"> Performance only</label><br>
            <label><input type="radio" name="q39" value="B"> innerHTML parses HTML tags; textContent treats them as plain text</label><br>
            <label><input type="radio" name="q39" value="C"> textContent works on forms only</label><br>
            <label><input type="radio" name="q39" value="D"> There is no difference</label><br>
            <p class="mt-3"><strong>40. Which method replaces an existing DOM element with another?</strong></p>
            <label><input type="radio" name="q40" value="A"> replaceWith()</label><br>
            <label><input type="radio" name="q40" value="B"> replaceNode()</label><br>
            <label><input type="radio" name="q40" value="C"> swapElement()</label><br>
            <label><input type="radio" name="q40" value="D"> changeElement()</label><br><br>
            <p><strong>41. What does <code>element.matches(".active")</code> return?</strong></p>
            <label><input type="radio" name="q41" value="A"> Adds the class</label><br>
            <label><input type="radio" name="q41" value="B"> true if element matches the selector</label><br>
            <label><input type="radio" name="q41" value="C"> Removes the class</label><br>
            <label><input type="radio" name="q41" value="D"> All matching elements</label><br>
            <p class="mt-3"><strong>42. What is Shadow DOM primarily used for?</strong></p>
            <label><input type="radio" name="q42" value="A"> Applying dark mode</label><br>
            <label><input type="radio" name="q42" value="B"> Encapsulating styles and markup in web components</label><br>
            <label><input type="radio" name="q42" value="C"> Server-side rendering</label><br>
            <label><input type="radio" name="q42" value="D"> Debugging the DOM</label><br><br>
            <p><strong>43. What does <code>element.insertAdjacentHTML("beforeend", "&lt;p&gt;Hi&lt;/p&gt;")</code> do?</strong></p>
            <label><input type="radio" name="q43" value="A"> Replaces all content</label><br>
            <label><input type="radio" name="q43" value="B"> Inserts HTML before the element</label><br>
            <label><input type="radio" name="q43" value="C"> Inserts HTML as last child inside element</label><br>
            <label><input type="radio" name="q43" value="D"> Removes the element</label><br>
            <p class="mt-3"><strong>44. What does <code>document.createDocumentFragment()</code> provide?</strong></p>
            <label><input type="radio" name="q44" value="A"> Creates a new document</label><br>
            <label><input type="radio" name="q44" value="B"> A lightweight temporary container for DOM nodes</label><br>
            <label><input type="radio" name="q44" value="C"> Copies the entire DOM</label><br>
            <label><input type="radio" name="q44" value="D"> Creates an iframe</label><br><br>
            <p><strong>45. What does <code>e.currentTarget</code> refer to in a listener?</strong></p>
            <label><input type="radio" name="q45" value="A"> The event source element</label><br>
            <label><input type="radio" name="q45" value="B"> The element the listener is attached to</label><br>
            <label><input type="radio" name="q45" value="C"> The parent element</label><br>
            <label><input type="radio" name="q45" value="D"> The window</label><br>
            <p class="mt-3"><strong>46. What does <code>classList.replace("old", "new")</code> do?</strong></p>
            <label><input type="radio" name="q46" value="A"> Adds both classes</label><br>
            <label><input type="radio" name="q46" value="B"> Removes "old" and adds "new"</label><br>
            <label><input type="radio" name="q46" value="C"> Only removes "old"</label><br>
            <label><input type="radio" name="q46" value="D"> Only adds "new"</label><br><br>
            <p><strong>47. Which property stores custom HTML5 data attributes?</strong></p>
            <label><input type="radio" name="q47" value="A"> element.attr</label><br>
            <label><input type="radio" name="q47" value="B"> element.metadata</label><br>
            <label><input type="radio" name="q47" value="C"> element.dataset</label><br>
            <label><input type="radio" name="q47" value="D"> element.props</label><br>
            <p class="mt-3"><strong>48. What does <code>document.readyState</code> return while the page is still loading?</strong></p>
            <label><input type="radio" name="q48" value="A"> "complete"</label><br>
            <label><input type="radio" name="q48" value="B"> "loading"</label><br>
            <label><input type="radio" name="q48" value="C"> "interactive"</label><br>
            <label><input type="radio" name="q48" value="D"> "pending"</label><br><br>
            <p><strong>49. What does <code>IntersectionObserver</code> watch for?</strong></p>
            <label><input type="radio" name="q49" value="A"> Element visibility in the viewport</label><br>
            <label><input type="radio" name="q49" value="B"> Click events</label><br>
            <label><input type="radio" name="q49" value="C"> Style changes</label><br>
            <label><input type="radio" name="q49" value="D"> Network load events</label><br>
            <p class="mt-3"><strong>50. Which approach appends multiple nodes to the DOM in one atomic operation?</strong></p>
            <label><input type="radio" name="q50" value="A"> Multiple appendChild calls</label><br>
            <label><input type="radio" name="q50" value="B"> An insertBefore loop</label><br>
            <label><input type="radio" name="q50" value="C"> Appending a DocumentFragment</label><br>
            <label><input type="radio" name="q50" value="D"> Concatenating innerHTML strings</label><br>
`,
  'dom-advanced': `
<h4 class="mb-4 py-4 text-success">DOM - Advanced</h4>
            <p class="mt-3"><strong>1. What will this return?</strong><br>
                <code>document.querySelectorAll("div > p:nth-child(2)")</code>
            </p>
            <label><input type="radio" name="q1" value="A"> All second child p elements inside divs</label><br>
            <label><input type="radio" name="q1" value="B"> First paragraph in each div</label><br>
            <label><input type="radio" name="q1" value="C"> Only one element</label><br>
            <label><input type="radio" name="q1" value="D"> Null</label><br><br>

            <p><strong>2. What is true about Shadow DOM?</strong></p>
            <label><input type="radio" name="q2" value="A"> It replaces the DOM completely</label><br>
            <label><input type="radio" name="q2" value="B"> It provides encapsulated DOM tree</label><br>
            <label><input type="radio" name="q2" value="C"> It only works in Node.js</label><br>
            <label><input type="radio" name="q2" value="D"> It disables CSS entirely</label><br>

            <p class="mt-3"><strong>3. What will happen?</strong><br>
                <code>document.body.insertAdjacentHTML("beforeend", "&lt;div&gt;Hi&lt;/div&gt;");</code>
            </p>
            <label><input type="radio" name="q3" value="A"> Replaces body</label><br>
            <label><input type="radio" name="q3" value="B"> Appends HTML string as element</label><br>
            <label><input type="radio" name="q3" value="C"> Deletes body content</label><br>
            <label><input type="radio" name="q3" value="D"> Throws error</label><br><br>

            <p><strong>4. What does event delegation optimize?</strong></p>
            <label><input type="radio" name="q4" value="A"> Memory by reducing event listeners</label><br>
            <label><input type="radio" name="q4" value="B"> CSS rendering speed</label><br>
            <label><input type="radio" name="q4" value="C"> HTML parsing</label><br>
            <label><input type="radio" name="q4" value="D"> Network requests</label><br>

            <p class="mt-3"><strong>5. What will this return?</strong><br>
                <code>element.closest(".container")</code>
            </p>
            <label><input type="radio" name="q5" value="A"> Finds nearest ancestor matching selector</label><br>
            <label><input type="radio" name="q5" value="B"> Finds child element</label><br>
            <label><input type="radio" name="q5" value="C"> Finds siblings only</label><br>
            <label><input type="radio" name="q5" value="D"> Returns null always</label><br><br>

            <p><strong>6. What is the difference between event capturing and bubbling?</strong></p>
            <label><input type="radio" name="q6" value="A"> No difference</label><br>
            <label><input type="radio" name="q6" value="B"> Capturing goes top-down, bubbling goes bottom-up</label><br>
            <label><input type="radio" name="q6" value="C"> Both are same direction</label><br>
            <label><input type="radio" name="q6" value="D"> Only capturing exists</label><br>

            <p class="mt-3"><strong>7. What will this do?</strong><br>
                <code>new MutationObserver(callback)</code>
            </p>
            <label><input type="radio" name="q7" value="A"> Observes DOM changes</label><br>
            <label><input type="radio" name="q7" value="B"> Creates elements</label><br>
            <label><input type="radio" name="q7" value="C"> Deletes nodes</label><br>
            <label><input type="radio" name="q7" value="D"> Stops JS execution</label><br><br>

            <p><strong>8. What is reflow in DOM?</strong></p>
            <label><input type="radio" name="q8" value="A"> CSS animation process</label><br>
            <label><input type="radio" name="q8" value="B"> Browser recalculating layout</label><br>
            <label><input type="radio" name="q8" value="C"> JavaScript compilation</label><br>
            <label><input type="radio" name="q8" value="D"> Network request</label><br>

            <p class="mt-3"><strong>9. What is repaint?</strong><br>
                <label><input type="radio" name="q9" value="A"> Layout recalculation</label><br>
                <label><input type="radio" name="q9" value="B"> Visual update without layout change</label><br>
                <label><input type="radio" name="q9" value="C"> DOM deletion</label><br>
                <label><input type="radio" name="q9" value="D"> Script execution</label><br><br>

            <p><strong>10. What will this return?</strong><br>
                <code>document.documentElement.contains(document.body)</code>
            </p>
            <label><input type="radio" name="q10" value="A"> false</label><br>
            <label><input type="radio" name="q10" value="B"> true</label><br>
            <label><input type="radio" name="q10" value="C"> null</label><br>
            <label><input type="radio" name="q10" value="D"> undefined</label><br>

            <p class="mt-3"><strong>11. What is the role of requestAnimationFrame?</strong></p>
            <label><input type="radio" name="q11" value="A"> Delays JS execution randomly</label><br>
            <label><input type="radio" name="q11" value="B"> Syncs code with browser repaint cycle</label><br>
            <label><input type="radio" name="q11" value="C"> Stops rendering</label><br>
            <label><input type="radio" name="q11" value="D"> Removes animation</label><br><br>

            <p><strong>12. What does this do?</strong><br>
                <code>document.createDocumentFragment()</code>
            </p>
            <label><input type="radio" name="q12" value="A"> Creates visible DOM</label><br>
            <label><input type="radio" name="q12" value="B"> Creates lightweight DOM container</label><br>
            <label><input type="radio" name="q12" value="C"> Deletes DOM</label><br>
            <label><input type="radio" name="q12" value="D"> Clones body</label><br>

            <p class="mt-3"><strong>13. Why use DocumentFragment?</strong></p>
            <label><input type="radio" name="q13" value="A"> Faster DOM updates</label><br>
            <label><input type="radio" name="q13" value="B"> Slower rendering</label><br>
            <label><input type="radio" name="q13" value="C"> Breaks DOM</label><br>
            <label><input type="radio" name="q13" value="D"> Adds CSS only</label><br><br>

            <p><strong>14. What is event loop role in DOM events?</strong></p>
            <label><input type="radio" name="q14" value="A"> Blocks UI</label><br>
            <label><input type="radio" name="q14" value="B"> Handles async callbacks execution</label><br>
            <label><input type="radio" name="q14" value="C"> Deletes events</label><br>
            <label><input type="radio" name="q14" value="D"> Rewrites HTML</label><br>

            <p class="mt-3"><strong>15. What will this return?</strong><br>
                <code>getComputedStyle(document.body).display</code>
            </p>
            <label><input type="radio" name="q15" value="A"> Inline style only</label><br>
            <label><input type="radio" name="q15" value="B"> Final computed CSS value</label><br>
            <label><input type="radio" name="q15" value="C"> HTML structure</label><br>
            <label><input type="radio" name="q15" value="D"> Null</label><br><br>

            <p><strong>16. What is true about virtual DOM concept?</strong></p>
            <label><input type="radio" name="q16" value="A"> Directly manipulates real DOM</label><br>
            <label><input type="radio" name="q16" value="B"> Uses memory copy of DOM for diffing</label><br>
            <label><input type="radio" name="q16" value="C"> Replaces browser DOM</label><br>
            <label><input type="radio" name="q16" value="D"> Only exists in CSS</label><br>

            <p class="mt-3"><strong>17. What happens here?</strong><br>
                <code>node.cloneNode(true)</code>
            </p>
            <label><input type="radio" name="q17" value="A"> Shallow clone only</label><br>
            <label><input type="radio" name="q17" value="B"> Deep clone with children</label><br>
            <label><input type="radio" name="q17" value="C"> Deletes node</label><br>
            <label><input type="radio" name="q17" value="D"> Moves node</label><br><br>

            <p><strong>18. What is true about layout thrashing?</strong></p>
            <label><input type="radio" name="q18" value="A"> Improves performance</label><br>
            <label><input type="radio" name="q18" value="B"> Frequent reflow/repaint causing slowdown</label><br>
            <label><input type="radio" name="q18" value="C"> Only CSS issue</label><br>
            <label><input type="radio" name="q18" value="D"> Only JS issue</label><br>

            <p class="mt-3"><strong>19. What does dataset represent?</strong><br>
                <label><input type="radio" name="q19" value="A"> CSS variables</label><br>
                <label><input type="radio" name="q19" value="B"> Custom data attributes</label><br>
                <label><input type="radio" name="q19" value="C"> DOM structure</label><br>
                <label><input type="radio" name="q19" value="D"> Events only</label><br>

            <p><strong>20. What will this do?</strong><br>
                <code>element.addEventListener("click", handler, true)</code>
            </p>
            <label><input type="radio" name="q20" value="A"> Bubbling phase</label><br>
            <label><input type="radio" name="q20" value="B"> Capturing phase</label><br>
            <label><input type="radio" name="q20" value="C"> Stops event</label><br>
            <label><input type="radio" name="q20" value="D"> Removes listener</label><br>

            <p class="mt-3"><strong>21. What is passive event listener used for?</strong></p>
            <label><input type="radio" name="q21" value="A"> Improves scroll performance</label><br>
            <label><input type="radio" name="q21" value="B"> Blocks scrolling</label><br>
            <label><input type="radio" name="q21" value="C"> Deletes events</label><br>
            <label><input type="radio" name="q21" value="D"> Slows page</label><br><br>

            <p><strong>22. What does this return?</strong><br>
                <code>document.activeElement</code>
            </p>
            <label><input type="radio" name="q22" value="A"> Root element</label><br>
            <label><input type="radio" name="q22" value="B"> Currently focused element</label><br>
            <label><input type="radio" name="q22" value="C"> Body always</label><br>
            <label><input type="radio" name="q22" value="D"> Null</label><br>

            <p class="mt-3"><strong>23. What is event composition?</strong></p>
            <label><input type="radio" name="q23" value="A"> Combining multiple events</label><br>
            <label><input type="radio" name="q23" value="B"> Deleting events</label><br>
            <label><input type="radio" name="q23" value="C"> CSS animation</label><br>
            <label><input type="radio" name="q23" value="D"> DOM removal</label><br><br>

            <p><strong>24. What does this do?</strong><br>
                <code>element.replaceWith(newNode)</code>
            </p>
            <label><input type="radio" name="q24" value="A"> Inserts before</label><br>
            <label><input type="radio" name="q24" value="B"> Replaces element directly</label><br>
            <label><input type="radio" name="q24" value="C"> Deletes only</label><br>
            <label><input type="radio" name="q24" value="D"> Clones element</label><br>

            <p class="mt-3"><strong>25. What is the role of DOMContentLoaded?</strong></p>
            <label><input type="radio" name="q25" value="A"> Waits for full page load including images</label><br>
            <label><input type="radio" name="q25" value="B"> Fires when HTML is parsed</label><br>
            <label><input type="radio" name="q25" value="C"> Stops JS execution</label><br>
            <label><input type="radio" name="q25" value="D"> Reloads page</label><br><br>

            <p><strong>26. What does this represent?</strong><br>
                <code>window.getSelection()</code>
            </p>
            <label><input type="radio" name="q26" value="A"> DOM tree</label><br>
            <label><input type="radio" name="q26" value="B"> User selected text</label><br>
            <label><input type="radio" name="q26" value="C"> CSS styles</label><br>
            <label><input type="radio" name="q26" value="D"> Events</label><br>

            <p class="mt-3"><strong>27. What is intersection observer used for?</strong></p>
            <label><input type="radio" name="q27" value="A"> Detect scroll position changes</label><br>
            <label><input type="radio" name="q27" value="B"> Handle clicks</label><br>
            <label><input type="radio" name="q27" value="C"> Modify CSS only</label><br>
            <label><input type="radio" name="q27" value="D"> Remove elements</label><br><br>

            <p><strong>28. What will this do?</strong><br>
                <code>element.style.setProperty("--main-color", "red")</code>
            </p>
            <label><input type="radio" name="q28" value="A"> Sets CSS variable</label><br>
            <label><input type="radio" name="q28" value="B"> Deletes style</label><br>
            <label><input type="radio" name="q28" value="C"> Adds element</label><br>
            <label><input type="radio" name="q28" value="D"> Reloads page</label><br>

            <p class="mt-3"><strong>29. What is true about live collections?</strong></p>
            <label><input type="radio" name="q29" value="A"> They never update</label><br>
            <label><input type="radio" name="q29" value="B"> They auto-update when DOM changes</label><br>
            <label><input type="radio" name="q29" value="C"> They are arrays</label><br>
            <label><input type="radio" name="q29" value="D"> They are strings</label><br><br>

            <p><strong>30. What will this return?</strong><br>
                <code>document.body.compareDocumentPosition(document.documentElement)</code>
            </p>
            <label><input type="radio" name="q30" value="A"> Position relationship between nodes</label><br>
            <label><input type="radio" name="q30" value="B"> CSS order</label><br>
            <label><input type="radio" name="q30" value="C"> Null</label><br>
            <label><input type="radio" name="q30" value="D"> Error</label><br><br>
        
            <p><strong>31. What does <code>document.querySelectorAll("*").length</code> return?</strong></p>
            <label><input type="radio" name="q31" value="A"> 1</label><br>
            <label><input type="radio" name="q31" value="B"> The total count of all elements on the page</label><br>
            <label><input type="radio" name="q31" value="C"> undefined</label><br>
            <label><input type="radio" name="q31" value="D"> 0</label><br>
            <p class="mt-3"><strong>32. What is the difference between <code>stopPropagation()</code> and <code>stopImmediatePropagation()</code>?</strong></p>
            <label><input type="radio" name="q32" value="A"> No difference</label><br>
            <label><input type="radio" name="q32" value="B"> stopImmediatePropagation also prevents other listeners on the same element</label><br>
            <label><input type="radio" name="q32" value="C"> stopPropagation prevents bubbling only</label><br>
            <label><input type="radio" name="q32" value="D"> Both B and C are correct</label><br><br>
            <p><strong>33. What does <code>getComputedStyle(el).getPropertyValue("color")</code> return?</strong></p>
            <label><input type="radio" name="q33" value="A"> A CSS variable name</label><br>
            <label><input type="radio" name="q33" value="B"> The final computed color value</label><br>
            <label><input type="radio" name="q33" value="C"> Inline style only</label><br>
            <label><input type="radio" name="q33" value="D"> The class name</label><br>
            <p class="mt-3"><strong>34. What is <code>requestAnimationFrame</code> primarily used for?</strong></p>
            <label><input type="radio" name="q34" value="A"> Async network requests</label><br>
            <label><input type="radio" name="q34" value="B"> DOM mutation detection</label><br>
            <label><input type="radio" name="q34" value="C"> Smooth animations synced with browser repaint</label><br>
            <label><input type="radio" name="q34" value="D"> Lazy loading images</label><br><br>
            <p><strong>35. Which event phase does <code>addEventListener</code> default to?</strong></p>
            <label><input type="radio" name="q35" value="A"> Capture phase</label><br>
            <label><input type="radio" name="q35" value="B"> Bubble phase</label><br>
            <label><input type="radio" name="q35" value="C"> Target phase</label><br>
            <label><input type="radio" name="q35" value="D"> All phases simultaneously</label><br>
            <p class="mt-3"><strong>36. What does <code>el.scrollTop</code> return?</strong></p>
            <label><input type="radio" name="q36" value="A"> The element's CSS height</label><br>
            <label><input type="radio" name="q36" value="B"> Pixels scrolled from the top of the element</label><br>
            <label><input type="radio" name="q36" value="C"> Total scrollable height</label><br>
            <label><input type="radio" name="q36" value="D"> Client height</label><br><br>
            <p><strong>37. What does <code>customElements.define("my-el", class extends HTMLElement{})</code> do?</strong></p>
            <label><input type="radio" name="q37" value="A"> Extends HTMLElement globally</label><br>
            <label><input type="radio" name="q37" value="B"> Registers a custom HTML element</label><br>
            <label><input type="radio" name="q37" value="C"> Creates an iframe</label><br>
            <label><input type="radio" name="q37" value="D"> Adds a global event listener</label><br>
            <p class="mt-3"><strong>38. Which property gives access to HTML <code>data-*</code> attribute values?</strong></p>
            <label><input type="radio" name="q38" value="A"> element.attributes</label><br>
            <label><input type="radio" name="q38" value="B"> element.dataset</label><br>
            <label><input type="radio" name="q38" value="C"> element.props</label><br>
            <label><input type="radio" name="q38" value="D"> element.customData</label><br><br>
            <p><strong>39. When does <code>element.shadowRoot</code> return a value instead of null?</strong></p>
            <label><input type="radio" name="q39" value="A"> When the page is in dark mode</label><br>
            <label><input type="radio" name="q39" value="B"> After shadow DOM is attached with attachShadow()</label><br>
            <label><input type="radio" name="q39" value="C"> When the element is a button</label><br>
            <label><input type="radio" name="q39" value="D"> When innerHTML is set</label><br>
            <p class="mt-3"><strong>40. What does the <code>slot</code> attribute do in Web Components?</strong></p>
            <label><input type="radio" name="q40" value="A"> Positions elements in CSS grid</label><br>
            <label><input type="radio" name="q40" value="B"> Specifies a placeholder for projected content in the shadow DOM</label><br>
            <label><input type="radio" name="q40" value="C"> Applies inline styles</label><br>
            <label><input type="radio" name="q40" value="D"> Creates CSS animations</label><br><br>
            <p><strong>41. What does <code>performance.now()</code> return?</strong></p>
            <label><input type="radio" name="q41" value="A"> Unix timestamp in seconds</label><br>
            <label><input type="radio" name="q41" value="B"> Milliseconds since the page navigation started</label><br>
            <label><input type="radio" name="q41" value="C"> A Date object</label><br>
            <label><input type="radio" name="q41" value="D"> Seconds since epoch</label><br>
            <p class="mt-3"><strong>42. What does <code>ResizeObserver</code> watch for?</strong></p>
            <label><input type="radio" name="q42" value="A"> Window resize events only</label><br>
            <label><input type="radio" name="q42" value="B"> CSS transitions</label><br>
            <label><input type="radio" name="q42" value="C"> Changes in an observed element's size</label><br>
            <label><input type="radio" name="q42" value="D"> DOM node additions</label><br><br>
            <p><strong>43. How does <code>pointer-events: none</code> affect JS event listeners on that element?</strong></p>
            <label><input type="radio" name="q43" value="A"> Disables all JS events globally</label><br>
            <label><input type="radio" name="q43" value="B"> The element ignores mouse and pointer events</label><br>
            <label><input type="radio" name="q43" value="C"> Removes the element from the DOM</label><br>
            <label><input type="radio" name="q43" value="D"> Has no effect on JS listeners</label><br>
            <p class="mt-3"><strong>44. What does <code>e.composedPath()</code> return?</strong></p>
            <label><input type="radio" name="q44" value="A"> The event propagation path as an array of nodes</label><br>
            <label><input type="radio" name="q44" value="B"> A CSS selector path</label><br>
            <label><input type="radio" name="q44" value="C"> A DOM traversal iterator</label><br>
            <label><input type="radio" name="q44" value="D"> All ancestors up to &lt;body&gt;</label><br><br>
            <p><strong>45. What does <code>el.getRootNode()</code> return?</strong></p>
            <label><input type="radio" name="q45" value="A"> Always the document</label><br>
            <label><input type="radio" name="q45" value="B"> The shadow root or document depending on context</label><br>
            <label><input type="radio" name="q45" value="C"> Always the body element</label><br>
            <label><input type="radio" name="q45" value="D"> The root &lt;html&gt; element</label><br>
            <p class="mt-3"><strong>46. What is the difference between <code>DOMContentLoaded</code> and <code>load</code>?</strong></p>
            <label><input type="radio" name="q46" value="A"> No difference</label><br>
            <label><input type="radio" name="q46" value="B"> DOMContentLoaded fires after images load</label><br>
            <label><input type="radio" name="q46" value="C"> load fires when DOM is ready</label><br>
            <label><input type="radio" name="q46" value="D"> DOMContentLoaded fires when DOM is parsed; load fires when all resources finish</label><br><br>
            <p><strong>47. What does <code>window.getSelection().toString()</code> return?</strong></p>
            <label><input type="radio" name="q47" value="A"> All text on the page</label><br>
            <label><input type="radio" name="q47" value="B"> The clipboard contents</label><br>
            <label><input type="radio" name="q47" value="C"> The text the user has selected</label><br>
            <label><input type="radio" name="q47" value="D"> The active element's text content</label><br>
            <p class="mt-3"><strong>48. What API does <code>element.animate([{opacity:0},{opacity:1}], 500)</code> use?</strong></p>
            <label><input type="radio" name="q48" value="A"> CSS transitions</label><br>
            <label><input type="radio" name="q48" value="B"> Web Animations API</label><br>
            <label><input type="radio" name="q48" value="C"> jQuery animations</label><br>
            <label><input type="radio" name="q48" value="D"> CSS keyframes only</label><br><br>
            <p><strong>49. What is the current status of <code>document.execCommand</code>?</strong></p>
            <label><input type="radio" name="q49" value="A"> Fully supported</label><br>
            <label><input type="radio" name="q49" value="B"> Requires a polyfill</label><br>
            <label><input type="radio" name="q49" value="C"> Deprecated</label><br>
            <label><input type="radio" name="q49" value="D"> Available in Chrome only</label><br>
            <p class="mt-3"><strong>50. Which API is the modern way to read/write to the clipboard?</strong></p>
            <label><input type="radio" name="q50" value="A"> ClipboardEvent only</label><br>
            <label><input type="radio" name="q50" value="B"> Clipboard.read() / Clipboard.write()</label><br>
            <label><input type="radio" name="q50" value="C"> document.execCommand</label><br>
            <label><input type="radio" name="q50" value="D"> navigator.clipboard (Async Clipboard API)</label><br>
`,
  'functions-beginner': `
<h4 class="mb-4 py-4 text-success">Functions - Beginner</h4>
            <p class="mt-3"><strong>1. What will this return?</strong><br>
                <code>function test() { return; } console.log(test());</code>
            </p>
            <label><input type="radio" name="q1" value="A"> 0</label><br>
            <label><input type="radio" name="q1" value="B"> null</label><br>
            <label><input type="radio" name="q1" value="C"> undefined</label><br>
            <label><input type="radio" name="q1" value="D"> error</label><br><br>

            <p><strong>2. What is the output?</strong><br>
                <code>console.log(typeof function(){});</code>
            </p>
            <label><input type="radio" name="q2" value="A"> object</label><br>
            <label><input type="radio" name="q2" value="B"> function</label><br>
            <label><input type="radio" name="q2" value="C"> undefined</label><br>
            <label><input type="radio" name="q2" value="D"> string</label><br>

            <p class="mt-3"><strong>3. What will happen?</strong><br>
                <code>function add(a, b) { return a + b; } console.log(add(2));</code>
            </p>
            <label><input type="radio" name="q3" value="A"> 2</label><br>
            <label><input type="radio" name="q3" value="B"> NaN</label><br>
            <label><input type="radio" name="q3" value="C"> undefined</label><br>
            <label><input type="radio" name="q3" value="D"> error</label><br><br>

            <p><strong>4. What is the output?</strong><br>
                <code>function x() { console.log(arguments.length); } x(1,2,3);</code>
            </p>
            <label><input type="radio" name="q4" value="A"> 1</label><br>
            <label><input type="radio" name="q4" value="B"> 2</label><br>
            <label><input type="radio" name="q4" value="C"> 3</label><br>
            <label><input type="radio" name="q4" value="D"> undefined</label><br>

            <p class="mt-3"><strong>5. What will this return?</strong><br>
                <code>function f(x) { return x * 2; } console.log(f());</code>
            </p>
            <label><input type="radio" name="q5" value="A"> 0</label><br>
            <label><input type="radio" name="q5" value="B"> NaN</label><br>
            <label><input type="radio" name="q5" value="C"> undefined</label><br>
            <label><input type="radio" name="q5" value="D"> error</label><br><br>

            <p><strong>6. What is a function expression?</strong></p>
            <label><input type="radio" name="q6" value="A"> function declared inside object</label><br>
            <label><input type="radio" name="q6" value="B"> function assigned to variable</label><br>
            <label><input type="radio" name="q6" value="C"> arrow function only</label><br>
            <label><input type="radio" name="q6" value="D"> DOM function</label><br>

            <p class="mt-3"><strong>7. What will happen?</strong><br>
                <code>console.log(sum(2,3)); function sum(a,b){ return a+b; }</code>
            </p>
            <label><input type="radio" name="q7" value="A"> ReferenceError</label><br>
            <label><input type="radio" name="q7" value="B"> 5</label><br>
            <label><input type="radio" name="q7" value="C"> undefined</label><br>
            <label><input type="radio" name="q7" value="D"> NaN</label><br><br>

            <p><strong>8. What is function hoisting?</strong></p>
            <label><input type="radio" name="q8" value="A"> Functions are deleted before execution</label><br>
            <label><input type="radio" name="q8" value="B"> Functions are available before declaration</label><br>
            <label><input type="radio" name="q8" value="C"> Functions cannot be called</label><br>
            <label><input type="radio" name="q8" value="D"> Only arrow functions hoist</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>let x = function() { return 10; }; console.log(x());</code>
            </p>
            <label><input type="radio" name="q9" value="A"> 10</label><br>
            <label><input type="radio" name="q9" value="B"> undefined</label><br>
            <label><input type="radio" name="q9" value="C"> error</label><br>
            <label><input type="radio" name="q9" value="D"> null</label><br><br>

            <p><strong>10. What is an arrow function?</strong></p>
            <label><input type="radio" name="q10" value="A"> ES6 function syntax with =></label><br>
            <label><input type="radio" name="q10" value="B"> DOM function</label><br>
            <label><input type="radio" name="q10" value="C"> Loop function</label><br>
            <label><input type="radio" name="q10" value="D"> Class function</label><br>

            <p class="mt-3"><strong>11. What will this return?</strong><br>
                <code>const f = () => { return; }; console.log(f());</code>
            </p>
            <label><input type="radio" name="q11" value="A"> null</label><br>
            <label><input type="radio" name="q11" value="B"> 0</label><br>
            <label><input type="radio" name="q11" value="C"> undefined</label><br>
            <label><input type="radio" name="q11" value="D"> error</label><br><br>

            <p><strong>12. What is implicit return?</strong></p>
            <label><input type="radio" name="q12" value="A"> Using return keyword</label><br>
            <label><input type="radio" name="q12" value="B"> Arrow function without braces</label><br>
            <label><input type="radio" name="q12" value="C"> Function with loops</label><br>
            <label><input type="radio" name="q12" value="D"> DOM return</label><br>

            <p class="mt-3"><strong>13. What will happen?</strong><br>
                <code>function test(a = 5) { return a; } console.log(test());</code>
            </p>
            <label><input type="radio" name="q13" value="A"> undefined</label><br>
            <label><input type="radio" name="q13" value="B"> 5</label><br>
            <label><input type="radio" name="q13" value="C"> null</label><br>
            <label><input type="radio" name="q13" value="D"> error</label><br><br>

            <p><strong>14. What is a callback function?</strong></p>
            <label><input type="radio" name="q14" value="A"> Function inside DOM only</label><br>
            <label><input type="radio" name="q14" value="B"> Function passed into another function</label><br>
            <label><input type="radio" name="q14" value="C"> Loop function</label><br>
            <label><input type="radio" name="q14" value="D"> Class method</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>setTimeout(function(){ console.log("A"); }, 0); console.log("B");</code>
            </p>
            <label><input type="radio" name="q15" value="A"> A B</label><br>
            <label><input type="radio" name="q15" value="B"> B A</label><br>
            <label><input type="radio" name="q15" value="C"> A only</label><br>
            <label><input type="radio" name="q15" value="D"> B only</label><br><br>

            <p><strong>16. What is lexical scope?</strong></p>
            <label><input type="radio" name="q16" value="A"> Scope based on where function is called</label><br>
            <label><input type="radio" name="q16" value="B"> Scope based on where function is written</label><br>
            <label><input type="radio" name="q16" value="C"> Global only</label><br>
            <label><input type="radio" name="q16" value="D"> DOM scope</label><br>

            <p class="mt-3"><strong>17. What will this return?</strong><br>
                <code>function outer() { return function(){ return 5; }; } console.log(outer()());</code>
            </p>
            <label><input type="radio" name="q17" value="A"> undefined</label><br>
            <label><input type="radio" name="q17" value="B"> 5</label><br>
            <label><input type="radio" name="q17" value="C"> function</label><br>
            <label><input type="radio" name="q17" value="D"> error</label><br><br>

            <p><strong>18. What is a higher-order function?</strong></p>
            <label><input type="radio" name="q18" value="A"> Function that returns number</label><br>
            <label><input type="radio" name="q18" value="B"> Function that takes or returns another function</label><br>
            <label><input type="radio" name="q18" value="C"> DOM function</label><br>
            <label><input type="radio" name="q18" value="D"> Loop function</label><br>

            <p class="mt-3"><strong>19. What will happen?</strong><br>
                <code>const fn = () => console.log(this); fn();</code>
            </p>
            <label><input type="radio" name="q19" value="A"> window/global object</label><br>
            <label><input type="radio" name="q19" value="B"> undefined</label><br>
            <label><input type="radio" name="q19" value="C"> function itself</label><br>
            <label><input type="radio" name="q19" value="D"> error</label><br><br>

            <p><strong>20. What is closure?</strong></p>
            <label><input type="radio" name="q20" value="A"> Function inside object</label><br>
            <label><input type="radio" name="q20" value="B"> Function with access to outer scope</label><br>
            <label><input type="radio" name="q20" value="C"> DOM function</label><br>
            <label><input type="radio" name="q20" value="D"> Loop function</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>function a(){ return function b(){ return "hi"; }; } console.log(a()());</code>
            </p>
            <label><input type="radio" name="q21" value="A"> hi</label><br>
            <label><input type="radio" name="q21" value="B"> function</label><br>
            <label><input type="radio" name="q21" value="C"> undefined</label><br>
            <label><input type="radio" name="q21" value="D"> error</label><br><br>

            <p><strong>22. What is rest parameter?</strong></p>
            <label><input type="radio" name="q22" value="A"> ...args to collect multiple values</label><br>
            <label><input type="radio" name="q22" value="B"> DOM method</label><br>
            <label><input type="radio" name="q22" value="C"> loop method</label><br>
            <label><input type="radio" name="q22" value="D"> CSS feature</label><br>

            <p class="mt-3"><strong>23. What will this do?</strong><br>
                <code>function sum(...nums){ return nums.length; } console.log(sum(1,2,3,4));</code>
            </p>
            <label><input type="radio" name="q23" value="A"> 10</label><br>
            <label><input type="radio" name="q23" value="B"> 4</label><br>
            <label><input type="radio" name="q23" value="C"> undefined</label><br>
            <label><input type="radio" name="q23" value="D"> error</label><br><br>

            <p><strong>24. What is default parameter?</strong></p>
            <label><input type="radio" name="q24" value="A"> Parameter with fallback value</label><br>
            <label><input type="radio" name="q24" value="B"> Required parameter</label><br>
            <label><input type="radio" name="q24" value="C"> DOM parameter</label><br>
            <label><input type="radio" name="q24" value="D"> Loop parameter</label><br>

            <p class="mt-3"><strong>25. What will this return?</strong><br>
                <code>function f(x, y = 10){ return x + y; } console.log(f(5));</code>
            </p>
            <label><input type="radio" name="q25" value="A"> 5</label><br>
            <label><input type="radio" name="q25" value="B"> 10</label><br>
            <label><input type="radio" name="q25" value="C"> 15</label><br>
            <label><input type="radio" name="q25" value="D"> NaN</label><br><br>

            <p><strong>26. What is function scope?</strong></p>
            <label><input type="radio" name="q26" value="A"> Variables accessible only inside function</label><br>
            <label><input type="radio" name="q26" value="B"> Global variables only</label><br>
            <label><input type="radio" name="q26" value="C"> DOM scope</label><br>
            <label><input type="radio" name="q26" value="D"> CSS scope</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>const f = function(x){ return x * x; }; console.log(f(3));</code>
            </p>
            <label><input type="radio" name="q27" value="A"> 6</label><br>
            <label><input type="radio" name="q27" value="B"> 9</label><br>
            <label><input type="radio" name="q27" value="C"> 3</label><br>
            <label><input type="radio" name="q27" value="D"> undefined</label><br><br>

            <p><strong>28. What is IIFE?</strong></p>
            <label><input type="radio" name="q28" value="A"> Immediately Invoked Function Expression</label><br>
            <label><input type="radio" name="q28" value="B"> Internal Inline Function Engine</label><br>
            <label><input type="radio" name="q28" value="C"> Iterative Function Event</label><br>
            <label><input type="radio" name="q28" value="D"> DOM function</label><br>

            <p class="mt-3"><strong>29. What will this return?</strong><br>
                <code>(function(){ return 10; })();</code>
            </p>
            <label><input type="radio" name="q29" value="A"> undefined</label><br>
            <label><input type="radio" name="q29" value="B"> 10</label><br>
            <label><input type="radio" name="q29" value="C"> function</label><br>
            <label><input type="radio" name="q29" value="D"> error</label><br><br>

            <p><strong>30. What is function composition?</strong></p>
            <label><input type="radio" name="q30" value="A"> Combining multiple functions into one flow</label><br>
            <label><input type="radio" name="q30" value="B"> Writing HTML in JS</label><br>
            <label><input type="radio" name="q30" value="C"> DOM manipulation</label><br>
            <label><input type="radio" name="q30" value="D"> Loop chaining only</label><br><br>
        
            <p>
                <strong>31. What is the output?</strong><br>
                <code>function add(a,b){ return a+b; }<br>
                console.log(add(2,3));</code>
            </p>
            <label><input type="radio" name="q31" value="A"> 23</label><br>
            <label><input type="radio" name="q31" value="B"> 5</label><br>
            <label><input type="radio" name="q31" value="C"> undefined</label><br>
            <label><input type="radio" name="q31" value="D"> error</label><br>
            <p class="mt-3"><strong>32. What does a function return if it has no <code>return</code> statement?</strong></p>
            <label><input type="radio" name="q32" value="A"> 0</label><br>
            <label><input type="radio" name="q32" value="B"> null</label><br>
            <label><input type="radio" name="q32" value="C"> false</label><br>
            <label><input type="radio" name="q32" value="D"> undefined</label><br><br>
            <p>
                <strong>33. What is the output?</strong><br>
                <code>const greet = name =&gt; "Hello, " + name;<br>
                console.log(greet("JS"));</code>
            </p>
            <label><input type="radio" name="q33" value="A"> "name"</label><br>
            <label><input type="radio" name="q33" value="B"> "Hello,"</label><br>
            <label><input type="radio" name="q33" value="C"> undefined</label><br>
            <label><input type="radio" name="q33" value="D"> "Hello, JS"</label><br>
            <p class="mt-3"><strong>34. What is a function <em>parameter</em>?</strong></p>
            <label><input type="radio" name="q34" value="A"> The value returned by the function</label><br>
            <label><input type="radio" name="q34" value="B"> A variable listed in the function definition</label><br>
            <label><input type="radio" name="q34" value="C"> The function name</label><br>
            <label><input type="radio" name="q34" value="D"> A loop inside a function</label><br><br>
            <p><strong>35. What is a function <em>argument</em>?</strong></p>
            <label><input type="radio" name="q35" value="A"> The code inside the function body</label><br>
            <label><input type="radio" name="q35" value="B"> The value passed when calling the function</label><br>
            <label><input type="radio" name="q35" value="C"> The return value</label><br>
            <label><input type="radio" name="q35" value="D"> The function name</label><br>
            <p class="mt-3"><strong>36. Can a function call itself?</strong></p>
            <label><input type="radio" name="q36" value="A"> No</label><br>
            <label><input type="radio" name="q36" value="B"> Only inside loops</label><br>
            <label><input type="radio" name="q36" value="C"> Yes — this is called recursion</label><br>
            <label><input type="radio" name="q36" value="D"> Only inside classes</label><br><br>
            <p>
                <strong>37. What is the output?</strong><br>
                <code>function fn(){ console.log(arguments[0]); }<br>
                fn(10);</code>
            </p>
            <label><input type="radio" name="q37" value="A"> undefined</label><br>
            <label><input type="radio" name="q37" value="B"> 10</label><br>
            <label><input type="radio" name="q37" value="C"> 0</label><br>
            <label><input type="radio" name="q37" value="D"> error</label><br>
            <p class="mt-3"><strong>38. Which of these is an anonymous function?</strong></p>
            <label><input type="radio" name="q38" value="A"> function greet(){}</label><br>
            <label><input type="radio" name="q38" value="B"> function(){}</label><br>
            <label><input type="radio" name="q38" value="C"> greet()</label><br>
            <label><input type="radio" name="q38" value="D"> const fn</label><br><br>
            <p><strong>39. What does <code>return</code> immediately do inside a function?</strong></p>
            <label><input type="radio" name="q39" value="A"> Restarts the function</label><br>
            <label><input type="radio" name="q39" value="B"> Loops back to the start</label><br>
            <label><input type="radio" name="q39" value="C"> Exits the function and optionally returns a value</label><br>
            <label><input type="radio" name="q39" value="D"> Prints the value to console</label><br>
            <p class="mt-3">
                <strong>40. What is the output?</strong><br>
                <code>const double = x =&gt; x * 2;<br>
                console.log(double(5));</code>
            </p>
            <label><input type="radio" name="q40" value="A"> 5</label><br>
            <label><input type="radio" name="q40" value="B"> 25</label><br>
            <label><input type="radio" name="q40" value="C"> "52"</label><br>
            <label><input type="radio" name="q40" value="D"> 10</label><br><br>
            <p><strong>41. What is the default value of a parameter that is not provided?</strong></p>
            <label><input type="radio" name="q41" value="A"> null</label><br>
            <label><input type="radio" name="q41" value="B"> 0</label><br>
            <label><input type="radio" name="q41" value="C"> false</label><br>
            <label><input type="radio" name="q41" value="D"> undefined</label><br>
            <p class="mt-3">
                <strong>42. What is the output?</strong><br>
                <code>function count(){<br>
                  let x = 0;<br>
                  x++;<br>
                  return x;<br>
                }<br>
                console.log(count());</code>
            </p>
            <label><input type="radio" name="q42" value="A"> 0</label><br>
            <label><input type="radio" name="q42" value="B"> 1</label><br>
            <label><input type="radio" name="q42" value="C"> 2</label><br>
            <label><input type="radio" name="q42" value="D"> undefined</label><br><br>
            <p><strong>43. Which keyword declares a named function?</strong></p>
            <label><input type="radio" name="q43" value="A"> fn</label><br>
            <label><input type="radio" name="q43" value="B"> method</label><br>
            <label><input type="radio" name="q43" value="C"> arrow</label><br>
            <label><input type="radio" name="q43" value="D"> function</label><br>
            <p class="mt-3"><strong>44. A function declared with the <code>function</code> keyword is:</strong></p>
            <label><input type="radio" name="q44" value="A"> Block-scoped and not hoisted</label><br>
            <label><input type="radio" name="q44" value="B"> Not hoisted</label><br>
            <label><input type="radio" name="q44" value="C"> Hoisted to the top of its scope</label><br>
            <label><input type="radio" name="q44" value="D"> Always private</label><br><br>
            <p>
                <strong>45. What is the output?</strong><br>
                <code>function greet(name="World"){<br>
                  return "Hello " + name;<br>
                }<br>
                console.log(greet());</code>
            </p>
            <label><input type="radio" name="q45" value="A"> "Hello"</label><br>
            <label><input type="radio" name="q45" value="B"> "Hello undefined"</label><br>
            <label><input type="radio" name="q45" value="C"> error</label><br>
            <label><input type="radio" name="q45" value="D"> "Hello World"</label><br>
            <p class="mt-3"><strong>46. What is a <em>callback</em> function?</strong></p>
            <label><input type="radio" name="q46" value="A"> A function that loops indefinitely</label><br>
            <label><input type="radio" name="q46" value="B"> A function passed as an argument to another function</label><br>
            <label><input type="radio" name="q46" value="C"> A function that returns itself</label><br>
            <label><input type="radio" name="q46" value="D"> An arrow function</label><br><br>
            <p><strong>47. What does <code>typeof function(){}</code> return?</strong></p>
            <label><input type="radio" name="q47" value="A"> "object"</label><br>
            <label><input type="radio" name="q47" value="B"> "method"</label><br>
            <label><input type="radio" name="q47" value="C"> "function"</label><br>
            <label><input type="radio" name="q47" value="D"> "undefined"</label><br>
            <p class="mt-3"><strong>48. How many values can a function return in a single <code>return</code> statement?</strong></p>
            <label><input type="radio" name="q48" value="A"> Unlimited</label><br>
            <label><input type="radio" name="q48" value="B"> Two</label><br>
            <label><input type="radio" name="q48" value="C"> Zero</label><br>
            <label><input type="radio" name="q48" value="D"> One</label><br><br>
            <p>
                <strong>49. What is the output?</strong><br>
                <code>function add(...nums){<br>
                  return nums.reduce((a,b)=&gt;a+b,0);<br>
                }<br>
                console.log(add(1,2,3));</code>
            </p>
            <label><input type="radio" name="q49" value="A"> 0</label><br>
            <label><input type="radio" name="q49" value="B"> "123"</label><br>
            <label><input type="radio" name="q49" value="C"> 6</label><br>
            <label><input type="radio" name="q49" value="D"> error</label><br>
            <p class="mt-3"><strong>50. What does IIFE stand for?</strong></p>
            <label><input type="radio" name="q50" value="A"> A loop type</label><br>
            <label><input type="radio" name="q50" value="B"> A variable declaration</label><br>
            <label><input type="radio" name="q50" value="C"> Immediately Invoked Function Expression</label><br>
            <label><input type="radio" name="q50" value="D"> An import statement</label><br>
`,
  'functions-intermediate': `
<h4 class="mb-4 py-4 text-success">Functions - Intermediate</h4>
            <p class="mt-3"><strong>1. What will this return?</strong><br>
                <code>function a(){ return function(){ return 5; }; } console.log(a()());</code>
            </p>
            <label><input type="radio" name="q1" value="A"> undefined</label><br>
            <label><input type="radio" name="q1" value="B"> 5</label><br>
            <label><input type="radio" name="q1" value="C"> function</label><br>
            <label><input type="radio" name="q1" value="D"> error</label><br><br>

            <p><strong>2. Which statement best describes closures?</strong></p>
            <label><input type="radio" name="q2" value="A"> A function that deletes outer variables</label><br>
            <label><input type="radio" name="q2" value="B"> A function that remembers outer scope variables</label><br>
            <label><input type="radio" name="q2" value="C"> A function that only runs once</label><br>
            <label><input type="radio" name="q2" value="D"> A function without parameters</label><br>

            <p class="mt-3"><strong>3. What will this output?</strong><br>
                <code>function test(){ return typeof arguments; } console.log(test());</code>
            </p>
            <label><input type="radio" name="q3" value="A"> object</label><br>
            <label><input type="radio" name="q3" value="B"> array</label><br>
            <label><input type="radio" name="q3" value="C"> function</label><br>
            <label><input type="radio" name="q3" value="D"> undefined</label><br><br>

            <p><strong>4. If a function does not return anything explicitly, what happens?</strong></p>
            <label><input type="radio" name="q4" value="A"> It returns 0</label><br>
            <label><input type="radio" name="q4" value="B"> It returns null</label><br>
            <label><input type="radio" name="q4" value="C"> It returns undefined</label><br>
            <label><input type="radio" name="q4" value="D"> It throws error</label><br>

            <p class="mt-3"><strong>5. What will this return?</strong><br>
                <code>const f = (x) => x && x * 2; console.log(f(0));</code>
            </p>
            <label><input type="radio" name="q5" value="A"> 0</label><br>
            <label><input type="radio" name="q5" value="B"> undefined</label><br>
            <label><input type="radio" name="q5" value="C"> false</label><br>
            <label><input type="radio" name="q5" value="D"> NaN</label><br><br>

            <p><strong>6. What is the result of calling a function inside itself?</strong></p>
            <label><input type="radio" name="q6" value="A"> Event handling</label><br>
            <label><input type="radio" name="q6" value="B"> Recursion</label><br>
            <label><input type="radio" name="q6" value="C"> Looping</label><br>
            <label><input type="radio" name="q6" value="D"> Binding</label><br>

            <p class="mt-3"><strong>7. What will happen here?</strong><br>
                <code>function f(x){ return x * 2; } console.log(f());</code>
            </p>
            <label><input type="radio" name="q7" value="A"> 0</label><br>
            <label><input type="radio" name="q7" value="B"> NaN</label><br>
            <label><input type="radio" name="q7" value="C"> undefined</label><br>
            <label><input type="radio" name="q7" value="D"> error</label><br><br>

            <p><strong>8. What is a callback function?</strong></p>
            <label><input type="radio" name="q8" value="A"> A function passed as an argument to another
                function</label><br>
            <label><input type="radio" name="q8" value="B"> A function that calls itself</label><br>
            <label><input type="radio" name="q8" value="C"> A DOM event only</label><br>
            <label><input type="radio" name="q8" value="D"> A loop function</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>function outer(){ let x = 10; return function(){ return x++; } } const fn = outer(); console.log(fn(), fn());</code>
            </p>
            <label><input type="radio" name="q9" value="A"> 10 10</label><br>
            <label><input type="radio" name="q9" value="B"> 10 11</label><br>
            <label><input type="radio" name="q9" value="C"> 11 12</label><br>
            <label><input type="radio" name="q9" value="D"> undefined</label><br><br>

            <p><strong>10. What does it mean when a function is “pure”?</strong></p>
            <label><input type="radio" name="q10" value="A"> It modifies external variables</label><br>
            <label><input type="radio" name="q10" value="B"> It always returns the same output for same
                input</label><br>
            <label><input type="radio" name="q10" value="C"> It uses DOM only</label><br>
            <label><input type="radio" name="q10" value="D"> It has no parameters</label><br>

            <p class="mt-3"><strong>11. What will this return?</strong><br>
                <code>function f(){ return function g(){ return typeof g; }; } console.log(f()());</code>
            </p>
            <label><input type="radio" name="q11" value="A"> undefined</label><br>
            <label><input type="radio" name="q11" value="B"> function</label><br>
            <label><input type="radio" name="q11" value="C"> string</label><br>
            <label><input type="radio" name="q11" value="D"> error</label><br><br>

            <p><strong>12. Why is hoisting important in functions?</strong></p>
            <label><input type="radio" name="q12" value="A"> It moves variables to bottom</label><br>
            <label><input type="radio" name="q12" value="B"> It allows function calls before declaration</label><br>
            <label><input type="radio" name="q12" value="C"> It deletes functions</label><br>
            <label><input type="radio" name="q12" value="D"> It blocks execution</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>const f = function(x){ return function(y){ return x + y; }; }; console.log(f(2)(3));</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 23</label><br>
            <label><input type="radio" name="q13" value="B"> 5</label><br>
            <label><input type="radio" name="q13" value="C"> 6</label><br>
            <label><input type="radio" name="q13" value="D"> undefined</label><br><br>

            <p><strong>14. What is the benefit of higher-order functions?</strong></p>
            <label><input type="radio" name="q14" value="A"> Slower execution</label><br>
            <label><input type="radio" name="q14" value="B"> Code reusability and abstraction</label><br>
            <label><input type="radio" name="q14" value="C"> DOM rendering</label><br>
            <label><input type="radio" name="q14" value="D"> CSS control</label><br>

            <p class="mt-3"><strong>15. What will this return?</strong><br>
                <code>function test(){ return arguments.length; } console.log(test(1,2,3,4));</code>
            </p>
            <label><input type="radio" name="q15" value="A"> 3</label><br>
            <label><input type="radio" name="q15" value="B"> 4</label><br>
            <label><input type="radio" name="q15" value="C"> undefined</label><br>
            <label><input type="radio" name="q15" value="D"> error</label><br><br>

            <p><strong>16. What happens when a function has no return statement?</strong></p>
            <label><input type="radio" name="q16" value="A"> It returns 0</label><br>
            <label><input type="radio" name="q16" value="B"> It returns undefined</label><br>
            <label><input type="radio" name="q16" value="C"> It returns null</label><br>
            <label><input type="radio" name="q16" value="D"> It throws error</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>console.log((function(x){ return function(y){ return x*y; }; })(3)(4));</code>
            </p>
            <label><input type="radio" name="q17" value="A"> 12</label><br>
            <label><input type="radio" name="q17" value="B"> 7</label><br>
            <label><input type="radio" name="q17" value="C"> 34</label><br>
            <label><input type="radio" name="q17" value="D"> undefined</label><br><br>

            <p><strong>18. What does function composition mean?</strong></p>
            <label><input type="radio" name="q18" value="A"> Writing HTML in JS</label><br>
            <label><input type="radio" name="q18" value="B"> Combining functions so output of one is input of
                another</label><br>
            <label><input type="radio" name="q18" value="C"> Loop chaining</label><br>
            <label><input type="radio" name="q18" value="D"> DOM manipulation</label><br>

            <p class="mt-3"><strong>19. What will this return?</strong><br>
                <code>function f(){ return () => this; } console.log(f()());</code>
            </p>
            <label><input type="radio" name="q19" value="A"> window/global object</label><br>
            <label><input type="radio" name="q19" value="B"> undefined</label><br>
            <label><input type="radio" name="q19" value="C"> function</label><br>
            <label><input type="radio" name="q19" value="D"> error</label><br><br>

            <p><strong>20. What is recursion mainly used for?</strong></p>
            <label><input type="radio" name="q20" value="A"> DOM manipulation</label><br>
            <label><input type="radio" name="q20" value="B"> Repeating tasks using function calls itself</label><br>
            <label><input type="radio" name="q20" value="C"> Styling elements</label><br>
            <label><input type="radio" name="q20" value="D"> Event handling</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>let f = (a) => (b) => (c) => a + b + c; console.log(f(1)(2)(3));</code>
            </p>
            <label><input type="radio" name="q21" value="A"> 6</label><br>
            <label><input type="radio" name="q21" value="B"> 123</label><br>
            <label><input type="radio" name="q21" value="C"> 5</label><br>
            <label><input type="radio" name="q21" value="D"> undefined</label><br><br>

            <p><strong>22. What is a default parameter used for?</strong></p>
            <label><input type="radio" name="q22" value="A"> Forces error</label><br>
            <label><input type="radio" name="q22" value="B"> Provides fallback value if argument is missing</label><br>
            <label><input type="radio" name="q22" value="C"> Deletes arguments</label><br>
            <label><input type="radio" name="q22" value="D"> DOM control</label><br>

            <p class="mt-3"><strong>23. What will this return?</strong><br>
                <code>function f(a=5){ return a; } console.log(f(undefined));</code>
            </p>
            <label><input type="radio" name="q23" value="A"> undefined</label><br>
            <label><input type="radio" name="q23" value="B"> 5</label><br>
            <label><input type="radio" name="q23" value="C"> null</label><br>
            <label><input type="radio" name="q23" value="D"> error</label><br><br>

            <p><strong>24. What is an IIFE used for?</strong></p>
            <label><input type="radio" name="q24" value="A"> Delayed execution</label><br>
            <label><input type="radio" name="q24" value="B"> Immediate execution and scope isolation</label><br>
            <label><input type="radio" name="q24" value="C"> Loop creation</label><br>
            <label><input type="radio" name="q24" value="D"> DOM binding</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>(function(){ return function(){ return "done"; }; })()();</code>
            </p>
            <label><input type="radio" name="q25" value="A"> done</label><br>
            <label><input type="radio" name="q25" value="B"> undefined</label><br>
            <label><input type="radio" name="q25" value="C"> function</label><br>
            <label><input type="radio" name="q25" value="D"> error</label><br><br>

            <p><strong>26. What is function scope?</strong></p>
            <label><input type="radio" name="q26" value="A"> Variables accessible only inside function</label><br>
            <label><input type="radio" name="q26" value="B"> Variables accessible everywhere</label><br>
            <label><input type="radio" name="q26" value="C"> CSS scope</label><br>
            <label><input type="radio" name="q26" value="D"> DOM scope</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>function f(x){ return function(y){ return x - y; }; } console.log(f(10)(3));</code>
            </p>
            <label><input type="radio" name="q27" value="A"> 7</label><br>
            <label><input type="radio" name="q27" value="B"> 13</label><br>
            <label><input type="radio" name="q27" value="C"> 103</label><br>
            <label><input type="radio" name="q27" value="D"> undefined</label><br><br>

            <p><strong>28. What is function memoization?</strong></p>
            <label><input type="radio" name="q28" value="A"> Recomputing every time</label><br>
            <label><input type="radio" name="q28" value="B"> Caching function results for performance</label><br>
            <label><input type="radio" name="q28" value="C"> DOM optimization</label><br>
            <label><input type="radio" name="q28" value="D"> CSS optimization</label><br>

            <p class="mt-3"><strong>29. What will this return?</strong><br>
                <code>function f(){ return function(){ return function(){ return 1; }; }; } console.log(f()()());</code>
            </p>
            <label><input type="radio" name="q29" value="A"> 1</label><br>
            <label><input type="radio" name="q29" value="B"> undefined</label><br>
            <label><input type="radio" name="q29" value="C"> function</label><br>
            <label><input type="radio" name="q29" value="D"> error</label><br><br>

            <p><strong>30. What is function identity based on?</strong></p>
            <label><input type="radio" name="q30" value="A"> Function name only</label><br>
            <label><input type="radio" name="q30" value="B"> Reference in memory</label><br>
            <label><input type="radio" name="q30" value="C"> Output value</label><br>
            <label><input type="radio" name="q30" value="D"> Parameters only</label><br><br>
        
            <p><strong>31. What is a <em>closure</em>?</strong></p>
            <label><input type="radio" name="q31" value="A"> A loop that closes automatically</label><br>
            <label><input type="radio" name="q31" value="B"> A function that retains access to its outer scope after it returns</label><br>
            <label><input type="radio" name="q31" value="C"> A class method</label><br>
            <label><input type="radio" name="q31" value="D"> A terminated function</label><br>
            <p class="mt-3">
                <strong>32. What is the output?</strong><br>
                <code>function counter(){<br>
                  let c = 0;<br>
                  return () =&gt; ++c;<br>
                }<br>
                const inc = counter();<br>
                console.log(inc(), inc());</code>
            </p>
            <label><input type="radio" name="q32" value="A"> 0 1</label><br>
            <label><input type="radio" name="q32" value="B"> 1 1</label><br>
            <label><input type="radio" name="q32" value="C"> 1 2</label><br>
            <label><input type="radio" name="q32" value="D"> undefined</label><br><br>
            <p><strong>33. What does <code>Function.prototype.bind()</code> do?</strong></p>
            <label><input type="radio" name="q33" value="A"> Calls the function immediately</label><br>
            <label><input type="radio" name="q33" value="B"> Returns a new function with a permanently bound <code>this</code></label><br>
            <label><input type="radio" name="q33" value="C"> Curries the function</label><br>
            <label><input type="radio" name="q33" value="D"> Removes the function</label><br>
            <p class="mt-3">
                <strong>34. What is the output?</strong><br>
                <code>const fn = function named(){};<br>
                console.log(fn.name);</code>
            </p>
            <label><input type="radio" name="q34" value="A"> "fn"</label><br>
            <label><input type="radio" name="q34" value="B"> "named"</label><br>
            <label><input type="radio" name="q34" value="C"> "function"</label><br>
            <label><input type="radio" name="q34" value="D"> undefined</label><br><br>
            <p><strong>35. What is <em>currying</em>?</strong></p>
            <label><input type="radio" name="q35" value="A"> A function that returns an array</label><br>
            <label><input type="radio" name="q35" value="B"> Transforming a multi-argument function into a chain of single-argument functions</label><br>
            <label><input type="radio" name="q35" value="C"> A recursive function pattern</label><br>
            <label><input type="radio" name="q35" value="D"> A named callback</label><br>
            <p class="mt-3">
                <strong>36. What is the output (IIFE)?</strong><br>
                <code>console.log((function(x){ return x * x; })(4));</code>
            </p>
            <label><input type="radio" name="q36" value="A"> 4</label><br>
            <label><input type="radio" name="q36" value="B"> 8</label><br>
            <label><input type="radio" name="q36" value="C"> 16</label><br>
            <label><input type="radio" name="q36" value="D"> error</label><br><br>
            <p><strong>37. What does <code>fn.call(ctx, arg)</code> do?</strong></p>
            <label><input type="radio" name="q37" value="A"> Delays execution</label><br>
            <label><input type="radio" name="q37" value="B"> Invokes fn with ctx as <code>this</code> and arg as argument</label><br>
            <label><input type="radio" name="q37" value="C"> Binds permanently</label><br>
            <label><input type="radio" name="q37" value="D"> Returns a new function</label><br>
            <p class="mt-3">
                <strong>38. What is the output?</strong><br>
                <code>function fn(){ return fn; }<br>
                console.log(fn() === fn);</code>
            </p>
            <label><input type="radio" name="q38" value="A"> false</label><br>
            <label><input type="radio" name="q38" value="B"> undefined</label><br>
            <label><input type="radio" name="q38" value="C"> error</label><br>
            <label><input type="radio" name="q38" value="D"> true</label><br><br>
            <p><strong>39. How does <code>apply()</code> differ from <code>call()</code>?</strong></p>
            <label><input type="radio" name="q39" value="A"> No difference</label><br>
            <label><input type="radio" name="q39" value="B"> apply returns a string</label><br>
            <label><input type="radio" name="q39" value="C"> apply takes arguments as an array</label><br>
            <label><input type="radio" name="q39" value="D"> call takes arguments as an array</label><br>
            <p class="mt-3"><strong>40. What is <em>memoization</em>?</strong></p>
            <label><input type="radio" name="q40" value="A"> Recursion optimization technique</label><br>
            <label><input type="radio" name="q40" value="B"> Caching a function's result for repeated inputs to avoid recomputation</label><br>
            <label><input type="radio" name="q40" value="C"> Loop unrolling</label><br>
            <label><input type="radio" name="q40" value="D"> Lazy evaluation</label><br><br>
            <p>
                <strong>41. What is the output?</strong><br>
                <code>const add = a =&gt; b =&gt; a + b;<br>
                console.log(add(2)(3));</code>
            </p>
            <label><input type="radio" name="q41" value="A"> "23"</label><br>
            <label><input type="radio" name="q41" value="B"> 6</label><br>
            <label><input type="radio" name="q41" value="C"> 5</label><br>
            <label><input type="radio" name="q41" value="D"> error</label><br>
            <p class="mt-3"><strong>42. What is a <em>pure function</em>?</strong></p>
            <label><input type="radio" name="q42" value="A"> An arrow function only</label><br>
            <label><input type="radio" name="q42" value="B"> A function with no parameters</label><br>
            <label><input type="radio" name="q42" value="C"> A function that always returns the same output for the same input with no side effects</label><br>
            <label><input type="radio" name="q42" value="D"> A function that returns undefined</label><br><br>
            <p><strong>43. What does <code>fn.length</code> return?</strong></p>
            <label><input type="radio" name="q43" value="A"> Number of times the function was called</label><br>
            <label><input type="radio" name="q43" value="B"> Number of declared parameters</label><br>
            <label><input type="radio" name="q43" value="C"> Execution time</label><br>
            <label><input type="radio" name="q43" value="D"> Body character count</label><br>
            <p class="mt-3"><strong>44. When does <code>setTimeout(() =&gt; console.log("hi"), 0)</code> actually log?</strong></p>
            <label><input type="radio" name="q44" value="A"> Immediately</label><br>
            <label><input type="radio" name="q44" value="B"> After exactly 1 second</label><br>
            <label><input type="radio" name="q44" value="C"> After the current synchronous code finishes</label><br>
            <label><input type="radio" name="q44" value="D"> Never</label><br><br>
            <p><strong>45. What is a <em>higher-order function</em>?</strong></p>
            <label><input type="radio" name="q45" value="A"> An arrow function</label><br>
            <label><input type="radio" name="q45" value="B"> A function that takes and/or returns other functions</label><br>
            <label><input type="radio" name="q45" value="C"> A class method</label><br>
            <label><input type="radio" name="q45" value="D"> A generator function</label><br>
            <p class="mt-3">
                <strong>46. What is the output?</strong><br>
                <code>const fn = () =&gt; ({ x: 1 });<br>
                console.log(fn().x);</code>
            </p>
            <label><input type="radio" name="q46" value="A"> undefined</label><br>
            <label><input type="radio" name="q46" value="B"> 1</label><br>
            <label><input type="radio" name="q46" value="C"> error</label><br>
            <label><input type="radio" name="q46" value="D"> {x:1}</label><br><br>
            <p><strong>47. What does the spread operator do when used in a function call?</strong></p>
            <label><input type="radio" name="q47" value="A"> Loops through arguments</label><br>
            <label><input type="radio" name="q47" value="B"> Unpacks an array into individual arguments</label><br>
            <label><input type="radio" name="q47" value="C"> Copies the function</label><br>
            <label><input type="radio" name="q47" value="D"> Merges objects</label><br>
            <p class="mt-3"><strong>48. What does an arrow function return if it has no <code>return</code> statement?</strong></p>
            <label><input type="radio" name="q48" value="A"> null</label><br>
            <label><input type="radio" name="q48" value="B"> false</label><br>
            <label><input type="radio" name="q48" value="C"> 0</label><br>
            <label><input type="radio" name="q48" value="D"> undefined</label><br><br>
            <p>
                <strong>49. What is the output?</strong><br>
                <code>function fn(){ return arguments.length; }<br>
                console.log(fn(1,2,3));</code>
            </p>
            <label><input type="radio" name="q49" value="A"> 1</label><br>
            <label><input type="radio" name="q49" value="B"> undefined</label><br>
            <label><input type="radio" name="q49" value="C"> error</label><br>
            <label><input type="radio" name="q49" value="D"> 3</label><br>
            <p class="mt-3"><strong>50. What happens when a recursive function has no base case?</strong></p>
            <label><input type="radio" name="q50" value="A"> Returns undefined</label><br>
            <label><input type="radio" name="q50" value="B"> Terminates normally</label><br>
            <label><input type="radio" name="q50" value="C"> Causes a stack overflow</label><br>
            <label><input type="radio" name="q50" value="D"> Silently loops forever</label><br>
`,
  'functions-advanced': `
<h4 class="mb-4 py-4 text-success">Functions - Advanced</h4>
            <p class="mt-3"><strong>1. What will this output?</strong><br>
                <code>function f(){ return typeof (function g(){ return g; })(); } console.log(f());</code>
            </p>
            <label><input type="radio" name="q1" value="A"> function</label><br>
            <label><input type="radio" name="q1" value="B"> undefined</label><br>
            <label><input type="radio" name="q1" value="C"> object</label><br>
            <label><input type="radio" name="q1" value="D"> string</label><br><br>

            <p><strong>2. Which statement best describes a “pure function”?</strong></p>
            <label><input type="radio" name="q2" value="A"> It modifies external variables</label><br>
            <label><input type="radio" name="q2" value="B"> It always produces same output for same input</label><br>
            <label><input type="radio" name="q2" value="C"> It depends on DOM</label><br>
            <label><input type="radio" name="q2" value="D"> It uses global variables</label><br>

            <p class="mt-3"><strong>3. What will this return?</strong><br>
                <code>const f = (x) => (y) => (z) => x + y + z; console.log(f(1)(2)(3));</code>
            </p>
            <label><input type="radio" name="q3" value="A"> 123</label><br>
            <label><input type="radio" name="q3" value="B"> 6</label><br>
            <label><input type="radio" name="q3" value="C"> 5</label><br>
            <label><input type="radio" name="q3" value="D"> undefined</label><br><br>

            <p><strong>4. What happens when a function is both async and returns a value?</strong></p>
            <label><input type="radio" name="q4" value="A"> It returns value directly</label><br>
            <label><input type="radio" name="q4" value="B"> It returns a Promise resolving that value</label><br>
            <label><input type="radio" name="q4" value="C"> It throws error</label><br>
            <label><input type="radio" name="q4" value="D"> It returns undefined</label><br>

            <p class="mt-3"><strong>5. What will this output?</strong><br>
                <code>function a(){ return function b(){ return function c(){ return "done"; }; }; } console.log(a()()());</code>
            </p>
            <label><input type="radio" name="q5" value="A"> done</label><br>
            <label><input type="radio" name="q5" value="B"> function</label><br>
            <label><input type="radio" name="q5" value="C"> undefined</label><br>
            <label><input type="radio" name="q5" value="D"> error</label><br><br>

            <p><strong>6. What is the main idea of currying?</strong></p>
            <label><input type="radio" name="q6" value="A"> Converting multiple arguments into nested
                functions</label><br>
            <label><input type="radio" name="q6" value="B"> Loop optimization</label><br>
            <label><input type="radio" name="q6" value="C"> DOM rendering</label><br>
            <label><input type="radio" name="q6" value="D"> Event handling</label><br>

            <p class="mt-3"><strong>7. What will this output?</strong><br>
                <code>function f(x){ return function(y){ return x * y; } } console.log(f(2)(3));</code>
            </p>
            <label><input type="radio" name="q7" value="A"> 5</label><br>
            <label><input type="radio" name="q7" value="B"> 6</label><br>
            <label><input type="radio" name="q7" value="C"> 23</label><br>
            <label><input type="radio" name="q7" value="D"> undefined</label><br><br>

            <p><strong>8. What is closure memory behavior?</strong></p>
            <label><input type="radio" name="q8" value="A"> Variables are garbage collected immediately</label><br>
            <label><input type="radio" name="q8" value="B"> Outer variables persist in memory</label><br>
            <label><input type="radio" name="q8" value="C"> Only global variables exist</label><br>
            <label><input type="radio" name="q8" value="D"> Variables become null</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>let f = function(x){ return function(y){ return x - y; }; }; console.log(f(10)(4));</code>
            </p>
            <label><input type="radio" name="q9" value="A"> 6</label><br>
            <label><input type="radio" name="q9" value="B"> 14</label><br>
            <label><input type="radio" name="q9" value="C"> 104</label><br>
            <label><input type="radio" name="q9" value="D"> undefined</label><br><br>

            <p><strong>10. What is a higher-order function?</strong></p>
            <label><input type="radio" name="q10" value="A"> Function returning only numbers</label><br>
            <label><input type="radio" name="q10" value="B"> Function taking or returning another function</label><br>
            <label><input type="radio" name="q10" value="C"> Function without parameters</label><br>
            <label><input type="radio" name="q10" value="D"> Function inside DOM only</label><br>

            <p class="mt-3"><strong>11. What will this return?</strong><br>
                <code>function f(){ return () => this; } console.log(f()());</code>
            </p>
            <label><input type="radio" name="q11" value="A"> undefined</label><br>
            <label><input type="radio" name="q11" value="B"> window/global object</label><br>
            <label><input type="radio" name="q11" value="C"> function</label><br>
            <label><input type="radio" name="q11" value="D"> error</label><br><br>

            <p><strong>12. What is function composition?</strong></p>
            <label><input type="radio" name="q12" value="A"> Combining functions so output of one becomes input of
                another</label><br>
            <label><input type="radio" name="q12" value="B"> Writing loops inside functions</label><br>
            <label><input type="radio" name="q12" value="C"> DOM chaining</label><br>
            <label><input type="radio" name="q12" value="D"> Event bubbling</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>function test(){ return arguments.length; } console.log(test(1,2,3,4,5));</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 4</label><br>
            <label><input type="radio" name="q13" value="B"> 5</label><br>
            <label><input type="radio" name="q13" value="C"> undefined</label><br>
            <label><input type="radio" name="q13" value="D"> error</label><br><br>

            <p><strong>14. What is recursion base case?</strong></p>
            <label><input type="radio" name="q14" value="A"> The condition that stops recursion</label><br>
            <label><input type="radio" name="q14" value="B"> The first function call</label><br>
            <label><input type="radio" name="q14" value="C"> DOM stopping point</label><br>
            <label><input type="radio" name="q14" value="D"> Loop condition</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>function f(){ return function(){ return function(){ return 1; }; }; } console.log(f()()());</code>
            </p>
            <label><input type="radio" name="q15" value="A"> 1</label><br>
            <label><input type="radio" name="q15" value="B"> function</label><br>
            <label><input type="radio" name="q15" value="C"> undefined</label><br>
            <label><input type="radio" name="q15" value="D"> error</label><br><br>

            <p><strong>16. What is the role of lexical scope?</strong></p>
            <label><input type="radio" name="q16" value="A"> Scope depends on call time</label><br>
            <label><input type="radio" name="q16" value="B"> Scope depends on function location in code</label><br>
            <label><input type="radio" name="q16" value="C"> Scope depends on DOM</label><br>
            <label><input type="radio" name="q16" value="D"> No scope exists</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>const f = function g(){ return typeof g; }; console.log(f());</code>
            </p>
            <label><input type="radio" name="q17" value="A"> undefined</label><br>
            <label><input type="radio" name="q17" value="B"> function</label><br>
            <label><input type="radio" name="q17" value="C"> string</label><br>
            <label><input type="radio" name="q17" value="D"> error</label><br><br>

            <p><strong>18. What happens when a function is memoized?</strong></p>
            <label><input type="radio" name="q18" value="A"> It runs slower</label><br>
            <label><input type="radio" name="q18" value="B"> It stores previous results for reuse</label><br>
            <label><input type="radio" name="q18" value="C"> It deletes arguments</label><br>
            <label><input type="radio" name="q18" value="D"> It becomes async</label><br>

            <p class="mt-3"><strong>19. What will this output?</strong><br>
                <code>function f(x){ if(x === 0) return 1; return x * f(x-1); } console.log(f(3));</code>
            </p>
            <label><input type="radio" name="q19" value="A"> 6</label><br>
            <label><input type="radio" name="q19" value="B"> 9</label><br>
            <label><input type="radio" name="q19" value="C"> 3</label><br>
            <label><input type="radio" name="q19" value="D"> undefined</label><br><br>

            <p><strong>20. What is tail recursion?</strong></p>
            <label><input type="radio" name="q20" value="A"> Recursion without base case</label><br>
            <label><input type="radio" name="q20" value="B"> Recursive call as last operation</label><br>
            <label><input type="radio" name="q20" value="C"> Loop inside function</label><br>
            <label><input type="radio" name="q20" value="D"> DOM recursion</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>const f = (...args) => args.reduce((a,b)=>a+b); console.log(f(1,2,3,4));</code>
            </p>
            <label><input type="radio" name="q21" value="A"> 10</label><br>
            <label><input type="radio" name="q21" value="B"> 1234</label><br>
            <label><input type="radio" name="q21" value="C"> 6</label><br>
            <label><input type="radio" name="q21" value="D"> undefined</label><br><br>

            <p><strong>22. Why is using closures useful in real applications?</strong></p>
            <label><input type="radio" name="q22" value="A"> It reduces HTML size</label><br>
            <label><input type="radio" name="q22" value="B"> It helps encapsulate private data</label><br>
            <label><input type="radio" name="q22" value="C"> It disables JavaScript</label><br>
            <label><input type="radio" name="q22" value="D"> It removes loops</label><br>

            <p class="mt-3"><strong>23. What will this return?</strong><br>
                <code>function f(){ return () => arguments.length; } console.log(f(1,2,3)());</code>
            </p>
            <label><input type="radio" name="q23" value="A"> 3</label><br>
            <label><input type="radio" name="q23" value="B"> 0</label><br>
            <label><input type="radio" name="q23" value="C"> undefined</label><br>
            <label><input type="radio" name="q23" value="D"> error</label><br><br>

            <p><strong>24. What is function identity based on?</strong></p>
            <label><input type="radio" name="q24" value="A"> Function name</label><br>
            <label><input type="radio" name="q24" value="B"> Memory reference</label><br>
            <label><input type="radio" name="q24" value="C"> Output value</label><br>
            <label><input type="radio" name="q24" value="D"> Parameters</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>(function(){ return (function(){ return "JS"; })(); })();</code>
            </p>
            <label><input type="radio" name="q25" value="A"> JS</label><br>
            <label><input type="radio" name="q25" value="B"> undefined</label><br>
            <label><input type="radio" name="q25" value="C"> function</label><br>
            <label><input type="radio" name="q25" value="D"> error</label><br><br>

            <p><strong>26. What is function binding used for?</strong></p>
            <label><input type="radio" name="q26" value="A"> Changing function name</label><br>
            <label><input type="radio" name="q26" value="B"> Fixing the value of this</label><br>
            <label><input type="radio" name="q26" value="C"> Looping functions</label><br>
            <label><input type="radio" name="q26" value="D"> DOM removal</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>function f(){ return function(){ return this; }; } console.log(f()());</code>
            </p>
            <label><input type="radio" name="q27" value="A"> window/global object</label><br>
            <label><input type="radio" name="q27" value="B"> undefined</label><br>
            <label><input type="radio" name="q27" value="C"> function</label><br>
            <label><input type="radio" name="q27" value="D"> error</label><br><br>

            <p><strong>28. What is a function pipeline?</strong></p>
            <label><input type="radio" name="q28" value="A"> Running functions in parallel</label><br>
            <label><input type="radio" name="q28" value="B"> Passing output of one function into another
                sequentially</label><br>
            <label><input type="radio" name="q28" value="C"> DOM chaining only</label><br>
            <label><input type="radio" name="q28" value="D"> Loop replacement</label><br>

            <p class="mt-3"><strong>29. What will this return?</strong><br>
                <code>function f(){ return function g(){ return function h(){ return "end"; }; }; } console.log(f()()());</code>
            </p>
            <label><input type="radio" name="q29" value="A"> end</label><br>
            <label><input type="radio" name="q29" value="B"> function</label><br>
            <label><input type="radio" name="q29" value="C"> undefined</label><br>
            <label><input type="radio" name="q29" value="D"> error</label><br><br>

            <p><strong>30. What is the biggest advantage of functional programming style?</strong></p>
            <label><input type="radio" name="q30" value="A"> Uses more memory</label><br>
            <label><input type="radio" name="q30" value="B"> Predictability and fewer side effects</label><br>
            <label><input type="radio" name="q30" value="C"> Slower execution</label><br>
            <label><input type="radio" name="q30" value="D"> DOM dependency</label><br><br>
        
            <p><strong>31. What is a <em>generator function</em>?</strong></p>
            <label><input type="radio" name="q31" value="A"> Creates random numbers</label><br>
            <label><input type="radio" name="q31" value="B"> A function that can pause and resume execution using yield</label><br>
            <label><input type="radio" name="q31" value="C"> An auto-called IIFE</label><br>
            <label><input type="radio" name="q31" value="D"> Purely an async function alias</label><br>
            <p class="mt-3">
                <strong>32. What is the output?</strong><br>
                <code>function* gen(){ yield 1; yield 2; }<br>
                const g = gen();<br>
                console.log(g.next().value);</code>
            </p>
            <label><input type="radio" name="q32" value="A"> undefined</label><br>
            <label><input type="radio" name="q32" value="B"> 2</label><br>
            <label><input type="radio" name="q32" value="C"> 1</label><br>
            <label><input type="radio" name="q32" value="D"> {value:1}</label><br><br>
            <p><strong>33. What does <code>Symbol.iterator</code> define on an object?</strong></p>
            <label><input type="radio" name="q33" value="A"> A unique string key</label><br>
            <label><input type="radio" name="q33" value="B"> Custom iteration behaviour consumable by for...of</label><br>
            <label><input type="radio" name="q33" value="C"> The Symbol type</label><br>
            <label><input type="radio" name="q33" value="D"> A generator chain</label><br>
            <p class="mt-3"><strong>34. What is a <em>tagged template literal</em>?</strong></p>
            <label><input type="radio" name="q34" value="A"> A template with interpolated variables</label><br>
            <label><input type="radio" name="q34" value="B"> A function that processes a template literal's parts</label><br>
            <label><input type="radio" name="q34" value="C"> A multi-line string</label><br>
            <label><input type="radio" name="q34" value="D"> A string containing HTML tags</label><br><br>
            <p>
                <strong>35. What is the output?</strong><br>
                <code>const fn = () =&gt; {};<br>
                console.log(fn.prototype);</code>
            </p>
            <label><input type="radio" name="q35" value="A"> Object prototype</label><br>
            <label><input type="radio" name="q35" value="B"> undefined</label><br>
            <label><input type="radio" name="q35" value="C"> {}</label><br>
            <label><input type="radio" name="q35" value="D"> error</label><br>
            <p class="mt-3"><strong>36. What does a <code>Proxy</code> <em>get</em> trap intercept?</strong></p>
            <label><input type="radio" name="q36" value="A"> Object deletion</label><br>
            <label><input type="radio" name="q36" value="B"> Property access</label><br>
            <label><input type="radio" name="q36" value="C"> Property assignment</label><br>
            <label><input type="radio" name="q36" value="D"> Object creation</label><br><br>
            <p>
                <strong>37. What is the output (spreading a generator)?</strong><br>
                <code>function* gen(){ yield 1; yield 2; yield 3; }<br>
                console.log([...gen()]);</code>
            </p>
            <label><input type="radio" name="q37" value="A"> [gen]</label><br>
            <label><input type="radio" name="q37" value="B"> error</label><br>
            <label><input type="radio" name="q37" value="C"> [1, 2, 3]</label><br>
            <label><input type="radio" name="q37" value="D"> undefined</label><br>
            <p class="mt-3"><strong>38. What is <em>partial application</em>?</strong></p>
            <label><input type="radio" name="q38" value="A"> Calling a function with all arguments</label><br>
            <label><input type="radio" name="q38" value="B"> Creating a new function with some arguments pre-filled</label><br>
            <label><input type="radio" name="q38" value="C"> A pure function with no arguments</label><br>
            <label><input type="radio" name="q38" value="D"> Function chaining</label><br><br>
            <p>
                <strong>39. What is the output?</strong><br>
                <code>function* inf(){ let i=0; while(true) yield i++; }<br>
                const g = inf();<br>
                console.log(g.next().value, g.next().value);</code>
            </p>
            <label><input type="radio" name="q39" value="A"> 0 0</label><br>
            <label><input type="radio" name="q39" value="B"> 0 1</label><br>
            <label><input type="radio" name="q39" value="C"> 1 2</label><br>
            <label><input type="radio" name="q39" value="D"> undefined</label><br>
            <p class="mt-3"><strong>40. What does <code>Reflect.apply(fn, ctx, args)</code> do?</strong></p>
            <label><input type="radio" name="q40" value="A"> Adds a property to an object</label><br>
            <label><input type="radio" name="q40" value="B"> Calls fn with the given context and arguments array</label><br>
            <label><input type="radio" name="q40" value="C"> Creates a Proxy</label><br>
            <label><input type="radio" name="q40" value="D"> Freezes an object</label><br><br>
            <p><strong>41. What is unique about arrow functions regarding <code>arguments</code>?</strong></p>
            <label><input type="radio" name="q41" value="A"> arguments is a real Array</label><br>
            <label><input type="radio" name="q41" value="B"> Arrow functions have no own <code>arguments</code> object</label><br>
            <label><input type="radio" name="q41" value="C"> arguments is global in arrow functions</label><br>
            <label><input type="radio" name="q41" value="D"> arguments has extra methods</label><br>
            <p class="mt-3">
                <strong>42. What is the output?</strong><br>
                <code>const fn = new Function("a","b","return a+b");<br>
                console.log(fn(2,3));</code>
            </p>
            <label><input type="radio" name="q42" value="A"> error</label><br>
            <label><input type="radio" name="q42" value="B"> "23"</label><br>
            <label><input type="radio" name="q42" value="C"> 5</label><br>
            <label><input type="radio" name="q42" value="D"> undefined</label><br><br>
            <p><strong>43. What does <em>tail call optimisation</em> (TCO) do?</strong></p>
            <label><input type="radio" name="q43" value="A"> Adds loop syntax for tail recursion</label><br>
            <label><input type="radio" name="q43" value="B"> Allows eligible tail-recursive calls to reuse the current stack frame</label><br>
            <label><input type="radio" name="q43" value="C"> Converts recursion to iteration at compile time</label><br>
            <label><input type="radio" name="q43" value="D"> Memoises recursive results</label><br>
            <p class="mt-3"><strong>44. What is <em>function composition</em>?</strong></p>
            <label><input type="radio" name="q44" value="A"> Creating class hierarchies</label><br>
            <label><input type="radio" name="q44" value="B"> Combining functions so the output of one becomes the input of the next</label><br>
            <label><input type="radio" name="q44" value="C"> Writing recursive functions</label><br>
            <label><input type="radio" name="q44" value="D"> The callback pattern</label><br><br>
            <p>
                <strong>45. What is the output?</strong><br>
                <code>const obj = { fn: () =&gt; this };<br>
                console.log(obj.fn() === globalThis);</code>
            </p>
            <label><input type="radio" name="q45" value="A"> false</label><br>
            <label><input type="radio" name="q45" value="B"> undefined</label><br>
            <label><input type="radio" name="q45" value="C"> error</label><br>
            <label><input type="radio" name="q45" value="D"> true</label><br>
            <p class="mt-3"><strong>46. What does an <code>async function</code> always return?</strong></p>
            <label><input type="radio" name="q46" value="A"> The resolved value directly</label><br>
            <label><input type="radio" name="q46" value="B"> A Promise</label><br>
            <label><input type="radio" name="q46" value="C"> undefined if there is no await</label><br>
            <label><input type="radio" name="q46" value="D"> A generator object</label><br><br>
            <p>
                <strong>47. What is the output (Y-combinator style)?</strong><br>
                <code>console.log((f =&gt; f(f))(f =&gt; 42));</code>
            </p>
            <label><input type="radio" name="q47" value="A"> error</label><br>
            <label><input type="radio" name="q47" value="B"> f</label><br>
            <label><input type="radio" name="q47" value="C"> 42</label><br>
            <label><input type="radio" name="q47" value="D"> undefined</label><br>
            <p class="mt-3"><strong>48. What are <em>trampoline functions</em> used for?</strong></p>
            <label><input type="radio" name="q48" value="A"> Unit testing</label><br>
            <label><input type="radio" name="q48" value="B"> Eliminating stack overflow in deeply recursive functions</label><br>
            <label><input type="radio" name="q48" value="C"> DOM manipulation</label><br>
            <label><input type="radio" name="q48" value="D"> Creating animations</label><br><br>
            <p>
                <strong>49. What is the output?</strong><br>
                <code>function add(a){<br>
                  return function(b){<br>
                    return a+b;<br>
                  };<br>
                }<br>
                console.log(add(1)(2)(3));</code>
            </p>
            <label><input type="radio" name="q49" value="A"> 6</label><br>
            <label><input type="radio" name="q49" value="B"> "123"</label><br>
            <label><input type="radio" name="q49" value="C"> error</label><br>
            <label><input type="radio" name="q49" value="D"> undefined</label><br>
            <p class="mt-3"><strong>50. What is the purpose of <code>Object.create(proto)</code>?</strong></p>
            <label><input type="radio" name="q50" value="A"> Copies a function's body</label><br>
            <label><input type="radio" name="q50" value="B"> Creates a new object with proto as its prototype</label><br>
            <label><input type="radio" name="q50" value="C"> Creates a bound function</label><br>
            <label><input type="radio" name="q50" value="D"> Clones a function</label><br>
`,
  'es6-beginner': `
<h4 class="mb-4 py-4 text-success">ES6 - Beginner</h4>
            <p class="mt-3"><strong>1. What will this output?</strong><br>
                <code>let a = 10; a = 20; console.log(a);</code>
            </p>
            <label><input type="radio" name="q1" value="A"> 10</label><br>
            <label><input type="radio" name="q1" value="B"> 20</label><br>
            <label><input type="radio" name="q1" value="C"> undefined</label><br>
            <label><input type="radio" name="q1" value="D"> error</label><br><br>

            <p><strong>2. Which keyword is used to declare a constant in ES6?</strong></p>
            <label><input type="radio" name="q2" value="A"> var</label><br>
            <label><input type="radio" name="q2" value="B"> let</label><br>
            <label><input type="radio" name="q2" value="C"> const</label><br>
            <label><input type="radio" name="q2" value="D"> static</label><br>

            <p class="mt-3"><strong>3. What will this output?</strong><br>
                <code>const arr = [1,2,3]; const [a] = arr; console.log(a);</code>
            </p>
            <label><input type="radio" name="q3" value="A"> 1</label><br>
            <label><input type="radio" name="q3" value="B"> 2</label><br>
            <label><input type="radio" name="q3" value="C"> 3</label><br>
            <label><input type="radio" name="q3" value="D"> undefined</label><br><br>

            <p><strong>4. What is ES6?</strong></p>
            <label><input type="radio" name="q4" value="A"> A database</label><br>
            <label><input type="radio" name="q4" value="B"> A version of JavaScript</label><br>
            <label><input type="radio" name="q4" value="C"> A CSS framework</label><br>
            <label><input type="radio" name="q4" value="D"> A browser</label><br>

            <p class="mt-3"><strong>5. What will this output?</strong><br>
                <code>const name = "JS"; console.log(\`Hello \${name}\`);</code>
            </p>
            <label><input type="radio" name="q5" value="A"> Hello name</label><br>
            <label><input type="radio" name="q5" value="B"> Hello JS</label><br>
            <label><input type="radio" name="q5" value="C"> Hello \${name}</label><br>
            <label><input type="radio" name="q5" value="D"> error</label><br><br>

            <p><strong>6. What is template literal used for?</strong></p>
            <label><input type="radio" name="q6" value="A"> Writing CSS</label><br>
            <label><input type="radio" name="q6" value="B"> Embedding variables in strings</label><br>
            <label><input type="radio" name="q6" value="C"> Looping arrays</label><br>
            <label><input type="radio" name="q6" value="D"> DOM creation</label><br>

            <p class="mt-3"><strong>7. What will this output?</strong><br>
                <code>const add = (a,b) => a + b; console.log(add(2,3));</code>
            </p>
            <label><input type="radio" name="q7" value="A"> 23</label><br>
            <label><input type="radio" name="q7" value="B"> 5</label><br>
            <label><input type="radio" name="q7" value="C"> undefined</label><br>
            <label><input type="radio" name="q7" value="D"> error</label><br><br>

            <p><strong>8. What is arrow function?</strong></p>
            <label><input type="radio" name="q8" value="A"> A shorter function syntax</label><br>
            <label><input type="radio" name="q8" value="B"> A loop</label><br>
            <label><input type="radio" name="q8" value="C"> A DOM method</label><br>
            <label><input type="radio" name="q8" value="D"> A class</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>const obj = { name: "ES6" }; const { name } = obj; console.log(name);</code>
            </p>
            <label><input type="radio" name="q9" value="A"> ES5</label><br>
            <label><input type="radio" name="q9" value="B"> ES6</label><br>
            <label><input type="radio" name="q9" value="C"> undefined</label><br>
            <label><input type="radio" name="q9" value="D"> error</label><br><br>

            <p><strong>10. What is destructuring?</strong></p>
            <label><input type="radio" name="q10" value="A"> Breaking objects/arrays into variables</label><br>
            <label><input type="radio" name="q10" value="B"> Deleting variables</label><br>
            <label><input type="radio" name="q10" value="C"> Looping arrays</label><br>
            <label><input type="radio" name="q10" value="D"> Creating DOM elements</label><br>

            <p class="mt-3"><strong>11. What will this output?</strong><br>
                <code>let a = [1,2,3]; let b = [...a]; console.log(b);</code>
            </p>
            <label><input type="radio" name="q11" value="A"> reference copy</label><br>
            <label><input type="radio" name="q11" value="B"> [1,2,3]</label><br>
            <label><input type="radio" name="q11" value="C"> undefined</label><br>
            <label><input type="radio" name="q11" value="D"> error</label><br><br>

            <p><strong>12. What is spread operator used for?</strong></p>
            <label><input type="radio" name="q12" value="A"> Merging or copying arrays/objects</label><br>
            <label><input type="radio" name="q12" value="B"> Loop control</label><br>
            <label><input type="radio" name="q12" value="C"> DOM selection</label><br>
            <label><input type="radio" name="q12" value="D"> CSS styling</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>const sum = (...nums) => nums.length; console.log(sum(1,2,3,4));</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 3</label><br>
            <label><input type="radio" name="q13" value="B"> 4</label><br>
            <label><input type="radio" name="q13" value="C"> 5</label><br>
            <label><input type="radio" name="q13" value="D"> undefined</label><br><br>

            <p><strong>14. What is rest parameter used for?</strong></p>
            <label><input type="radio" name="q14" value="A"> To collect all arguments into an array</label><br>
            <label><input type="radio" name="q14" value="B"> To delete arguments</label><br>
            <label><input type="radio" name="q14" value="C"> To loop DOM</label><br>
            <label><input type="radio" name="q14" value="D"> To style pages</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>let x = 10; if(true){ let x = 20; } console.log(x);</code>
            </p>
            <label><input type="radio" name="q15" value="A"> 10</label><br>
            <label><input type="radio" name="q15" value="B"> 20</label><br>
            <label><input type="radio" name="q15" value="C"> undefined</label><br>
            <label><input type="radio" name="q15" value="D"> error</label><br><br>

            <p><strong>16. What is block scope?</strong></p>
            <label><input type="radio" name="q16" value="A"> Variables accessible outside block</label><br>
            <label><input type="radio" name="q16" value="B"> Variables limited to {} block</label><br>
            <label><input type="radio" name="q16" value="C"> Global variables only</label><br>
            <label><input type="radio" name="q16" value="D"> DOM scope</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>const greet = (name="User") => name; console.log(greet());</code>
            </p>
            <label><input type="radio" name="q17" value="A"> undefined</label><br>
            <label><input type="radio" name="q17" value="B"> User</label><br>
            <label><input type="radio" name="q17" value="C"> null</label><br>
            <label><input type="radio" name="q17" value="D"> error</label><br><br>

            <p><strong>18. What is default parameter?</strong></p>
            <label><input type="radio" name="q18" value="A"> A fallback value if argument is missing</label><br>
            <label><input type="radio" name="q18" value="B"> A required parameter</label><br>
            <label><input type="radio" name="q18" value="C"> A loop value</label><br>
            <label><input type="radio" name="q18" value="D"> A DOM element</label><br>

            <p class="mt-3"><strong>19. What will this output?</strong><br>
                <code>const a = [1,2,3]; const [,,c] = a; console.log(c);</code>
            </p>
            <label><input type="radio" name="q19" value="A"> 1</label><br>
            <label><input type="radio" name="q19" value="B"> 2</label><br>
            <label><input type="radio" name="q19" value="C"> 3</label><br>
            <label><input type="radio" name="q19" value="D"> undefined</label><br><br>

            <p><strong>20. What is destructuring used for?</strong></p>
            <label><input type="radio" name="q20" value="A"> Extract values from arrays/objects</label><br>
            <label><input type="radio" name="q20" value="B"> Loop arrays</label><br>
            <label><input type="radio" name="q20" value="C"> Create DOM</label><br>
            <label><input type="radio" name="q20" value="D"> Delete variables</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>let a = 5; const f = () => a++; console.log(f(), a);</code>
            </p>
            <label><input type="radio" name="q21" value="A"> 5 5</label><br>
            <label><input type="radio" name="q21" value="B"> 5 6</label><br>
            <label><input type="radio" name="q21" value="C"> 6 6</label><br>
            <label><input type="radio" name="q21" value="D"> undefined</label><br><br>

            <p><strong>22. What is let different from var?</strong></p>
            <label><input type="radio" name="q22" value="A"> let is function scoped</label><br>
            <label><input type="radio" name="q22" value="B"> let is block scoped</label><br>
            <label><input type="radio" name="q22" value="C"> let is global only</label><br>
            <label><input type="radio" name="q22" value="D"> no difference</label><br>

            <p class="mt-3"><strong>23. What will this output?</strong><br>
                <code>const obj = { a:1, b:2 }; const { a:b } = obj; console.log(b);</code>
            </p>
            <label><input type="radio" name="q23" value="A"> 1</label><br>
            <label><input type="radio" name="q23" value="B"> 2</label><br>
            <label><input type="radio" name="q23" value="C"> undefined</label><br>
            <label><input type="radio" name="q23" value="D"> error</label><br><br>

            <p><strong>24. What is aliasing in destructuring?</strong></p>
            <label><input type="radio" name="q24" value="A"> Renaming variables while destructuring</label><br>
            <label><input type="radio" name="q24" value="B"> Deleting variables</label><br>
            <label><input type="radio" name="q24" value="C"> Looping objects</label><br>
            <label><input type="radio" name="q24" value="D"> DOM selection</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>const f = (x) => x > 5 ? "big" : "small"; console.log(f(3));</code>
            </p>
            <label><input type="radio" name="q25" value="A"> big</label><br>
            <label><input type="radio" name="q25" value="B"> small</label><br>
            <label><input type="radio" name="q25" value="C"> undefined</label><br>
            <label><input type="radio" name="q25" value="D"> error</label><br><br>

            <p><strong>26. What is ternary operator used for?</strong></p>
            <label><input type="radio" name="q26" value="A"> Looping</label><br>
            <label><input type="radio" name="q26" value="B"> Short if-else condition</label><br>
            <label><input type="radio" name="q26" value="C"> Function declaration</label><br>
            <label><input type="radio" name="q26" value="D"> DOM manipulation</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>let a = [1,2,3]; let b = [...a, 4]; console.log(b.length);</code>
            </p>
            <label><input type="radio" name="q27" value="A"> 3</label><br>
            <label><input type="radio" name="q27" value="B"> 4</label><br>
            <label><input type="radio" name="q27" value="C"> 5</label><br>
            <label><input type="radio" name="q27" value="D"> undefined</label><br><br>

            <p><strong>28. What is ES6 module used for?</strong></p>
            <label><input type="radio" name="q28" value="A"> Styling pages</label><br>
            <label><input type="radio" name="q28" value="B"> Import/export code between files</label><br>
            <label><input type="radio" name="q28" value="C"> Loop control</label><br>
            <label><input type="radio" name="q28" value="D"> DOM events</label><br>

            <p class="mt-3"><strong>29. What will this output?</strong><br>
                <code>const add = (a=2, b=3) => a + b; console.log(add(5));</code>
            </p>
            <label><input type="radio" name="q29" value="A"> 5</label><br>
            <label><input type="radio" name="q29" value="B"> 8</label><br>
            <label><input type="radio" name="q29" value="C"> 23</label><br>
            <label><input type="radio" name="q29" value="D"> undefined</label><br><br>

            <p><strong>30. What is ES6 mainly known for?</strong></p>
            <label><input type="radio" name="q30" value="A"> Old JavaScript removal</label><br>
            <label><input type="radio" name="q30" value="B"> Modern JavaScript features and improvements</label><br>
            <label><input type="radio" name="q30" value="C"> CSS updates</label><br>
            <label><input type="radio" name="q30" value="D"> HTML updates</label><br><br>
        
            <p><strong>31. What is a template literal?</strong></p>
            <label><input type="radio" name="q31" value="A"> A string with single quotes</label><br>
            <label><input type="radio" name="q31" value="B"> A string using backticks that supports expression interpolation</label><br>
            <label><input type="radio" name="q31" value="C"> A multi-line array</label><br>
            <label><input type="radio" name="q31" value="D"> A JSON template</label><br>
            <p class="mt-3">
                <strong>32. What is the output?</strong><br>
                <code>const name = "JS";<br>
                console.log(\`Hello \${name}\`);</code>
            </p>
            <label><input type="radio" name="q32" value="A"> "Hello name"</label><br>
            <label><input type="radio" name="q32" value="B"> "Hello \${name}"</label><br>
            <label><input type="radio" name="q32" value="C"> undefined</label><br>
            <label><input type="radio" name="q32" value="D"> "Hello JS"</label><br><br>
            <p><strong>33. What is <em>destructuring</em>?</strong></p>
            <label><input type="radio" name="q33" value="A"> Deleting object keys</label><br>
            <label><input type="radio" name="q33" value="B"> Extracting values from arrays or objects into separate variables</label><br>
            <label><input type="radio" name="q33" value="C"> Cloning objects</label><br>
            <label><input type="radio" name="q33" value="D"> Merging arrays</label><br>
            <p class="mt-3">
                <strong>34. What is the output?</strong><br>
                <code>const [a, b] = [1, 2];<br>
                console.log(a + b);</code>
            </p>
            <label><input type="radio" name="q34" value="A"> "12"</label><br>
            <label><input type="radio" name="q34" value="B"> undefined</label><br>
            <label><input type="radio" name="q34" value="C"> 3</label><br>
            <label><input type="radio" name="q34" value="D"> error</label><br><br>
            <p><strong>35. What does <code>const {name} = {name: "Alice"}</code> do?</strong></p>
            <label><input type="radio" name="q35" value="A"> Creates a new object</label><br>
            <label><input type="radio" name="q35" value="B"> Extracts the name property into a variable</label><br>
            <label><input type="radio" name="q35" value="C"> Deletes the name key</label><br>
            <label><input type="radio" name="q35" value="D"> Copies the object</label><br>
            <p class="mt-3"><strong>36. Which is the spread operator?</strong></p>
            <label><input type="radio" name="q36" value="A"> &gt;&gt;</label><br>
            <label><input type="radio" name="q36" value="B"> ...</label><br>
            <label><input type="radio" name="q36" value="C"> **</label><br>
            <label><input type="radio" name="q36" value="D"> ??</label><br><br>
            <p>
                <strong>37. What is the output?</strong><br>
                <code>const arr = [1,2];<br>
                const arr2 = [...arr, 3];<br>
                console.log(arr2);</code>
            </p>
            <label><input type="radio" name="q37" value="A"> [1, 2]</label><br>
            <label><input type="radio" name="q37" value="B"> [3, 1, 2]</label><br>
            <label><input type="radio" name="q37" value="C"> [1, 2, 3]</label><br>
            <label><input type="radio" name="q37" value="D"> error</label><br>
            <p class="mt-3"><strong>38. What is an arrow function?</strong></p>
            <label><input type="radio" name="q38" value="A"> A function using the =&gt; syntax</label><br>
            <label><input type="radio" name="q38" value="B"> A named function</label><br>
            <label><input type="radio" name="q38" value="C"> An async function</label><br>
            <label><input type="radio" name="q38" value="D"> A class method</label><br><br>
            <p>
                <strong>39. What is the output?</strong><br>
                <code>const x = 5;<br>
                const double = n =&gt; n * 2;<br>
                console.log(double(x));</code>
            </p>
            <label><input type="radio" name="q39" value="A"> 5</label><br>
            <label><input type="radio" name="q39" value="B"> "52"</label><br>
            <label><input type="radio" name="q39" value="C"> error</label><br>
            <label><input type="radio" name="q39" value="D"> 10</label><br>
            <p class="mt-3"><strong>40. How does <code>let</code> differ from <code>var</code>?</strong></p>
            <label><input type="radio" name="q40" value="A"> Both are block-scoped</label><br>
            <label><input type="radio" name="q40" value="B"> let is function-scoped</label><br>
            <label><input type="radio" name="q40" value="C"> var is block-scoped</label><br>
            <label><input type="radio" name="q40" value="D"> let is block-scoped</label><br><br>
            <p><strong>41. What is <code>const</code>?</strong></p>
            <label><input type="radio" name="q41" value="A"> A variable that can be reassigned</label><br>
            <label><input type="radio" name="q41" value="B"> A binding that cannot be reassigned after declaration</label><br>
            <label><input type="radio" name="q41" value="C"> A block-scoped alias for var</label><br>
            <label><input type="radio" name="q41" value="D"> The same as let</label><br>
            <p class="mt-3">
                <strong>42. What is the output?</strong><br>
                <code>const obj = {x:1,y:2};<br>
                const {x, ...rest} = obj;<br>
                console.log(rest);</code>
            </p>
            <label><input type="radio" name="q42" value="A"> {x:1}</label><br>
            <label><input type="radio" name="q42" value="B"> {x:1,y:2}</label><br>
            <label><input type="radio" name="q42" value="C"> {y:2}</label><br>
            <label><input type="radio" name="q42" value="D"> error</label><br><br>
            <p><strong>43. What does <code>import</code> do in ES6 modules?</strong></p>
            <label><input type="radio" name="q43" value="A"> Runs a file immediately</label><br>
            <label><input type="radio" name="q43" value="B"> Includes exported functionality from another module</label><br>
            <label><input type="radio" name="q43" value="C"> Downloads npm packages</label><br>
            <label><input type="radio" name="q43" value="D"> Creates global variables</label><br>
            <p class="mt-3">
                <strong>44. What is the output?</strong><br>
                <code>class Animal {<br>
                  constructor(name){ this.name = name; }<br>
                }<br>
                const a = new Animal("Cat");<br>
                console.log(a.name);</code>
            </p>
            <label><input type="radio" name="q44" value="A"> undefined</label><br>
            <label><input type="radio" name="q44" value="B"> error</label><br>
            <label><input type="radio" name="q44" value="C"> "Animal"</label><br>
            <label><input type="radio" name="q44" value="D"> "Cat"</label><br><br>
            <p><strong>45. What is <code>extends</code> used for in ES6 classes?</strong></p>
            <label><input type="radio" name="q45" value="A"> Adding static methods</label><br>
            <label><input type="radio" name="q45" value="B"> Inheriting from a parent class</label><br>
            <label><input type="radio" name="q45" value="C"> Creating an interface</label><br>
            <label><input type="radio" name="q45" value="D"> Exporting a class</label><br>
            <p class="mt-3"><strong>46. How many default exports can a module have?</strong></p>
            <label><input type="radio" name="q46" value="A"> One</label><br>
            <label><input type="radio" name="q46" value="B"> Unlimited</label><br>
            <label><input type="radio" name="q46" value="C"> It must always be named 'default'</label><br>
            <label><input type="radio" name="q46" value="D"> Only functions can be default exported</label><br><br>
            <p>
                <strong>47. What is the output?</strong><br>
                <code>const map = new Map();<br>
                map.set("a", 1);<br>
                console.log(map.get("a"));</code>
            </p>
            <label><input type="radio" name="q47" value="A"> undefined</label><br>
            <label><input type="radio" name="q47" value="B"> error</label><br>
            <label><input type="radio" name="q47" value="C"> "a"</label><br>
            <label><input type="radio" name="q47" value="D"> 1</label><br>
            <p class="mt-3"><strong>48. What does <code>Set</code> guarantee about its stored values?</strong></p>
            <label><input type="radio" name="q48" value="A"> Sorted order</label><br>
            <label><input type="radio" name="q48" value="B"> No duplicates</label><br>
            <label><input type="radio" name="q48" value="C"> Index-based access</label><br>
            <label><input type="radio" name="q48" value="D"> String conversion</label><br><br>
            <p><strong>49. What is <code>for...of</code> used for?</strong></p>
            <label><input type="radio" name="q49" value="A"> Iterating over object keys</label><br>
            <label><input type="radio" name="q49" value="B"> Iterating over iterable values (arrays, strings, etc.)</label><br>
            <label><input type="radio" name="q49" value="C"> Looping with a numeric index</label><br>
            <label><input type="radio" name="q49" value="D"> Iterating object keys</label><br>
            <p class="mt-3">
                <strong>50. What is the output?</strong><br>
                <code>console.log([1,2,3].includes(2));</code>
            </p>
            <label><input type="radio" name="q50" value="A"> false</label><br>
            <label><input type="radio" name="q50" value="B"> 2</label><br>
            <label><input type="radio" name="q50" value="C"> undefined</label><br>
            <label><input type="radio" name="q50" value="D"> true</label><br>
`,
  'es6-intermediate': `
<h4 class="mb-4 py-4 text-success">ES6 - Intermediate</h4>
            <p class="mt-3"><strong>1. What will this output?</strong><br>
                <code>let a = 10; const f = () => { let a = 20; return a; }; console.log(f());</code>
            </p>
            <label><input type="radio" name="q1" value="A"> 10</label><br>
            <label><input type="radio" name="q1" value="B"> 20</label><br>
            <label><input type="radio" name="q1" value="C"> undefined</label><br>
            <label><input type="radio" name="q1" value="D"> error</label><br><br>

            <p><strong>2. What is the main advantage of ES6 let over var?</strong></p>
            <label><input type="radio" name="q2" value="A"> Function scope</label><br>
            <label><input type="radio" name="q2" value="B"> Block scope</label><br>
            <label><input type="radio" name="q2" value="C"> Global scope</label><br>
            <label><input type="radio" name="q2" value="D"> No scope difference</label><br>

            <p class="mt-3"><strong>3. What will this output?</strong><br>
                <code>const arr = [1,2,3]; const [,,x] = arr; console.log(x);</code>
            </p>
            <label><input type="radio" name="q3" value="A"> 1</label><br>
            <label><input type="radio" name="q3" value="B"> 2</label><br>
            <label><input type="radio" name="q3" value="C"> 3</label><br>
            <label><input type="radio" name="q3" value="D"> undefined</label><br><br>

            <p><strong>4. What is destructuring mainly used for?</strong></p>
            <label><input type="radio" name="q4" value="A"> Looping arrays</label><br>
            <label><input type="radio" name="q4" value="B"> Extracting values from arrays/objects</label><br>
            <label><input type="radio" name="q4" value="C"> DOM manipulation</label><br>
            <label><input type="radio" name="q4" value="D"> CSS styling</label><br>

            <p class="mt-3"><strong>5. What will this output?</strong><br>
                <code>const obj = { a:1, b:2 }; const { a, b } = obj; console.log(a + b);</code>
            </p>
            <label><input type="radio" name="q5" value="A"> 12</label><br>
            <label><input type="radio" name="q5" value="B"> 3</label><br>
            <label><input type="radio" name="q5" value="C"> undefined</label><br>
            <label><input type="radio" name="q5" value="D"> error</label><br><br>

            <p><strong>6. What is template literal mainly used for?</strong></p>
            <label><input type="radio" name="q6" value="A"> Looping strings</label><br>
            <label><input type="radio" name="q6" value="B"> Embedding expressions inside strings</label><br>
            <label><input type="radio" name="q6" value="C"> DOM creation</label><br>
            <label><input type="radio" name="q6" value="D"> Array merging</label><br>

            <p class="mt-3"><strong>7. What will this output?</strong><br>
                <code>const name = "JS"; console.log(\`Hello \${name + " ES6"}\`);</code>
            </p>
            <label><input type="radio" name="q7" value="A"> Hello JS ES6</label><br>
            <label><input type="radio" name="q7" value="B"> Hello name ES6</label><br>
            <label><input type="radio" name="q7" value="C"> Hello \${name + " ES6"}</label><br>
            <label><input type="radio" name="q7" value="D"> error</label><br><br>

            <p><strong>8. What does spread operator do in arrays?</strong></p>
            <label><input type="radio" name="q8" value="A"> Deletes elements</label><br>
            <label><input type="radio" name="q8" value="B"> Expands elements into individual values</label><br>
            <label><input type="radio" name="q8" value="C"> Sorts arrays</label><br>
            <label><input type="radio" name="q8" value="D"> Reverses arrays</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>let a = [1,2]; let b = [...a, 3,4]; console.log(b.length);</code>
            </p>
            <label><input type="radio" name="q9" value="A"> 2</label><br>
            <label><input type="radio" name="q9" value="B"> 3</label><br>
            <label><input type="radio" name="q9" value="C"> 4</label><br>
            <label><input type="radio" name="q9" value="D"> undefined</label><br><br>

            <p><strong>10. What is rest parameter used for?</strong></p>
            <label><input type="radio" name="q10" value="A"> Splitting arrays</label><br>
            <label><input type="radio" name="q10" value="B"> Collecting multiple arguments into one array</label><br>
            <label><input type="radio" name="q10" value="C"> DOM selection</label><br>
            <label><input type="radio" name="q10" value="D"> Styling</label><br>

            <p class="mt-3"><strong>11. What will this output?</strong><br>
                <code>const sum = (...nums) => nums.reduce((a,b)=>a+b); console.log(sum(1,2,3));</code>
            </p>
            <label><input type="radio" name="q11" value="A"> 6</label><br>
            <label><input type="radio" name="q11" value="B"> 123</label><br>
            <label><input type="radio" name="q11" value="C"> undefined</label><br>
            <label><input type="radio" name="q11" value="D"> error</label><br><br>

            <p><strong>12. What is arrow function behavior with 'this'?</strong></p>
            <label><input type="radio" name="q12" value="A"> Has its own this</label><br>
            <label><input type="radio" name="q12" value="B"> Inherits this from parent scope</label><br>
            <label><input type="radio" name="q12" value="C"> Always undefined</label><br>
            <label><input type="radio" name="q12" value="D"> Always global</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>let x = 5; (() => { let x = 10; })(); console.log(x);</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 10</label><br>
            <label><input type="radio" name="q13" value="B"> 5</label><br>
            <label><input type="radio" name="q13" value="C"> undefined</label><br>
            <label><input type="radio" name="q13" value="D"> error</label><br><br>

            <p><strong>14. What is block scope in ES6?</strong></p>
            <label><input type="radio" name="q14" value="A"> Variables accessible everywhere</label><br>
            <label><input type="radio" name="q14" value="B"> Variables limited to {} block</label><br>
            <label><input type="radio" name="q14" value="C"> Function-only scope</label><br>
            <label><input type="radio" name="q14" value="D"> No scope concept</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>const f = (a=2,b=3) => a*b; console.log(f(undefined,4));</code>
            </p>
            <label><input type="radio" name="q15" value="A"> 6</label><br>
            <label><input type="radio" name="q15" value="B"> 8</label><br>
            <label><input type="radio" name="q15" value="C"> 12</label><br>
            <label><input type="radio" name="q15" value="D"> error</label><br><br>

            <p><strong>16. What happens when undefined is passed to default parameter?</strong></p>
            <label><input type="radio" name="q16" value="A"> Default value is used</label><br>
            <label><input type="radio" name="q16" value="B"> It becomes null</label><br>
            <label><input type="radio" name="q16" value="C"> It throws error</label><br>
            <label><input type="radio" name="q16" value="D"> It ignores function</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>const obj = { a:1, b:2, c:3 }; const { a, ...rest } = obj; console.log(rest);</code>
            </p>
            <label><input type="radio" name="q17" value="A"> {a:1}</label><br>
            <label><input type="radio" name="q17" value="B"> {b:2, c:3}</label><br>
            <label><input type="radio" name="q17" value="C"> {a:1, b:2, c:3}</label><br>
            <label><input type="radio" name="q17" value="D"> undefined</label><br><br>

            <p><strong>18. What is rest operator used for in objects?</strong></p>
            <label><input type="radio" name="q18" value="A"> Copying entire object</label><br>
            <label><input type="radio" name="q18" value="B"> Collecting remaining properties</label><br>
            <label><input type="radio" name="q18" value="C"> Deleting properties</label><br>
            <label><input type="radio" name="q18" value="D"> Looping object</label><br>

            <p class="mt-3"><strong>19. What will this output?</strong><br>
                <code>const a = [1,2,3]; const b = [...a]; b.push(4); console.log(a.length);</code>
            </p>
            <label><input type="radio" name="q19" value="A"> 3</label><br>
            <label><input type="radio" name="q19" value="B"> 4</label><br>
            <label><input type="radio" name="q19" value="C"> undefined</label><br>
            <label><input type="radio" name="q19" value="D"> error</label><br><br>

            <p><strong>20. Why is spread operator useful?</strong></p>
            <label><input type="radio" name="q20" value="A"> Slows performance</label><br>
            <label><input type="radio" name="q20" value="B"> Helps clone and merge data easily</label><br>
            <label><input type="radio" name="q20" value="C"> Removes arrays</label><br>
            <label><input type="radio" name="q20" value="D"> Stops execution</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>const f = (x) => x > 5 ? "high" : "low"; console.log(f(10));</code>
            </p>
            <label><input type="radio" name="q21" value="A"> low</label><br>
            <label><input type="radio" name="q21" value="B"> high</label><br>
            <label><input type="radio" name="q21" value="C"> undefined</label><br>
            <label><input type="radio" name="q21" value="D"> error</label><br><br>

            <p><strong>22. What is ternary operator in ES6?</strong></p>
            <label><input type="radio" name="q22" value="A"> Loop shortcut</label><br>
            <label><input type="radio" name="q22" value="B"> Short form of if-else</label><br>
            <label><input type="radio" name="q22" value="C"> Function call</label><br>
            <label><input type="radio" name="q22" value="D"> DOM selector</label><br>

            <p class="mt-3"><strong>23. What will this output?</strong><br>
                <code>let [a=1,b=2] = [undefined,5]; console.log(a,b);</code>
            </p>
            <label><input type="radio" name="q23" value="A"> 1 5</label><br>
            <label><input type="radio" name="q23" value="B"> undefined 5</label><br>
            <label><input type="radio" name="q23" value="C"> 1 2</label><br>
            <label><input type="radio" name="q23" value="D"> error</label><br><br>

            <p><strong>24. What is default destructuring value used for?</strong></p>
            <label><input type="radio" name="q24" value="A"> Force error</label><br>
            <label><input type="radio" name="q24" value="B"> Provide fallback value</label><br>
            <label><input type="radio" name="q24" value="C"> Delete variable</label><br>
            <label><input type="radio" name="q24" value="D"> Loop array</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>const x = 10; const obj = { x }; console.log(obj.x);</code>
            </p>
            <label><input type="radio" name="q25" value="A"> undefined</label><br>
            <label><input type="radio" name="q25" value="B"> 10</label><br>
            <label><input type="radio" name="q25" value="C"> x</label><br>
            <label><input type="radio" name="q25" value="D"> error</label><br><br>

            <p><strong>26. What is property shorthand in ES6?</strong></p>
            <label><input type="radio" name="q26" value="A"> Writing full key-value pairs always</label><br>
            <label><input type="radio" name="q26" value="B"> Using variable name as object key automatically</label><br>
            <label><input type="radio" name="q26" value="C"> Looping objects</label><br>
            <label><input type="radio" name="q26" value="D"> Deleting properties</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>const f = () => ({ a:1 }); console.log(f().a);</code>
            </p>
            <label><input type="radio" name="q27" value="A"> undefined</label><br>
            <label><input type="radio" name="q27" value="B"> 1</label><br>
            <label><input type="radio" name="q27" value="C"> a</label><br>
            <label><input type="radio" name="q27" value="D"> error</label><br><br>

            <p><strong>28. Why are arrow functions useful?</strong></p>
            <label><input type="radio" name="q28" value="A"> Longer syntax</label><br>
            <label><input type="radio" name="q28" value="B"> Shorter syntax and lexical this</label><br>
            <label><input type="radio" name="q28" value="C"> DOM only usage</label><br>
            <label><input type="radio" name="q28" value="D"> CSS handling</label><br>

            <p class="mt-3"><strong>29. What will this output?</strong><br>
                <code>let a = 1; let b = 2; [a,b] = [b,a]; console.log(a,b);</code>
            </p>
            <label><input type="radio" name="q29" value="A"> 1 2</label><br>
            <label><input type="radio" name="q29" value="B"> 2 1</label><br>
            <label><input type="radio" name="q29" value="C"> undefined</label><br>
            <label><input type="radio" name="q29" value="D"> error</label><br><br>

            <p><strong>30. What is ES6 mainly focused on?</strong></p>
            <label><input type="radio" name="q30" value="A"> Removing JavaScript</label><br>
            <label><input type="radio" name="q30" value="B"> Making JavaScript more modern, readable and
                powerful</label><br>
            <label><input type="radio" name="q30" value="C"> Replacing HTML</label><br>
            <label><input type="radio" name="q30" value="D"> Replacing CSS</label><br><br>
        
            <p>
                <strong>31. What is the output?</strong><br>
                <code>const {a: {b}} = {a: {b: 42}};<br>
                console.log(b);</code>
            </p>
            <label><input type="radio" name="q31" value="A"> {b:42}</label><br>
            <label><input type="radio" name="q31" value="B"> undefined</label><br>
            <label><input type="radio" name="q31" value="C"> 42</label><br>
            <label><input type="radio" name="q31" value="D"> error</label><br>
            <p class="mt-3"><strong>32. What does <code>Promise.all([p1, p2])</code> do?</strong></p>
            <label><input type="radio" name="q32" value="A"> Returns whichever resolves first</label><br>
            <label><input type="radio" name="q32" value="B"> Waits for all — rejects immediately if any reject</label><br>
            <label><input type="radio" name="q32" value="C"> Resolves when all resolve</label><br>
            <label><input type="radio" name="q32" value="D"> Both B and C</label><br><br>
            <p><strong>33. What does the nullish coalescing operator <code>??</code> do?</strong></p>
            <label><input type="radio" name="q33" value="A"> Works like logical OR</label><br>
            <label><input type="radio" name="q33" value="B"> Returns the right side only if the left side is null or undefined</label><br>
            <label><input type="radio" name="q33" value="C"> Performs optional chaining</label><br>
            <label><input type="radio" name="q33" value="D"> Spreads an iterable</label><br>
            <p class="mt-3">
                <strong>34. What is the output?</strong><br>
                <code>const [,second] = [1,2,3];<br>
                console.log(second);</code>
            </p>
            <label><input type="radio" name="q34" value="A"> 1</label><br>
            <label><input type="radio" name="q34" value="B"> 3</label><br>
            <label><input type="radio" name="q34" value="C"> undefined</label><br>
            <label><input type="radio" name="q34" value="D"> 2</label><br><br>
            <p><strong>35. What does optional chaining <code>?.</code> do?</strong></p>
            <label><input type="radio" name="q35" value="A"> Short-circuit logical evaluation</label><br>
            <label><input type="radio" name="q35" value="B"> Returns undefined instead of throwing when accessing null/undefined</label><br>
            <label><input type="radio" name="q35" value="C"> Checks the type of a value</label><br>
            <label><input type="radio" name="q35" value="D"> Provides a nullish fallback</label><br>
            <p class="mt-3">
                <strong>36. What is the output?</strong><br>
                <code>class A {<br>
                  get name(){ return "A"; }<br>
                }<br>
                const a = new A();<br>
                console.log(a.name);</code>
            </p>
            <label><input type="radio" name="q36" value="A"> undefined</label><br>
            <label><input type="radio" name="q36" value="B"> "name"</label><br>
            <label><input type="radio" name="q36" value="C"> "A"</label><br>
            <label><input type="radio" name="q36" value="D"> error</label><br><br>
            <p><strong>37. What does <code>Symbol.toPrimitive</code> allow?</strong></p>
            <label><input type="radio" name="q37" value="A"> Converting a Symbol to a string</label><br>
            <label><input type="radio" name="q37" value="B"> Customising how an object is coerced to a primitive</label><br>
            <label><input type="radio" name="q37" value="C"> Comparing Symbols</label><br>
            <label><input type="radio" name="q37" value="D"> Cloning objects</label><br>
            <p class="mt-3">
                <strong>38. What is the output?</strong><br>
                <code>const fn = async () =&gt; 42;<br>
                fn().then(v =&gt; console.log(v));</code>
            </p>
            <label><input type="radio" name="q38" value="A"> Promise</label><br>
            <label><input type="radio" name="q38" value="B"> undefined</label><br>
            <label><input type="radio" name="q38" value="C"> fn</label><br>
            <label><input type="radio" name="q38" value="D"> 42</label><br><br>
            <p><strong>39. What are <code>WeakRef</code> and <code>FinalizationRegistry</code> for?</strong></p>
            <label><input type="radio" name="q39" value="A"> Memory management and GC hooks</label><br>
            <label><input type="radio" name="q39" value="B"> Creating Proxies</label><br>
            <label><input type="radio" name="q39" value="C"> Iterator patterns</label><br>
            <label><input type="radio" name="q39" value="D"> Module loading</label><br>
            <p class="mt-3">
                <strong>40. What does spreading a custom iterable do?</strong><br>
                <code>const iter = { [Symbol.iterator](){ let n=0; return { next(){ return n&lt;3 ? {value:n++,done:false} : {done:true}; } }; } };<br>
                console.log([...iter]);</code>
            </p>
            <label><input type="radio" name="q40" value="A"> [1,2,3]</label><br>
            <label><input type="radio" name="q40" value="B"> error</label><br>
            <label><input type="radio" name="q40" value="C"> [0, 1, 2]</label><br>
            <label><input type="radio" name="q40" value="D"> undefined</label><br><br>
            <p><strong>41. What does <code>Reflect.ownKeys(obj)</code> return?</strong></p>
            <label><input type="radio" name="q41" value="A"> Only string keys</label><br>
            <label><input type="radio" name="q41" value="B"> All own keys including Symbols</label><br>
            <label><input type="radio" name="q41" value="C"> Only Symbol keys</label><br>
            <label><input type="radio" name="q41" value="D"> Prototype chain keys</label><br>
            <p class="mt-3"><strong>42. What does the <code>in</code> operator check?</strong></p>
            <label><input type="radio" name="q42" value="A"> Iterates over values</label><br>
            <label><input type="radio" name="q42" value="B"> Whether a property exists in an object or its prototype chain</label><br>
            <label><input type="radio" name="q42" value="C"> Array membership by value</label><br>
            <label><input type="radio" name="q42" value="D"> Type comparison</label><br><br>
            <p>
                <strong>43. What is the output?</strong><br>
                <code>console.log(Object.entries({a:1, b:2}));</code>
            </p>
            <label><input type="radio" name="q43" value="A"> ["a","b"]</label><br>
            <label><input type="radio" name="q43" value="B"> [["a",1],["b",2]]</label><br>
            <label><input type="radio" name="q43" value="C"> [1,2]</label><br>
            <label><input type="radio" name="q43" value="D"> undefined</label><br>
            <p class="mt-3"><strong>44. What does ES6 <code>class</code> syntax primarily provide?</strong></p>
            <label><input type="radio" name="q44" value="A"> Better runtime performance</label><br>
            <label><input type="radio" name="q44" value="B"> Syntactic sugar over prototype-based inheritance</label><br>
            <label><input type="radio" name="q44" value="C"> True private fields</label><br>
            <label><input type="radio" name="q44" value="D"> Static methods exclusively</label><br><br>
            <p>
                <strong>45. What is the output?</strong><br>
                <code>const p = new Proxy({}, { get: (t,k) =&gt; k });<br>
                console.log(p.hello);</code>
            </p>
            <label><input type="radio" name="q45" value="A"> undefined</label><br>
            <label><input type="radio" name="q45" value="B"> "hello"</label><br>
            <label><input type="radio" name="q45" value="C"> error</label><br>
            <label><input type="radio" name="q45" value="D"> {}</label><br>
            <p class="mt-3"><strong>46. What does dynamic <code>import()</code> return?</strong></p>
            <label><input type="radio" name="q46" value="A"> The module object directly</label><br>
            <label><input type="radio" name="q46" value="B"> A Promise resolving to the module</label><br>
            <label><input type="radio" name="q46" value="C"> undefined</label><br>
            <label><input type="radio" name="q46" value="D"> A generator</label><br><br>
            <p>
                <strong>47. What is the output?</strong><br>
                <code>function* gen(){ yield* [1,2,3]; }<br>
                console.log([...gen()]);</code>
            </p>
            <label><input type="radio" name="q47" value="A"> [[1,2,3]]</label><br>
            <label><input type="radio" name="q47" value="B"> [1, 2, 3]</label><br>
            <label><input type="radio" name="q47" value="C"> error</label><br>
            <label><input type="radio" name="q47" value="D"> undefined</label><br>
            <p class="mt-3"><strong>48. What does the <code>Atomics</code> object provide?</strong></p>
            <label><input type="radio" name="q48" value="A"> Atomic CSS helper</label><br>
            <label><input type="radio" name="q48" value="B"> Atomic operations on SharedArrayBuffer for thread safety</label><br>
            <label><input type="radio" name="q48" value="C"> Physics constants</label><br>
            <label><input type="radio" name="q48" value="D"> Atomic variable declarations</label><br><br>
            <p><strong>49. What is <em>tree shaking</em>?</strong></p>
            <label><input type="radio" name="q49" value="A"> Removing DOM elements recursively</label><br>
            <label><input type="radio" name="q49" value="B"> Dead code elimination during bundling</label><br>
            <label><input type="radio" name="q49" value="C"> JavaScript garbage collection</label><br>
            <label><input type="radio" name="q49" value="D"> An array filtering method</label><br>
            <p class="mt-3">
                <strong>50. What is the output in a browser?</strong><br>
                <code>console.log(globalThis === window);</code>
            </p>
            <label><input type="radio" name="q50" value="A"> false</label><br>
            <label><input type="radio" name="q50" value="B"> undefined</label><br>
            <label><input type="radio" name="q50" value="C"> error</label><br>
            <label><input type="radio" name="q50" value="D"> true</label><br>
`,
  'es6-advanced': `
<h4 class="mb-4 py-4 text-success">ES6 - Advanced</h4>
            <p class="mt-3"><strong>1. What will this output?</strong><br>
                <code>const obj = { a:1, b:2, getA(){ return this.a; } }; const f = obj.getA; console.log(f());</code>
            </p>
            <label><input type="radio" name="q1" value="A"> 1</label><br>
            <label><input type="radio" name="q1" value="B"> undefined</label><br>
            <label><input type="radio" name="q1" value="C"> null</label><br>
            <label><input type="radio" name="q1" value="D"> error</label><br><br>

            <p><strong>2. Why does arrow function not have its own 'this'?</strong></p>
            <label><input type="radio" name="q2" value="A"> It binds dynamically</label><br>
            <label><input type="radio" name="q2" value="B"> It inherits 'this' from lexical scope</label><br>
            <label><input type="radio" name="q2" value="C"> It is global only</label><br>
            <label><input type="radio" name="q2" value="D"> It is undefined always</label><br>

            <p class="mt-3"><strong>3. What will this output?</strong><br>
                <code>let a = 10; const f = () => { console.log(a); let a = 20; }; f();</code>
            </p>
            <label><input type="radio" name="q3" value="A"> 10</label><br>
            <label><input type="radio" name="q3" value="B"> 20</label><br>
            <label><input type="radio" name="q3" value="C"> undefined</label><br>
            <label><input type="radio" name="q3" value="D"> ReferenceError</label><br><br>

            <p><strong>4. What is Temporal Dead Zone in ES6?</strong></p>
            <label><input type="radio" name="q4" value="A"> Time delay in loops</label><br>
            <label><input type="radio" name="q4" value="B"> Time between variable creation and initialization where it
                cannot be accessed</label><br>
            <label><input type="radio" name="q4" value="C"> Browser delay</label><br>
            <label><input type="radio" name="q4" value="D"> Function delay</label><br>

            <p class="mt-3"><strong>5. What will this output?</strong><br>
                <code>const a = [1,2,3]; const b = [...a]; b[0] = 99; console.log(a[0]);</code>
            </p>
            <label><input type="radio" name="q5" value="A"> 99</label><br>
            <label><input type="radio" name="q5" value="B"> 1</label><br>
            <label><input type="radio" name="q5" value="C"> undefined</label><br>
            <label><input type="radio" name="q5" value="D"> error</label><br><br>

            <p><strong>6. What is deep copy vs shallow copy?</strong></p>
            <label><input type="radio" name="q6" value="A"> Same thing</label><br>
            <label><input type="radio" name="q6" value="B"> Deep copy copies nested objects, shallow does
                not</label><br>
            <label><input type="radio" name="q6" value="C"> Only arrays</label><br>
            <label><input type="radio" name="q6" value="D"> Only primitives</label><br>

            <p class="mt-3"><strong>7. What will this output?</strong><br>
                <code>const f = (x = y, y = 2) => x + y; console.log(f());</code>
            </p>
            <label><input type="radio" name="q7" value="A"> 4</label><br>
            <label><input type="radio" name="q7" value="B"> NaN</label><br>
            <label><input type="radio" name="q7" value="C"> ReferenceError</label><br>
            <label><input type="radio" name="q7" value="D"> undefined</label><br><br>

            <p><strong>8. Why does the above code throw an error?</strong></p>
            <label><input type="radio" name="q8" value="A"> Because defaults are evaluated left to right</label><br>
            <label><input type="radio" name="q8" value="B"> Because y is not defined before x</label><br>
            <label><input type="radio" name="q8" value="C"> Because arrow functions are invalid</label><br>
            <label><input type="radio" name="q8" value="D"> Because of spread operator</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>const obj = { a:1, b:2 }; const { a, b, c = 3 } = obj; console.log(c);</code>
            </p>
            <label><input type="radio" name="q9" value="A"> 1</label><br>
            <label><input type="radio" name="q9" value="B"> 2</label><br>
            <label><input type="radio" name="q9" value="C"> 3</label><br>
            <label><input type="radio" name="q9" value="D"> undefined</label><br><br>

            <p><strong>10. What is optional chaining used for?</strong></p>
            <label><input type="radio" name="q10" value="A"> Loop objects</label><br>
            <label><input type="radio" name="q10" value="B"> Safely access nested properties without errors</label><br>
            <label><input type="radio" name="q10" value="C"> Delete properties</label><br>
            <label><input type="radio" name="q10" value="D"> Create objects</label><br>

            <p class="mt-3"><strong>11. What will this output?</strong><br>
                <code>const user = { profile: { name: "JS" } }; console.log(user.profile?.age);</code>
            </p>
            <label><input type="radio" name="q11" value="A"> undefined</label><br>
            <label><input type="radio" name="q11" value="B"> error</label><br>
            <label><input type="radio" name="q11" value="C"> null</label><br>
            <label><input type="radio" name="q11" value="D"> 0</label><br><br>

            <p><strong>12. What is ES6 module import/export used for?</strong></p>
            <label><input type="radio" name="q12" value="A"> DOM control</label><br>
            <label><input type="radio" name="q12" value="B"> Sharing code between files</label><br>
            <label><input type="radio" name="q12" value="C"> Looping</label><br>
            <label><input type="radio" name="q12" value="D"> Styling</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>let a = 1; let b = 2; [a,b] = [b,a]; console.log(a,b);</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 1 2</label><br>
            <label><input type="radio" name="q13" value="B"> 2 1</label><br>
            <label><input type="radio" name="q13" value="C"> undefined</label><br>
            <label><input type="radio" name="q13" value="D"> error</label><br><br>

            <p><strong>14. What is destructuring swap useful for?</strong></p>
            <label><input type="radio" name="q14" value="A"> Reversing arrays</label><br>
            <label><input type="radio" name="q14" value="B"> Swapping variables without temp variable</label><br>
            <label><input type="radio" name="q14" value="C"> DOM manipulation</label><br>
            <label><input type="radio" name="q14" value="D"> Loop control</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>const f = () => ({ a: 1 }); console.log(f().a);</code>
            </p>
            <label><input type="radio" name="q15" value="A"> undefined</label><br>
            <label><input type="radio" name="q15" value="B"> 1</label><br>
            <label><input type="radio" name="q15" value="C"> error</label><br>
            <label><input type="radio" name="q15" value="D"> null</label><br><br>

            <p><strong>16. Why must object literal be wrapped in parentheses in arrow return?</strong></p>
            <label><input type="radio" name="q16" value="A"> Syntax ambiguity with block scope</label><br>
            <label><input type="radio" name="q16" value="B"> Performance issue</label><br>
            <label><input type="radio" name="q16" value="C"> DOM issue</label><br>
            <label><input type="radio" name="q16" value="D"> Not required ever</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>const f = (...args) => args.length; console.log(f(1,2,3,4,5));</code>
            </p>
            <label><input type="radio" name="q17" value="A"> 4</label><br>
            <label><input type="radio" name="q17" value="B"> 5</label><br>
            <label><input type="radio" name="q17" value="C"> 6</label><br>
            <label><input type="radio" name="q17" value="D"> undefined</label><br><br>

            <p><strong>18. What is rest parameter different from arguments?</strong></p>
            <label><input type="radio" name="q18" value="A"> Rest is array, arguments is object</label><br>
            <label><input type="radio" name="q18" value="B"> Both same</label><br>
            <label><input type="radio" name="q18" value="C"> Arguments is faster</label><br>
            <label><input type="radio" name="q18" value="D"> Rest cannot be used in functions</label><br>

            <p class="mt-3"><strong>19. What will this output?</strong><br>
                <code>const obj = { a:1 }; const clone = { ...obj }; clone.a = 99; console.log(obj.a);</code>
            </p>
            <label><input type="radio" name="q19" value="A"> 99</label><br>
            <label><input type="radio" name="q19" value="B"> 1</label><br>
            <label><input type="radio" name="q19" value="C"> undefined</label><br>
            <label><input type="radio" name="q19" value="D"> error</label><br><br>

            <p><strong>20. Why is spread operator considered shallow copy?</strong></p>
            <label><input type="radio" name="q20" value="A"> It copies nested objects deeply</label><br>
            <label><input type="radio" name="q20" value="B"> It only copies first level properties</label><br>
            <label><input type="radio" name="q20" value="C"> It deletes nested objects</label><br>
            <label><input type="radio" name="q20" value="D"> It loops objects</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>const f = (x) => (y) => x + y; console.log(f(10)(5));</code>
            </p>
            <label><input type="radio" name="q21" value="A"> 105</label><br>
            <label><input type="radio" name="q21" value="B"> 15</label><br>
            <label><input type="radio" name="q21" value="C"> undefined</label><br>
            <label><input type="radio" name="q21" value="D"> error</label><br><br>

            <p><strong>22. What is currying in ES6?</strong></p>
            <label><input type="radio" name="q22" value="A"> Function returning multiple values</label><br>
            <label><input type="radio" name="q22" value="B"> Converting function with multiple arguments into chained
                functions</label><br>
            <label><input type="radio" name="q22" value="C"> Loop optimization</label><br>
            <label><input type="radio" name="q22" value="D"> DOM manipulation</label><br>

            <p class="mt-3"><strong>23. What will this output?</strong><br>
                <code>let x = undefined; let y = x ?? "default"; console.log(y);</code>
            </p>
            <label><input type="radio" name="q23" value="A"> undefined</label><br>
            <label><input type="radio" name="q23" value="B"> null</label><br>
            <label><input type="radio" name="q23" value="C"> default</label><br>
            <label><input type="radio" name="q23" value="D"> error</label><br><br>

            <p><strong>24. What does nullish coalescing operator do?</strong></p>
            <label><input type="radio" name="q24" value="A"> Checks only null or undefined</label><br>
            <label><input type="radio" name="q24" value="B"> Checks all falsy values</label><br>
            <label><input type="radio" name="q24" value="C"> Deletes variables</label><br>
            <label><input type="radio" name="q24" value="D"> Loops values</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>const f = () => this; console.log(f());</code>
            </p>
            <label><input type="radio" name="q25" value="A"> window/global</label><br>
            <label><input type="radio" name="q25" value="B"> undefined</label><br>
            <label><input type="radio" name="q25" value="C"> function</label><br>
            <label><input type="radio" name="q25" value="D"> error</label><br><br>

            <p><strong>26. Why is 'this' different in arrow functions?</strong></p>
            <label><input type="radio" name="q26" value="A"> It is dynamically bound</label><br>
            <label><input type="radio" name="q26" value="B"> It is lexically bound</label><br>
            <label><input type="radio" name="q26" value="C"> It is always null</label><br>
            <label><input type="radio" name="q26" value="D"> It is deleted</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>const a = { x:1 }; const b = { x:1 }; console.log(a === b);</code>
            </p>
            <label><input type="radio" name="q27" value="A"> true</label><br>
            <label><input type="radio" name="q27" value="B"> false</label><br>
            <label><input type="radio" name="q27" value="C"> undefined</label><br>
            <label><input type="radio" name="q27" value="D"> error</label><br><br>

            <p><strong>28. What does object comparison check in JS?</strong></p>
            <label><input type="radio" name="q28" value="A"> Values</label><br>
            <label><input type="radio" name="q28" value="B"> Reference</label><br>
            <label><input type="radio" name="q28" value="C"> Keys only</label><br>
            <label><input type="radio" name="q28" value="D"> Length</label><br>

            <p class="mt-3"><strong>29. What will this output?</strong><br>
                <code>const f = (a=2) => a * 2; console.log(f());</code>
            </p>
            <label><input type="radio" name="q29" value="A"> 2</label><br>
            <label><input type="radio" name="q29" value="B"> 4</label><br>
            <label><input type="radio" name="q29" value="C"> undefined</label><br>
            <label><input type="radio" name="q29" value="D"> error</label><br><br>

            <p><strong>30. What is ES6 mainly improving?</strong></p>
            <label><input type="radio" name="q30" value="A"> JavaScript readability, scalability, and modern
                features</label><br>
            <label><input type="radio" name="q30" value="B"> HTML structure</label><br>
            <label><input type="radio" name="q30" value="C"> CSS layout</label><br>
            <label><input type="radio" name="q30" value="D"> Browser speed only</label><br><br>
        
            <p><strong>31. What is a <em>well-known Symbol</em>?</strong></p>
            <label><input type="radio" name="q31" value="A"> A global string constant</label><br>
            <label><input type="radio" name="q31" value="B"> A built-in Symbol used to customise language behaviour</label><br>
            <label><input type="radio" name="q31" value="C"> A named global variable</label><br>
            <label><input type="radio" name="q31" value="D"> A typeof return value</label><br>
            <p class="mt-3">
                <strong>32. What is the output?</strong><br>
                <code>console.log(typeof Symbol() === typeof Symbol());</code>
            </p>
            <label><input type="radio" name="q32" value="A"> false</label><br>
            <label><input type="radio" name="q32" value="B"> undefined</label><br>
            <label><input type="radio" name="q32" value="C"> error</label><br>
            <label><input type="radio" name="q32" value="D"> true</label><br><br>
            <p><strong>33. What is the purpose of <code>Symbol.hasInstance</code>?</strong></p>
            <label><input type="radio" name="q33" value="A"> Checking if a Symbol exists</label><br>
            <label><input type="radio" name="q33" value="B"> Customising the behaviour of the <code>instanceof</code> operator</label><br>
            <label><input type="radio" name="q33" value="C"> Creating class instances</label><br>
            <label><input type="radio" name="q33" value="D"> Marking functions as constructors</label><br>
            <p class="mt-3">
                <strong>34. What is the output?</strong><br>
                <code>const p = Promise.resolve(42);<br>
                p.then(v =&gt; console.log(v));</code>
            </p>
            <label><input type="radio" name="q34" value="A"> Promise</label><br>
            <label><input type="radio" name="q34" value="B"> undefined</label><br>
            <label><input type="radio" name="q34" value="C"> error</label><br>
            <label><input type="radio" name="q34" value="D"> 42</label><br><br>
            <p><strong>35. What does <code>Reflect.defineProperty()</code> do?</strong></p>
            <label><input type="radio" name="q35" value="A"> Gets a property descriptor</label><br>
            <label><input type="radio" name="q35" value="B"> Defines a property (like Object.defineProperty but returns a boolean)</label><br>
            <label><input type="radio" name="q35" value="C"> Removes a property</label><br>
            <label><input type="radio" name="q35" value="D"> Copies a property</label><br>
            <p class="mt-3"><strong>36. What is <code>Atomics.wait()</code> used for?</strong></p>
            <label><input type="radio" name="q36" value="A"> Creating an async timer</label><br>
            <label><input type="radio" name="q36" value="B"> Waiting (blocking a worker) until a SharedArrayBuffer value changes</label><br>
            <label><input type="radio" name="q36" value="C"> Blocking the main thread</label><br>
            <label><input type="radio" name="q36" value="D"> Racing Promises</label><br><br>
            <p>
                <strong>37. What is the output?</strong><br>
                <code>class A {<br>
                  static #x = 10;<br>
                  static getX(){ return A.#x; }<br>
                }<br>
                console.log(A.getX());</code>
            </p>
            <label><input type="radio" name="q37" value="A"> undefined</label><br>
            <label><input type="radio" name="q37" value="B"> error</label><br>
            <label><input type="radio" name="q37" value="C"> 10</label><br>
            <label><input type="radio" name="q37" value="D"> A.x</label><br>
            <p class="mt-3"><strong>38. What does <code>import.meta</code> provide?</strong></p>
            <label><input type="radio" name="q38" value="A"> Package.json metadata</label><br>
            <label><input type="radio" name="q38" value="B"> Module-specific metadata such as the module's URL</label><br>
            <label><input type="radio" name="q38" value="C"> Import call count</label><br>
            <label><input type="radio" name="q38" value="D"> A list of exports</label><br><br>
            <p>
                <strong>39. What does this async generator log?</strong><br>
                <code>async function* gen(){ yield 1; yield 2; }<br>
                (async()=&gt;{ for await(const v of gen()) console.log(v); })();</code>
            </p>
            <label><input type="radio" name="q39" value="A"> 1 then 2</label><br>
            <label><input type="radio" name="q39" value="B"> [1,2]</label><br>
            <label><input type="radio" name="q39" value="C"> Promise</label><br>
            <label><input type="radio" name="q39" value="D"> error</label><br>
            <p class="mt-3"><strong>40. What is a <em>Transferable</em> object in Web Workers?</strong></p>
            <label><input type="radio" name="q40" value="A"> A cloned object</label><br>
            <label><input type="radio" name="q40" value="B"> An object moved (not copied) to another thread</label><br>
            <label><input type="radio" name="q40" value="C"> A shared read-only variable</label><br>
            <label><input type="radio" name="q40" value="D"> A networked object</label><br><br>
            <p>
                <strong>41. What is the output?</strong><br>
                <code>console.log(Object.getOwnPropertySymbols({[Symbol("x")]:1}).length);</code>
            </p>
            <label><input type="radio" name="q41" value="A"> 0</label><br>
            <label><input type="radio" name="q41" value="B"> error</label><br>
            <label><input type="radio" name="q41" value="C"> undefined</label><br>
            <label><input type="radio" name="q41" value="D"> 1</label><br>
            <p class="mt-3"><strong>42. What does a <code>Proxy</code> <em>set</em> trap allow?</strong></p>
            <label><input type="radio" name="q42" value="A"> Reading properties</label><br>
            <label><input type="radio" name="q42" value="B"> Intercepting and validating property assignments</label><br>
            <label><input type="radio" name="q42" value="C"> Defining new properties</label><br>
            <label><input type="radio" name="q42" value="D"> Deleting keys</label><br><br>
            <p><strong>43. What is <code>FinalizationRegistry</code> used for?</strong></p>
            <label><input type="radio" name="q43" value="A"> Finalising ES6 module loading</label><br>
            <label><input type="radio" name="q43" value="B"> Running a callback when the garbage collector collects a registered object</label><br>
            <label><input type="radio" name="q43" value="C"> A module loading hook</label><br>
            <label><input type="radio" name="q43" value="D"> Sealing objects</label><br>
            <p class="mt-3"><strong>44. What is a <em>logical assignment operator</em>?</strong></p>
            <label><input type="radio" name="q44" value="A"> Arithmetic shorthand</label><br>
            <label><input type="radio" name="q44" value="B"> Assigns a value only under a logical condition (&&=, ||=, ??=)</label><br>
            <label><input type="radio" name="q44" value="C"> A bitwise operator</label><br>
            <label><input type="radio" name="q44" value="D"> A comparison operator</label><br><br>
            <p>
                <strong>45. What is the output?</strong><br>
                <code>const a = {x:1};<br>
                const b = Object.create(a);<br>
                console.log(b.hasOwnProperty("x"));</code>
            </p>
            <label><input type="radio" name="q45" value="A"> true</label><br>
            <label><input type="radio" name="q45" value="B"> undefined</label><br>
            <label><input type="radio" name="q45" value="C"> error</label><br>
            <label><input type="radio" name="q45" value="D"> false</label><br>
            <p class="mt-3"><strong>46. What is <em>top-level await</em> (ES2022)?</strong></p>
            <label><input type="radio" name="q46" value="A"> await usable anywhere in any file</label><br>
            <label><input type="radio" name="q46" value="B"> await usable at the top level of an ES module</label><br>
            <label><input type="radio" name="q46" value="C"> Synchronous await</label><br>
            <label><input type="radio" name="q46" value="D"> A deprecated feature</label><br><br>
            <p><strong>47. What does <code>[1,2,3].at(-1)</code> return?</strong></p>
            <label><input type="radio" name="q47" value="A"> undefined</label><br>
            <label><input type="radio" name="q47" value="B"> 1</label><br>
            <label><input type="radio" name="q47" value="C"> 3</label><br>
            <label><input type="radio" name="q47" value="D"> -1</label><br>
            <p class="mt-3"><strong>48. What does <code>Object.hasOwn(obj, key)</code> do?</strong></p>
            <label><input type="radio" name="q48" value="A"> Same as the in operator</label><br>
            <label><input type="radio" name="q48" value="B"> Checks if the property is a direct own property (not inherited)</label><br>
            <label><input type="radio" name="q48" value="C"> Checks the prototype chain</label><br>
            <label><input type="radio" name="q48" value="D"> Checks the type</label><br><br>
            <p><strong>49. What does the TC39 <code>using</code> keyword provide?</strong></p>
            <label><input type="radio" name="q49" value="A"> An ES6 import alias</label><br>
            <label><input type="radio" name="q49" value="B"> Explicit resource management with automatic cleanup</label><br>
            <label><input type="radio" name="q49" value="C"> A namespace import</label><br>
            <label><input type="radio" name="q49" value="D"> A variable alias</label><br>
            <p class="mt-3">
                <strong>50. What is the output?</strong><br>
                <code>class A { #x = 1; }<br>
                const a = new A();<br>
                console.log(a.#x);</code>
            </p>
            <label><input type="radio" name="q50" value="A"> 1</label><br>
            <label><input type="radio" name="q50" value="B"> undefined</label><br>
            <label><input type="radio" name="q50" value="C"> SyntaxError</label><br>
            <label><input type="radio" name="q50" value="D"> null</label><br>
`,
  'async-beginner': `
<h4 class="mb-4 py-4 text-success">Async JS - Beginner</h4>


            <p class="mt-3"><strong>1. What will this output?</strong><br>
                <code>console.log("Start"); setTimeout(() => console.log("Async"), 0); console.log("End");</code>
            </p>
            <label><input type="radio" name="q1" value="A"> Start Async End</label><br>
            <label><input type="radio" name="q1" value="B"> Start End Async</label><br>
            <label><input type="radio" name="q1" value="C"> Async Start End</label><br>
            <label><input type="radio" name="q1" value="D"> End Start Async</label><br><br>

            <p><strong>2. What is async programming mainly used for?</strong></p>
            <label><input type="radio" name="q2" value="A"> Blocking code execution</label><br>
            <label><input type="radio" name="q2" value="B"> Handling tasks without blocking main thread</label><br>
            <label><input type="radio" name="q2" value="C"> Styling pages</label><br>
            <label><input type="radio" name="q2" value="D"> DOM removal</label><br>

            <p class="mt-3"><strong>3. What will this output?</strong><br>
                <code>console.log("A"); setTimeout(() => console.log("B"), 1000); console.log("C");</code>
            </p>
            <label><input type="radio" name="q3" value="A"> A B C</label><br>
            <label><input type="radio" name="q3" value="B"> A C B</label><br>
            <label><input type="radio" name="q3" value="C"> B A C</label><br>
            <label><input type="radio" name="q3" value="D"> C A B</label><br><br>

            <p><strong>4. What is setTimeout used for?</strong></p>
            <label><input type="radio" name="q4" value="A"> Immediate execution</label><br>
            <label><input type="radio" name="q4" value="B"> Delaying execution of a function</label><br>
            <label><input type="radio" name="q4" value="C"> Looping code</label><br>
            <label><input type="radio" name="q4" value="D"> DOM creation</label><br>

            <p class="mt-3"><strong>5. What will this output?</strong><br>
                <code>setTimeout(() => console.log("Hello"), 0); console.log("World");</code>
            </p>
            <label><input type="radio" name="q5" value="A"> Hello World</label><br>
            <label><input type="radio" name="q5" value="B"> World Hello</label><br>
            <label><input type="radio" name="q5" value="C"> Hello only</label><br>
            <label><input type="radio" name="q5" value="D"> World only</label><br><br>

            <p><strong>6. What is callback function?</strong></p>
            <label><input type="radio" name="q6" value="A"> Function passed into another function</label><br>
            <label><input type="radio" name="q6" value="B"> Loop function</label><br>
            <label><input type="radio" name="q6" value="C"> CSS function</label><br>
            <label><input type="radio" name="q6" value="D"> DOM element</label><br>

            <p class="mt-3"><strong>7. What will this output?</strong><br>
                <code>function greet(cb){ cb(); } greet(() => console.log("Hi"));</code>
            </p>
            <label><input type="radio" name="q7" value="A"> greet</label><br>
            <label><input type="radio" name="q7" value="B"> Hi</label><br>
            <label><input type="radio" name="q7" value="C"> undefined</label><br>
            <label><input type="radio" name="q7" value="D"> error</label><br><br>

            <p><strong>8. Why do we use callbacks?</strong></p>
            <label><input type="radio" name="q8" value="A"> To delay execution or handle async tasks</label><br>
            <label><input type="radio" name="q8" value="B"> To delete functions</label><br>
            <label><input type="radio" name="q8" value="C"> To style code</label><br>
            <label><input type="radio" name="q8" value="D"> To create HTML</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>console.log("1"); setTimeout(() => console.log("2"), 0); console.log("3");</code>
            </p>
            <label><input type="radio" name="q9" value="A"> 1 2 3</label><br>
            <label><input type="radio" name="q9" value="B"> 1 3 2</label><br>
            <label><input type="radio" name="q9" value="C"> 2 1 3</label><br>
            <label><input type="radio" name="q9" value="D"> 3 2 1</label><br><br>

            <p><strong>10. What is event loop?</strong></p>
            <label><input type="radio" name="q10" value="A"> CSS animation</label><br>
            <label><input type="radio" name="q10" value="B"> Mechanism that handles async operations</label><br>
            <label><input type="radio" name="q10" value="C"> HTML parser</label><br>
            <label><input type="radio" name="q10" value="D"> DOM selector</label><br>

            <p class="mt-3"><strong>11. What will this output?</strong><br>
                <code>setTimeout(() => console.log("A"), 100); setTimeout(() => console.log("B"), 50);</code>
            </p>
            <label><input type="radio" name="q11" value="A"> A B</label><br>
            <label><input type="radio" name="q11" value="B"> B A</label><br>
            <label><input type="radio" name="q11" value="C"> A only</label><br>
            <label><input type="radio" name="q11" value="D"> B only</label><br><br>

            <p><strong>12. What determines execution order in setTimeout?</strong></p>
            <label><input type="radio" name="q12" value="A"> Code order only</label><br>
            <label><input type="radio" name="q12" value="B"> Timer delay and event loop</label><br>
            <label><input type="radio" name="q12" value="C"> HTML structure</label><br>
            <label><input type="radio" name="q12" value="D"> CSS rules</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>console.log("Start"); setTimeout(() => console.log("Middle"), 0); console.log("End");</code>
            </p>
            <label><input type="radio" name="q13" value="A"> Start Middle End</label><br>
            <label><input type="radio" name="q13" value="B"> Start End Middle</label><br>
            <label><input type="radio" name="q13" value="C"> Middle Start End</label><br>
            <label><input type="radio" name="q13" value="D"> End Middle Start</label><br><br>

            <p><strong>14. What is asynchronous code?</strong></p>
            <label><input type="radio" name="q14" value="A"> Code that runs step-by-step only</label><br>
            <label><input type="radio" name="q14" value="B"> Code that runs without blocking execution</label><br>
            <label><input type="radio" name="q14" value="C"> CSS code</label><br>
            <label><input type="radio" name="q14" value="D"> HTML code</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>setTimeout(() => console.log("X"), 200); setTimeout(() => console.log("Y"), 100);</code>
            </p>
            <label><input type="radio" name="q15" value="A"> X Y</label><br>
            <label><input type="radio" name="q15" value="B"> Y X</label><br>
            <label><input type="radio" name="q15" value="C"> X only</label><br>
            <label><input type="radio" name="q15" value="D"> Y only</label><br><br>

            <p><strong>16. What is callback hell?</strong></p>
            <label><input type="radio" name="q16" value="A"> Too many nested callbacks</label><br>
            <label><input type="radio" name="q16" value="B"> Loop error</label><br>
            <label><input type="radio" name="q16" value="C"> DOM error</label><br>
            <label><input type="radio" name="q16" value="D"> CSS issue</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>function test(cb){ console.log("A"); cb(); } test(() => console.log("B"));</code>
            </p>
            <label><input type="radio" name="q17" value="A"> B A</label><br>
            <label><input type="radio" name="q17" value="B"> A B</label><br>
            <label><input type="radio" name="q17" value="C"> A only</label><br>
            <label><input type="radio" name="q17" value="D"> B only</label><br><br>

            <p><strong>18. Why is async important in JavaScript?</strong></p>
            <label><input type="radio" name="q18" value="A"> It blocks execution</label><br>
            <label><input type="radio" name="q18" value="B"> It improves performance and responsiveness</label><br>
            <label><input type="radio" name="q18" value="C"> It removes functions</label><br>
            <label><input type="radio" name="q18" value="D"> It disables JS</label><br>

            <p class="mt-3"><strong>19. What will this output?</strong><br>
                <code>console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");</code>
            </p>
            <label><input type="radio" name="q19" value="A"> A B C</label><br>
            <label><input type="radio" name="q19" value="B"> A C B</label><br>
            <label><input type="radio" name="q19" value="C"> B A C</label><br>
            <label><input type="radio" name="q19" value="D"> C B A</label><br><br>

            <p><strong>20. What is a microtask vs macrotask concept related to?</strong></p>
            <label><input type="radio" name="q20" value="A"> CSS rendering</label><br>
            <label><input type="radio" name="q20" value="B"> Event loop execution order</label><br>
            <label><input type="radio" name="q20" value="C"> HTML parsing</label><br>
            <label><input type="radio" name="q20" value="D"> DOM styling</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>setTimeout(() => console.log("A")); console.log("B");</code>
            </p>
            <label><input type="radio" name="q21" value="A"> A B</label><br>
            <label><input type="radio" name="q21" value="B"> B A</label><br>
            <label><input type="radio" name="q21" value="C"> A only</label><br>
            <label><input type="radio" name="q21" value="D"> B only</label><br><br>

            <p><strong>22. What is non-blocking behavior?</strong></p>
            <label><input type="radio" name="q22" value="A"> Code stops execution</label><br>
            <label><input type="radio" name="q22" value="B"> Code continues running while waiting for tasks</label><br>
            <label><input type="radio" name="q22" value="C"> CSS behavior</label><br>
            <label><input type="radio" name="q22" value="D"> HTML rendering</label><br>

            <p class="mt-3"><strong>23. What will this output?</strong><br>
                <code>console.log(1); setTimeout(() => console.log(2), 0); console.log(3);</code>
            </p>
            <label><input type="radio" name="q23" value="A"> 1 2 3</label><br>
            <label><input type="radio" name="q23" value="B"> 1 3 2</label><br>
            <label><input type="radio" name="q23" value="C"> 2 1 3</label><br>
            <label><input type="radio" name="q23" value="D"> 3 2 1</label><br><br>

            <p><strong>24. What is the role of callback in async JS?</strong></p>
            <label><input type="radio" name="q24" value="A"> Execute after task completion</label><br>
            <label><input type="radio" name="q24" value="B"> Stop execution</label><br>
            <label><input type="radio" name="q24" value="C"> Replace variables</label><br>
            <label><input type="radio" name="q24" value="D"> Style UI</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>setTimeout(() => console.log("Done"), 1000); console.log("Running");</code>
            </p>
            <label><input type="radio" name="q25" value="A"> Done Running</label><br>
            <label><input type="radio" name="q25" value="B"> Running Done</label><br>
            <label><input type="radio" name="q25" value="C"> Done only</label><br>
            <label><input type="radio" name="q25" value="D"> Running only</label><br><br>

            <p><strong>26. What is event loop responsible for?</strong></p>
            <label><input type="radio" name="q26" value="A"> Rendering HTML</label><br>
            <label><input type="radio" name="q26" value="B"> Managing async callbacks execution</label><br>
            <label><input type="radio" name="q26" value="C"> Styling CSS</label><br>
            <label><input type="radio" name="q26" value="D"> Deleting DOM</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>console.log("First"); setTimeout(()=>console.log("Second"),0); console.log("Third");</code>
            </p>
            <label><input type="radio" name="q27" value="A"> First Second Third</label><br>
            <label><input type="radio" name="q27" value="B"> First Third Second</label><br>
            <label><input type="radio" name="q27" value="C"> Second First Third</label><br>
            <label><input type="radio" name="q27" value="D"> Third Second First</label><br><br>

            <p><strong>28. What is async code advantage?</strong></p>
            <label><input type="radio" name="q28" value="A"> Slows down execution</label><br>
            <label><input type="radio" name="q28" value="B"> Improves responsiveness and user experience</label><br>
            <label><input type="radio" name="q28" value="C"> Stops JS engine</label><br>
            <label><input type="radio" name="q28" value="D"> Breaks code</label><br>

            <p class="mt-3"><strong>29. What will this output?</strong><br>
                <code>setTimeout(()=>console.log("A"),0); setTimeout(()=>console.log("B"),0);</code>
            </p>
            <label><input type="radio" name="q29" value="A"> A B</label><br>
            <label><input type="radio" name="q29" value="B"> B A</label><br>
            <label><input type="radio" name="q29" value="C"> A only</label><br>
            <label><input type="radio" name="q29" value="D"> B only</label><br><br>

            <p><strong>30. What best describes JavaScript async model?</strong></p>
            <label><input type="radio" name="q30" value="A"> Synchronous blocking model</label><br>
            <label><input type="radio" name="q30" value="B"> Single-threaded with non-blocking event loop</label><br>
            <label><input type="radio" name="q30" value="C"> Multi-threaded only</label><br>
            <label><input type="radio" name="q30" value="D"> CSS-based execution</label><br><br>
        
            <p><strong>31. What does <em>asynchronous</em> mean in JavaScript?</strong></p>
            <label><input type="radio" name="q31" value="A"> Code always runs in parallel threads</label><br>
            <label><input type="radio" name="q31" value="B"> Code can run without blocking other code</label><br>
            <label><input type="radio" name="q31" value="C"> Code runs slower</label><br>
            <label><input type="radio" name="q31" value="D"> Code never returns a value</label><br>
            <p class="mt-3"><strong>32. What does <code>setTimeout(fn, 1000)</code> do?</strong></p>
            <label><input type="radio" name="q32" value="A"> Repeats fn every second</label><br>
            <label><input type="radio" name="q32" value="B"> Runs fn after approximately 1000 ms</label><br>
            <label><input type="radio" name="q32" value="C"> Runs fn immediately</label><br>
            <label><input type="radio" name="q32" value="D"> Cancels fn after 1 second</label><br><br>
            <p><strong>33. How does <code>setInterval</code> differ from <code>setTimeout</code>?</strong></p>
            <label><input type="radio" name="q33" value="A"> Runs only once</label><br>
            <label><input type="radio" name="q33" value="B"> Blocks all other code</label><br>
            <label><input type="radio" name="q33" value="C"> Repeats the function at the specified interval</label><br>
            <label><input type="radio" name="q33" value="D"> Cancels itself automatically</label><br>
            <p class="mt-3">
                <strong>34. What order does this code log?</strong><br>
                <code>console.log("start");<br>
                setTimeout(() =&gt; console.log("timer"), 0);<br>
                console.log("end");</code>
            </p>
            <label><input type="radio" name="q34" value="A"> timer, start, end</label><br>
            <label><input type="radio" name="q34" value="B"> start, timer, end</label><br>
            <label><input type="radio" name="q34" value="C"> start, end, timer</label><br>
            <label><input type="radio" name="q34" value="D"> end, start, timer</label><br><br>
            <p><strong>35. What is a <em>callback function</em>?</strong></p>
            <label><input type="radio" name="q35" value="A"> The return value of a function</label><br>
            <label><input type="radio" name="q35" value="B"> A function passed as an argument to be called later</label><br>
            <label><input type="radio" name="q35" value="C"> An error handler</label><br>
            <label><input type="radio" name="q35" value="D"> A Promise wrapper</label><br>
            <p class="mt-3"><strong>36. What does <code>clearTimeout(id)</code> do?</strong></p>
            <label><input type="radio" name="q36" value="A"> Clears the console</label><br>
            <label><input type="radio" name="q36" value="B"> Cancels a scheduled setTimeout</label><br>
            <label><input type="radio" name="q36" value="C"> Resets the timer</label><br>
            <label><input type="radio" name="q36" value="D"> Pauses execution</label><br><br>
            <p><strong>37. What is <em>callback hell</em>?</strong></p>
            <label><input type="radio" name="q37" value="A"> Many unhandled errors</label><br>
            <label><input type="radio" name="q37" value="B"> Deeply nested callbacks that make code hard to read and maintain</label><br>
            <label><input type="radio" name="q37" value="C"> An infinite loop</label><br>
            <label><input type="radio" name="q37" value="D"> A stack overflow error</label><br>
            <p class="mt-3"><strong>38. What is a <em>Promise</em>?</strong></p>
            <label><input type="radio" name="q38" value="A"> A guarantee that code never fails</label><br>
            <label><input type="radio" name="q38" value="B"> An object representing the eventual completion or failure of an async operation</label><br>
            <label><input type="radio" name="q38" value="C"> A setTimeout wrapper</label><br>
            <label><input type="radio" name="q38" value="D"> A DOM event</label><br><br>
            <p>
                <strong>39. What is the output?</strong><br>
                <code>new Promise((resolve) =&gt; resolve(42))<br>
                  .then(v =&gt; console.log(v));</code>
            </p>
            <label><input type="radio" name="q39" value="A"> Promise</label><br>
            <label><input type="radio" name="q39" value="B"> undefined</label><br>
            <label><input type="radio" name="q39" value="C"> 42</label><br>
            <label><input type="radio" name="q39" value="D"> error</label><br>
            <p class="mt-3"><strong>40. What does <code>Promise.resolve(value)</code> return?</strong></p>
            <label><input type="radio" name="q40" value="A"> value directly</label><br>
            <label><input type="radio" name="q40" value="B"> A rejected Promise</label><br>
            <label><input type="radio" name="q40" value="C"> A Promise already resolved with value</label><br>
            <label><input type="radio" name="q40" value="D"> undefined</label><br><br>
            <p><strong>41. Which Promise method handles rejection?</strong></p>
            <label><input type="radio" name="q41" value="A"> .then()</label><br>
            <label><input type="radio" name="q41" value="B"> .resolve()</label><br>
            <label><input type="radio" name="q41" value="C"> .finally()</label><br>
            <label><input type="radio" name="q41" value="D"> .catch()</label><br>
            <p class="mt-3"><strong>42. What is the JavaScript <em>event loop</em>?</strong></p>
            <label><input type="radio" name="q42" value="A"> A for loop used in async code</label><br>
            <label><input type="radio" name="q42" value="B"> The mechanism that processes the callback queue and the call stack</label><br>
            <label><input type="radio" name="q42" value="C"> A repeating timer</label><br>
            <label><input type="radio" name="q42" value="D"> The DOM event system</label><br><br>
            <p><strong>43. What does the <code>async</code> keyword before a function do?</strong></p>
            <label><input type="radio" name="q43" value="A"> Makes it execute faster</label><br>
            <label><input type="radio" name="q43" value="B"> Causes it to always return a Promise</label><br>
            <label><input type="radio" name="q43" value="C"> Makes it synchronous</label><br>
            <label><input type="radio" name="q43" value="D"> Adds automatic error handling</label><br>
            <p class="mt-3">
                <strong>44. What does <code>typeof fn()</code> return for an async function?</strong><br>
                <code>async function fn(){ return 42; }<br>
                console.log(typeof fn());</code>
            </p>
            <label><input type="radio" name="q44" value="A"> "number"</label><br>
            <label><input type="radio" name="q44" value="B"> "async"</label><br>
            <label><input type="radio" name="q44" value="C"> "undefined"</label><br>
            <label><input type="radio" name="q44" value="D"> "object"</label><br><br>
            <p><strong>45. What does <code>await</code> do inside an async function?</strong></p>
            <label><input type="radio" name="q45" value="A"> Delays all code on the page</label><br>
            <label><input type="radio" name="q45" value="B"> Pauses the async function until the awaited Promise settles</label><br>
            <label><input type="radio" name="q45" value="C"> Cancels the Promise</label><br>
            <label><input type="radio" name="q45" value="D"> Creates a timeout</label><br>
            <p class="mt-3">
                <strong>46. What is the output?</strong><br>
                <code>async function fn(){<br>
                  const v = await Promise.resolve(5);<br>
                  console.log(v);<br>
                }<br>
                fn();</code>
            </p>
            <label><input type="radio" name="q46" value="A"> Promise</label><br>
            <label><input type="radio" name="q46" value="B"> undefined</label><br>
            <label><input type="radio" name="q46" value="C"> error</label><br>
            <label><input type="radio" name="q46" value="D"> 5</label><br><br>
            <p><strong>47. Which is NOT a valid Promise state?</strong></p>
            <label><input type="radio" name="q47" value="A"> pending</label><br>
            <label><input type="radio" name="q47" value="B"> fulfilled</label><br>
            <label><input type="radio" name="q47" value="C"> processing</label><br>
            <label><input type="radio" name="q47" value="D"> rejected</label><br>
            <p class="mt-3"><strong>48. What does <code>Promise.all([])</code> (empty array) resolve with?</strong></p>
            <label><input type="radio" name="q48" value="A"> undefined</label><br>
            <label><input type="radio" name="q48" value="B"> null</label><br>
            <label><input type="radio" name="q48" value="C"> []</label><br>
            <label><input type="radio" name="q48" value="D"> error</label><br><br>
            <p><strong>49. What does <code>try/catch</code> do around <code>await</code> in an async function?</strong></p>
            <label><input type="radio" name="q49" value="A"> Nothing special</label><br>
            <label><input type="radio" name="q49" value="B"> Catches rejected Promises as if they were thrown errors</label><br>
            <label><input type="radio" name="q49" value="C"> Wraps synchronous errors only</label><br>
            <label><input type="radio" name="q49" value="D"> Prevents Promise creation</label><br>
            <p class="mt-3">
                <strong>50. What is the output?</strong><br>
                <code>async function fn(){ throw new Error("oops"); }<br>
                fn().catch(e =&gt; console.log(e.message));</code>
            </p>
            <label><input type="radio" name="q50" value="A"> throws globally</label><br>
            <label><input type="radio" name="q50" value="B"> "oops"</label><br>
            <label><input type="radio" name="q50" value="C"> undefined</label><br>
            <label><input type="radio" name="q50" value="D"> error</label><br>
`,
  'async-intermediate': `
<h4 class="mb-4 py-4 text-success">Async JS - Intermediate</h4>

            <p class="mt-3"><strong>1. What will this output?</strong><br>
                <code>console.log("Start"); setTimeout(() => console.log("A"), 0); Promise.resolve().then(() => console.log("B")); console.log("End");</code>
            </p>
            <label><input type="radio" name="q1" value="A"> Start End A B</label><br>
            <label><input type="radio" name="q1" value="B"> Start End B A</label><br>
            <label><input type="radio" name="q1" value="C"> A B Start End</label><br>
            <label><input type="radio" name="q1" value="D"> End Start B A</label><br><br>

            <p><strong>2. What is the key difference between microtasks and macrotasks?</strong></p>
            <label><input type="radio" name="q2" value="A"> Microtasks run after macrotasks</label><br>
            <label><input type="radio" name="q2" value="B"> Microtasks have higher priority in event loop</label><br>
            <label><input type="radio" name="q2" value="C"> They are the same</label><br>
            <label><input type="radio" name="q2" value="D"> Macrotasks run faster always</label><br>

            <p class="mt-3"><strong>3. What will this output?</strong><br>
                <code>setTimeout(() => console.log("1"), 0); Promise.resolve().then(() => console.log("2")); console.log("3");</code>
            </p>
            <label><input type="radio" name="q3" value="A"> 1 2 3</label><br>
            <label><input type="radio" name="q3" value="B"> 3 2 1</label><br>
            <label><input type="radio" name="q3" value="C"> 2 3 1</label><br>
            <label><input type="radio" name="q3" value="D"> 3 1 2</label><br><br>

            <p><strong>4. What is Promise in JavaScript?</strong></p>
            <label><input type="radio" name="q4" value="A"> Synchronous function</label><br>
            <label><input type="radio" name="q4" value="B"> Object representing future completion or failure</label><br>
            <label><input type="radio" name="q4" value="C"> Loop structure</label><br>
            <label><input type="radio" name="q4" value="D"> DOM element</label><br>

            <p class="mt-3"><strong>5. What will this output?</strong><br>
                <code>Promise.resolve("A").then(console.log); console.log("B");</code>
            </p>
            <label><input type="radio" name="q5" value="A"> A B</label><br>
            <label><input type="radio" name="q5" value="B"> B A</label><br>
            <label><input type="radio" name="q5" value="C"> A only</label><br>
            <label><input type="radio" name="q5" value="D"> B only</label><br><br>

            <p><strong>6. Why do Promises use .then()?</strong></p>
            <label><input type="radio" name="q6" value="A"> To block execution</label><br>
            <label><input type="radio" name="q6" value="B"> To handle async result when ready</label><br>
            <label><input type="radio" name="q6" value="C"> To loop arrays</label><br>
            <label><input type="radio" name="q6" value="D"> To style code</label><br>

            <p class="mt-3"><strong>7. What will this output?</strong><br>
                <code>Promise.resolve().then(() => console.log("X")); setTimeout(() => console.log("Y"), 0); console.log("Z");</code>
            </p>
            <label><input type="radio" name="q7" value="A"> Z X Y</label><br>
            <label><input type="radio" name="q7" value="B"> Z Y X</label><br>
            <label><input type="radio" name="q7" value="C"> X Z Y</label><br>
            <label><input type="radio" name="q7" value="D"> Y X Z</label><br><br>

            <p><strong>8. What is event loop responsible for?</strong></p>
            <label><input type="radio" name="q8" value="A"> Styling UI</label><br>
            <label><input type="radio" name="q8" value="B"> Managing execution of async callbacks</label><br>
            <label><input type="radio" name="q8" value="C"> Compiling JavaScript</label><br>
            <label><input type="radio" name="q8" value="D"> Rendering HTML only</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>console.log("A"); setTimeout(()=>console.log("B"),0); Promise.resolve().then(()=>console.log("C")); console.log("D");</code>
            </p>
            <label><input type="radio" name="q9" value="A"> A D C B</label><br>
            <label><input type="radio" name="q9" value="B"> A D B C</label><br>
            <label><input type="radio" name="q9" value="C"> C A D B</label><br>
            <label><input type="radio" name="q9" value="D"> D A B C</label><br><br>

            <p><strong>10. What is async/await built on?</strong></p>
            <label><input type="radio" name="q10" value="A"> Callbacks</label><br>
            <label><input type="radio" name="q10" value="B"> Promises</label><br>
            <label><input type="radio" name="q10" value="C"> Loops</label><br>
            <label><input type="radio" name="q10" value="D"> DOM</label><br>

            <p class="mt-3"><strong>11. What will this output?</strong><br>
                <code>async function f(){ return 10; } f().then(console.log);</code>
            </p>
            <label><input type="radio" name="q11" value="A"> 10</label><br>
            <label><input type="radio" name="q11" value="B"> undefined</label><br>
            <label><input type="radio" name="q11" value="C"> Promise object</label><br>
            <label><input type="radio" name="q11" value="D"> error</label><br><br>

            <p><strong>12. What does async function always return?</strong></p>
            <label><input type="radio" name="q12" value="A"> Number</label><br>
            <label><input type="radio" name="q12" value="B"> Promise</label><br>
            <label><input type="radio" name="q12" value="C"> String</label><br>
            <label><input type="radio" name="q12" value="D"> Undefined</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>async function f(){ console.log(1); await null; console.log(2); } f(); console.log(3);</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 1 2 3</label><br>
            <label><input type="radio" name="q13" value="B"> 1 3 2</label><br>
            <label><input type="radio" name="q13" value="C"> 3 1 2</label><br>
            <label><input type="radio" name="q13" value="D"> 2 1 3</label><br><br>

            <p><strong>14. What does await do?</strong></p>
            <label><input type="radio" name="q14" value="A"> Stops entire program</label><br>
            <label><input type="radio" name="q14" value="B"> Waits for promise resolution inside async
                function</label><br>
            <label><input type="radio" name="q14" value="C"> Deletes promise</label><br>
            <label><input type="radio" name="q14" value="D"> Runs sync code</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>async function f(){ return "A"; } console.log(f());</code>
            </p>
            <label><input type="radio" name="q15" value="A"> A</label><br>
            <label><input type="radio" name="q15" value="B"> Promise</label><br>
            <label><input type="radio" name="q15" value="C"> undefined</label><br>
            <label><input type="radio" name="q15" value="D"> error</label><br><br>

            <p><strong>16. Why does async function return a Promise?</strong></p>
            <label><input type="radio" name="q16" value="A"> To block execution</label><br>
            <label><input type="radio" name="q16" value="B"> To allow chaining async results</label><br>
            <label><input type="radio" name="q16" value="C"> To remove callbacks</label><br>
            <label><input type="radio" name="q16" value="D"> To stop event loop</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>Promise.resolve(5).then(x => x * 2).then(console.log);</code>
            </p>
            <label><input type="radio" name="q17" value="A"> 5</label><br>
            <label><input type="radio" name="q17" value="B"> 10</label><br>
            <label><input type="radio" name="q17" value="C"> undefined</label><br>
            <label><input type="radio" name="q17" value="D"> error</label><br><br>

            <p><strong>18. What is promise chaining?</strong></p>
            <label><input type="radio" name="q18" value="A"> Using multiple loops</label><br>
            <label><input type="radio" name="q18" value="B"> Linking multiple .then() calls</label><br>
            <label><input type="radio" name="q18" value="C"> Nested arrays</label><br>
            <label><input type="radio" name="q18" value="D"> DOM chaining</label><br>

            <p class="mt-3"><strong>19. What will this output?</strong><br>
                <code>setTimeout(()=>console.log("A"),0); setTimeout(()=>console.log("B"),0);</code>
            </p>
            <label><input type="radio" name="q19" value="A"> B A</label><br>
            <label><input type="radio" name="q19" value="B"> A B</label><br>
            <label><input type="radio" name="q19" value="C"> A only</label><br>
            <label><input type="radio" name="q19" value="D"> B only</label><br><br>

            <p><strong>20. What is task queue?</strong></p>
            <label><input type="radio" name="q20" value="A"> Stores CSS tasks</label><br>
            <label><input type="radio" name="q20" value="B"> Holds async callbacks waiting execution</label><br>
            <label><input type="radio" name="q20" value="C"> Stores variables</label><br>
            <label><input type="radio" name="q20" value="D"> DOM storage</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>Promise.resolve().then(()=>console.log("1")); Promise.resolve().then(()=>console.log("2"));</code>
            </p>
            <label><input type="radio" name="q21" value="A"> 2 1</label><br>
            <label><input type="radio" name="q21" value="B"> 1 2</label><br>
            <label><input type="radio" name="q21" value="C"> random</label><br>
            <label><input type="radio" name="q21" value="D"> undefined</label><br><br>

            <p><strong>22. What is microtask queue priority?</strong></p>
            <label><input type="radio" name="q22" value="A"> Lower than macrotask</label><br>
            <label><input type="radio" name="q22" value="B"> Higher than macrotask</label><br>
            <label><input type="radio" name="q22" value="C"> Same priority</label><br>
            <label><input type="radio" name="q22" value="D"> Not part of event loop</label><br>

            <p class="mt-3"><strong>23. What will this output?</strong><br>
                <code>async function f(){ return await 5; } f().then(console.log);</code>
            </p>
            <label><input type="radio" name="q23" value="A"> 5</label><br>
            <label><input type="radio" name="q23" value="B"> Promise</label><br>
            <label><input type="radio" name="q23" value="C"> undefined</label><br>
            <label><input type="radio" name="q23" value="D"> error</label><br><br>

            <p><strong>24. What is benefit of async/await over promises?</strong></p>
            <label><input type="radio" name="q24" value="A"> More complex code</label><br>
            <label><input type="radio" name="q24" value="B"> Cleaner synchronous-like code</label><br>
            <label><input type="radio" name="q24" value="C"> Slower execution</label><br>
            <label><input type="radio" name="q24" value="D"> No benefit</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>console.log("A"); Promise.resolve().then(()=>console.log("B")); setTimeout(()=>console.log("C"),0);</code>
            </p>
            <label><input type="radio" name="q25" value="A"> A B C</label><br>
            <label><input type="radio" name="q25" value="B"> A C B</label><br>
            <label><input type="radio" name="q25" value="C"> B A C</label><br>
            <label><input type="radio" name="q25" value="D"> C B A</label><br><br>

            <p><strong>26. What is execution order priority?</strong></p>
            <label><input type="radio" name="q26" value="A"> Macrotask first</label><br>
            <label><input type="radio" name="q26" value="B"> Microtask first</label><br>
            <label><input type="radio" name="q26" value="C"> Random</label><br>
            <label><input type="radio" name="q26" value="D"> DOM first</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>Promise.resolve().then(()=>console.log("A")).then(()=>console.log("B"));</code>
            </p>
            <label><input type="radio" name="q27" value="A"> B A</label><br>
            <label><input type="radio" name="q27" value="B"> A B</label><br>
            <label><input type="radio" name="q27" value="C"> A only</label><br>
            <label><input type="radio" name="q27" value="D"> B only</label><br><br>

            <p><strong>28. What is async debugging challenge?</strong></p>
            <label><input type="radio" name="q28" value="A"> Understanding execution order</label><br>
            <label><input type="radio" name="q28" value="B"> Writing CSS</label><br>
            <label><input type="radio" name="q28" value="C"> HTML layout</label><br>
            <label><input type="radio" name="q28" value="D"> DOM removal</label><br>

            <p class="mt-3"><strong>29. What will this output?</strong><br>
                <code>setTimeout(()=>console.log("A"),10); setTimeout(()=>console.log("B"),5);</code>
            </p>
            <label><input type="radio" name="q29" value="A"> A B</label><br>
            <label><input type="radio" name="q29" value="B"> B A</label><br>
            <label><input type="radio" name="q29" value="C"> random</label><br>
            <label><input type="radio" name="q29" value="D"> A only</label><br><br>

            <p><strong>30. What is core idea of JavaScript async model?</strong></p>
            <label><input type="radio" name="q30" value="A"> Multi-thread blocking</label><br>
            <label><input type="radio" name="q30" value="B"> Single-thread non-blocking event-driven system</label><br>
            <label><input type="radio" name="q30" value="C"> Synchronous only execution</label><br>
            <label><input type="radio" name="q30" value="D"> CSS driven execution</label><br><br>

        
            <p>
                <strong>31. What is the output?</strong><br>
                <code>Promise.resolve(1)<br>
                  .then(v =&gt; v + 1)<br>
                  .then(v =&gt; console.log(v));</code>
            </p>
            <label><input type="radio" name="q31" value="A"> Promise</label><br>
            <label><input type="radio" name="q31" value="B"> 1</label><br>
            <label><input type="radio" name="q31" value="C"> 3</label><br>
            <label><input type="radio" name="q31" value="D"> 2</label><br>
            <p class="mt-3"><strong>32. What does <code>Promise.race([p1, p2])</code> resolve/reject with?</strong></p>
            <label><input type="radio" name="q32" value="A"> All results combined</label><br>
            <label><input type="radio" name="q32" value="B"> Rejects immediately always</label><br>
            <label><input type="radio" name="q32" value="C"> Whichever Promise settles first</label><br>
            <label><input type="radio" name="q32" value="D"> The fastest resolved value only</label><br><br>
            <p><strong>33. What is <code>async/await</code> syntactic sugar for?</strong></p>
            <label><input type="radio" name="q33" value="A"> setTimeout chains</label><br>
            <label><input type="radio" name="q33" value="B"> Generators combined with Promises</label><br>
            <label><input type="radio" name="q33" value="C"> Nested callbacks</label><br>
            <label><input type="radio" name="q33" value="D"> DOM event listeners</label><br>
            <p class="mt-3"><strong>34. What happens if you <code>await</code> a non-Promise value?</strong></p>
            <label><input type="radio" name="q34" value="A"> Throws an error</label><br>
            <label><input type="radio" name="q34" value="B"> Blocks forever</label><br>
            <label><input type="radio" name="q34" value="C"> It is treated as a resolved Promise wrapping that value</label><br>
            <label><input type="radio" name="q34" value="D"> Returns undefined</label><br><br>
            <p>
                <strong>35. What does this async function return?</strong><br>
                <code>const delay = ms =&gt; new Promise(r =&gt; setTimeout(r, ms));<br>
                async function fn(){ await delay(100); return 42; }</code>
            </p>
            <label><input type="radio" name="q35" value="A"> 42</label><br>
            <label><input type="radio" name="q35" value="B"> A Promise that resolves to 42</label><br>
            <label><input type="radio" name="q35" value="C"> undefined</label><br>
            <label><input type="radio" name="q35" value="D"> error</label><br>
            <p class="mt-3"><strong>36. What does <code>Promise.allSettled()</code> return?</strong></p>
            <label><input type="radio" name="q36" value="A"> Rejects if any Promise rejects</label><br>
            <label><input type="radio" name="q36" value="B"> An array of all results whether fulfilled or rejected</label><br>
            <label><input type="radio" name="q36" value="C"> Only the first settled result</label><br>
            <label><input type="radio" name="q36" value="D"> Ignores rejections silently</label><br><br>
            <p>
                <strong>37. What is the output?</strong><br>
                <code>async function fn(){<br>
                  return await Promise.reject("fail");<br>
                }<br>
                fn().catch(e =&gt; console.log(e));</code>
            </p>
            <label><input type="radio" name="q37" value="A"> undefined</label><br>
            <label><input type="radio" name="q37" value="B"> error</label><br>
            <label><input type="radio" name="q37" value="C"> "fail"</label><br>
            <label><input type="radio" name="q37" value="D"> Promise</label><br>
            <p class="mt-3"><strong>38. What is the priority of the <em>microtask queue</em> vs the <em>macrotask queue</em>?</strong></p>
            <label><input type="radio" name="q38" value="A"> Same priority</label><br>
            <label><input type="radio" name="q38" value="B"> Microtasks run after macrotasks</label><br>
            <label><input type="radio" name="q38" value="C"> Macrotasks always run first</label><br>
            <label><input type="radio" name="q38" value="D"> Microtasks run before macrotasks</label><br><br>
            <p>
                <strong>39. What order does this log?</strong><br>
                <code>console.log(1);<br>
                Promise.resolve().then(() =&gt; console.log(2));<br>
                console.log(3);</code>
            </p>
            <label><input type="radio" name="q39" value="A"> 1, 2, 3</label><br>
            <label><input type="radio" name="q39" value="B"> 2, 1, 3</label><br>
            <label><input type="radio" name="q39" value="C"> 1, 3, 2</label><br>
            <label><input type="radio" name="q39" value="D"> 3, 1, 2</label><br>
            <p class="mt-3"><strong>40. What does <code>Promise.any([p1,p2,p3])</code> resolve with?</strong></p>
            <label><input type="radio" name="q40" value="A"> All results</label><br>
            <label><input type="radio" name="q40" value="B"> The first fulfilled Promise</label><br>
            <label><input type="radio" name="q40" value="C"> The first settled Promise</label><br>
            <label><input type="radio" name="q40" value="D"> undefined</label><br><br>
            <p>
                <strong>41. What is the output?</strong><br>
                <code>async function fn(){<br>
                  let result = 0;<br>
                  for(let i=0;i&lt;3;i++) result += await Promise.resolve(i);<br>
                  return result;<br>
                }<br>
                fn().then(console.log);</code>
            </p>
            <label><input type="radio" name="q41" value="A"> 3</label><br>
            <label><input type="radio" name="q41" value="B"> 0</label><br>
            <label><input type="radio" name="q41" value="C"> error</label><br>
            <label><input type="radio" name="q41" value="D"> 6</label><br>
            <p class="mt-3"><strong>42. What does <code>AbortController</code> enable?</strong></p>
            <label><input type="radio" name="q42" value="A"> Automatic retry logic</label><br>
            <label><input type="radio" name="q42" value="B"> Cancelling async operations like fetch</label><br>
            <label><input type="radio" name="q42" value="C"> Error handling for Promises</label><br>
            <label><input type="radio" name="q42" value="D"> Batching network requests</label><br><br>
            <p><strong>43. What does <code>response.json()</code> return inside a <code>fetch</code> chain?</strong></p>
            <label><input type="radio" name="q43" value="A"> A JSON string</label><br>
            <label><input type="radio" name="q43" value="B"> A parsed object directly</label><br>
            <label><input type="radio" name="q43" value="C"> A Promise resolving to the parsed JSON</label><br>
            <label><input type="radio" name="q43" value="D"> undefined</label><br>
            <p class="mt-3"><strong>44. What does <code>Promise.withResolvers()</code> return?</strong></p>
            <label><input type="radio" name="q44" value="A"> A resolved Promise</label><br>
            <label><input type="radio" name="q44" value="B"> An object with { promise, resolve, reject }</label><br>
            <label><input type="radio" name="q44" value="C"> A callback wrapper</label><br>
            <label><input type="radio" name="q44" value="D"> A cancelled Promise</label><br><br>
            <p><strong>45. What does <code>for await...of</code> iterate over?</strong></p>
            <label><input type="radio" name="q45" value="A"> Regular arrays only</label><br>
            <label><input type="radio" name="q45" value="B"> Async iterables</label><br>
            <label><input type="radio" name="q45" value="C"> Plain objects</label><br>
            <label><input type="radio" name="q45" value="D"> Generator functions only</label><br>
            <p class="mt-3"><strong>46. Which approach correctly handles errors in async/await?</strong></p>
            <label><input type="radio" name="q46" value="A"> try/catch around await</label><br>
            <label><input type="radio" name="q46" value="B"> .finally() only</label><br>
            <label><input type="radio" name="q46" value="C"> console.error() calls</label><br>
            <label><input type="radio" name="q46" value="D"> Promise.reject()</label><br><br>
            <p>
                <strong>47. What is the output?</strong><br>
                <code>async function fn(){<br>
                  const [a,b] = await Promise.all([Promise.resolve(1), Promise.resolve(2)]);<br>
                  console.log(a, b);<br>
                }<br>
                fn();</code>
            </p>
            <label><input type="radio" name="q47" value="A"> error</label><br>
            <label><input type="radio" name="q47" value="B"> [1,2]</label><br>
            <label><input type="radio" name="q47" value="C"> 1 2</label><br>
            <label><input type="radio" name="q47" value="D"> undefined</label><br>
            <p class="mt-3"><strong>48. What does <code>queueMicrotask(fn)</code> do?</strong></p>
            <label><input type="radio" name="q48" value="A"> Adds fn to the macrotask queue</label><br>
            <label><input type="radio" name="q48" value="B"> Runs fn immediately synchronously</label><br>
            <label><input type="radio" name="q48" value="C"> Schedules fn as a microtask</label><br>
            <label><input type="radio" name="q48" value="D"> Runs fn in the next event loop tick (macrotask)</label><br><br>
            <p>
                <strong>49. What is the output?</strong><br>
                <code>async function* gen(){ yield 1; yield 2; }<br>
                const g = gen();<br>
                (async()=&gt;{ console.log((await g.next()).value); })();</code>
            </p>
            <label><input type="radio" name="q49" value="A"> 2</label><br>
            <label><input type="radio" name="q49" value="B"> undefined</label><br>
            <label><input type="radio" name="q49" value="C"> error</label><br>
            <label><input type="radio" name="q49" value="D"> 1</label><br>
            <p class="mt-3"><strong>50. What is the <code>Temporal</code> API designed to replace?</strong></p>
            <label><input type="radio" name="q50" value="A"> Promise</label><br>
            <label><input type="radio" name="q50" value="B"> setTimeout</label><br>
            <label><input type="radio" name="q50" value="C"> Date</label><br>
            <label><input type="radio" name="q50" value="D"> fetch</label><br>
`,
  'async-advanced': `
<h4 class="mb-4 py-4 text-success">Async JS - Advanced</h4>

            <p class="mt-3"><strong>1. What will this output?</strong><br>
                <code>console.log("A"); setTimeout(() => console.log("B"), 0); Promise.resolve().then(() => console.log("C")).then(() => console.log("D")); console.log("E");</code>
            </p>
            <label><input type="radio" name="q1" value="A"> A E C D B</label><br>
            <label><input type="radio" name="q1" value="B"> A E B C D</label><br>
            <label><input type="radio" name="q1" value="C"> C D A E B</label><br>
            <label><input type="radio" name="q1" value="D"> A C E B D</label><br><br>

            <p><strong>2. Why do microtasks execute before macrotasks?</strong></p>
            <label><input type="radio" name="q2" value="A"> Because they are lower priority</label><br>
            <label><input type="radio" name="q2" value="B"> Because event loop clears microtask queue before
                rendering</label><br>
            <label><input type="radio" name="q2" value="C"> Because they are synchronous</label><br>
            <label><input type="radio" name="q2" value="D"> Because browser ignores macrotasks</label><br>

            <p class="mt-3"><strong>3. What will this output?</strong><br>
                <code>setTimeout(() => console.log("1"), 0); Promise.resolve().then(() => console.log("2")); queueMicrotask(() => console.log("3")); console.log("4");</code>
            </p>
            <label><input type="radio" name="q3" value="A"> 4 2 3 1</label><br>
            <label><input type="radio" name="q3" value="B"> 4 3 2 1</label><br>
            <label><input type="radio" name="q3" value="C"> 1 2 3 4</label><br>
            <label><input type="radio" name="q3" value="D"> 2 3 4 1</label><br><br>

            <p><strong>4. What is queueMicrotask used for?</strong></p>
            <label><input type="radio" name="q4" value="A"> Scheduling macrotasks</label><br>
            <label><input type="radio" name="q4" value="B"> Adding tasks to microtask queue</label><br>
            <label><input type="radio" name="q4" value="C"> Blocking event loop</label><br>
            <label><input type="radio" name="q4" value="D"> Rendering DOM</label><br>

            <p class="mt-3"><strong>5. What will this output?</strong><br>
                <code>Promise.resolve().then(() => { console.log("A"); return Promise.resolve("B"); }).then(console.log);</code>
            </p>
            <label><input type="radio" name="q5" value="A"> A B</label><br>
            <label><input type="radio" name="q5" value="B"> B A</label><br>
            <label><input type="radio" name="q5" value="C"> A only</label><br>
            <label><input type="radio" name="q5" value="D"> undefined</label><br><br>

            <p><strong>6. What is promise resolution chaining behavior?</strong></p>
            <label><input type="radio" name="q6" value="A"> Promises execute in parallel only</label><br>
            <label><input type="radio" name="q6" value="B"> Each .then returns a new promise resolved after
                previous</label><br>
            <label><input type="radio" name="q6" value="C"> It blocks event loop</label><br>
            <label><input type="radio" name="q6" value="D"> It converts to callback</label><br>

            <p class="mt-3"><strong>7. What will this output?</strong><br>
                <code>async function f(){ console.log("A"); await Promise.resolve(); console.log("B"); } f(); console.log("C");</code>
            </p>
            <label><input type="radio" name="q7" value="A"> A B C</label><br>
            <label><input type="radio" name="q7" value="B"> A C B</label><br>
            <label><input type="radio" name="q7" value="C"> C A B</label><br>
            <label><input type="radio" name="q7" value="D"> B A C</label><br><br>

            <p><strong>8. What does await actually pause?</strong></p>
            <label><input type="radio" name="q8" value="A"> Entire JavaScript engine</label><br>
            <label><input type="radio" name="q8" value="B"> Only async function execution</label><br>
            <label><input type="radio" name="q8" value="C"> Browser rendering</label><br>
            <label><input type="radio" name="q8" value="D"> Event loop completely</label><br>

            <p class="mt-3"><strong>9. What will this output?</strong><br>
                <code>console.log("Start"); setTimeout(() => console.log("T1"), 0); Promise.resolve().then(() => console.log("P1")); setTimeout(() => console.log("T2"), 0); Promise.resolve().then(() => console.log("P2")); console.log("End");</code>
            </p>
            <label><input type="radio" name="q9" value="A"> Start End P1 P2 T1 T2</label><br>
            <label><input type="radio" name="q9" value="B"> Start End T1 T2 P1 P2</label><br>
            <label><input type="radio" name="q9" value="C"> P1 P2 Start End T1 T2</label><br>
            <label><input type="radio" name="q9" value="D"> End Start P1 T1 P2 T2</label><br><br>

            <p><strong>10. What is starvation in event loop context?</strong></p>
            <label><input type="radio" name="q10" value="A"> Macrotasks never run due to microtasks</label><br>
            <label><input type="radio" name="q10" value="B"> CPU overheating</label><br>
            <label><input type="radio" name="q10" value="C"> Memory leak only</label><br>
            <label><input type="radio" name="q10" value="D"> DOM freeze only</label><br>

            <p class="mt-3"><strong>11. What will this output?</strong><br>
                <code>Promise.resolve().then(() => Promise.resolve().then(() => console.log("X")));</code>
            </p>
            <label><input type="radio" name="q11" value="A"> X</label><br>
            <label><input type="radio" name="q11" value="B"> undefined</label><br>
            <label><input type="radio" name="q11" value="C"> Promise object</label><br>
            <label><input type="radio" name="q11" value="D"> error</label><br><br>

            <p><strong>12. What is nested promise resolution called internally?</strong></p>
            <label><input type="radio" name="q12" value="A"> Promise flattening</label><br>
            <label><input type="radio" name="q12" value="B"> Promise microtask recursion</label><br>
            <label><input type="radio" name="q12" value="C"> Event bubbling</label><br>
            <label><input type="radio" name="q12" value="D"> Callback stacking</label><br>

            <p class="mt-3"><strong>13. What will this output?</strong><br>
                <code>async function f(){ return await Promise.resolve(10); } f().then(console.log);</code>
            </p>
            <label><input type="radio" name="q13" value="A"> 10</label><br>
            <label><input type="radio" name="q13" value="B"> Promise</label><br>
            <label><input type="radio" name="q13" value="C"> undefined</label><br>
            <label><input type="radio" name="q13" value="D"> error</label><br><br>

            <p><strong>14. Why is return await sometimes redundant?</strong></p>
            <label><input type="radio" name="q14" value="A"> It changes value</label><br>
            <label><input type="radio" name="q14" value="B"> It only wraps promise unnecessarily</label><br>
            <label><input type="radio" name="q14" value="C"> It blocks event loop</label><br>
            <label><input type="radio" name="q14" value="D"> It prevents async</label><br>

            <p class="mt-3"><strong>15. What will this output?</strong><br>
                <code>setTimeout(() => console.log("A"), 0); Promise.resolve().then(() => console.log("B")); console.log("C");</code>
            </p>
            <label><input type="radio" name="q15" value="A"> C B A</label><br>
            <label><input type="radio" name="q15" value="B"> C A B</label><br>
            <label><input type="radio" name="q15" value="C"> B C A</label><br>
            <label><input type="radio" name="q15" value="D"> A B C</label><br><br>

            <p><strong>16. What is job queue vs callback queue difference?</strong></p>
            <label><input type="radio" name="q16" value="A"> Same queue</label><br>
            <label><input type="radio" name="q16" value="B"> Job queue is microtasks, callback queue is
                macrotasks</label><br>
            <label><input type="radio" name="q16" value="C"> Both are DOM queues</label><br>
            <label><input type="radio" name="q16" value="D"> Only browser uses job queue</label><br>

            <p class="mt-3"><strong>17. What will this output?</strong><br>
                <code>Promise.resolve().then(() => console.log("1")).then(() => console.log("2")).then(() => console.log("3"));</code>
            </p>
            <label><input type="radio" name="q17" value="A"> 3 2 1</label><br>
            <label><input type="radio" name="q17" value="B"> 1 2 3</label><br>
            <label><input type="radio" name="q17" value="C"> 2 1 3</label><br>
            <label><input type="radio" name="q17" value="D"> random</label><br><br>

            <p><strong>18. What is async control flow complexity problem?</strong></p>
            <label><input type="radio" name="q18" value="A"> Faster execution</label><br>
            <label><input type="radio" name="q18" value="B"> Hard-to-read nested async logic chains</label><br>
            <label><input type="radio" name="q18" value="C"> DOM errors only</label><br>
            <label><input type="radio" name="q18" value="D"> CSS conflicts</label><br>

            <p class="mt-3"><strong>19. What will this output?</strong><br>
                <code>console.log("A"); setTimeout(()=>console.log("B"),0); Promise.resolve().then(()=>console.log("C")).then(()=>console.log("D")); console.log("E");</code>
            </p>
            <label><input type="radio" name="q19" value="A"> A E C D B</label><br>
            <label><input type="radio" name="q19" value="B"> A E B C D</label><br>
            <label><input type="radio" name="q19" value="C"> C D E A B</label><br>
            <label><input type="radio" name="q19" value="D"> E A B C D</label><br><br>

            <p><strong>20. What is promise microtask recursion risk?</strong></p>
            <label><input type="radio" name="q20" value="A"> Infinite loop blocking macrotasks</label><br>
            <label><input type="radio" name="q20" value="B"> Faster rendering</label><br>
            <label><input type="radio" name="q20" value="C"> Memory optimization</label><br>
            <label><input type="radio" name="q20" value="D"> DOM repaint issue only</label><br>

            <p class="mt-3"><strong>21. What will this output?</strong><br>
                <code>async function f(){ await Promise.resolve(); console.log("A"); await Promise.resolve(); console.log("B"); } f(); console.log("C");</code>
            </p>
            <label><input type="radio" name="q21" value="A"> C A B</label><br>
            <label><input type="radio" name="q21" value="B"> A B C</label><br>
            <label><input type="radio" name="q21" value="C"> C B A</label><br>
            <label><input type="radio" name="q21" value="D"> B A C</label><br><br>

            <p><strong>22. What is concurrency in JavaScript?</strong></p>
            <label><input type="radio" name="q22" value="A"> Multi-thread execution</label><br>
            <label><input type="radio" name="q22" value="B"> Handling multiple tasks via event loop</label><br>
            <label><input type="radio" name="q22" value="C"> Blocking execution</label><br>
            <label><input type="radio" name="q22" value="D"> Parallel CPU threads always</label><br>

            <p class="mt-3"><strong>23. What will this output?</strong><br>
                <code>setTimeout(()=>console.log("A"),0); queueMicrotask(()=>console.log("B")); console.log("C");</code>
            </p>
            <label><input type="radio" name="q23" value="A"> C B A</label><br>
            <label><input type="radio" name="q23" value="B"> B C A</label><br>
            <label><input type="radio" name="q23" value="C"> A B C</label><br>
            <label><input type="radio" name="q23" value="D"> C A B</label><br><br>

            <p><strong>24. What is starvation prevention strategy?</strong></p>
            <label><input type="radio" name="q24" value="A"> Blocking microtasks</label><br>
            <label><input type="radio" name="q24" value="B"> Allowing macrotasks between microtask cycles</label><br>
            <label><input type="radio" name="q24" value="C"> Removing event loop</label><br>
            <label><input type="radio" name="q24" value="D"> Increasing DOM size</label><br>

            <p class="mt-3"><strong>25. What will this output?</strong><br>
                <code>Promise.resolve().then(()=>{ console.log("A"); setTimeout(()=>console.log("B"),0); });</code>
            </p>
            <label><input type="radio" name="q25" value="A"> A B</label><br>
            <label><input type="radio" name="q25" value="B"> B A</label><br>
            <label><input type="radio" name="q25" value="C"> A only</label><br>
            <label><input type="radio" name="q25" value="D"> B only</label><br><br>

            <p><strong>26. What is async debugging hardest part?</strong></p>
            <label><input type="radio" name="q26" value="A"> CSS styling</label><br>
            <label><input type="radio" name="q26" value="B"> Non-linear execution order</label><br>
            <label><input type="radio" name="q26" value="C"> HTML structure</label><br>
            <label><input type="radio" name="q26" value="D"> DOM selection</label><br>

            <p class="mt-3"><strong>27. What will this output?</strong><br>
                <code>Promise.resolve().then(()=>Promise.resolve().then(()=>console.log("A"))); console.log("B");</code>
            </p>
            <label><input type="radio" name="q27" value="A"> B A</label><br>
            <label><input type="radio" name="q27" value="B"> A B</label><br>
            <label><input type="radio" name="q27" value="C"> B only</label><br>
            <label><input type="radio" name="q27" value="D"> A only</label><br><br>

            <p><strong>28. What is flattening promise chain result called?</strong></p>
            <label><input type="radio" name="q28" value="A"> Promise unwrapping</label><br>
            <label><input type="radio" name="q28" value="B"> Promise resolution flattening</label><br>
            <label><input type="radio" name="q28" value="C"> DOM flattening</label><br>
            <label><input type="radio" name="q28" value="D"> Event flattening</label><br>

            <p class="mt-3"><strong>29. What will this output?</strong><br>
                <code>setTimeout(()=>console.log("A"),0); setTimeout(()=>console.log("B"),0); Promise.resolve().then(()=>console.log("C"));</code>
            </p>
            <label><input type="radio" name="q29" value="A"> C A B</label><br>
            <label><input type="radio" name="q29" value="B"> A B C</label><br>
            <label><input type="radio" name="q29" value="C"> B C A</label><br>
            <label><input type="radio" name="q29" value="D"> C B A</label><br><br>

            <p><strong>30. What best describes modern async JavaScript architecture?</strong></p>
            <label><input type="radio" name="q30" value="A"> Blocking synchronous pipeline</label><br>
            <label><input type="radio" name="q30" value="B"> Event-driven single-threaded concurrency model with
                microtask/macrotask scheduling</label><br>
            <label><input type="radio" name="q30" value="C"> Multi-thread CPU execution model</label><br>
            <label><input type="radio" name="q30" value="D"> DOM-only execution system</label><br><br>

        
            <p><strong>31. What pattern is <code>Promise.race</code> commonly used for?</strong></p>
            <label><input type="radio" name="q31" value="A"> Batch processing</label><br>
            <label><input type="radio" name="q31" value="B"> Implementing a timeout — whichever Promise settles first wins</label><br>
            <label><input type="radio" name="q31" value="C"> Error recovery</label><br>
            <label><input type="radio" name="q31" value="D"> Sequential execution</label><br>
            <p class="mt-3"><strong>32. What happens to a rejected Promise that is never caught?</strong></p>
            <label><input type="radio" name="q32" value="A"> Silently fails</label><br>
            <label><input type="radio" name="q32" value="B"> Crashes the browser immediately</label><br>
            <label><input type="radio" name="q32" value="C"> Triggers the unhandledRejection event</label><br>
            <label><input type="radio" name="q32" value="D"> Auto-retries once</label><br><br>
            <p>
                <strong>33. What order does this code log?</strong><br>
                <code>async function fn(){<br>
                  console.log(1);<br>
                  await null;<br>
                  console.log(2);<br>
                }<br>
                fn();<br>
                console.log(3);</code>
            </p>
            <label><input type="radio" name="q33" value="A"> 1, 2, 3</label><br>
            <label><input type="radio" name="q33" value="B"> 3, 1, 2</label><br>
            <label><input type="radio" name="q33" value="C"> 1, 3, 2</label><br>
            <label><input type="radio" name="q33" value="D"> 2, 1, 3</label><br>
            <p class="mt-3"><strong>34. What is a common Promise <em>anti-pattern</em>?</strong></p>
            <label><input type="radio" name="q34" value="A"> Chaining .then() calls</label><br>
            <label><input type="radio" name="q34" value="B"> Nesting .then() inside another .then() (Promise nesting)</label><br>
            <label><input type="radio" name="q34" value="C"> Using .catch()</label><br>
            <label><input type="radio" name="q34" value="D"> Using async/await</label><br><br>
            <p>
                <strong>35. What does <code>console.log(p)</code> show for a pending Promise?</strong><br>
                <code>const p = new Promise(() => {});<br>
                console.log(p);</code>
            </p>
            <label><input type="radio" name="q35" value="A"> undefined</label><br>
            <label><input type="radio" name="q35" value="B"> resolved</label><br>
            <label><input type="radio" name="q35" value="C"> rejected</label><br>
            <label><input type="radio" name="q35" value="D"> Promise {&lt;pending&gt;}</label><br>
            <p class="mt-3"><strong>36. What does an <code>async function</code> return when it throws?</strong></p>
            <label><input type="radio" name="q36" value="A"> undefined</label><br>
            <label><input type="radio" name="q36" value="B"> The error object itself</label><br>
            <label><input type="radio" name="q36" value="C"> A rejected Promise</label><br>
            <label><input type="radio" name="q36" value="D"> null</label><br><br>
            <p><strong>37. What is the advantage of <code>await Promise.all([...])</code> over sequential awaits?</strong></p>
            <label><input type="radio" name="q37" value="A"> No difference</label><br>
            <label><input type="radio" name="q37" value="B"> Promise.all runs the Promises concurrently</label><br>
            <label><input type="radio" name="q37" value="C"> Sequential awaits are faster</label><br>
            <label><input type="radio" name="q37" value="D"> Promise.all rejects all on any failure</label><br>
            <p class="mt-3">
                <strong>38. What is the output?</strong><br>
                <code>const fn = async () =&gt; {<br>
                  await new Promise(r =&gt; setTimeout(r, 0));<br>
                  return "done";<br>
                };<br>
                fn().then(console.log);</code>
            </p>
            <label><input type="radio" name="q38" value="A"> undefined</label><br>
            <label><input type="radio" name="q38" value="B"> "done"</label><br>
            <label><input type="radio" name="q38" value="C"> Promise</label><br>
            <label><input type="radio" name="q38" value="D"> error</label><br><br>
            <p><strong>39. What is a <em>thenable</em>?</strong></p>
            <label><input type="radio" name="q39" value="A"> An error with a .catch() method</label><br>
            <label><input type="radio" name="q39" value="B"> Any object with a .then() method</label><br>
            <label><input type="radio" name="q39" value="C"> A native Promise only</label><br>
            <label><input type="radio" name="q39" value="D"> A resolved value</label><br>
            <p class="mt-3">
                <strong>40. What order does this log?</strong><br>
                <code>Promise.resolve()<br>
                  .then(() =&gt; console.log("a"))<br>
                  .then(() =&gt; console.log("b"));</code>
            </p>
            <label><input type="radio" name="q40" value="A"> b then a</label><br>
            <label><input type="radio" name="q40" value="B"> a and b simultaneously</label><br>
            <label><input type="radio" name="q40" value="C"> a then b</label><br>
            <label><input type="radio" name="q40" value="D"> b then a</label><br><br>
            <p><strong>41. What does an <em>async generator</em> (<code>async function*</code>) produce?</strong></p>
            <label><input type="radio" name="q41" value="A"> Regular synchronous values</label><br>
            <label><input type="radio" name="q41" value="B"> Promises only</label><br>
            <label><input type="radio" name="q41" value="C"> Values consumable with for-await-of</label><br>
            <label><input type="radio" name="q41" value="D"> Only rejected Promises</label><br>
            <p class="mt-3"><strong>42. What is <em>backpressure</em> in async streams?</strong></p>
            <label><input type="radio" name="q42" value="A"> Network data compression</label><br>
            <label><input type="radio" name="q42" value="B"> Rate-limiting the producer to match the consumer's processing speed</label><br>
            <label><input type="radio" name="q42" value="C"> Error propagation through streams</label><br>
            <label><input type="radio" name="q42" value="D"> A memory overflow condition</label><br><br>
            <p>
                <strong>43. What happens in this code?</strong><br>
                <code>const fetchData = () =&gt; fetch("/api").then(r =&gt; r.json());<br>
                const [a,b] = await Promise.all([fetchData(), fetchData()]);</code>
            </p>
            <label><input type="radio" name="q43" value="A"> Sequential requests</label><br>
            <label><input type="radio" name="q43" value="B"> Two parallel fetch requests</label><br>
            <label><input type="radio" name="q43" value="C"> One fetch called twice sequentially</label><br>
            <label><input type="radio" name="q43" value="D"> error</label><br>
            <p class="mt-3"><strong>44. What is <em>cooperative scheduling</em> in JavaScript?</strong></p>
            <label><input type="radio" name="q44" value="A"> Using multiple OS threads</label><br>
            <label><input type="radio" name="q44" value="B"> Yielding control to other tasks via async operations or microtasks</label><br>
            <label><input type="radio" name="q44" value="C"> OS-level process scheduling</label><br>
            <label><input type="radio" name="q44" value="D"> Web Worker coordination</label><br><br>
            <p>
                <strong>45. What is the output?</strong><br>
                <code>async function fn(){<br>
                  try { await Promise.reject("err"); }<br>
                  catch(e) { return e; }<br>
                }<br>
                fn().then(console.log);</code>
            </p>
            <label><input type="radio" name="q45" value="A"> Promise</label><br>
            <label><input type="radio" name="q45" value="B"> undefined</label><br>
            <label><input type="radio" name="q45" value="C"> "err"</label><br>
            <label><input type="radio" name="q45" value="D"> error thrown</label><br>
            <p class="mt-3"><strong>46. What does <code>AbortSignal.timeout(ms)</code> return?</strong></p>
            <label><input type="radio" name="q46" value="A"> A timed-out AbortSignal</label><br>
            <label><input type="radio" name="q46" value="B"> A delayed fetch</label><br>
            <label><input type="radio" name="q46" value="C"> A timeout Promise</label><br>
            <label><input type="radio" name="q46" value="D"> A retry count setter</label><br><br>
            <p><strong>47. What happens when you <code>return</code> inside a <code>finally</code> block of an async function?</strong></p>
            <label><input type="radio" name="q47" value="A"> The original error is re-thrown</label><br>
            <label><input type="radio" name="q47" value="B"> The return value overrides the previous resolved/rejected value</label><br>
            <label><input type="radio" name="q47" value="C"> It has no effect</label><br>
            <label><input type="radio" name="q47" value="D"> Creates a new Promise</label><br>
            <p class="mt-3">
                <strong>48. What is the output?</strong><br>
                <code>async function fn(){ return Promise.resolve(1); }<br>
                fn().then(v =&gt; console.log(v));</code>
            </p>
            <label><input type="radio" name="q48" value="A"> Promise</label><br>
            <label><input type="radio" name="q48" value="B"> undefined</label><br>
            <label><input type="radio" name="q48" value="C"> error</label><br>
            <label><input type="radio" name="q48" value="D"> 1</label><br><br>
            <p><strong>49. What is <code>Promise.try(fn)</code> (TC39 Stage 3) for?</strong></p>
            <label><input type="radio" name="q49" value="A"> Replacing try/catch blocks</label><br>
            <label><input type="radio" name="q49" value="B"> Wrapping sync or async functions so errors always become rejected Promises</label><br>
            <label><input type="radio" name="q49" value="C"> Creating a Promise race</label><br>
            <label><input type="radio" name="q49" value="D"> Running a microtask</label><br>
            <p class="mt-3"><strong>50. What does <code>scheduler.postTask(fn, {priority:"user-blocking"})</code> do?</strong></p>
            <label><input type="radio" name="q50" value="A"> Blocks the UI thread</label><br>
            <label><input type="radio" name="q50" value="B"> Schedules a task with the specified priority via the Scheduler API</label><br>
            <label><input type="radio" name="q50" value="C"> Creates a prioritised setTimeout</label><br>
            <label><input type="radio" name="q50" value="D"> Sets event listener priority</label><br>
`
};

// Dynamically render the correct question set into #quizArea
function renderQuestions(category, level) {
  const key = `${category}-${level}`;
  const html = QUESTIONS[key];
  if (!html) return false;

  // Remove any previously rendered question-set
  const existing = quizArea.querySelector('.question-set');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = 'question-set';
  div.dataset.category = category;
  div.dataset.level = level;
  div.innerHTML = html;
  quizArea.appendChild(div);

  // Build question navigator after DOM is ready
  buildQuestionNavigator(div);

  return true;
}

// ─── Question Navigator ──────────────────────────────────────────────────────
function buildQuestionNavigator(questionSet) {
  const navigator = document.getElementById('questionNavigator');
  const navGrid = document.getElementById('navGrid');
  if (!navigator || !navGrid) return;

  navGrid.innerHTML = '';

  // Collect all unique radio group names (one per question)
  const radios = questionSet.querySelectorAll('input[type="radio"]');
  const groupNames = [];
  const seen = new Set();
  radios.forEach(r => {
    if (!seen.has(r.name)) {
      seen.add(r.name);
      groupNames.push(r.name);
    }
  });

  if (groupNames.length === 0) {
    navigator.classList.add('d-none');
    return;
  }

  // Create a numbered button for each question
  groupNames.forEach((name, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'nav-q-btn';
    btn.textContent = idx + 1;
    btn.dataset.qname = name;
    btn.title = `Jump to Question ${idx + 1}`;

    // Scroll to the question when clicked
    btn.addEventListener('click', () => {
      const firstRadio = questionSet.querySelector(`input[type="radio"][name="${name}"]`);
      if (firstRadio) {
        // Walk up to find the nearest <p> question label
        let node = firstRadio.closest('label');
        if (node) {
          let sibling = node.previousElementSibling;
          while (sibling && sibling.tagName !== 'P') sibling = sibling.previousElementSibling;
          const target = sibling || node;
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    navGrid.appendChild(btn);
  });

  // Show the navigator
  navigator.classList.remove('d-none');

  // Listen for any radio change to update navigator state
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      updateNavigatorBtn(radio.name);
    });
  });
}

function updateNavigatorBtn(groupName) {
  const navGrid = document.getElementById('navGrid');
  if (!navGrid) return;
  const btn = navGrid.querySelector(`.nav-q-btn[data-qname="${groupName}"]`);
  if (!btn) return;
  btn.classList.add('answered');
}

function resetNavigator() {
  const navigator = document.getElementById('questionNavigator');
  const navGrid = document.getElementById('navGrid');
  if (navigator) navigator.classList.add('d-none');
  if (navGrid) navGrid.innerHTML = '';
}
// ─── END Question Navigator ──────────────────────────────────────────────────


// ─── THEORY QUESTIONS DATA
const THEORY_QUESTIONS = {

  /* ── JS BASICS ── */
  'js-basics-beginner': [
  {
    q: "Build a student score calculator that stores scores in variables and calculates the average automatically.",
    hint: "Use variables to store scores and basic arithmetic operators for calculations."
  },
  {
    q: "Create a simple age checker that tells users whether they are allowed to register for a service.",
    hint: "Use if...else conditions to compare the user's age."
  },
  {
    q: "Build a mini shopping receipt generator that calculates total prices for multiple products.",
    hint: "Store product prices in variables and use addition operations."
  },
  {
    q: "Create a number guessing game where the computer generates a random number and the user guesses it.",
    hint: "Use Math.random(), conditionals, and loops."
  },
  {
    q: "Build a temperature converter between Celsius and Fahrenheit.",
    hint: "Use variables, arithmetic formulas, and user input values."
  },
  {
    q: "Create a login checker that validates username and password combinations.",
    hint: "Compare user input values with predefined credentials."
  },
  {
    q: "Build a multiplication table generator for any number entered by the user.",
    hint: "Use a for loop to repeatedly multiply values."
  },
  {
    q: "Create a traffic light simulator that changes messages based on selected colors.",
    hint: "Use switch statements or if...else conditions."
  },
  {
    q: "Build a simple grading system that assigns grades based on exam scores.",
    hint: "Use conditional checks for score ranges."
  },
  {
    q: "Create a basic calculator that performs addition, subtraction, multiplication, and division.",
    hint: "Use user inputs and arithmetic operators inside conditionals."
  },
],

'js-basics-intermediate': [
  {
    q: "Build a dynamic expense tracker where users can add, edit, and remove expenses.",
    hint: "Store expenses in arrays and update totals dynamically."
  },
  {
    q: "Create a quiz application that tracks scores and displays results at the end.",
    hint: "Use loops, arrays, and conditional statements."
  },
  {
    q: "Build a custom array search function without using includes() or indexOf().",
    hint: "Loop through the array manually and compare values."
  },
  {
    q: "Create a role-based dashboard that displays different content depending on user type.",
    hint: "Use switch statements or nested conditionals."
  },
  {
    q: "Build a pagination system that displays only a limited number of items per page.",
    hint: "Use slice() to extract portions of an array."
  },
  {
    q: "Create a banking system where users can deposit, withdraw, and check balances.",
    hint: "Track account balance in variables and validate transactions."
  },
  {
    q: "Build a custom implementation of Array.splice() behavior.",
    hint: "Manually remove and insert items into arrays using loops."
  },
  {
    q: "Create a product filter system that filters products by category and price.",
    hint: "Use loops or filter() with conditional checks."
  },
  {
    q: "Build a countdown application that updates the display every second.",
    hint: "Combine loops or intervals with conditional stopping logic."
  },
  {
    q: "Create a voting system that counts votes and determines the winner dynamically.",
    hint: "Store vote counts in objects or arrays and compare totals."
  },
],

'js-basics-advanced': [
  {
    q: "Build your own object-oriented task manager using constructor functions and prototypes.",
    hint: "Attach shared methods to the prototype instead of recreating them for every object."
  },
  {
    q: "Create a custom event propagation simulator demonstrating bubbling and capturing phases.",
    hint: "Attach multiple event listeners to nested elements and track event flow."
  },
  {
    q: "Build a memory-efficient cache system using WeakMap.",
    hint: "Store temporary object references without preventing garbage collection."
  },
  {
    q: "Create a recursive file explorer that navigates deeply nested folder structures.",
    hint: "Use recursion to repeatedly process nested objects."
  },
  {
    q: "Build a drag-and-drop Kanban board with dynamic card movement.",
    hint: "Use DOM events and update application state during dragging."
  },
  {
    q: "Create a prototype-based inheritance system without using class syntax.",
    hint: "Use Object.create() and constructor functions."
  },
  {
    q: "Build a debugging utility that tracks function execution order using the call stack.",
    hint: "Log function calls and nesting levels dynamically."
  },
  {
    q: "Create a secure object system where certain properties cannot be modified or deleted.",
    hint: "Use Object.defineProperty() with writable and configurable flags."
  },
  {
    q: "Build a unique ID generator using Symbol keys to avoid property collisions.",
    hint: "Store hidden identifiers using Symbol()."
  },
  {
    q: "Create a mini game engine loop that continuously updates player movement and collisions.",
    hint: "Use requestAnimationFrame() for smooth repeated execution."
  },
],

  /* ── DOM MANIPULATION ── */
 'dom-beginner': [
  {
    q: "Build a live character counter for a textarea that changes color when the user exceeds 100 characters.",
    hint: "Listen for the input event, read textarea.value.length, and update the DOM dynamically."
  },
  {
    q: "Create a dark mode toggle button that switches the entire webpage between light and dark themes.",
    hint: "Use classList.toggle() on the body element and update CSS styles."
  },
  {
    q: "Build a simple image gallery where clicking a thumbnail changes the main displayed image.",
    hint: "Select all thumbnails using querySelectorAll and update the src of the main image."
  },
  {
    q: "Create a button that adds new todo items into a list dynamically from an input field.",
    hint: "Use createElement(), textContent, and appendChild() to insert new list items."
  },
  {
    q: "Build an accordion FAQ section where clicking one question reveals its answer.",
    hint: "Use addEventListener and toggle display or CSS classes."
  },
  {
    q: "Create a modal popup that opens when a button is clicked and closes when clicking outside the modal.",
    hint: "Use event.target to detect clicks outside the modal content."
  },
  {
    q: "Build a simple calculator that can add, subtract, multiply, and divide two numbers.",
    hint: "Read values from inputs, convert them using Number(), then update the result element."
  },
  {
    q: "Create a password strength checker that updates in real time as the user types.",
    hint: "Check password length, uppercase letters, numbers, and special characters."
  },
  {
    q: "Build a progress bar that fills up as the user scrolls down the page.",
    hint: "Use window.scrollY and calculate the percentage scrolled."
  },
  {
    q: "Create a searchable list where typing into an input instantly filters visible items.",
    hint: "Loop through list items and compare textContent with the search input value."
  },
],

'dom-intermediate': [
  {
    q: "Build a drag-and-drop task board where tasks can move between columns.",
    hint: "Use dragstart, dragover, and drop events with dataTransfer."
  },
  {
    q: "Create an infinite scrolling feed that loads more content when the user reaches the bottom.",
    hint: "Use the scroll event or IntersectionObserver to detect when to load more items."
  },
  {
    q: "Build a dynamic table that fetches user data from an API and displays it in rows.",
    hint: "Use fetch(), loop through JSON data, and create tr/td elements dynamically."
  },
  {
    q: "Create a form validation system that shows inline errors without refreshing the page.",
    hint: "Use preventDefault() and validate inputs before submission."
  },
  {
    q: "Build a tabs component where clicking a tab switches visible content sections.",
    hint: "Use data attributes and classList manipulation."
  },
  {
    q: "Create a shopping cart system where items can be added, removed, and total price updated instantly.",
    hint: "Store cart items in an array and re-render the DOM after each update."
  },
  {
    q: "Build a custom dropdown component without using the native select element.",
    hint: "Toggle visibility of options and update the selected text manually."
  },
  {
    q: "Create a live markdown previewer where typing markdown instantly updates formatted HTML.",
    hint: "Listen for input events and convert markdown into HTML before rendering."
  },
  {
    q: "Build a notes app that stores notes in localStorage and reloads them after refreshing.",
    hint: "Use JSON.stringify() and JSON.parse() with localStorage."
  },
  {
    q: "Create a sortable list where users can rearrange items using buttons or drag-and-drop.",
    hint: "Manipulate DOM node positions using insertBefore() or appendChild()."
  },
],

'dom-advanced': [
  {
    q: "Build a virtualized list capable of efficiently rendering 10,000+ items without lag.",
    hint: "Render only visible items based on scroll position and recycle DOM nodes."
  },
  {
    q: "Create a custom rich-text editor with bold, italic, underline, and text selection support.",
    hint: "Use contenteditable along with the Selection and Range APIs."
  },
  {
    q: "Build a Kanban board with persistent state, drag-and-drop, and dynamic column creation.",
    hint: "Combine localStorage, drag events, and dynamic DOM rendering."
  },
  {
    q: "Create a custom framework-like reactive system where changing JavaScript data automatically updates the DOM.",
    hint: "Use Proxy objects or Object.defineProperty to track changes."
  },
  {
    q: "Build an image lazy-loading system that loads images only when they enter the viewport.",
    hint: "Use IntersectionObserver to detect visibility."
  },
  {
    q: "Create a reusable modal system that supports multiple modals with dynamic content injection.",
    hint: "Use event delegation and reusable component functions."
  },
  {
    q: "Build a real-time collaborative typing interface simulation using WebSockets or mocked events.",
    hint: "Update DOM changes dynamically as messages arrive."
  },
  {
    q: "Create a spreadsheet-like table where users can edit cells and formulas recalculate automatically.",
    hint: "Track cell dependencies and update affected cells when values change."
  },
  {
    q: "Build a browser-based file explorer interface with expandable folders and nested file rendering.",
    hint: "Use recursive rendering techniques for nested structures."
  },
  {
    q: "Create a mini frontend framework that supports reusable components and state-driven rendering.",
    hint: "Separate UI rendering logic from application state management."
  },
],

  /* ── FUNCTIONS ── */
  'functions-beginner': [
  {
    q: "Build a reusable function that converts temperatures between Celsius, Fahrenheit, and Kelvin.",
    hint: "Create separate conversion formulas and return the converted value based on the selected unit."
  },
  {
    q: "Create a function that generates a random password with uppercase, lowercase, numbers, and symbols.",
    hint: "Store character sets in strings and randomly pick characters using Math.random()."
  },
  {
    q: "Build a reusable calculator function that can handle add, subtract, multiply, and divide operations.",
    hint: "Pass the operation type as a parameter and use conditionals or switch statements."
  },
  {
    q: "Create a countdown timer function that updates every second until it reaches zero.",
    hint: "Use setInterval() and clearInterval() when the timer finishes."
  },
  {
    q: "Build a typing speed test function that calculates words per minute from user input.",
    hint: "Track start time, word count, and calculate elapsed minutes."
  },
  {
    q: "Create a reusable validation function for checking email formats.",
    hint: "Use regular expressions and return true or false."
  },
  {
    q: "Build a function that dynamically creates user profile cards from an array of objects.",
    hint: "Loop through the array and return generated HTML for each profile."
  },
  {
    q: "Create a function that filters even and odd numbers from an array into separate arrays.",
    hint: "Use loops or filter() to separate the values."
  },
  {
    q: "Build a function that simulates an ATM withdrawal system with balance checking.",
    hint: "Validate withdrawal amount before subtracting from balance."
  },
  {
    q: "Create a reusable function that formats large numbers into readable forms like 1K, 1M, and 1B.",
    hint: "Use conditional checks and division based on number size."
  },
],

'functions-intermediate': [
  {
    q: "Build a debounce function that delays search execution until the user stops typing.",
    hint: "Use setTimeout() and clearTimeout() to reset the delay."
  },
  {
    q: "Create a memoized Fibonacci calculator that avoids repeated computations.",
    hint: "Store previously calculated results in an object cache."
  },
  {
    q: "Build a custom implementation of Array.map() without using the built-in method.",
    hint: "Loop through the array manually and push transformed values into a new array."
  },
  {
    q: "Create a reusable authentication wrapper function that only allows logged-in users to execute certain actions.",
    hint: "Return another function that checks authentication before running."
  },
  {
    q: "Build a currying function that allows mathematical operations like add(2)(3)(4).",
    hint: "Return nested functions until all values are collected."
  },
  {
    q: "Create a throttle function that limits how often a button click handler can run.",
    hint: "Track the last execution time and block rapid calls."
  },
  {
    q: "Build a function composition utility that chains multiple functions together.",
    hint: "Pass the result of one function into the next using reduce()."
  },
  {
    q: "Create a retry function that automatically retries a failed API request multiple times.",
    hint: "Use recursion or loops with try/catch handling."
  },
  {
    q: "Build a custom event system with subscribe, unsubscribe, and emit functions.",
    hint: "Store listeners in arrays and execute them when events are triggered."
  },
  {
    q: "Create a reusable data sorting function that can sort objects by different properties dynamically.",
    hint: "Pass the property name as an argument and compare object values."
  },
],

'functions-advanced': [
  {
    q: "Build your own implementation of Promise.all() using functions and callbacks.",
    hint: "Track completed promises and resolve only when all are finished."
  },
  {
    q: "Create a mini reactive state management system where updating state automatically triggers UI updates.",
    hint: "Use closures and subscriber functions to notify changes."
  },
  {
    q: "Build a custom pipe() utility that processes data through multiple transformation functions.",
    hint: "Use reduce() to pass results sequentially between functions."
  },
  {
    q: "Create a lazy-loading image system using higher-order functions and IntersectionObserver.",
    hint: "Wrap image loading logic inside reusable observer functions."
  },
  {
    q: "Build a custom implementation of bind() without using the native bind method.",
    hint: "Return a new function and manually control the this context with apply()."
  },
  {
    q: "Create a middleware system similar to Express.js where functions execute in sequence.",
    hint: "Pass a next() callback into each middleware function."
  },
  {
    q: "Build a function-based caching system for expensive API requests with expiration times.",
    hint: "Store results alongside timestamps and invalidate expired cache entries."
  },
  {
    q: "Create a generator-powered pagination system that loads data page-by-page on demand.",
    hint: "Use function* and yield to pause and resume execution."
  },
  {
    q: "Build a recursive file explorer that renders deeply nested folders dynamically.",
    hint: "Use recursion to repeatedly process child folders and files."
  },
  {
    q: "Create a plugin architecture where external functions can extend application behavior dynamically.",
    hint: "Store plugins in arrays and execute them at defined lifecycle stages."
  },
],

  /* ── ES6 FEATURES ── */
'es6-beginner': [
  {
    q: "Build a student registration system that prevents duplicate student names using ES6 Set.",
    hint: "Store student names inside a Set and check uniqueness automatically."
  },
  {
    q: "Create a profile card generator using template literals and object destructuring.",
    hint: "Extract object properties directly and inject them into HTML using backticks."
  },
  {
    q: "Build a shopping cart merger that combines multiple arrays of products using the spread operator.",
    hint: "Use ... to merge arrays and calculate total product count."
  },
  {
    q: "Create a dynamic weather report function with default parameters for missing values.",
    hint: "Assign fallback values directly in the function parameters."
  },
  {
    q: "Build a leaderboard system that extracts top players from an array using destructuring.",
    hint: "Use array destructuring to grab first, second, and third positions."
  },
  {
    q: "Create a reusable function that accepts unlimited numbers and returns their total sum.",
    hint: "Use rest parameters (...numbers) and reduce()."
  },
  {
    q: "Build a file uploader simulation that loops through uploaded files using for...of.",
    hint: "Iterate directly through arrays or FileList objects."
  },
  {
    q: "Create a product inventory object using shorthand property syntax.",
    hint: "Declare variables first, then use them directly inside the object."
  },
  {
    q: "Build a duplicate word remover that filters repeated words from a sentence.",
    hint: "Split the sentence into an array and pass it into a Set."
  },
  {
    q: "Create a dynamic greeting system that switches language templates using template literals.",
    hint: "Use variables inside backticks to generate personalized greetings."
  },
],

'es6-intermediate': [
  {
    q: "Build a multi-API dashboard that fetches weather, news, and user data simultaneously.",
    hint: "Use Promise.all() to wait for all API responses before rendering."
  },
  {
    q: "Create a race timer app where multiple asynchronous tasks compete and the fastest result wins.",
    hint: "Use Promise.race() with different timeout durations."
  },
  {
    q: "Build an async login system that validates credentials and handles loading states cleanly.",
    hint: "Use async/await with try/catch for error handling."
  },
  {
    q: "Create a custom iterable object that allows users to loop through generated IDs using for...of.",
    hint: "Implement [Symbol.iterator]() and return next() objects."
  },
  {
    q: "Build a caching system using Map where repeated searches return instantly.",
    hint: "Store search results as key-value pairs inside a Map."
  },
  {
    q: "Create a tagged template function that automatically sanitizes user input before rendering HTML.",
    hint: "Intercept template strings and escape dangerous characters."
  },
  {
    q: "Build a parallel file downloader simulation that shows completed and failed downloads separately.",
    hint: "Use Promise.allSettled() to track every request result."
  },
  {
    q: "Create a dynamic object builder where property names are generated at runtime.",
    hint: "Use computed property names with square brackets."
  },
  {
    q: "Build an asynchronous queue system that processes tasks one after another with delays.",
    hint: "Use async functions combined with await inside loops."
  },
  {
    q: "Create a memory-efficient object tracker using WeakMap for storing private metadata.",
    hint: "Associate hidden data with objects without preventing garbage collection."
  },
],

'es6-advanced': [
  {
    q: "Build a reactive state management system using Proxy that automatically updates the UI when state changes.",
    hint: "Intercept object updates using Proxy traps and trigger DOM rendering."
  },
  {
    q: "Create a plugin-based application architecture using ES6 modules.",
    hint: "Export reusable plugins and dynamically import them when needed."
  },
  {
    q: "Build a deep cloning utility that correctly clones Dates, Maps, Sets, and circular references.",
    hint: "Use structuredClone() and compare behavior against JSON cloning."
  },
  {
    q: "Create a secure banking class using private class fields (#balance) to prevent direct external access.",
    hint: "Use #privateFields and expose controlled methods like deposit() and withdraw()."
  },
  {
    q: "Build a lazy data processing pipeline using generators and for...of iteration.",
    hint: "Yield values one at a time instead of storing everything in memory."
  },
  {
    q: "Create a custom type conversion system using Symbol.toPrimitive.",
    hint: "Override how objects behave during string or number conversion."
  },
  {
    q: "Build a configuration manager that safely accesses deeply nested settings using optional chaining.",
    hint: "Use ?. to avoid crashes when properties are missing."
  },
  {
    q: "Create a smart fallback settings system using nullish coalescing operators.",
    hint: "Use ?? so valid falsy values like 0 or '' are preserved."
  },
  {
    q: "Build a logging wrapper using Reflect and Proxy that tracks every property access and modification.",
    hint: "Use Proxy traps with Reflect.get() and Reflect.set()."
  },
  {
    q: "Create a dynamic task runner that conditionally updates task states using logical assignment operators.",
    hint: "Use ||=, &&=, and ??= for concise conditional updates."
  },
],

  /* ── ASYNC JAVASCRIPT ── */
 'async-beginner': [
  {
    q: "Build a live digital clock that updates every second without refreshing the page.",
    hint: "Use setInterval() to repeatedly update the time displayed in the DOM."
  },
  {
    q: "Create a delayed notification system where messages appear after a few seconds.",
    hint: "Use setTimeout() to delay DOM updates."
  },
  {
    q: "Build a fake login system that shows a loading spinner before displaying success or failure.",
    hint: "Wrap the login simulation inside a Promise and resolve/reject after a timeout."
  },
  {
    q: "Create a random joke generator that fetches jokes from an API when a button is clicked.",
    hint: "Use fetch() with async/await to retrieve data from the API."
  },
  {
    q: "Build a countdown timer that automatically stops and displays a message when it reaches zero.",
    hint: "Use setInterval() and clearInterval() together."
  },
  {
    q: "Create a weather app that fetches weather data and handles failed requests gracefully.",
    hint: "Use try...catch around await fetch() calls."
  },
  {
    q: "Build a typing indicator system like messaging apps where 'Typing...' disappears after inactivity.",
    hint: "Combine input events with setTimeout()."
  },
  {
    q: "Create an image slideshow that changes images automatically every few seconds.",
    hint: "Use setInterval() to rotate through image arrays."
  },
  {
    q: "Build a fake online payment process with pending, success, and failed states.",
    hint: "Use Promises to simulate asynchronous payment processing."
  },
  {
    q: "Create a search suggestion feature that fetches results as users type.",
    hint: "Listen for input events and fetch matching data dynamically."
  },
],

'async-intermediate': [
  {
    q: "Build a dashboard that loads user data, posts, and comments simultaneously from different APIs.",
    hint: "Use Promise.all() to run all fetch requests together."
  },
  {
    q: "Create a file upload simulator that tracks upload progress for multiple files independently.",
    hint: "Use async functions and update progress bars with intervals."
  },
  {
    q: "Build a request timeout system that cancels slow API requests automatically.",
    hint: "Use Promise.race() between fetch() and a timeout Promise."
  },
  {
    q: "Create a live cryptocurrency tracker that refreshes prices every few seconds without page reload.",
    hint: "Use setInterval() with async fetch requests."
  },
  {
    q: "Build a retry system that automatically retries failed API requests up to 3 times.",
    hint: "Use recursion or loops with try/catch and delays."
  },
  {
    q: "Create a concurrent image preloader that loads multiple images before displaying the gallery.",
    hint: "Use Promise.all() with dynamically created image Promises."
  },
  {
    q: "Build an autocomplete search engine that prevents unnecessary API calls while typing.",
    hint: "Implement debouncing with setTimeout() and clearTimeout()."
  },
  {
    q: "Create a fetch cancellation system where users can stop ongoing requests.",
    hint: "Use AbortController with fetch()."
  },
  {
    q: "Build a sequential task runner that executes async tasks one after another in order.",
    hint: "Use for...of with await instead of forEach."
  },
  {
    q: "Create a chat message queue where messages send asynchronously in the exact order entered.",
    hint: "Queue messages and process them one-by-one with async functions."
  },
],

'async-advanced': [
  {
    q: "Build a concurrency limiter that only allows 3 API requests to run at the same time.",
    hint: "Track active promises and queue pending tasks until slots become free."
  },
  {
    q: "Create a real-time collaborative document editor simulation using WebSockets or mocked async events.",
    hint: "Synchronize updates asynchronously between multiple clients."
  },
  {
    q: "Build an offline-first notes application using Service Workers and cache storage.",
    hint: "Intercept fetch requests and serve cached responses when offline."
  },
  {
    q: "Create an async generator that fetches paginated API results page-by-page lazily.",
    hint: "Use async function* with yield and consume using for await...of."
  },
  {
    q: "Build a task scheduler with priority levels similar to browser scheduling systems.",
    hint: "Store tasks in queues and execute based on priority order."
  },
  {
    q: "Create a stock market dashboard that streams and updates live data continuously.",
    hint: "Use async loops or WebSocket connections for real-time updates."
  },
  {
    q: "Build a parallel file processing system using Web Workers for heavy computations.",
    hint: "Move expensive tasks into separate worker threads and communicate using postMessage()."
  },
  {
    q: "Create an exponential backoff retry mechanism for unstable network requests.",
    hint: "Increase retry delay exponentially after each failure."
  },
  {
    q: "Build a distributed job queue simulation where workers process async tasks independently.",
    hint: "Assign queued tasks dynamically and track completion asynchronously."
  },
  {
    q: "Create a transaction-safe async banking system that prevents race conditions during balance updates.",
    hint: "Use locking or serialized async operations to avoid conflicting writes."
  },
],
};

// ─── Render Theory Questions ───────────────────────────────────────────────
function renderTheoryQuestions(category, level) {
  const key = `${category}-${level}`;
  const questions = THEORY_QUESTIONS[key];
  theoryData.innerHTML = '';

  if (!questions || questions.length === 0) {
    theoryData.innerHTML = '<p class="text-muted fst-italic">No theory questions available for this selection.</p>';
    return;
  }

  // Section heading
  const heading = document.createElement('h5');
  heading.className = 'fw-bold text-success mb-4';
  heading.textContent = `${category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}  ${level.charAt(0).toUpperCase() + level.slice(1)} Theory Questions`;
  theoryData.appendChild(heading);

  questions.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'theory-question-card mb-4 p-4 rounded-4 border border-success-subtle bg-white shadow-sm';

    // Question number + text
    const qText = document.createElement('p');
    qText.className = 'fw-semibold mb-3';
    qText.innerHTML = `<span class="badge bg-success me-2">${index + 1}</span>${item.q}`;
    card.appendChild(qText);

    // Hint button
    const hintBtn = document.createElement('button');
    hintBtn.className = 'btn btn-outline-success btn-sm hint-toggle-btn';
    hintBtn.textContent = 'Show Hint';
    hintBtn.type = 'button';

    // Hint text (hidden initially)
    const hintBox = document.createElement('div');
    hintBox.className = 'theory-hint mt-3 p-3 rounded-3 bg-light border border-success-subtle d-none';
    hintBox.innerHTML = `<span class="text-success fw-semibold">Hint: </span>${item.hint}`;

    hintBtn.addEventListener('click', () => {
      const hidden = hintBox.classList.contains('d-none');
      hintBox.classList.toggle('d-none', !hidden);
      hintBtn.textContent = hidden ? 'Hide Hint' : ' Show Hint';
    });

    card.appendChild(hintBtn);
    card.appendChild(hintBox);
    theoryData.appendChild(card);
  });
}

// ─── END THEORY QUESTIONS ────────────────────────────────────────────────────

const ANSWER_KEY = {
  'js-basics-beginner': ['B', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'C', 'D', 'B', 'B', 'B', 'C', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'A', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'C', 'B', 'C', 'C', 'D', 'C', 'B', 'C', 'D', 'D', 'C', 'C', 'C', 'D', 'C', 'D', 'C', 'D', 'C'],
  'js-basics-intermediate': ['B','B','B','B','B','B','A','B','B','B','B','A','C','C','C','B','B','B','C','B','A','B','B','B','B','B','C','B','A','B','B','B','A','D','C','C','C','C','B','C','B','C','C','D','B','D','C','B','D','A'],
  'js-basics-advanced':['A','B','A','B','B','C','B','B','A','B','B','A','C','C','C','B','B','B','C','B','A','B','B','B','B','B','C','B','A','B','B','D','C','D','C','B','B','C','B','D','C','D','C','B','D','D','C','C','B','C'],
  'dom-beginner': ['A','B','A','B','B','B','A','B','A','B','B','B','B','B','B','A','B','B','B','B','A','B','A','B','B','B','B','B','A','B','B','B','C','C','B','C','C','C','B','B','C','C','D','B','C','D','B','B','B','C'],
  'dom-intermediate': ['B','C','C','A','B','B','B','B','A','B','B','B','B','B','A','B','B','B','B','B','A','B','B','B','A','B','B','B','A','A','D','C','B','B','B','B','B','C','B','A','B','B','B','C','B','B','C','C','B','C'],
  'dom-advanced':['A','B','B','A','A','B','A','B','B','B','B','B','A','B','B','B','B','B','B','B','A','B','A','B','B','B','A','A','B','A','B','B','B','B','B','B','B','B','B','B','B','B','C','B','A','B','D','C','C','C','D'],
  'functions-beginner': ['C','B','B','C','B','B','B','B','A','A','C','B','B','B','B','B','B','B','A','B','A','A','B','A','C','A','B','A','B','A','B','D','D','B','B','C','B','B','C','D','D','B','D','C','D','B','C','D','C','C'],
  'functions-intermediate': ['B','B','A','C','A','B','B','A','B','B','B','B','B','B','B','B','A','B','A','B','A','B','B','B','A','A','A','B','A','B','B','C','B','B','B','C','B','D','C','B','B','C','B','C','B','B','B','D','D','C'],
  'functions-advanced':['A','B','B','B','A','A','B','B','A','B','B','A','B','A','A','B','B','B','A','B','A','B','A','B','A','B','A','B','A','B','B','B','B','B','B','B','C','B','B','B','B','B','C','B','D','B','B','C','B','C','B'],
  'es6-beginner':['B','C','A','B','B','B','B','A','B','A','B','A','B','A','A','B','B','A','C','A','B','B','B','A','B','B','B','B','B','B','B','D','B','C','B','B','C','B','D','D','B','B','B','D','B','B','A','B','B','D'],
  'es6-intermediate': ['B', 'B', 'C', 'B', 'B', 'B', 'A', 'B', 'C', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'D', 'B', 'D', 'B', 'C', 'B', 'D', 'A', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'D'],
  'es6-advanced': ['B', 'B', 'D', 'B', 'B', 'B', 'C', 'B', 'C', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'C', 'A', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'D', 'B', 'D', 'B', 'B', 'C', 'B', 'A', 'B', 'D', 'B', 'B', 'B', 'D', 'B', 'C', 'B', 'B', 'C'],
  'async-beginner': ['B', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'C', 'D', 'B', 'B', 'D', 'B', 'D', 'C', 'C', 'B', 'B'],
  'async-intermediate':['B','B','B','B','B','B','A','B','A','B','A','B','B','B','B','B','B','B','B','B','B','B','A','B','A','B','B','A','B','B','D','C','B','C','B','B','C','D','C','B','A','B','C','B','B','A','C','C','D','C'],
  'async-advanced': ['A','B','A','B','A','B','B','B','A','A','A','A','A','B','A','B','B','B','A','A','A','B','A','B','A','B','A','A','A','B','B','C','C','B','D','C','B','B','B','C','C','B','B','B','C','A','B','D','B','B'],
};

// DOM declarations
let form = document.querySelector('.quiz-form');
let result = document.querySelector('.result');
let take = document.querySelector('.take-quiz');
let powered = document.querySelector('.powered');
let takebtn = document.querySelector('.takebtn');
let calBtn = document.querySelector('.calculator-btn');
let calContainer = document.querySelector('.calc-container');
let body = document.querySelector('body');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-box button');
let test = document.querySelector('.test');
let welcome = document.querySelector('.welcome');
let textContainer = document.querySelector('.text-container');
let beginJourney = document.querySelector('.journey');
let startQuizNav = document.querySelector('.start-quiz-nav');
let timely = document.querySelector('.timely');
let welcomeBox = document.querySelector('.welcome-box');
let categories = document.getElementById('categories');
let timerElement = document.querySelector('.timer');
let beforeTimer = document.querySelector('.before-timer');
let startbtn = document.querySelector('.startbtn');
let quiz = document.querySelector('.quiz');
const homeBtn = document.getElementById("homeBtn");
let homeNav = document.querySelector('.home');
let aboutNav = document.querySelector('.about');
let categoryNav = document.querySelector('.categories');
let dashboardNav = document.querySelector('.dashboard');
let aboutStartBtn = document.querySelector('.about-start-btn');
let theoryData = document.querySelector('.theory-data');
const quizActionSubmit = document.querySelector('.quiz-action-submit');
const quizActionTheory = document.querySelector('.quiz-action-theory');
let inprove = document.querySelector('.improve');
const reviewContainer = document.getElementById('reviewContainer');
const wrongAnswers = document.getElementById('wrongAnswers');







let time = 3600;
let timeInterval;
let lastCategory = null;
let lastLevel = null;
let inCategoryMode = false;
let wrongQuestionsData = []; // stores { questionNumber, questionHTML, userAnswer, correctAnswer, labels }

// startTimer function
function startTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) seconds = '0' + seconds;
  timerElement.textContent = `${minutes}:${seconds}`;
  time--;

  if (time < 0) {
    clearInterval(timeInterval);
    timerElement.textContent = 'Time up!';
    alert('Time is up! Submitting automatically.');
    if (inCategoryMode) {
      handleCategorySubmit();
    } else {
      form.dispatchEvent(new Event('submit'));
    }
  }
}


// resetTimer function

function resetTimer() {
  clearInterval(timeInterval);
  time = 3600;
  timerElement.textContent = '';
}


// startCountdown function

function startCountdown() {
  resetTimer();
  if (beforeTimer) beforeTimer.classList.remove('d-none');
  timeInterval = setInterval(startTimer, 1000);
}

// animate score

function animateScore(targetPercent) {
  result.classList.remove('d-none');
  let span = result.querySelector('span');
  let current = 0;
  const step = setInterval(() => {
    span.textContent = `${current}%`;
    if (current >= targetPercent) {
      clearInterval(step);
    } else {
      current++;
    }
  }, 20);
}



// ABOUT IMAGE ANIMATION

const aboutImage = document.querySelector('.about-img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

observer.observe(aboutImage);


// nav links animation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});



//
function hideSiteSections() {
  categories.style.display = 'none';
  const intro = document.querySelector('.intro');
  const timing = document.querySelector('.timing');
  const about = document.getElementById('about');
  const dashboard = document.getElementById('dashboard');
  const nav = document.querySelector('#navbarNav');
  intro.style.display = 'none';
  timing.style.display = 'none';
  about.style.display = 'none';
  dashboard.style.display = 'none';
  powered.style.display = 'none';
  nav.classList.remove('show');
}

function showSiteSections() {
  if (categories) categories.style.display = '';
  const intro = document.querySelector('.intro');
  const timing = document.querySelector('.timing');
  const about = document.getElementById('about');
  const dashboard = document.getElementById('dashboard');
  const nav = document.querySelector('#navbarNav');
  intro.style.display = '';
  timing.style.display = '';
  about.style.display = '';
  dashboard.style.display = '';
  powered.style.display = '';
  nav.style.display = '';
}


// 
startbtn.addEventListener('click', e => {
  e.preventDefault();
  alert('Select a category');
  categories.scrollIntoView();

});


//
startQuizNav.addEventListener('click', e => {
  e.preventDefault();
  alert('Select a category');
  categories.scrollIntoView();
});


//
aboutStartBtn.addEventListener('click', e => {
  e.preventDefault();
  alert('Select a category');
  categories.scrollIntoView();
});



const scoreDisplay = document.getElementById("scoreDisplay");

function showScore(score){

    scoreDisplay.innerText = score + "%";

    // Bounce effect when score appears
    scoreDisplay.animate(
        [
            { transform: "scale(0.5)", opacity: 0 },
            { transform: "scale(1.3)", opacity: 1 },
            { transform: "scale(1)", opacity: 1 }
        ],
        {
            duration: 700,
            easing: "ease"
        }
    );

    // Dynamic color based on score
    if(score < 40){
        scoreDisplay.classList.remove("text-success","text-warning");
        scoreDisplay.classList.add("text-danger");
    }

    else if(score < 70){
        scoreDisplay.classList.remove("text-success","text-danger");
        scoreDisplay.classList.add("text-warning");
    }

    else{
        scoreDisplay.classList.remove("text-warning","text-danger");
        scoreDisplay.classList.add("text-success");
    }
}

/* Example */
showScore(85);




// take quiz again 
takebtn.addEventListener('click', e => {
  e.preventDefault();

  display.value = '';

  result.classList.add('d-none');
  result.querySelector('span').textContent = '0%';
  take.classList.add('d-none');
 /*  calBtn.classList.remove('d-none');
  calContainer.classList.add('d-none'); */
  startQuizNav.style.display = 'none';

  // Hide the review container before re-launch
  if (reviewContainer) reviewContainer.classList.add('d-none');

  if (inCategoryMode && lastCategory && lastLevel) {
    launchCategoryQuiz(lastCategory, lastLevel);
  } else {
    form.reset();
    startCountdown();
  }
});


// Highlight wrong answers in the active question set
function highlightWrongAnswers() {
  const activeSet = document.querySelector(
    `.question-set[data-category="${lastCategory}"][data-level="${lastLevel}"]`
  );
  if (!activeSet) return;

  const radios = activeSet.querySelectorAll('input[type="radio"]');
  const groups = {};
  radios.forEach(r => {
    if (!groups[r.name]) groups[r.name] = [];
    groups[r.name].push(r);
  });

  const names = Object.keys(groups);
  const key = `${lastCategory}-${lastLevel}`;
  const answers = ANSWER_KEY[key] || [];

  names.forEach((name, i) => {
    const correctAns = answers[i] || '';
    const isWrong = wrongQuestionsData.some(w => w.number === i + 1);

    if (!isWrong) return;

    // Find the question <p> tag just before the first label in this group
    const firstLabel = groups[name][0].closest('label');
    if (firstLabel) {
      let node = firstLabel.previousElementSibling;
      while (node && node.tagName !== 'P') node = node.previousElementSibling;
      if (node) {
        node.classList.add('wrong-question-highlight');
      }
    }

    // Highlight each option label
    groups[name].forEach(r => {
      const lbl = r.closest('label');
      if (!lbl) return;
      if (r.value === correctAns) {
        lbl.classList.add('correct-answer-label');
      } else {
        lbl.classList.add('wrong-answer-label');
      }
    });
  });
}


//  
const categoryButtons = document.querySelectorAll('.cat-btn');
// allQuestionSets removed — question sets are now rendered dynamically
const quizArea = document.getElementById('quizArea');
const quizAreaSubmitBtn = document.querySelector('.quiz-area-submit');


// handle submit category
function handleCategorySubmit() {
  clearInterval(timeInterval);
  if (beforeTimer) beforeTimer.classList.add('d-none');

  const key = `${lastCategory}-${lastLevel}`;
  const answers = ANSWER_KEY[key] || [];

  if (answers.length === 0) {
    alert('No answer key found for this quiz.');
    return;
  }

  // Gather user answers from  question set
  const activeSet = document.querySelector(
    `.question-set[data-category="${lastCategory}"][data-level="${lastLevel}"]`
  );

  if (!activeSet) { animateScore(0); return; }

  const radios = activeSet.querySelectorAll('input[type="radio"]');
  // Group by name
  const groups = {};
  radios.forEach(r => {
    if (!groups[r.name]) groups[r.name] = [];
    groups[r.name].push(r);
  });

  const names = Object.keys(groups);
  let score = 0;
  wrongQuestionsData = [];

  names.forEach((name, i) => {
    const selected = groups[name].find(r => r.checked);
    const userAns = selected ? selected.value : '';
    const correct = answers[i] || '';
    const isRight = userAns === correct;
    if (isRight) {
      score++;
    } else {
      // Grab all label texts + values for this question group
      const labelTexts = groups[name].map(r => {
        const lbl = r.closest('label');
        return { value: r.value, text: lbl ? lbl.textContent.trim() : r.value };
      });
      // Get question text from the nearest <p> before the first radio label
      let questionHTML = '';
      const firstLabel = groups[name][0].closest('label');
      if (firstLabel) {
        let node = firstLabel.previousElementSibling;
        while (node && node.tagName !== 'P') node = node.previousElementSibling;
        if (node) questionHTML = node.innerHTML;
      }
      wrongQuestionsData.push({
        number: i + 1,
        questionHTML,
        userAnswer: userAns,
        correctAnswer: correct,
        options: labelTexts,
      });
    }
  });

  const pct = answers.length > 0 ? Math.round((score / answers.length) * 100) : 0;
  console.log(`[Category Quiz ${key}] Score: ${score}/${answers.length} = ${pct}%`);

  // hide visible dom
  quizArea.classList.add('d-none');
  resetNavigator();
  hideSiteSections()
  //calContainer.style.display = 'none'
  scrollTo(0, 0);
  take.classList.remove('d-none');
 // calBtn.classList.add('d-none');
  homeBtn.classList.remove("d-none");
  powered.style.display = 'none';
  startQuizNav.style.display = 'none';
  quizActionSubmit.classList.add('d-none');
  quizActionTheory.classList.add('d-none');
  animateScore(pct);

  // Show wrong answer review panel
  if (wrongQuestionsData.length > 0 && reviewContainer && wrongAnswers) {
    reviewContainer.classList.remove('d-none');
    wrongAnswers.innerHTML = '';
    wrongQuestionsData.forEach(w => {
      const card = document.createElement('div');
      card.className = 'wrong-review-card mb-4 p-4 rounded-4 border border-danger-subtle';

      const heading = document.createElement('p');
      heading.className = 'fw-bold wrong-review-question mb-3';
      heading.innerHTML = `<span class="badge bg-danger me-2">Q${w.number}</span>${w.questionHTML || `Question ${w.number}`}`;
      card.appendChild(heading);

      const optionsList = document.createElement('ul');
      optionsList.className = 'list-unstyled mb-0';

      w.options.forEach(opt => {
        const li = document.createElement('li');
        li.className = 'py-1 px-3 mb-1 rounded review-option';
        if (opt.value === w.correctAnswer) {
          li.classList.add('review-correct');
          li.innerHTML = `strong>${opt.text}</strong> <span class="ms-2 badge bg-success">Correct Answer</span>`;
        } else if (opt.value === w.userAnswer && w.userAnswer !== '') {
          li.classList.add('review-wrong');
          li.innerHTML = `{opt.text} <span class="ms-2 badge bg-danger">Your Answer</span>`;
        } else {
          li.classList.add('review-neutral');
          li.innerHTML = opt.text;
        }
        optionsList.appendChild(li);
      });

      if (!w.userAnswer) {
        const skipped = document.createElement('p');
        skipped.className = 'text-muted fst-italic mt-2 mb-0';
        skipped.textContent = 'You did not answer this question.';
        card.appendChild(optionsList);
        card.appendChild(skipped);
      } else {
        card.appendChild(optionsList);
      }

      wrongAnswers.appendChild(card);
    });
  } else if (reviewContainer) {
    reviewContainer.classList.add('d-none');
  }
}


// submit button function

if (quizAreaSubmitBtn) {
  quizAreaSubmitBtn.addEventListener('click', handleCategorySubmit);
}



homeBtn.addEventListener("click", function () {
  location.href = "index.html";
});


homeNav.addEventListener("click", function () {
  location.href = "index.html"; // change to your home page file
});



// launch a category & level function
function launchCategoryQuiz(category, level) {
  inCategoryMode = true;
  lastCategory = category;
  lastLevel = level;


  // Reset visual feedback on all options
  document.querySelectorAll('.question-set label, .question-set input[type="radio"]').forEach(el => {
    el.style.color = '';
    el.style.fontWeight = '';
  });

  // Clear any previous review highlights
  document.querySelectorAll('.wrong-question-highlight').forEach(el => el.classList.remove('wrong-question-highlight'));
  document.querySelectorAll('.correct-answer-label').forEach(el => el.classList.remove('correct-answer-label'));
  document.querySelectorAll('.wrong-answer-label').forEach(el => el.classList.remove('wrong-answer-label'));

  // Uncheck all radios in target set
  // Render questions dynamically from JS data
  if (!renderQuestions(category, level)) {
    alert('No questions found for this selection.');
    return;
  }
  const targetSet = quizArea.querySelector('.question-set');

  // Reset all radio buttons so none are checked
  targetSet.querySelectorAll('input[type="radio"]').forEach(r => {
    r.checked = false;
  });

  hideSiteSections();

  // Show quizArea — question set was already injected by renderQuestions
  quizArea.classList.remove('d-none');
  targetSet.classList.remove('d-none');

  // Show submit and theory section now that a quiz is active
  quizActionSubmit.classList.remove('d-none');
  quizActionTheory.classList.remove('d-none');
  // Render theory questions for this category + level
  renderTheoryQuestions(category, level);
  theoryData.classList.remove('d-none');

  startCountdown();
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


// startquiz button in category
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const parentCard = button.closest('.card');
    const selected = parentCard.querySelector('input[type="radio"]:checked');

    if (!selected) {
      alert('Please select a level!');
      return;
    }

    launchCategoryQuiz(category, selected.value);
   // calBtn.classList.remove('d-none')
    powered.style.display = 'none';
    startQuizNav.style.display = 'none';
    beginJourney.style.display = 'none';


  });

});



// calculator 
calBtn.addEventListener('click', e => {
  e.preventDefault();
  calContainer.classList.toggle('d-none');
  display.value = '';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.getAttribute('data-value'));
  });
});

function handleInput(value) {
  switch (value) {
    case 'C': display.value = ''; break;
    case 'DEL': display.value = display.value.slice(0, -1); break;
    case '=':
      try { display.value = eval(display.value); }
      catch { display.value = 'Error'; }
      break;
    default: display.value += value;
  }
}


// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();


// Footer navigation (same behavior as navbar)
document.querySelector('.footer-home').addEventListener('click', (e) => {
  e.preventDefault();
  location.href = "index.html";
});

document.querySelector('.footer-about').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.footer-categories').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.footer-dashboard').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
});


//


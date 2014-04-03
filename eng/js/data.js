var codropsEvents = {
'MM-01-YYYY' : '<a href="#"><div class="question"><span style="font-size:24px; text-align:left;">(i)<math><semantics><mrow><msqrt><mrow><mn>11.56</mn></mrow></msqrt></mrow></semantics></math><br>(ii)<math style="font-size:54px;"><semantics><mrow><msup><mrow><mn>5.4</mn></mrow><mn>2</mn></msup></mrow></semantics></math></span></div><div class="answer">Answer will appear here!</div></a>',
'MM-02-YYYY' : '<a href="#"><div class="question"><math><semantics><mrow><mo stretchy="false">(</mo><mn>5.4</mn><mo>&#x00D7;</mo><msup><mrow><mn>10</mn></mrow><mn>3</mn></msup><mo stretchy="false">)</mo><mo>&#x00D7;</mo><mo stretchy="false">(</mo><mn>3</mn><mo>&#x00D7;</mo><msup><mrow><mn>10</mn></mrow><mn>5</mn></msup><mo stretchy="false">)</mo></mrow></semantics></math></div><div class="answer">Answer will appear here!</div></a>',
'MM-03-YYYY' : '<a href="#"><div class="question"><img src="images/Aut07_181_01_1a.png"><br>Geraint buys a pair of jeans for £22.49 and a polo shirt for £13.87.<br> Find the total cost of these two items.</div><div class="answer"><img src="images/Aut07_181_01_1a.png"  ><br>£22.49 + £13.87 = £36.36</div></a>',
'MM-04-YYYY' : '<a href="#"><div class="question"><img src="images/Aut07_181_01_10.png"><br>The diagram above shows a right-angled triangle with one angle of 67°.</div><div class="answer"><img src="images/Aut07_181_01_10.png"  ><br>180° - 90° - 67° = 23°</div></a>',
'MM-05-YYYY' : '<a href="#"><div class="question"><img src="images/Aut07_181_01_4b.png"><br>The bar chart shows the number of pupils absent each day in a particular week.<br> How many absences, in total, were recorded for that week?</div><div class="answer"><img src="images/Aut07_181_01_4b.png"  ><br>4+5+2+3+4 = 18</div></a>',
'MM-06-YYYY' : '<a href="#"><div class="question"><img src="images/Aut07_181_01_5a.png"><br>Write down the two lines in the above diagram,<br> which are perpendicular to each other.</div><div class="answer"><img src="images/Aut07_181_01_5a.png"><br>AB, BC <br>(Two lines are perpendicular if they meet at a right angle, or at 90°)</div></a>',
'MM-07-YYYY' : '<a href="#"><div class="question"><img src="images/Aut07_181_01_7b.png"><br>Write down the area of the rectangle shown above.</div><div class="answer"><img src="images/Aut07_181_01_7b.png"><br>5cm × 7cm = 35cm²</div></a>',
'MM-08-YYYY' : '<a href="#"><div class="question"><br><math><mrow><mn>4</mn><mi>a</mi><mtext>&#x00A0;</mtext><mo>+</mo><mtext>&#x00A0;</mtext><mn>7</mn><mi>a</mi><mtext>&#x00A0;</mtext><mo>+</mo><mtext>&#x00A0;</mtext><mn>8</mn><mi>a</mi></mrow></math></br>Simplify the equation above.</div><div class="answer"><br><math><mrow><mn>19</mn><mi>a</mi></mrow></math></div></a>',
'MM-09-YYYY' : '<a href="#"><div class="question"><img src="images/cool-boots.png"><br>Write down the value of the cube of 5.</div><div class="answer"><img src="images/cool-boots.png"><br>5³ = 5 × 5 × 5 = 25 × 5 = 125.</div></a>',
'MM-10-YYYY' : '<a href="#"><div class="question"><img src="images/cool-boots.png"><br>1 4 9 16<br>Write down, in terms of n, the nth term of the sequence shown above.</div><div class="answer"><img src="images/cool-boots.png"><br>1 4 9 16<br>n squared</div></a>',
'MM-11-YYYY' : '<a href="#"><div class="question"><img src="images/cool-boots.png"><br>Complete the table shown above.</div><div class="answer"><img src="images/cool-boots.png"><br>First row 4, 1, 0. Second row 4, 0, 0. <br>Third row 0, 6, 2</div></a>',
'MM-12-YYYY' : '<a href="#"><div class="question"><img src="images/cool-boots.png"><br>0.2 x 0.3<br>Find the value of the equation shown above</div><div class="answer"><img src="images/cool-boots.png"><br>2/10 × 3/10 = 6/100 = 0.06</div></a>',
'MM-13-YYYY' : '<a href="#"><div class="question"><img src="images/Aut07_184_05_10a.png"><br>In the diagram above, ABCD is a <br> trapezium with AD parallel to BC.<br> The lengths of AD and BC are 30cm and 20cm respectively. <br>The perpendicular distance between the parallel sides is 22cm.<br> Calculate the area of the trapezium and clearly write down the units of your answer.</div><div class="answer"><img src="images/Aut07_184_05_10a.png"><br>20 + 30 = 50. 50 ÷ 2 = 25. 25 × 22 = 550cm²</div></a>',
'MM-14-YYYY' : '<a href="#"><div class="question"><img src="images/cool-boots.png"><br>Convert 54 000 cm2 into m2.</div><div class="answer"><img src="images/cool-boots.png"><br>54000 ÷ 100 = 540. 540 ÷ 100 = 5.4 m². <br> With area we must divide by the scale factor (100) twice.</div></a>',


'MM-15-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-16-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-17-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-18-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-19-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-20-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-21-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-22-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-23-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-24-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-25-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-26-YYYY' : '<a href="#"><div class="question"><span style="font-size:54px; text-align:left;">(i)<math><semantics><mrow><msqrt><mrow><mn>11.56</mn></mrow></msqrt></mrow></semantics></math><br><br>(ii)<math style="font-size:54px;"><semantics><mrow><msup><mrow><mn>5.4</mn></mrow><mn>2</mn></msup></mrow></semantics></math></span></div><div class="answer">Answer will appear here!</div></a>',
'MM-27-YYYY' : '<a href="#"><div class="question"><math style="font-size:54px;"> <semantics><mrow><msqrt><mrow><mn>11.56</mn></mrow></msqrt></mrow></semantics></math></div><div class="answer">Answer will appear here!</div></a>',
'MM-28-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"  ><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-29-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"  ><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-30-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"  ><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',
'MM-31-YYYY' : '<a href="#"><div class="question"><img src="images/money-notes-uk.jpg"  ><br>Bronwen has £45 to spend on DVDs. Each DVD costs £8.49.<br><br>How many DVDs can she buy?</div><div class="answer">£45</div></a>',


	




	'02-21-2014' : '<a href="http://tympanus.net/codrops/2012/11/21/adaptive-thumbnail-pile-effect-with-automatic-grouping/">Adaptive Thumbnail Pile Effect with Automatic Grouping</a>',

	'12-25-YYYY' : '<a href="#"><span>Christmas Day</span></a>',
	'12-31-YYYY' : '<a href="#"><span>New Year\'s Eve</span></a>'

};
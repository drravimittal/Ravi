import React from 'react';
import {Paper} from './paper';
import _ from "lodash";

var pubs = require('./pubs.json');

var practicalToolEvaluations = _.find(pubs, { id: "practicalguide" });

class Advice extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					Below are some of the questions I'm frequently asked.
				</div>

				<ul>
					<li><a href="#csis">What is the difference between computer science and information science?</a></li>
					<li><a href="#phdadmissions">How do I get into a Ph.D. program?</a></li>
					<li><a href="#phdstudent">What is it like to be a Ph.D. student?</a></li>
					<li><a href="#goodquestion">What makes a good research question?</a></li>
					<li><a href="#goodwriting">How can I become a good technical writer?</a></li>
					<li><a href="#review">I was asked to review a paper. Should I?</a></li>
					<li><a href="#evaluation">How should I evaluate this developer tool I invented?</a></li>
					<li><a href="#copyright">My paper was accepted. Which ACM copyright option should I choose?</a></li>
				</ul>
				
				<p>
					Also see the excellent pages by <a href="http://www.cs.washington.edu/homes/mernst/advice/">Mike Ernst</a> (software engineering), <a href="http://people.engr.ncsu.edu/txie/advice.htm">Tao Xie</a> (software engineering) and <a href="http://www.cs.cmu.edu/~jasonh/advice.html">Jason Hong</a> (HCI).
				</p>

				<h3 id="csis">What is the difference between computer science and information science?</h3>
				
				<p>When people ask me this, here's what I usually say:</p>

				<blockquote>
				I think of Computer Science and Informatics like we think about Physics versus Engineering: the former concerns itself with a phenomenon as it occurs in nature and the latter is concerned with applications of it for humanity. CS fundamentally asks what is computing, what can be computed, how can it be computed. Informatics fundamentally asks what should be computed, how should computation be used, what role does computing play in society. If you find computing intrinsically interesting and wouldn't mind talking about it endlessly, CS is a great major for you. If you just want use it as a tool to solve the world's problems, Informatics is a great major for you. Some people are interested in both. Maybe that's you! Both are competitive majors, both lead to wonderful jobs, and both will teach you a lot about the world, one from the perspective of computing, one from the perspective of humanity. Both perspectives are necessary and valuable.
				</blockquote>
				
				<p>
					You can read more about my view of information and computing in a blog post I wrote about <a target="_blank" href="https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd">big ideas about information</a>.
				</p>

				<h3 id="phdadmissions">How do I get into a Ph.D. program?</h3>
				
				<p>Philip Guo gives a <a href="http://www.pgbovine.net/PhD-application-tips.htm">brutally honest glimpse</a> into how he and others review Ph.D. applicants in HCI and other areas of computing. I do similar things, but also look for glimpses of potential and common interest.</p>	

				
				<h3 id="phdstudent">What is it like to be a Ph.D. student?</h3>

				<p>There are many, many resources on this. Philip Guo write a <a href="http://pgbovine.net/PhD-memoir.htm"> a nice Ph.D. memoir</a> about his experiences at Stanford. It has a definite slant toward CS and software engineering academic culture, but it's a useful read to anyone thinking about a Ph.D. <a href="http://matt.might.net/articles/successful-phd-students/">Matt Might's advice</a> is similar sobering, but practical. I also like <a href="https://freedom-to-tinker.com/2010/09/27/advice-new-graduate-students/">Jennifer Rexford's view of Ph.D. life as individual growth by leveraging the group</a>, because it complements more pragmatic views. The Economist also has some practical advice on <a href="http://www.economist.com/node/17723223?fsrc=scn/fb/wl/ar/mr/disposableacademic">Why doing a PhD is often a waste of time</a>. And, for a lighter glimpse into Ph.D. life, there is always <a href="http://www.phdcomics.com/comics.php">Ph.D. comics</a>.</p>


				<h3 id="goodquestion">What makes a good research paper?</h3>
				
				<p>Learning to do research is hard! Developing good questions is just one of the many challenges in research. I wrote a book chapter that <a href="http://faculty.washington.edu/ajko/papers/Ko2019StudyDesign.pdf">covers many aspects of developing good research questions</a>. I use the same practices with the students in my lab.</p>

				<h3 id="goodwriting">How can I become a good technical writer?</h3>
				
				<p>When writing and reviewing scientific papers, there are a lot of mistakes one can make. <a href="http://matt.might.net/articles/shell-scripts-for-passive-voice-weasel-words-duplicates/">Matt Might's advice on technical writing</a> is a helpful guide, as is this deconstruction of <a href="https://sites.umiacs.umd.edu/elm/2016/11/19/writing-rebuttals/">what makes a good rebuttal to conference reviews</a>. I also like Chris Parnin's <a href="https://medium.com/@gameweld/error-codes-for-paper-introductions-8deb0d6825c2?fbclid=IwAR0SziEHps-ZD24FqLzG-yAGbk0wMblZ8dmC3r8KwsRsYdthVC6R0ylvWSg">Error Codes for Paper Introductions</a>. As someone who's reviewed hundreds of papers, I find many common mistakes:</p>
				
				<ul>
				
					<li><b>Normal distributions</b>. Do the authors cite means of distributions that may not be normally distributed? Skew, floor effects, ceiling affects, and multi-modal distributions can make some aggregate statistics meaningless. My favorite solution is to put a distribution inline in text, such as a histogram or box plot.</li>
							
					<li><b>Correlation vs. causation</b>. Do the authors use causality language like "influence", "causes", or "leads to" for an experiment in which they can make no causal claims? If so, they should use language such as "correlates" or "is related" instead.</li>
							
					<li><b>Unsubstantiated claims</b>. Do the authors make statements about non-obvious phenomena without sufficient evidence (either data or some citation)? Scour the paper for these statements and point them all out. It's a bit nit-picky, but this is science. We're supposed to obsess about these things!</li>
	
					<li><b>Assumptions of statistical tests</b>. Do the authors violate any assumptions of the statistical tests that they use? For example, do they use linear regression on categorical data or chi-squared tests on variables that are not independent? If so, see if you can find a more appropriate test for them.</li>
					
					<li><b>Care with qualifiers</b>. When it comes to descriptions of numerical distributions, be careful with words like "some", "many", "several", and "few". Any use of adjectives and adverbs should be backed up with evidence, if stated as evidence.</li>
					
					<li><b>Tense indicates generality</b>. When describing results, especially of studies involving people, tense is the difference between what <i>happened</i> in the experiment and what <i>happens</i> in general. Make sure the tense matches the claim.</li>
					
					<li><b>Theory, model, framework, etc.</b>. People don't seem to have a common understanding of what these words mean from a scientific perspective. If used, be sure to say precisely what you mean.</li>
					
					<li><b>Tentative language</b>. Perhaps, maybe, might, could, may. Words like these usually mean that the author is speculating. Speculation is fine, as long as it occurs in a section of the paper that deserves spectulation.</li>
				
				</ul>


				<h3 id="review">I was asked to review a paper. Should I?</h3>
				
				<p>My Ph.D. students often ask me whether they should accept a paper review request. Here's some of the advice I give them for doing or not doing it:</p>
				
				<p>Reasons to do it:</p>
				
				<ul>
					<li>You're an expert. Academia is small, expertise is rare, it's your duty to volunteer.</li>
					<li>You need practice reviewing papers.</li>
					<li>If you plan a career in research, it's important to show that you've reviewed for prestigious journals and conferences.</li>
					<li>If it's relevant to your research, you have an incentive to read it and find out what other people are doing.</li>
				</ul>
				
				<p>Reasons not to do it:</p>
				
				<ul>
					<li>You really don't have the expertise.</li>
					<li>You've done too much reviewing in the past year and have earned the right to say no.</li>
					<li>You're an experienced paper reviewer and don't need the practice.</li>
					<li>You honestly don't have the time because of some exceptional circumstance.</li>
					<li>You're overloaded on other service commitments.</li>
				</ul>
				
				<h3 id="evaluation">How should I evaluate this developer tool I invented?</h3>
				
				<p>I often get questions from researchers asking for help to design studies to evaluate the developer tool what they've built. I could write a whole book on this (and <a href="http://www.amazon.com/Research-Methods-Statistics-Psychology-Coolican/dp/0340812583">several</a> <a href="http://www.amazon.com/Research-Methods-Psychology-John-Shaughnessy/dp/007128351X/ref=sr_1_1?s=books&ie=UTF8&qid=1281625862&sr=1-1">people</a> <a href="http://www.socialresearchmethods.net/">have</a>, just not on the topic of CS research).</p>
				
				<p>For my part, I wrote a journal paper that walks through several practical details of evaluating developer tools:</p>

				<hr/>
				<Paper {...practicalToolEvaluations} />				
				<hr/>
				
				<p>Several of my colleagues in software engineering and programming languages also wrote a well reasoned analysis of <em>claims</em> in evaluations called <a href="http://dl.acm.org/citation.cfm?id=2983574">The Truth, The Whole Truth, and Nothing But the Truth: A Pragmatic Guide to Assessing Empirical Evaluations</a>. This is a great lens through which to evaluate the validity of your evaluation.</p>
				
				<p>I also like <a href="http://pgbovine.net/running-user-studies.htm">Philip Guo's exceedingly practical experiment checklist</a>, which helps prevent data collection catastrophes.</p> 

				<h3 id="copyright">Which ACM copyright option should I choose?</h3>
				
				<p>Casey Fiesler has <a href="http://caseyfiesler.com/2014/10/02/acm-publication-copyright/">a helpful blog post</a> about this decision.</p>

			</div>
		);
	}
}

export {Advice}
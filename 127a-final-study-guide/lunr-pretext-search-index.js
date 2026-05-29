var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "practice-problems",
  "level": "1",
  "url": "practice-problems.html",
  "type": "Section",
  "number": "1",
  "title": "Practice Problems",
  "body": " Practice Problems  The final will be 6 problems focused on the basics of convergent sequences as well as the material from series to continuous functions. You should know the main definitions: Know the definitions of convergence of a sequence, boundedness of a sequence, convergence of a series, limit point, isolated point, closed set, open set, compact set (and know the statement of the Heine-Borel theorem that gives three different characterizations of compactness), connected\/disconnected set, functional limit, continuity at a point, and uniform continuity. You may use any of the theorems proved in lecture unless otherwise stated (like if the question asks you to prove a statement in a particular way, such as proving a sequence converges using the definition or proving continuity at a point using the definition, etc.).  Here are some exam-style problems for practice.  Problem 1: Let be a sequence and let .   State the definition of the convergence of to .  Suppose that and satisfies . Prove that directly using the definition of convergence to a limit.   Problem 2: Prove that the following series either converge or diverge. You may use any of the convergence or divergence tests proved in lecture. (You may also use without proof the fact that whenever and .)       Problem 3: Solve the following problems about open and closed sets.   State the definition of an open set.   Determine whether each of the following sets are closed but not open, open but not closed, both open and closed, or neither open nor closed.    Prove that the set is open using the definition of an open set.   Problem 4: Solve the following problems about compact sets.   State the definition of a compact set.  Suppose that is closed and bounded. Prove that is compact by showing satisfies the definition of compactness (you may not use the Heine-Borel theorem).   Problem 5: Let be given by   for all .   Give a short proof that .  Prove that directly using the - definition of functional limit.   Problem 6: Let be uniformly continuous.   State the definition of uniform continuity for a function .  Prove that the function defined by is uniformly continuous. Hint: Use the triangle inequality and an argument.   "
},
{
  "id": "practice-problems-4",
  "level": "2",
  "url": "practice-problems.html#practice-problems-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "practice-problems-6",
  "level": "2",
  "url": "practice-problems.html#practice-problems-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2: "
},
{
  "id": "practice-problems-8",
  "level": "2",
  "url": "practice-problems.html#practice-problems-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: "
},
{
  "id": "practice-problems-10",
  "level": "2",
  "url": "practice-problems.html#practice-problems-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "practice-problems-12",
  "level": "2",
  "url": "practice-problems.html#practice-problems-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 5: "
},
{
  "id": "practice-problems-16",
  "level": "2",
  "url": "practice-problems.html#practice-problems-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 6: "
},
{
  "id": "practice-solutions",
  "level": "1",
  "url": "practice-solutions.html",
  "type": "Problems",
  "number": "2",
  "title": "Practice Solutions",
  "body": " Practice Solutions    Let be a sequence and let .   State the definition of the convergence of to .  Suppose that and satisfies . Prove that directly using the definition of convergence to a limit.       The sequence converges to if for all there exists such that for all it follows that    If we want to show that , we must use the fact that to show that for a given , there exists such that for all   In order to get , we choose to ensure .  Proof: Let . Since , we can choose such that for all . To see that this choice of works, for any         Prove that the following series either converge or diverge. You may use any of the convergence or divergence tests proved in lecture. (You may also use without proof the fact that whenever and .)           The series converges since it is a -series with . Because for any   the series converges by the Comparison Test.    Notice that the general term of this series satisfies   Since this limit is nonzero, this series diverges by the Divergence Test.    For every , we have   so that the sequence is decreasing. Since also , this means that the Alternating Series Test implies converges.        Solve the following problems about open and closed sets.   State the definition of an open set.   Determine whether each of the following sets are closed but not open, open but not closed, both open and closed, or neither open nor closed.    Prove that the set is open using the definition of an open set.      A set is open if for all there exists such that .  is neither open nor closed, is both open and closed, and is closed but not open.   Using the definition of open, we must show that for every there is an such that . To do this, let and take (this is the distance from to 1). We claim that . Indeed, let . Then,   Therefore , proving .        Solve the following problems about compact sets.   State the definition of a compact set.  Suppose that is closed and bounded. Prove that is compact by showing satisfies the definition of compactness (you may not use the Heine-Borel theorem).      A set is compact if for every sequence there exists a subsequence that converges to a point .  To show that is compact, we must show that for any sequence , there exists a convergent subsequence whose limit is in . To do this, let . Since is bounded, there exists such that for all . Since for all , this means that for all . This proves that is bounded. By Bolzano-Weierstrass, there exists a convergent subsequence converging to some point . Since is closed, every convergent sequence of points in has limit in , meaning .       Let be given by   for all .   Give a short proof that .  Prove that directly using the - definition of functional limit.       The function is a polynomial, so it is continuous. This means     Let's do some preliminary work. Notice that   If we ensure that , then so that adding across this inequality gives and . Under this assumption, , so we can choose .  Proof: Let . Let . For any such that , we know that so that . This means         Let be uniformly continuous.   State the definition of uniform continuity for a function .  Prove that the function defined by is uniformly continuous. Hint: Use the triangle inequality and an argument.      A function is uniformly continuous if for every there exists such that for all , if then .   Let's do some preliminary work. Notice that for any ,   we can use the uniform continuity of and to find a so that implies and .  Proof: Let . Since is uniformly continuous, we can find such that for all , implies . Since is uniformly continuous, we can find such that implies . Set . For any , if , then so that and so that , meaning       "
},
{
  "id": "practice-solutions-problem-1",
  "level": "2",
  "url": "practice-solutions.html#practice-solutions-problem-1",
  "type": "Problem",
  "number": "2.1",
  "title": "",
  "body": "  Let be a sequence and let .   State the definition of the convergence of to .  Suppose that and satisfies . Prove that directly using the definition of convergence to a limit.       The sequence converges to if for all there exists such that for all it follows that    If we want to show that , we must use the fact that to show that for a given , there exists such that for all   In order to get , we choose to ensure .  Proof: Let . Since , we can choose such that for all . To see that this choice of works, for any      "
},
{
  "id": "practice-solutions-problem-2",
  "level": "2",
  "url": "practice-solutions.html#practice-solutions-problem-2",
  "type": "Problem",
  "number": "2.2",
  "title": "",
  "body": "  Prove that the following series either converge or diverge. You may use any of the convergence or divergence tests proved in lecture. (You may also use without proof the fact that whenever and .)           The series converges since it is a -series with . Because for any   the series converges by the Comparison Test.    Notice that the general term of this series satisfies   Since this limit is nonzero, this series diverges by the Divergence Test.    For every , we have   so that the sequence is decreasing. Since also , this means that the Alternating Series Test implies converges.     "
},
{
  "id": "practice-solutions-problem-3",
  "level": "2",
  "url": "practice-solutions.html#practice-solutions-problem-3",
  "type": "Problem",
  "number": "2.3",
  "title": "",
  "body": "  Solve the following problems about open and closed sets.   State the definition of an open set.   Determine whether each of the following sets are closed but not open, open but not closed, both open and closed, or neither open nor closed.    Prove that the set is open using the definition of an open set.      A set is open if for all there exists such that .  is neither open nor closed, is both open and closed, and is closed but not open.   Using the definition of open, we must show that for every there is an such that . To do this, let and take (this is the distance from to 1). We claim that . Indeed, let . Then,   Therefore , proving .     "
},
{
  "id": "practice-solutions-problem-4",
  "level": "2",
  "url": "practice-solutions.html#practice-solutions-problem-4",
  "type": "Problem",
  "number": "2.4",
  "title": "",
  "body": "  Solve the following problems about compact sets.   State the definition of a compact set.  Suppose that is closed and bounded. Prove that is compact by showing satisfies the definition of compactness (you may not use the Heine-Borel theorem).      A set is compact if for every sequence there exists a subsequence that converges to a point .  To show that is compact, we must show that for any sequence , there exists a convergent subsequence whose limit is in . To do this, let . Since is bounded, there exists such that for all . Since for all , this means that for all . This proves that is bounded. By Bolzano-Weierstrass, there exists a convergent subsequence converging to some point . Since is closed, every convergent sequence of points in has limit in , meaning .    "
},
{
  "id": "practice-solutions-problem-5",
  "level": "2",
  "url": "practice-solutions.html#practice-solutions-problem-5",
  "type": "Problem",
  "number": "2.5",
  "title": "",
  "body": "  Let be given by   for all .   Give a short proof that .  Prove that directly using the - definition of functional limit.       The function is a polynomial, so it is continuous. This means     Let's do some preliminary work. Notice that   If we ensure that , then so that adding across this inequality gives and . Under this assumption, , so we can choose .  Proof: Let . Let . For any such that , we know that so that . This means      "
},
{
  "id": "practice-solutions-problem-6",
  "level": "2",
  "url": "practice-solutions.html#practice-solutions-problem-6",
  "type": "Problem",
  "number": "2.6",
  "title": "",
  "body": "  Let be uniformly continuous.   State the definition of uniform continuity for a function .  Prove that the function defined by is uniformly continuous. Hint: Use the triangle inequality and an argument.      A function is uniformly continuous if for every there exists such that for all , if then .   Let's do some preliminary work. Notice that for any ,   we can use the uniform continuity of and to find a so that implies and .  Proof: Let . Since is uniformly continuous, we can find such that for all , implies . Since is uniformly continuous, we can find such that implies . Set . For any , if , then so that and so that , meaning      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

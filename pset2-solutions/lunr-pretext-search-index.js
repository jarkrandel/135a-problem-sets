var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-2-solutions-127a",
  "level": "1",
  "url": "#probset-2-solutions-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 2 Solutions",
  "body": " Problem Set 2 Solutions    MAT 127A SQ 2026       Problem 1 (Abbott Exercise 2.2.2): Verify, using the definition of convergence of a sequence, that the following sequences converge to the proposed limit. . . . Remark: In this problem, Abbott tells you what the limit of the sequence is. How would you figure out what the limit should be yourself?   Solution:    Let's do the preliminary exploration of subtracting 2\/5 from the general term of the sequence and trying to find a nice upper bound:   This tells us how we should choose in terms of for our proof. Indeed, notice that our upper bound satisfies if and only if    Proof: Let . Our goal is to find such that   We claim that any integer is an admissible choice. Indeed, the above calculation shows that for any ,    Let's do the preliminary exploration of subtracting 0 from the general term of the sequence and trying to find a nice upper bound:   Notice that if and only if .    Proof: Let . We claim that any integer is an admissible choice of . Indeed, if , then our work above shows    Notice that   and that if and only if .   Proof: Let . We claim that any integer is an admissible choice of . Indeed, if then     Problem 2 (Abbott Exercise 2.3.3): (Squeeze Theorem) Show that if for all , and if , then as well.   Solution: It is tempting to try to apply the Order Limit Theorem directly here, but we do not know a priori that converges. Let's prove it converges to directly. We want to control using the fact that is equivalent to is equivalent to . Our plan is to use the definition of convergence for and to show that converges by bounding below by and above by .   Fix . We need to find such that   Since , we can apply the definition of the limit for and to get integers and such that   and   In particular, these equalities imply and for all as above. We claim that any integer is an admissible choice. Indeed, implies both of the above inequalities hold so that   as desired.  Problem 3 (Abbott Exercise 2.3.10): Consider the following list of conjectures. Provide a short proof for those that are true and a counterexample for any that are false. If , then . If , then . If and , then . If and for all , then .   Solution:    The statement of this problem is actually a bit ambiguous. The fact that Abbott writes and might lead some to think that you are meant to assume that the limits of both exist from the beginning, in which case the statement is True. My interpretation is that you should not assume the limits exist, in which case the answer is False. Let . Neither sequence converges, but their difference is the constant sequence 0.   True. For proof, recall the triangle inequality! Specifically, recall the fact that . Applying this to and , we get   Let and apply the definition of to find such that implies . We claim that this same is an admissible choice. Indeed, implies   as desired.   True. We can use the Algebraic Limit Theorem twice. Since is convergent, so is . The sum of this and is a convergent sequence whose limit is the sum of the limits. That is,    True. Let and use the fact that to find such that implies . We claim this choice of is admissible for proving that . Indeed, for any ,      Problem 4: Limits of convergent sequences are unique. Let's prove it in two ways! Let be a sequence of real numbers and let . Suppose that .   Prove that is unique by applying Theorem 1.2.6 to prove that if is any real number such that , then .   Prove that is unique by contradiction: Suppose that there exists such that in addition to and derive a contradiction.      Solution:    We need to show that for every , . The fact that comes arbitrarily close to both and means we can use the triangle inequality to pull and close together.  Let . Since and , there exist integers such that   and   Let . Then and so that both of the above inequalities hold when . Therefore, the triangle inequality implies    Assuming that , we know that . This will contradict the fact that must eventually get extremely close to both and . Indeed, the facts that and mean that there exist such that   and   exactly as in the previous part. Choose . Then both of the above inequalities above apply with so that   So, we've shown that , a contradiction!    "
},
{
  "id": "probset-2-solutions-127a-3",
  "level": "2",
  "url": "#probset-2-solutions-127a-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1 (Abbott Exercise 2.2.2): "
},
{
  "id": "probset-2-solutions-127a-5",
  "level": "2",
  "url": "#probset-2-solutions-127a-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Remark: "
},
{
  "id": "probset-2-solutions-127a-6",
  "level": "2",
  "url": "#probset-2-solutions-127a-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-2-solutions-127a-7-1-4",
  "level": "2",
  "url": "#probset-2-solutions-127a-7-1-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proof: "
},
{
  "id": "probset-2-solutions-127a-7-2-4",
  "level": "2",
  "url": "#probset-2-solutions-127a-7-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proof: "
},
{
  "id": "probset-2-solutions-127a-7-3-4",
  "level": "2",
  "url": "#probset-2-solutions-127a-7-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proof: "
},
{
  "id": "probset-2-solutions-127a-8",
  "level": "2",
  "url": "#probset-2-solutions-127a-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2 (Abbott Exercise 2.3.3): "
},
{
  "id": "probset-2-solutions-127a-9",
  "level": "2",
  "url": "#probset-2-solutions-127a-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-2-solutions-127a-19",
  "level": "2",
  "url": "#probset-2-solutions-127a-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3 (Abbott Exercise 2.3.10): "
},
{
  "id": "probset-2-solutions-127a-21",
  "level": "2",
  "url": "#probset-2-solutions-127a-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-2-solutions-127a-23",
  "level": "2",
  "url": "#probset-2-solutions-127a-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "probset-2-solutions-127a-25",
  "level": "2",
  "url": "#probset-2-solutions-127a-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
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

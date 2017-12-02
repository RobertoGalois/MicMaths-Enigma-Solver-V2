# MicMaths-Enigma-Solver-V2
Solver to see all solutions of equations type NUMBER(fixed) * XXX...X(n1) = XXX..X(n2)
Convention: A * B = C  

Idem than previous but best coded, with "0" case (like 42 * XXX = XXXX ==> 42 * 038 = 1596)
and with show_all_sol() function that show all solutions of all equations of that type.  

Prototype: 
<code>void	show_all_sol(int p_minA, int p_maxA, int p_limB, bool bool_showNoSol)</code>  
int p_minA = min value of A we want to test  
int p_maxA = max value of A we want to test  
int p_limB = max value of LENGTH of B we want to test  
bool_showNoSol = avoid to tell when show() function return no solution.  

Example of output with <code>show_all_sol(38, 42, 4, false);</code> :


EQUATION: 38 * X(1) = X(1)  
============  
EQUATION: 38 * X(1) = XX(2)  
38 * 2 = 76  
============  
EQUATION: 38 * X(1) = XXX(3)  
38 * 2 = 076  
38 * 4 = 152  
38 * 5 = 190  
============  
EQUATION: 38 * XX(2) = XX(2)  
38 * 02 = 76  
============  
EQUATION: 38 * XX(2) = XXX(3)  
38 * 04 = 152  
38 * 12 = 456  
============  
EQUATION: 38 * XX(2) = XXXX(4)  
38 * 12 = 0456  
38 * 42 = 1596  
38 * 52 = 1976  
38 * 65 = 2470  
============  
EQUATION: 38 * XXX(3) = XXX(3)  
38 * 012 = 456  
============  
EQUATION: 38 * XXX(3) = XXXX(4)  
38 * 042 = 1596  
38 * 052 = 1976  
38 * 159 = 6042  
============  
EQUATION: 38 * XXX(3) = XXXXX(5)  
============  
EQUATION: 38 * XXXX(4) = XXXX(4)  
============  
EQUATION: 39 * X(1) = X(1)  
============  
EQUATION: 39 * X(1) = XX(2)  
39 * 2 = 78  
============  
EQUATION: 39 * X(1) = XXX(3)  
39 * 2 = 078  
39 * 4 = 156  
============  
EQUATION: 39 * XX(2) = XX(2)  
39 * 02 = 78  
============  
EQUATION: 39 * XX(2) = XXX(3)  
39 * 04 = 156  
39 * 12 = 468  
39 * 18 = 702  
============  
EQUATION: 39 * XX(2) = XXXX(4)  
39 * 12 = 0468  
39 * 54 = 2106  
39 * 56 = 2184  
============  
EQUATION: 39 * XXX(3) = XXX(3)  
39 * 012 = 468  
============  
EQUATION: 39 * XXX(3) = XXXX(4)  
39 * 056 = 2184  
39 * 186 = 7254  
============  
EQUATION: 39 * XXX(3) = XXXXX(5)  
39 * 186 = 07254  
39 * 402 = 15678  
============  
EQUATION: 39 * XXXX(4) = XXXX(4)  
39 * 0186 = 7254  
============  
EQUATION: 40 * X(1) = X(1)  
============  
EQUATION: 40 * X(1) = XX(2)  
============  
EQUATION: 40 * X(1) = XXX(3)  
============  
EQUATION: 40 * XX(2) = XX(2)  
============  
EQUATION: 40 * XX(2) = XXX(3)  
============  
EQUATION: 40 * XX(2) = XXXX(4)  
============  
EQUATION: 40 * XXX(3) = XXX(3)  
============  
EQUATION: 40 * XXX(3) = XXXX(4)  
============  
EQUATION: 40 * XXX(3) = XXXXX(5)  
============  
EQUATION: 40 * XXXX(4) = XXXX(4)  
============  
EQUATION: 41 * X(1) = X(1)  
============  
EQUATION: 41 * X(1) = XX(2)  
============  
EQUATION: 41 * X(1) = XXX(3)  
============  
EQUATION: 41 * XX(2) = XX(2)  
============  
EQUATION: 41 * XX(2) = XXX(3)  
============  
EQUATION: 41 * XX(2) = XXXX(4)  
============  
EQUATION: 41 * XXX(3) = XXX(3)  
============  
EQUATION: 41 * XXX(3) = XXXX(4)  
============  
EQUATION: 41 * XXX(3) = XXXXX(5)  
============  
EQUATION: 41 * XXXX(4) = XXXX(4)  
============  
EQUATION: 42 * X(1) = X(1)  
============  
EQUATION: 42 * X(1) = XX(2) 
============  
EQUATION: 42 * X(1) = XXX(3)  
42 * 9 = 378  
============  
EQUATION: 42 * XX(2) = XX(2)  
============  
EQUATION: 42 * XX(2) = XXX(3)  
42 * 09 = 378  
42 * 15 = 630  
42 * 18 = 756  
============  
EQUATION: 42 * XX(2) = XXXX(4)  
42 * 18 = 0756  
42 * 38 = 1596  
============  
EQUATION: 42 * XXX(3) = XXX(3)  
42 * 018 = 756  
============  
EQUATION: 42 * XXX(3) = XXXX(4)  
42 * 038 = 1596  
42 * 138 = 5796  
============  
EQUATION: 42 * XXX(3) = XXXXX(5)  
42 * 138 = 05796  
============  
EQUATION: 42 * XXXX(4) = XXXX(4)  
42 * 0138 = 5796  
============  

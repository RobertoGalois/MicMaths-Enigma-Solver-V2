# MicMaths-Enigma-Solver-V2
Solver to see all solutions of equations type NUMBER(fixed) * XXX...X(n1) = XXX..X(n2)
Convention: A * B = C

Idem than previous but best coded, with "0" case (like 42 * XXX = XXXX ==> 42 * 038 = 1596)
and with show_all_sol() function that show all solutions of all equations of that type

Prototype: 
void	show_all_sol(int p_minA, int p_maxA, int p_limB, bool bool_showNoSol)
int p_minA = min value of A we want to test
int p_maxA = max value of A we want to test
int p_limB = max value of LENGTH of B we want to test
bool_showNoSol = avoid to tell when show() function return no solution.

/*
** return 10^exp
*/
function ten_pow(exp)
{
	var		ret;

	if (exp == 0)
		return (1);

	else
		return (10 * ten_pow(exp - 1));
}

function	is_format(p_number)
{
	var		string_number;
	var		count1;
	var		count2;

	string_number = p_number.toString();
	count1 = 0;
	if (string_number.length > 1)
	{
		while (count1 < (string_number.length - 1))
		{
			count2 = count1 + 1;
			while (count2 < string_number.length)
			{
				if (string_number[count1] == string_number[count2])
					return (false);

				count2++;
			}

			count1++;
		}
	}

	return (true);
}


function	format_to(p_string, p_length)
{
	var		string_ret;

	string_ret = p_string.toString();
	while (string_ret.length < p_length)
	{
		string_ret = '0' + string_ret;
	}

	return (string_ret);
}

function	unknown(p_length)
{
	var		count;
	var		ret;

	count = 0;
	ret = '';
	while (count < p_length)
	{
		ret = ret + 'X';
		count++;
	}

	return (ret + '(' + p_length + ')');
}

/*
** equation : A * B = C
** p_A = number A
** p_n_B = number of digits of B
** p_n_C = number of digits of C
** example: 42 * XXX = XXXX ==> p_A = 42, p_n_B = 3, p_n_C = 4
*/
function show(p_A, p_n_B, p_n_C, bool_showNoSol)
{
	var		i;
	var		found;

	if ((((p_A.toString().length) + p_n_B + p_n_C) > 10) && (bool_showNoSol))
	{
		window.document.write(p_A + ' * ' + unknown(p_n_B) + ' = ' + unknown(p_n_C) + ' ==> ' +  'No solution.]<br />');
		return (false);
	}

	i = 0;
	found = false;
	while (i < 1000)
	{
		if ((i.toString().length <= p_n_B)											/*  */
			&& ((p_A * i).toString().length <= p_n_C)								/*  */
			&& (is_format(p_A.toString() + format_to(i.toString(), p_n_B) + format_to((p_A * i).toString(), p_n_C))))	/*  */
		{
			window.document.write(p_A.toString() + " * " + format_to(i.toString(), p_n_B) + " = " + format_to((p_A * i).toString(), p_n_C) + "<br />");
			found = true;
		}

		i++;
	}

	if ((!found) && (bool_showNoSol))
		window.document.write(p_A + ' * ' + unknown(p_n_B) + ' = ' + unknown(p_n_C) + ' ==> ' +  'No solution.<br />');

	return (true);
}


/*
** a * b = c
** p_limA = limit value of 'a' to test
** p_limB = limit value of length of 'b' to test
*/
function	show_all_sol(p_minA, p_maxA, p_limB, bool_showNoSol)
{
	var		a;
	var		length_b;
	var		length_c;

	a = p_minA;
	while (a < (p_maxA + 1))
	{
		length_b = 1;
		while (length_b < p_limB)
		{
			length_c = length_b;
			while (length_c <= (a.toString().length + length_b))
			{
				if ((a.toString().length + length_b + length_c) < 11)
				{
					window.document.write('============<br />EQUATION: ' + a + ' * ' + unknown(length_b) + ' = ' + unknown(length_c) + '<br />');
					show(a, length_b, length_c, bool_showNoSol);
				}

				length_c++;
			}
			
			length_b++;
		}

		a++;
	}
}

show_all_sol(38, 42, 10, false);

function sigma(num)
{
    var sum=0;

    for(i=0; i<=num; i++)
    {
        sum=sum+1;
    }

    return sum;
}

sigma(4);

function factorial(num)
{
    var factSum=1

    for(i=1; i<=num; i++)
    {

        factSum=factSum*i;

    }

    return factSum;

}

factorial (5);

function fib(num)
{
    if (num===1)
    {
        return 1;
    }

    else if (num===2)
    {
        return 2;
    }

    else
    {
        var num1=fib (num-1);
        var num2=fib (num-2);
        return num1+num2;
    }
}
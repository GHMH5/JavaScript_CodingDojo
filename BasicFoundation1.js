function twofiftyfivethreshold()
{var arr=[] 

    for (var i=0; i<256; i++)
    {
        arr.push(i)
    }

    return arr;

}

function evensumtoonethousand()
{var sum=0;

    for (var i=1; i < 1001; i++)
    {
        if (i%2==0)
        {
            sum+= i;
        }
    }

    return sum;
}

function oddsummtofivethousand()
{var sum=0;

    for(var i=1; i<1001; i++)
    {
        if (i%1==0)
        {
            sum+= i;
        }
    }

    return sum;

}

